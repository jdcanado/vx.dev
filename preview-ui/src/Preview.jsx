import { CalendarDays } from '@/components/ui/calendar';
import { Zap, Globe, Smartphone, Lock, Home, Sparkles } from 'lucide-react';
import { useState } from "react";



  Card,
  CardContent,
  CardDescription,
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

  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";




  ArrowRight,
  Check,
  Star,
  Play,
  Twitter,
  Github,
  Linkedin,
  Menu,
  CalendarDays,
  Globe,
  Smartphone,
  Lock,
  Zap,
  Sparkles,
  Clock,
  Shield,
  Users,
} from "lucide-react";

export default function AgendaAILanding() {
  const [videoOpen, setVideoOpen] = useState(false);

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
        "One click generates a virtual room with video, notes, and agenda – no more back-and-forth emails.",
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
        "Schedule, join, and manage meetings on the go with our fully native iOS & Android apps.",
    },
    {
      icon: <Lock className="h-6 w-6 text-violet-600" />,
      title: "Enterprise Security",
      description:
        "SOC 2 Type II certified, end‑to‑end encryption, and SAML SSO keep your data safe.",
    },
    {
      icon: <div className="h-6 w-6 text-violet-600" />,
      title: "Team Analytics",
      description:
        "See how your team spends its time and optimize meeting culture with actionable insights.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Connect your calendars",
      description:
        "Link your Google, Outlook, or Apple calendar in two clicks. Agenda AI instantly learns your availability.",
      icon: <CalendarDays className="h-8 w-8 text-white" />,
    },
    {
      number: "2",
      title: "Set your preferences",
      description:
        "Define your ideal meeting times, buffer zones, and even your favorite video platforms.",
      icon: <Zap className="h-8 w-8 text-white" />,
    },
    {
      number: "3",
      title: "Let AI do the work",
      description:
        "Type what you need – 'Schedule a 30‑min call with the design team next week'. Done.",
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
        "Our sales team reduced no‑shows by 45% after switching. It’s a game changer.",
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
      popular: false,
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
      popular: false,
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