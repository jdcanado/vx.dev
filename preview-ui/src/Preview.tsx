import { Home, Rocket, Badge, ArrowLeftRight, ArrowUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect, useRef, useCallback } from "react";

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const BALL_RADIUS = 12;
const FLOOR_HEIGHT = 40;
const GRAVITY = 0.6;
const JUMP_POWER = -11;
const MOVE_SPEED = 5;

export default function BallGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const canvasRef = useRef<div>(null);
  const ballRef = useRef({
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT - FLOOR_HEIGHT - BALL_RADIUS,
    vx: 0,
    vy: 0,
    onGround: true,
  });
  const keysRef = useRef<div<string, boolean>>({});
  const rafId = useRef<number>(0);
  const scoreRef = useRef(score); // to update inside loop

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  // Keyboard listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
      }
      keysRef.current[e.key] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Game loop
  useEffect(() => {
    if (!gameStarted) {
      cancelAnimationFrame(rafId.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min(time - lastTime, 30); // cap delta
      lastTime = time;

      const ball = ballRef.current;

      // Horizontal movement
      if (keysRef.current["ArrowLeft"]) {
        ball.vx = -MOVE_SPEED;
      } else if (keysRef.current["ArrowRight"]) {
        ball.vx = MOVE_SPEED;
      } else {
        ball.vx = 0;
      }

      // Gravity
      ball.vy += GRAVITY;

      // Jump (only if on ground)
      if (keysRef.current["ArrowUp"] && ball.onGround) {
        ball.vy = JUMP_POWER;
        ball.onGround = false;
        // Increment score for each successful jump
        setScore((prev) => prev + 1);
      }

      // Update position
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Keep within horizontal bounds
      if (ball.x - BALL_RADIUS < 0) {
        ball.x = BALL_RADIUS;
      } else if (ball.x + BALL_RADIUS > CANVAS_WIDTH) {
        ball.x = CANVAS_WIDTH - BALL_RADIUS;
      }

      // Floor collision
      const floorY = CANVAS_HEIGHT - FLOOR_HEIGHT;
      if (ball.y + BALL_RADIUS > floorY) {
        ball.y = floorY - BALL_RADIUS;
        ball.vy = 0;
        ball.onGround = true;
      } else {
        ball.onGround = false;
      }

      // Draw everything
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Background gradient (sky)
      const bgGrad = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      bgGrad.addColorStop(0, "#a8edea");
      bgGrad.addColorStop(1, "#fed6e3");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Floor (temporary grey)
      ctx.fillStyle = "#b0b0b0";
      ctx.fillRect(0, floorY, CANVAS_WIDTH, FLOOR_HEIGHT);
      // Floor shading
      ctx.fillStyle = "#999";
      ctx.fillRect(0, floorY, CANVAS_WIDTH, 2);
      ctx.fillStyle = "#ccc";
      ctx.fillRect(0, floorY + 2, CANVAS_WIDTH, 2);

      // Ball with fun gradient
      const ballGrad = ctx.createRadialGradient(
        ball.x - 4,
        ball.y - 4,
        2,
        ball.x,
        ball.y,
        BALL_RADIUS
      );
      ballGrad.addColorStop(0, "#ffe066");
      ballGrad.addColorStop(0.7, "#ff595e");
      ballGrad.addColorStop(1, "#8ac926");
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = ballGrad;
      ctx.fill();
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Subtle ground shadow
      if (ball.onGround) {
        ctx.beginPath();
        ctx.ellipse(
          ball.x,
          floorY + 4,
          BALL_RADIUS * 0.9,
          3,
          0,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(0,0,0,0.15)";
        ctx.fill();
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, [gameStarted]);

  const handleStart = () => {
    // Reset ball position and score
    ballRef.current = {
      x: CANVAS_WIDTH / 2,
      y: CANVAS_HEIGHT - FLOOR_HEIGHT - BALL_RADIUS,
      vx: 0,
      vy: 0,
      onGround: true,
    };
    setScore(0);
    setGameStarted(true);
  };

  const handleRestart = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setGameStarted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 p-4 sm:p-8">
      <Card className="w-full max-w-lg shadow-2xl border-2 border-white/40 bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Bounce &amp; Roll
              </CardTitle>
            </div>
            {gameStarted && (
              <Badge variant="secondary" className="text-sm px-3 py-1 bg-amber-100 text-amber-800 border-amber-300">
                Jumps: {score}
              </Badge>
            )}
          </div>
          <CardDescription className="flex items-center gap-2 text-gray-600">
            {gameStarted ? (
              <>
                <ArrowLeftRight className="h-4 w-4 inline" />
                <span>Arrows to move</span>
                <ArrowUp className="h-4 w-4 inline" />
                <span>Up to jump</span>
              </>
            ) : (
              "A fun physics ball game!"
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          {!gameStarted ? (
            <div className="flex flex-col items-center gap-6 py-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-red-500 shadow-lg flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-white animate-bounce" />
                </div>
              </div>
              <Button
                onClick={handleStart}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold px-10 py-6 text-lg transition-transform hover:scale-105 shadow-md"
              >
                Start Game
              </Button>
            </div>
          ) : (
            <>
              <canvas
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                className="w-full h-auto border-2 border-purple-200 rounded-xl shadow-inner"
                aria-label="Ball game canvas"
              />
              <div className="flex gap-3 mt-2">
                <Button
                  variant="outline"
                  onClick={handleRestart}
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Restart
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setScore(score + 1)}
                  disabled
                  className="cursor-default"
                >
                  Enjoy bouncing!
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}