import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, Zap, Check, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { AspectRatio } from '@/components/ui/aspect-ratio';
Below is the revised landing page for **Agenda AI** – a modern, conversion‑optimized, high‑fidelity React JSX prototype built with the provided component library. It includes a sticky navigation, interactive hero, social proof logos, feature cards with a built‑in analytics chart, step‑by‑step guide, testimonial carousel, pricing tables, FAQ accordion, and a full footer. The design leverages gradients, subtle shadows, and accessible interactions to boost engagement and trust.

```jsx






  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';




  ArrowRight,
  Check,
  Star,
  Users,
  Zap,
  Clock,
  Shield,
  BarChart3,
  Menu,
  Play,
  Twitter,
  Github,
  Linkedin,
} from 'lucide-react';

export default function AgendaAILanding() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased">
        {/* Sticky Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/80 dark:border-slate-800">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
                A
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Agenda<span className="text-violet-600">AI</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#features" className="hover:text-violet-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-violet-600 transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="hover:text-violet-600 transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="hover:text-violet-600 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="hover:text-violet-600 transition-colors">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Log in
              </Button>
              <Button size="sm" className="bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-500/20">
                Start free trial
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <Badge
                  variant="outline"
                  className="mb-6 px-4 py-1.5 text-sm border-violet-200 text-violet-700 bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:bg-violet-950"
                >
                  <Zap className="mr-1.5 h-3.5 w-3.5" />
                  AI-powered scheduling
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 pb-2">
                  Never book a meeting manually again
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl leading-relaxed">
                  Agenda AI learns your preferences, finds the perfect time for everyone, and
                  schedules it automatically. Save <strong>10+ hours</strong> every week.
                </p>

                {/* CTA with email */}
                <div className="mt-10 w-full max-w-md flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 h-12 text-base bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                  />
                  <Button className="bg-violet-600 hover:bg-violet-700 h-12 px-8 shadow-lg shadow-violet-500/20">
                    Get started free
                  </Button>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Check className="h-4 w-4 text-green-500" />
                  Free 14-day trial
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <Check className="h-4 w-4 text-green-500" />
                  No credit card required
                </div>

                {/* Hero Visual */}
                <div className="mt-16 w-full max-w-5xl">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&auto=format"
                      alt="Agenda AI dashboard preview – smart calendar and analytics"
                      className="rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-800 object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </section>

          {/* Trusted By */}
          <section className="py-12 border-y bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-center text-sm font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-8">
                Trusted by teams at
              </p>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale">
                <div className="h-6 w-20 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-6 w-24 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-6 w-16 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-6 w-28 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-6 w-20 bg-slate-300 dark:bg-slate-700 rounded" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-24 md:py-32 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                  Everything you need to schedule smarter
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                  Powerful automation with a delightful interface.
                </p>
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-violet-600" />,
                    title: "AI Scheduling Engine",
                    description:
                      "Instantly finds the perfect slot considering time zones, preferences, and history.",
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-indigo-600" />,
                    title: "Smart Time Blocking",
                    description:
                      "Protects your