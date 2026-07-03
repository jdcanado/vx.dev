import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, Zap, Check, Clock, Users, Home, Shield, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
Below is a complete, high-fidelity React JSX landing page for "Agenda AI" – an AI-powered scheduling assistant. It incorporates modern conversion best practices, persuasive copy, and interactive UI components from the provided library.
```jsx

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";




  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";



  ArrowRight,
  Check,
  Star,
  Users,
  Zap,
  Clock,
  BarChart3,
  Shield,
  Menu,
} from "lucide-react";

export default function AgendaAILanding() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 font-sans antialiased">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/95 dark:border-slate-800">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Agenda<span className="text-violet-600">AI</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#features" className="transition-colors hover:text-violet-600">
                Features
              </a>
              <a href="#testimonials" className="transition-colors hover:text-violet-600">
                Testimonials
              </a>
              <a href="#pricing" className="transition-colors hover:text-violet-600">
                Pricing
              </a>
              <a href="#faq" className="transition-colors hover:text-violet-600">
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Log in
              </Button>
              <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
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
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <Badge
                  variant="outline"
                  className="mb-6 px-4 py-1.5 text-sm border-violet-200 text-violet-700 bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:bg-violet-950"
                >
                  <Zap className="mr-1.5 h-3.5 w-3.5" />
                  AI-powered scheduling
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 pb-2">
                  Never book a meeting manually again
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl">
                  Agenda AI learns your preferences, finds the perfect time for everyone, and
                  schedules it automatically. Save hours every week.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <div className="relative flex-1 max-w-md">
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      className="pl-4 pr-28 py-6 text-base"
                    />
                    <Button className="absolute right-1.5 top-1.5 bg-violet-600 hover:bg-violet-700 px-6">
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Check className="h-4 w-4 text-green-500" />
                  Free 14-day trial •
                  <Check className="h-4 w-4 text-green-500" />
                  No credit card required
                </div>
                <div className="mt-12 w-full max-w-5xl">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&auto=format"
                      alt="Agenda AI dashboard preview"
                      className="rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </section>

          {/* Trusted by section */}
          <section className="py-12 border-y bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                TRUSTED BY TEAMS AT
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale">
                <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-8 w-28 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-8 w-20 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-8 w-32 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Everything you need to schedule smarter
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                  Agenda AI combines powerful automation with a delightful interface.
                </p>
              </div>
              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-violet-600" />,
                    title: "AI Scheduling Engine",
                    description:
                      "Our algorithms consider time zones, preferences, and meeting history to find the best slot instantly.",
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-indigo-600" />,
                    title: "Smart Time Blocking",
                    description:
                      "Automatically protect your focus time. Agenda AI never double-books or interrupts deep work.",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-sky-600" />,
                    title: "Team Coordination",
                    description:
                      "Coordinate across teams effortlessly. Group scheduling that actually works.",
                  },
                  {
                    icon: <div className="h-6 w-6 text-emerald-600" />,
                    title: "Analytics & Insights",
                    description:
                      "See how you spend your time. Optimize meetings with clear, actionable data.",
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-rose-600" />,
                    title: "Enterprise Security",
                    description:
                      "SOC 2 Type II compliant. Your data is encrypted both at rest and in transit.",
                  },
                  {
                    icon: <Star className="h-6 w-6 text-amber-600" />,
                    title: "Seamless Integrations",
                    description:
                      "Works with Google Calendar, Outlook, Zoom, Teams, and 50+ other tools.",
                  },
                ].map((feature, idx) => (
                  <Card
                    key={idx}
                    className="border-0 shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-slate-900"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How it works / Steps */}
          <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  How it works
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                  Get started in under 2 minutes.
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Connect your calendar",
                    description:
                      "Link Google, Outlook, or iCloud. Agenda AI learns your availability instantly.",
                    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop&auto=format",
                  },
                  {
                    step: "2",
                    title: "Set your preferences",
                    description:
                      "Define meeting types, duration, buffer times, and priorities that match your workflow.",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?