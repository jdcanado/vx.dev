import { Home, BellRing, X, CalendarDays, Bot, Globe, Video, Lock, Zap, Sparkles, TrendingUp, Gift, Sheet, Menu, ChevronUp, Rocket, Mail, ArrowRight, Check, Play, Clock, ArrowUpRight, ThumbsUp, Badge, Star, Headphones, Send, Search, Shield, Share2 } from 'lucide-react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';


/* ------------------------------------------------------------
   Custom animation & design tokens injected via <style>
------------------------------------------------------------ */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  :root {
    --brand-50: #f5f3ff;
    --brand-100: #ede9fe;
    --brand-200: #ddd6fe;
    --brand-300: #c4b5fd;
    --brand-400: #a78bfa;
    --brand-500: #8b5cf6;
    --brand-600: #7c3aed;
    --brand-700: #6d28d9;
    --brand-800: #5b21b6;
    --brand-900: #4c1d95;
  }

  * { scroll-behavior: smooth; }
  body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }

  @keyframes fadeSlideUp {
    0% { opacity: 0; transform: translateY(32px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideDown {
    0% { opacity: 0; transform: translateY(-16px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    0% { opacity: 0; transform: scale(0.92); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes subtleFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.45); }
    50% { box-shadow: 0 0 0 16px rgba(124, 58, 237, 0); }
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-fade-slide-up { animation: fadeSlideUp 0.65s cubic-bezier(0.22, 0.61, 0.36, 1) forwards; }
  .animate-fade-slide-down { animation: fadeSlideDown 0.5s ease-out forwards; }
  .animate-scale-in { animation: scaleIn 0.45s ease-out forwards; }
  .animate-subtle-float { animation: subtleFloat 4s ease-in-out infinite; }
  .animate-shimmer {
    background: linear-gradient(90deg, #ede9fe 0%, #f5f3ff 40%, #ede9fe 80%);
    background-size: 200% 100%;
    animation: shimmer 2.5s infinite;
  }
  .animate-pulse-glow { animation: pulseGlow 2.2s infinite; }
  .animate-marquee { animation: marquee 25s linear infinite; }

  .hero-mesh {
    background:
      radial-gradient(ellipse 70% 60% at 15% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse 60% 50% at 85% 75%, rgba(99, 102, 241, 0.06) 0%, transparent 55%),
      radial-gradient(ellipse 50% 40% at 50% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 60%);
  }

  .glass-panel {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.7);
  }
  .glass-panel-dark {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .text-gradient-brand {
    background: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hover-lift {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .hover-lift:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -12px rgba(124, 58, 237, 0.25);
  }

  .cta-glow {
    box-shadow: 0 8px 32px -8px rgba(124, 58, 237, 0.5);
  }
  .cta-glow:hover {
    box-shadow: 0 12px 40px -8px rgba(124, 58, 237, 0.65);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;

/* ------------------------------------------------------------
   Sub-components
------------------------------------------------------------ */

function AnimatedCounter({ target, label, suffix = '', prefix = '', duration = 1800 }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-extrabold text-white">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-violet-200 mt-1">{label}</div>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 47, minutes: 59, seconds: 59 });
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) return { hours, minutes, seconds: seconds - 1 };
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex items-center gap-1.5 text-sm font-mono">
      {[
        { val: timeLeft.hours, label: 'h' },
        { val: timeLeft.minutes, label: 'm' },
        { val: timeLeft.seconds, label: 's' },
      ].map((item, i) => (
        <div.Fragment key={i}>
          <div className="bg-white/25 backdrop-blur-sm rounded-md px-2 py-0.5">
            <span className="text-white font-bold">{String(item.val).padStart(2, '0')}</span>
          </div>
          {i < 2 && <span className="text-white/60">:</span>}
        </div.Fragment>
      ))}
    </div>
  );
}

function SocialProofToast() {
  const [toasts, setToasts] = React.useState([]);
  const messages = [
    'Sarah from Acme Corp just signed up! 🎉',
    'TechNova team upgraded to Pro',
    'Carlos booked 3 meetings in 2 minutes',
    '2,500+ companies already use Agenda AI',
    'New team onboarded in London 🇬🇧',
    'Emily saved 12 hours this week',
    'James connected 4 calendars seamlessly',
  ];

  React.useEffect(() => {
    const addToast = () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      const id = Date.now() + Math.random();
      setToasts(prev => [...prev.slice(-3), { id, msg }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 4500);
    };
    addToast();
    const interval = setInterval(addToast, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-[60] flex flex-col gap-2 pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-white rounded-xl shadow-2xl border border-gray-100 p-3 flex items-center gap-3 max-w-xs animate-fade-slide-up"
        >
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
            <BellRing className="w-4 h-4 text-violet-600" />
          </div>
          <p className="text-sm text-gray-700 flex-1">{toast.msg}</p>
          <button
            onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}

function StatsBarChart() {
  return (
    <div className="w-full h-72">
      <ResponsiveBar
        data={[
          { metric: 'Time Saved', before: 95, after: 18 },
          { metric: 'No-Shows', before: 82, after: 8 },
          { metric: 'Booking Time', before: 90, after: 7 },
          { metric: 'Satisfaction', before: 55, after: 96 },
        ]}
        keys={['before', 'after']}
        indexBy="metric"
        margin={{ top: 20, right: 30, bottom: 45, left: 45 }}
        padding={0.35}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#cbd5e1', '#7c3aed']}
        borderWidth={0}
        borderRadius={5}
        enableLabel={false}
        axisBottom={{ tickSize: 0, tickPadding: 8 }}
        axisLeft={{ tickSize: 0, tickPadding: 6 }}
        enableGridY={true}
        gridYValues={[0, 25, 50, 75, 100]}
        theme={{
          grid: { line: { stroke: '#e2e8f0', strokeWidth: 1 } },
          axis: { ticks: { text: { fontSize: 11, fill: '#94a3b8' } } },
        }}
      />
    </div>
  );
}

function LineChartWidget() {
  return (
    <div className="w-full h-64">
      <ResponsiveLine
        data={[
          {
            id: 'Meetings',
            data: [
              { x: 'Jan', y: 120 },
              { x: 'Feb', y: 145 },
              { x: 'Mar', y: 200 },
              { x: 'Apr', y: 310 },
              { x: 'May', y: 480 },
              { x: 'Jun', y: 720 },
            ],
          },
        ]}
        margin={{ top: 20, right: 25, bottom: 40, left: 45 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        curve="monotoneX"
        colors={['#7c3aed']}
        lineWidth={3}
        enablePoints={true}
        pointSize={8}
        pointColor="#ffffff"
        pointBorderWidth={2}
        pointBorderColor="#7c3aed"
        enableGridX={false}
        enableGridY={true}
        gridYValues={[0, 200, 400, 600, 800]}
        axisBottom={{ tickSize: 0, tickPadding: 6 }}
        axisLeft={{ tickSize: 0, tickPadding: 6 }}
        theme={{
          grid: { line: { stroke: '#f1f5f9', strokeWidth: 1 } },
          axis: { ticks: { text: { fontSize: 11, fill: '#94a3b8' } } },
        }}
        enableCrosshair={false}
      />
    </div>
  );
}

/* ------------------------------------------------------------
   Main Landing Page Component
------------------------------------------------------------ */
export default function AgendaAILanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [videoModalOpen, setVideoModalOpen] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState('');
  const [activePricingTab, setActivePricingTab] = React.useState('annual');
  const [compareModalOpen, setCompareModalOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [exitIntentVisible, setExitIntentVisible] = React.useState(false);
  const [exitDismissed, setExitDismissed] = React.useState(false);
  const [faqSearch, setFaqSearch] = React.useState('');
  const [demoFormOpen, setDemoFormOpen] = React.useState(false);
  const [sliderUsers, setSliderUsers] = React.useState([25]);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Exit-intent detection (desktop only)
  React.useEffect(() => {
    if (exitDismissed) return;
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !exitIntentVisible && !exitDismissed) {
        setExitIntentVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitIntentVisible, exitDismissed]);

  const trustLogos = [
    { name: 'Acme Corp', color: 'text-gray-400' },
    { name: 'TechNova', color: 'text-gray-400' },
    { name: 'FinScale', color: 'text-gray-400' },
    { name: 'DataFlow', color: 'text-gray-400' },
    { name: 'PixelCorp', color: 'text-gray-400' },
    { name: 'QuantumDev', color: 'text-gray-400' },
    { name: 'CloudBase', color: 'text-gray-400' },
    { name: 'NexGen', color: 'text-gray-400' },
  ];

  const features = [
    {
      icon: <CalendarDays className="h-6 w-6 text-violet-600" />,
      title: 'AI Smart Scheduling',
      desc: 'AI finds the perfect time across timezones, respecting everyone\'s preferences and buffers.',
      badge: '90% faster',
      size: 'md:col-span-2 md:row-span-2',
      bg: 'bg-violet-50/60',
    },
    {
      icon: <Bot className="h-6 w-6 text-indigo-600" />,
      title: 'Copilot Assistant',
      desc: 'Type natural language. "Set up a 30-min design sync next Tuesday." Done in seconds.',
      badge: 'NLP powered',
      size: '',
      bg: 'bg-indigo-50/60',
    },
    {
      icon: <Globe className="h-6 w-6 text-fuchsia-600" />,
      title: 'Multi-Calendar Sync',
      desc: 'Google, Outlook, Apple Calendar — all synced with zero conflicts.',
      badge: '3+ platforms',
      size: 'md:col-span-1 md:row-span-2',
      bg: 'bg-fuchsia-50/60',
    },
    {
      icon: <Video className="h-6 w-6 text-cyan-600" />,
      title: 'Instant Video Rooms',
      desc: 'Every booking auto-generates a Zoom, Meet or Teams room with a shared agenda.',
      badge: '1-click',
      size: '',
      bg: 'bg-cyan-50/60',
    },
    {
      icon: <div className="h-6 w-6 text-emerald-600" />,
      title: 'Team Analytics',
      desc: 'Dashboards reveal meeting patterns, no-show rates, and productivity insights.',
      badge: 'Real-time',
      size: 'md:col-span-2',
      bg: 'bg-emerald-50/60',
    },
    {
      icon: <Lock className="h-6 w-6 text-rose-600" />,
      title: 'Enterprise Security',
      desc: 'SOC 2 Type II, AES-256, SAML SSO. Built for the most demanding orgs.',
      badge: 'SOC 2 certified',
      size: '',
      bg: 'bg-rose-50/60',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Connect Calendars',
      desc: 'Link Google, Outlook or Apple Calendar in two clicks. Our AI instantly maps your availability.',
      icon: <CalendarDays className="h-5 w-5 text-white" />,
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      num: '02',
      title: 'Define Preferences',
      desc: 'Set ideal hours, buffer times, favourite video platforms, and your personal productivity rhythm.',
      icon: <Zap className="h-5 w-5 text-white" />,
      gradient: 'from-indigo-600 to-blue-600',
    },
    {
      num: '03',
      title: 'Let AI Take Over',
      desc: 'Simply describe what you need in plain English. The copilot handles the rest.',
      icon: <Sparkles className="h-5 w-5 text-white" />,
      gradient: 'from-fuchsia-600 to-pink-600',
    },
    {
      num: '04',
      title: 'Analyze & Improve',
      desc: 'Review dashboards, spot time-wasters, and continuously refine your meeting culture.',
      icon: <TrendingUp className="h-5 w-5 text-white" />,
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

  const testimonials = [
    {
      quote: 'Agenda AI reduced my scheduling time by 90%. I now spend zero minutes playing calendar Tetris.',
      name: 'Sarah Chen',
      role: 'Product Lead at Acme Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote: 'Our sales team saved 12 hours a week. The CRM integration was flawless.',
      name: 'Carlos Mendez',
      role: 'Sales Director at TechNova',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote: 'The analytics feature helped us kill useless meetings and reclaim 20% of productive time.',
      name: 'Emily Park',
      role: 'COO at FinScale',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote: 'It\'s like having a personal assistant that never sleeps. The NLP scheduling is magic.',
      name: 'James Wilson',
      role: 'Freelance Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote: 'We onboarded 200+ employees in a week. Zero training needed — it\'s that intuitive.',
      name: 'Amara Okafor',
      role: 'VP People at CloudBase',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      desc: 'For professionals who want to streamline personal scheduling.',
      monthly: 8,
      annual: 6,
      features: ['1 calendar', 'Basic AI scheduling', 'Instant links', 'Mobile app', 'Email support'],
      cta: 'Start Free',
      highlight: false,
    },
    {
      name: 'Pro',
      desc: 'For teams that need advanced coordination and analytics.',
      monthly: 19,
      annual: 15,
      features: ['Unlimited calendars', 'Group scheduling', 'Team analytics', 'CRM integrations', 'Priority support'],
      cta: 'Try Free',
      highlight: true,
    },
    {
      name: 'Enterprise',
      desc: 'For organizations requiring full security and control.',
      monthly: 49,
      annual: 39,
      features: ['Everything in Pro', 'SSO & SAML', 'Audit trail', 'Dedicated API', 'Customer success manager'],
      cta: 'Talk to Sales',
      highlight: false,
    },
  ];

  const faqs = [
    { q: 'Is there a free trial?', a: 'Yes! All plans include a 14‑day free trial with full access. No credit card required.' },
    { q: 'Can I integrate with my existing calendar?', a: 'Absolutely. Agenda AI works with Google, Outlook, Apple Calendar and any CalDAV‑compatible service.' },
    { q: 'How secure is my data?', a: 'We are SOC 2 Type II certified and use AES‑256 encryption at rest and in transit. SAML SSO is available on Enterprise.' },
    { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time. No long‑term contracts or cancellation fees.' },
    { q: 'What payment methods do you accept?', a: 'All major credit cards, PayPal, and (for Enterprise) invoice‑based payments.' },
    { q: 'Do you offer nonprofit discounts?', a: 'Yes! We provide special pricing for eligible nonprofits. Contact our sales team.' },
    { q: 'Is there an API?', a: 'Yes, Enterprise plans include a dedicated API for custom integrations and workflows.' },
    { q: 'How does the AI copilot work?', a: 'It uses natural language processing to understand your intent and automatically finds optimal time slots across all participants.' },
  ];

  const filteredFaqs = faqs.filter(
    f => f.q.toLowerCase().includes(faqSearch.toLowerCase()) || f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const compareRows = [
    { label: 'Connected calendars', starter: '1', pro: 'Unlimited', ent: 'Unlimited' },
    { label: 'AI smart scheduling', starter: true, pro: true, ent: true },
    { label: 'Instant meeting links', starter: true, pro: true, ent: true },
    { label: 'Mobile app', starter: true, pro: true, ent: true },
    { label: 'Group scheduling', starter: false, pro: true, ent: true },
    { label: 'Team analytics', starter: false, pro: true, ent: true },
    { label: 'CRM integrations', starter: false, pro: true, ent: true },
    { label: 'SSO & SAML', starter: false, pro: false, ent: true },
    { label: 'Audit trail', starter: false, pro: false, ent: true },
    { label: 'Dedicated API', starter: false, pro: false, ent: true },
    { label: 'Priority support', starter: false, pro: true, ent: true },
    { label: 'Custom integrations', starter: false, pro: false, ent: true },
  ];

  const TeamSliderEstimate = () => {
    const price = activePricingTab === 'annual' ? 15 : 19;
    const total = sliderUsers[0] * price;
    const annualTotal = sliderUsers[0] * 15 * 12;
    return (
      <div className="mt-6 max-w-md mx-auto bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <Label className="text-sm font-medium text-gray-700">Team size</Label>
          <span className="text-2xl font-bold text-violet-700">{sliderUsers[0]}</span>
        </div>
        <Slider
          value={sliderUsers}
          onValueChange={setSliderUsers}
          max={300}
          step={1}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Monthly estimate</span>
          <span className="font-semibold text-gray-800">${total}/mo</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>Annual estimate (Pro)</span>
          <span className="font-semibold text-gray-800">${annualTotal.toLocaleString()}/yr</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white antialiased" ref={scrollRef}>
      <style>{globalStyles}</style>
      <TooltipProvider>
        <SocialProofToast />

        {/* ---- Exit-intent modal ---- */}
        <Dialog open={exitIntentVisible && !exitDismissed} onOpenChange={(v) => { setExitIntentVisible(v); if (!v) setExitDismissed(true); }}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Wait! Get 20% off your first year 🎁</DialogTitle>
              <DialogDescription className="text-gray-600">
                Sign up now and lock in our special annual discount before you leave.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 mt-3">
              <Input placeholder="you@company.com" className="flex-1" />
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">Claim Offer</Button>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              No spam, ever. Unsubscribe anytime.
            </p>
          </DialogContent>
        </Dialog>

        {/* ---- Limited-time banner ---- */}
        <div className="bg-gradient-to-r from-violet-700 via-indigo-600 to-violet-700 text-white py-2.5 px-4 flex items-center justify-center gap-3 flex-wrap text-sm">
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span className="font-medium">Annual plans: 20% off — limited time</span>
          </div>
          <CountdownTimer />
          <a href="#pricing" className="underline underline-offset-2 hover:text-white/80 font-medium">Claim deal →</a>
        </div>

        {/* ---- Sticky header ---- */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-white/85 backdrop-blur-xl shadow-lg border-b border-gray-100'
              : 'bg-white/70 backdrop-blur-md border-b border-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-gray-900 tracking-tight">Agenda<span className="text-violet-600">AI</span></span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {['Features', 'How It Works', 'Testimonials', 'Pricing', 'FAQ'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" className="text-gray-700 hover:text-violet-700">Log in</Button>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white cta-glow transition-all">
                Get Started Free
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-violet-600" />
                    Agenda AI
                  </SheetTitle>
                  <SheetDescription>Smart scheduling, simplified.</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-3">
                  {['Features', 'How It Works', 'Testimonials', 'Pricing', 'FAQ'].map(item => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-lg font-medium text-gray-700 hover:text-violet-700 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <Separator className="my-2" />
                  <Button variant="outline" className="w-full">Log in</Button>
                  <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Get Started Free</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* ---- Floating back-to-top & CTA ---- */}
        {scrolled && (
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-slide-up">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-11 h-11 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Back to top"
                  >
                    <ChevronUp className="w-5 h-5 text-gray-700" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left"><p>Back to top</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button className="h-12 px-6 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-2xl animate-pulse-glow gap-2">
              <Rocket className="h-4 w-4" /> Start Free
            </Button>
          </div>
        )}

        {/* ============ HERO SECTION ============ */}
        <section className="relative overflow-hidden hero-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-28 lg:pb-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left column */}
              <div className="space-y-7 animate-fade-slide-up">
                <div className="inline-flex items-center gap-2 bg-violet-100/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-violet-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600" />
                  </span>
                  <span className="text-sm font-medium text-violet-800">Now with AI scheduling copilot</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                  Your AI‑powered <br />
                  <span className="text-gradient-brand">scheduling copilot</span>
                </h1>

                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Stop wasting 4+ hours a week on calendar chaos. Agenda AI learns your patterns and coordinates everyone in seconds — with zero back‑and‑forth.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      className="pl-10 h-12 rounded-xl border-violet-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      aria-label="Email address"
                    />
                  </div>
                  <Button className="h-12 px-7 bg-violet-600 hover:bg-violet-700 text-white rounded-xl cta-glow gap-2 font-semibold">
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> 14‑day free trial</span>
                  <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> No credit card</span>
                  <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Cancel anytime</span>
                </div>

                <div className="flex items-center gap-5 pt-3">
                  <div className="flex -space-x-2.5">
                    {[11, 12, 13, 14, 15].map(i => (
                      <Avatar key={i} className="border-2 border-white w-9 h-9 ring-2 ring-violet-100">
                        <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=50&h=50&fit=crop&crop=face`} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-violet-700">3,200+</span>{' '}
                    <span className="text-gray-500">teams already joined</span>
                  </div>
                </div>
              </div>

              {/* Right column — Hero visual */}
              <div className="relative animate-subtle-float">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-violet-100/50 glass-panel">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=460&fit=crop&crop=entropy"
                    alt="Dashboard preview of Agenda AI"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
                      <DialogTrigger asChild>
                        <button
                          className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl transition-all hover:scale-105 relative"
                          aria-label="Play product demo video"
                        >
                          <div className="absolute w-full h-full rounded-full bg-white/30 animate-ping pointer-events-none" />
                          <Play className="h-9 w-9 text-violet-600 ml-1.5" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[750px]">
                        <DialogHeader>
                          <DialogTitle>Agenda AI in 60 seconds</DialogTitle>
                          <DialogDescription>See how it transforms your scheduling workflow.</DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video bg-black rounded-xl flex items-center justify-center">
                          <p className="text-white/80 text-lg">▶ Product demo placeholder</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 glass-panel animate-scale-in">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Clock className="h-4 w-4 text-violet-500" />
                    <span>Average booking time</span>
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900">24 sec</div>
                  <div className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium">
                    <ArrowUpRight className="h-3.5 w-3.5" /> 10× faster
                  </div>
                </div>

                {/* Secondary floating card */}
                <div className="absolute -top-6 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 glass-panel hidden sm:block">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <ThumbsUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">98%</div>
                      <div className="text-xs text-gray-500">customer satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRUST BAR (Marquee) ============ */}
        <section className="border-t border-b border-gray-100 bg-white py-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-8">
            <p className="text-sm font-medium text-gray-500 whitespace-nowrap">Trusted by</p>
            <div className="overflow-hidden flex-1">
              <div className="flex gap-10 animate-marquee whitespace-nowrap">
                {[...trustLogos, ...trustLogos].map((logo, idx) => (
                  <span key={idx} className={`text-xl font-bold ${logo.color} tracking-wide opacity-60`}>
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEATURES BENTO GRID ============ */}
        <section id="features" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4 px-3 py-1">✨ Features</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Everything you need to schedule like a pro
              </h2>
              <p className="text-lg text-gray-500">
                From smart scheduling to team analytics — all in one platform.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-5">
              {features.map((feat, idx) => (
                <Card
                  key={idx}
                  className={`border border-gray-200 hover:border-violet-300 transition-all duration-300 hover-lift group ${feat.size} ${feat.bg}`}
                >
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {feat.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{feat.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">{feat.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 text-xs">
                      {feat.badge}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section id="how-it-works" className="py-20 lg:py-28 bg-gradient-to-br from-violet-50/70 via-white to-indigo-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4 px-3 py-1">🚀 How It Works</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                From chaos to clarity in 4 steps
              </h2>
              <p className="text-lg text-gray-500">Setup takes under 2 minutes. No training required.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-violet-600 mb-2">{step.num}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  {/* Connecting line (desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px border-t-2 border-dashed border-violet-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATS + CHART ============ */}
        <section className="py-20 bg-gradient-to-r from-violet-700 via-indigo-700 to-violet-700 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Results that speak volumes</h2>
                <p className="text-lg text-violet-100 mb-8 leading-relaxed">
                  Our clients report dramatic improvements — more time, fewer no‑shows, happier teams.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  <AnimatedCounter target={92} label="Time saved" suffix="%" />
                  <AnimatedCounter target={82} label="Fewer no-shows" suffix="%" />
                  <AnimatedCounter target={10} label="Faster booking" suffix="×" />
                  <AnimatedCounter target={3200} label="Active teams" suffix="+" />
                </div>
                <div className="space-y-5">
                  {[
                    { label: 'Scheduling time reduction', value: 92 },
                    { label: 'No‑show rate decrease', value: 82 },
                    { label: 'Booking speed improvement', value: 95 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm text-white/80 mb-1.5">
                        <span>{item.label}</span>
                        <span className="font-semibold text-white">{item.value}%</span>
                      </div>
                      <div value={item.value} className="h-2.5 bg-white/20 [&>div]:bg-white rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
                <h3 className="text-sm font-semibold text-white/80 mb-3">Before vs After Agenda AI</h3>
                <StatsBarChart />
              </div>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section id="testimonials" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4 px-3 py-1">💬 Testimonials</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Loved by thousands
              </h2>
              <p className="text-lg text-gray-500">Hear from professionals who reclaimed their time.</p>
            </div>

            <Carousel className="max-w-5xl mx-auto" opts={{ align: 'start', loop: true }}>
              <CarouselContent>
                {testimonials.map((t, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-2">
                    <Card className="border border-gray-200 shadow-sm h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-1 mb-4">
                          {Array(t.rating).fill(0).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6 flex-1 leading-relaxed">"{t.quote}"</p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                          <Avatar>
                            <AvatarImage src={t.avatar} />
                            <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{t.name}</p>
                            <p className="text-xs text-gray-500">{t.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-3" />
              <CarouselNext className="hidden sm:flex -right-3" />
            </Carousel>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-8 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9/5 on G2
                </span>
                <Separator orientation="vertical" className="h-5" />
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.8/5 on Capterra
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4 px-3 py-1">💰 Pricing</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Plans that scale with you
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                14‑day free trial on every plan. No credit card needed.
              </p>

              <Tabs value={activePricingTab} onValueChange={setActivePricingTab} className="inline-flex justify-center">
                <TabsList className="bg-gray-200/80 p-1 rounded-xl">
                  <TabsTrigger value="monthly" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm px-5">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="annual" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm px-5">
                    Annual <span className="ml-1.5 text-xs text-green-600 font-semibold">Save 20%</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <TeamSliderEstimate />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`relative border transition-all duration-300 hover-lift ${
                    plan.highlight
                      ? 'border-violet-400 shadow-2xl scale-[1.03] bg-white'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div>
                      <span className="text-5xl font-extrabold text-gray-900">
                        ${activePricingTab === 'monthly' ? plan.monthly : plan.annual}
                      </span>
                      <span className="text-gray-500 text-lg">/month</span>
                      {activePricingTab === 'annual' && (
                        <p className="text-xs text-green-600 mt-1 font-medium">
                          Billed annually (${plan.annual * 12}/yr)
                        </p>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full h-11 rounded-xl font-semibold ${
                        plan.highlight
                          ? 'bg-violet-600 hover:bg-violet-700 text-white cta-glow'
                          : 'border-2 border-violet-300 text-violet-700 hover:bg-violet-50'
                      }`}
                      variant={plan.highlight ? 'default' : 'outline'}
                    >
                      {plan.cta} {plan.highlight && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-violet-300 text-violet-700 hover:bg-violet-50"
                onClick={() => setCompareModalOpen(true)}
              >
                Compare all features
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-violet-700"
                onClick={() => setDemoFormOpen(true)}
              >
                <Headphones className="mr-2 h-4 w-4" /> Request a demo
              </Button>
            </div>
          </div>

          {/* Compare modal */}
          <Dialog open={compareModalOpen} onOpenChange={setCompareModalOpen}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Feature Comparison</DialogTitle>
                <DialogDescription>Find the perfect plan for your needs.</DialogDescription>
              </DialogHeader>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-semibold text-gray-700">Feature</th>
                    <th className="text-center py-3 font-semibold text-gray-700">Starter</th>
                    <th className="text-center py-3 font-semibold text-violet-700">Pro</th>
                    <th className="text-center py-3 font-semibold text-gray-700">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2.5 font-medium text-gray-800">{row.label}</td>
                      {(['starter', 'pro', 'ent'] as const).map(col => (
                        <td key={col} className="text-center py-2.5">
                          {typeof row[col] === 'boolean' ? (
                            row[col] ? (
                              <Check className="h-4 w-4 mx-auto text-green-500" />
                            ) : (
                              <X className="h-4 w-4 mx-auto text-gray-300" />
                            )
                          ) : (
                            <span className="text-gray-700">{row[col]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </DialogContent>
          </Dialog>

          {/* Demo request modal */}
          <Dialog open={demoFormOpen} onOpenChange={setDemoFormOpen}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Request a personalized demo</DialogTitle>
                <DialogDescription>We'll show you how Agenda AI fits your workflow.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-3">
                <div>
                  <Label htmlFor="demo-name">Full name</Label>
                  <Input id="demo-name" placeholder="Jane Smith" />
                </div>
                <div>
                  <Label htmlFor="demo-email">Work email</Label>
                  <Input id="demo-email" type="email" placeholder="jane@company.com" />
                </div>
                <div>
                  <Label htmlFor="demo-size">Team size</Label>
                  <Select>
                    <SelectTrigger id="demo-size">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1–10</SelectItem>
                      <SelectItem value="11-50">11–50</SelectItem>
                      <SelectItem value="51-200">51–200</SelectItem>
                      <SelectItem value="201+">201+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                  <Send className="mr-2 h-4 w-4" /> Submit Request
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </section>

        {/* ============ GROWTH CHART WIDGET ============ */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                Meetings scheduled on Agenda AI
              </h2>
              <p className="text-gray-500">Exponential growth — 720K+ meetings booked last month alone.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <LineChartWidget />
            </div>
          </div>
        </section>

        {/* ============ FAQ WITH SEARCH ============ */}
        <section id="faq" className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4 px-3 py-1">❓ FAQ</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="relative max-w-md mx-auto mt-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search questions..."
                  className="pl-9 rounded-xl"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  aria-label="Search FAQ"
                />
              </div>
            </div>

            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:text-violet-700 py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-center text-gray-500 py-8">
                No results for "<span className="font-medium">{faqSearch}</span>".
                <br />
                <a href="#" className="text-violet-600 underline mt-1 inline-block">Contact our support team</a>
              </p>
            )}

            <div className="mt-10 p-5 bg-violet-50 rounded-2xl border border-violet-100 flex items-center gap-4">
              <Shield className="h-8 w-8 text-violet-600 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Still have questions?{' '}
                <a href="#" className="font-semibold text-violet-700 underline">Contact us</a> — we typically reply within 2 hours.
              </p>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="py-20 bg-gradient-to-br from-violet-700 via-indigo-700 to-violet-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">
              Ready to stop playing calendar Tetris?
            </h2>
            <p className="text-lg text-violet-100 mb-8 max-w-xl mx-auto leading-relaxed">
              Join 3,200+ teams who've already transformed their scheduling with Agenda AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
              <Input
                placeholder="your@email.com"
                className="h-12 bg-white/15 border-white/30 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
              />
              <Button className="h-12 px-8 bg-white text-violet-700 hover:bg-violet-50 font-bold rounded-xl shadow-xl">
                Start for free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-violet-200 mt-4">Free 14‑day trial · No credit card · Cancel anytime</p>
            <div className="mt-8 flex justify-center gap-3">
              <div className="flex -space-x-2">
                {[16, 17, 18, 19, 20].map(i => (
                  <Avatar key={i} className="border-2 border-white/20 w-8 h-8">
                    <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=50&h=50&fit=crop&crop=face`} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-sm text-white/75 self-center">⭐ 4.9/5 on G2 & Capterra</span>
            </div>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Agenda AI</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  Smart scheduling that respects your time. Built for teams that value productivity.
                </p>
                <div className="flex gap-3 mb-6">
                  {['Twitter', 'GitHub', 'LinkedIn'].map((platform, i) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
                      aria-label={platform}
                    >
                      <Share2 className="w-4 h-4 text-gray-400 hover:text-white" />
                    </a>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-3">Stay in the loop</p>
                  <div className="flex gap-2 max-w-sm">
                    <Input
                      placeholder="your@email.com"
                      className="h-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-lg text-sm"
                    />
                    <Button className="h-10 bg-violet-600 hover:bg-violet-700 text-white text-sm px-4 rounded-lg">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>

              {[
                {
                  title: 'Product',
                  links: ['Features', 'Pricing', 'Integrations', 'API', "What's New", 'Roadmap'],
                },
                {
                  title: 'Company',
                  links: ['About', 'Blog', 'Careers', 'Contact', 'Partners', 'Press Kit'],
                },
                {
                  title: 'Legal',
                  links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'],
                },
              ].map((col, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{col.title}</h4>
                  <ul className="space-y-2.5 text-sm">
                    {col.links.map(link => (
                      <li key={link}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Separator className="my-10 bg-gray-800" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">© 2025 Agenda AI. All rights reserved.</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-2 rounded-full bg-gray-800 hover:bg-violet-700 transition-colors"
                        aria-label="Back to top"
                      >
                        <ChevronUp className="w-4 h-4 text-white" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top"><p>Back to top</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </footer>
      </TooltipProvider>
    </div>
  );
}