import { CalendarDays } from '@/components/ui/calendar';
import { Zap, Home, Globe, Smartphone, Lock, Sparkles, ArrowRight, Menu } from 'lucide-react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
Below is the revised, complete landing page for **Agenda AI** – a modern, conversion‑optimized prototype built with the latest trends: generous whitespace, smooth dark mode, clear benefit‑oriented copy, social proof, and multiple calls‑to‑action. The page is fully responsive, accessible, and ready to deploy.

```jsx

  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";





  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  ChevronRight,
  CalendarDays,
  Globe,
  Smartphone,
  Lock,
  Sparkles,
} from "lucide-react";

export default function AgendaAILanding() {
  const features = [
    {
      icon: <CalendarDays className="h-6 w-6 text-violet-600" />,
      title: "Smart Scheduling",
      description:
        "AI finds the perfect time for every participant, respecting time zones and personal preferences.",
    },
    {
      icon: <Zap className="h-6 w-6 text-violet-600" />,
      title: "Instant Meeting Links",
      description:
        "One click generates a virtual room with video, notes, and agenda – no more back‑and‑forth emails.",
    },
    {
      icon: <div className="h-6 w-6 text-violet-600" />,
      title: "Team Analytics",
      description:
        "See how your team spends its time and optimize meeting culture with actionable insights.",
    },
    {
      icon: <Globe className="h-6 w-6 text-violet-600" />,
      title: "Multi‑Calendar Sync",
      description:
        "Connect Google, Outlook, and Apple calendars seamlessly. No double bookings, ever.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-violet-600" />,
      title: "Mobile App",
      description:
        "Schedule, join, and manage meetings on the go with our fully native mobile experience.",
    },
    {
      icon: <Lock className="h-6 w-6 text-violet-600" />,
      title: "Enterprise‑Grade Security",
      description:
        "SOC 2 Type II certified, end‑to‑end encryption, and SAML SSO keep your data safe.",
    },
  ];

  const steps = [
    {
      title: "Connect your calendars",
      description:
        "Link your Google, Outlook, or Apple calendar in two clicks. Agenda AI instantly learns your availability.",
      icon: <CalendarDays className="h-8 w-8 text-white" />,
    },
    {
      title: "Set your preferences",
      description:
        "Define your ideal meeting times, buffer zones, and even favorite video platforms.",
      icon: <Zap className="h-8 w-8 text-white" />,
    },
    {
      title: "Let AI do the work",
      description:
        "Just type what you need – 'Schedule a 30‑min call with design team next week'. Done.",
      icon: <Sparkles className="h-8 w-8 text-white" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Agenda AI cut my scheduling time by 90%. I now spend zero minutes playing calendar Tetris.",
      name: "Sarah Chen",
      role: "Product Lead, Acme Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Our sales team reduced no‑shows by 45% after switching to Agenda AI. It’s a game changer.",
      name: "Marcus Rivera",
      role: "VP Sales, Orbital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Finally, a scheduling tool that respects my time. The AI suggestions are eerily accurate.",
      name: "Priya Patel",
      role: "CEO, Lumina Health",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "We onboarded 200+ employees in one week. No training needed – it just works.",
      name: "David Kim",
      role: "IT Director, Skyward",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals",
      features: [
        "Up to 10 meetings/month",
        "1 calendar connection",
        "Basic AI scheduling",
        "Email support",
      ],
      cta: "Get started",
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "For power users & small teams",
      features: [
        "Unlimited meetings",
        "Unlimited calendars",
        "Priority AI & analytics",
        "Custom booking links",
        "Video integrations",
      ],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Dedicated support",
        "Custom AI policies",
        "SLA guarantee",
        "Advanced admin controls",
      ],
      cta: "Contact sales",
    },
  ];

  const faqs = [
    {
      question: "How does the AI find the best time?",
      answer:
        "Our AI analyzes all participants’ calendars, time zones, and preferences to propose slots with the highest chance of acceptance. It learns from past meetings as well.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We are SOC 2 Type II certified, use end‑to‑end encryption, and never sell your data.",
    },
    {
      question: "Can I integrate with Zoom/Teams?",
      answer:
        "Yes! Agenda AI automatically generates and attaches meeting links for Zoom, Google Meet, Microsoft Teams, and more.",
    },
    {
      question: "What happens if plans change?",
      answer:
        "Agenda AI continuously monitors calendars and reschedules automatically if conflicts arise, keeping everyone in the loop.",
    },
    {
      question: "Do you have a mobile app?",
      answer:
        "Yes, our fully native iOS and Android apps let you schedule, join, and manage meetings anywhere.",
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased">
        {/* ─── STICKY NAVIGATION ─── */}
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
              <Button
                size="sm"
                className="bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-500/20"
              >
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
          {/* ─── HERO ─── */}
          <section className="relative overflow-hidden bg-gradient-to