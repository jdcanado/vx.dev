import { ResponsiveBar } from '@nivo/bar';
import { CalendarDays, Zap, Globe, Smartphone, Lock, Users, Sparkles, Sheet, Menu, Badge, Mail, ArrowRight, Check, Play, Clock, ArrowUpRight, Star, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';


function StatsBarChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveBar
        data={[
          { metric: 'Time Saved', before: 100, after: 35 },
          { metric: 'No-Shows', before: 80, after: 20 },
          { metric: 'Booking Time', before: 90, after: 10 },
          { metric: 'Satisfaction', before: 55, after: 95 },
        ]}
        keys={['before', 'after']}
        indexBy="metric"
        margin={{ top: 30, right: 40, bottom: 50, left: 50 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#e2e8f0', '#7c3aed']}
        borderWidth={0}
        borderRadius={4}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legend: 'Score',
          legendOffset: -40,
        }}
        enableGridY={true}
        gridYValues={[0, 25, 50, 75, 100]}
        theme={{
          grid: {
            line: {
              stroke: '#f1f5f9',
              strokeWidth: 1,
            },
          },
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fill: '#64748b',
              },
            },
          },
        }}
      />
    </div>
  );
}

export default function AgendaAILanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [videoModalOpen, setVideoModalOpen] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState('');
  const [activePricingTab, setActivePricingTab] = React.useState('monthly');
  const [compareModalOpen, setCompareModalOpen] = React.useState(false);

  const trustLogos = [
    { name: 'Acme Corp', logoColor: 'text-gray-400' },
    { name: 'TechNova', logoColor: 'text-gray-400' },
    { name: 'FinScale', logoColor: 'text-gray-400' },
    { name: 'DataFlow', logoColor: 'text-gray-400' },
    { name: 'PixelCorp', logoColor: 'text-gray-400' },
    { name: 'QuantumDev', logoColor: 'text-gray-400' },
  ];

  const features = [
    {
      icon: <CalendarDays className="h-6 w-6 text-violet-600" />,
      title: 'Smart Scheduling',
      description:
        'AI finds the perfect time for all participants, respecting timezones and personal preferences.',
      highlight: '90% faster',
      bentoStyle: 'md:col-span-2 md:row-span-2 bg-violet-50/50',
    },
    {
      icon: <Zap className="h-6 w-6 text-violet-600" />,
      title: 'Instant Links',
      description:
        'One click creates a virtual room with video, shared notes, and agenda.',
      highlight: '1-click setup',
      bentoStyle: '',
    },
    {
      icon: <Globe className="h-6 w-6 text-violet-600" />,
      title: 'Multi-Calendar Sync',
      description:
        'Connect Google, Outlook and Apple Calendar seamlessly. Zero conflicts guaranteed.',
      highlight: '3+ platforms',
      bentoStyle: 'md:col-span-1 md:row-span-2',
    },
    {
      icon: <Smartphone className="h-6 w-6 text-violet-600" />,
      title: 'Mobile First',
      description:
        'Schedule, join and manage meetings on the go with native iOS and Android apps.',
      highlight: 'iOS & Android',
      bentoStyle: '',
    },
    {
      icon: <Lock className="h-6 w-6 text-violet-600" />,
      title: 'Enterprise Security',
      description:
        'SOC 2 Type II, end‑to‑end encryption, SAML SSO. Your data stays safe.',
      highlight: 'SOC 2 certified',
      bentoStyle: 'md:col-span-2',
    },
    {
      icon: <Users className="h-6 w-6 text-violet-600" />,
      title: 'Team Analytics',
      description:
        'See how your team uses time and optimise meeting culture with dashboards.',
      highlight: 'Real‑time insights',
      bentoStyle: '',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Connect Your Calendars',
      description:
        'Link Google, Outlook or Apple Calendar in two clicks. AI instantly learns your availability.',
      icon: <CalendarDays className="h-6 w-6 text-white" />,
      color: 'from-violet-600 to-purple-600',
    },
    {
      number: '02',
      title: 'Set Your Preferences',
      description:
        'Define ideal hours, buffer intervals, favourite video platforms and productivity rhythms.',
      icon: <Zap className="h-6 w-6 text-white" />,
      color: 'from-indigo-600 to-blue-600',
    },
    {
      number: '03',
      title: 'Let AI Work',
      description:
        'Type what you need. "Schedule a 30‑min catch‑up with the design team next Tuesday afternoon." Done.',
      icon: <Sparkles className="h-6 w-6 text-white" />,
      color: 'from-fuchsia-600 to-pink-600',
    },
  ];

  const testimonials = [
    {
      quote:
        'Agenda AI reduced my scheduling time by 90%. I now spend zero minutes playing calendar Tetris.',
      name: 'Sarah Chen',
      role: 'Product Lead at Acme Inc.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote:
        'Our sales team saved 12 hours a week. The CRM integration was flawless.',
      name: 'Carlos Mendez',
      role: 'Sales Director at TechNova',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote:
        'The analytics feature helped us identify useless meetings and reclaim 20% of our productive time.',
      name: 'Emily Park',
      role: 'COO at FinScale',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote:
        'I love how the AI adapts to my working patterns. It’s like having a personal assistant that never sleeps.',
      name: 'James Wilson',
      role: 'Freelance Designer',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      priceMonthly: 8,
      priceAnnual: 6,
      description: 'For professionals who want to streamline personal scheduling.',
      features: [
        '1 connected calendar',
        'Basic smart scheduling',
        'Instant meeting links',
        'Mobile app',
        'Email support',
      ],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      priceMonthly: 19,
      priceAnnual: 15,
      description: 'For teams that need advanced coordination and analytics.',
      features: [
        'Unlimited calendars',
        'Group scheduling',
        'Team analytics',
        'CRM & tool integrations',
        'Priority support',
      ],
      cta: 'Try Free',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      priceMonthly: 49,
      priceAnnual: 39,
      description: 'For organizations requiring full security and control.',
      features: [
        'Everything in Pro',
        'SSO & SAML',
        'Audit trail',
        'Dedicated API',
        'Customer success manager',
      ],
      cta: 'Talk to Sales',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! All plans include a 14‑day free trial with full access to features. No credit card required.',
    },
    {
      question: 'Can I integrate with my existing calendar?',
      answer:
        'Absolutely. Agenda AI works with Google, Outlook, Apple Calendar and any CalDAV‑compatible service.',
    },
    {
      question: 'How secure is my data?',
      answer:
        'We are SOC 2 Type II certified and use AES‑256 encryption for data at rest and in transit. You can also bring your own SAML SSO.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Yes, you can cancel your subscription at any time. There are no long‑term contracts or cancellation fees.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, PayPal and, for Enterprise plans, invoice‑based payment.',
    },
    {
      question: 'Do you offer a discount for nonprofits?',
      answer:
        'Yes, we provide special pricing for eligible nonprofit organisations. Contact sales for details.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ========== Header ========== */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-violet-900">Agenda AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50">Log in</Button>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">
              Get Started Free
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#features" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                <a href="#testimonials" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
                <a href="#pricing" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                <a href="#faq" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <Button variant="outline" className="w-full mt-4">Log in</Button>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Get Started Free</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ========== Hero ========== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 px-3 py-1 text-sm animate-pulse">
                ⚡ Now with team analytics
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Never chase<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  meeting times
                </span>{' '}
                again
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                AI‑powered scheduling that respects everyone’s time. Connect your calendar, set your preferences, and let Agenda AI handle the rest.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    className="pl-10 h-12 border-violet-200 focus:border-violet-500"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
                <Button className="h-12 px-8 bg-violet-600 hover:bg-violet-700 text-white gap-2 shadow-lg shadow-violet-200">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> 14‑day free trial</span>
                <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> No credit card</span>
                <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> Cancel anytime</span>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-white w-8 h-8">
                      <AvatarImage
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=50&h=50&fit=crop&crop=face`}
                      />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-violet-700">2,500+</span> companies already joined
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-violet-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="Dashboard preview"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
                    <DialogTrigger asChild>
                      <button
                        className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                        aria-label="Play video"
                      >
                        <Play className="h-8 w-8 text-violet-600 ml-1" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px]">
                      <DialogHeader>
                        <DialogTitle>Agenda AI in 60 seconds</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                        <p className="text-white text-lg">Product demo video placeholder</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4 text-violet-500" />
                  <span>Average booking time</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mt-1">24 sec</div>
                <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-3 w-3" /> 10x faster
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Trusted by ========== */}
      <section className="border-t border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center sm:justify-between flex-wrap gap-6">
          <p className="text-sm text-gray-500">Trusted by innovative teams</p>
          <div className="flex items-center gap-8 opacity-70 flex-wrap justify-center">
            {trustLogos.map((logo, idx) => (
              <span
                key={idx}
                className={`text-xl font-bold ${logo.logoColor} tracking-wide`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Features Bento Grid ========== */}
      <section id="features" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to schedule like a pro
            </h2>
            <p className="text-lg text-gray-600">
              Stop wasting time on logistics and focus on what really matters.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className={`border border-gray-200 hover:border-violet-200 transition-all duration-300 hover:shadow-lg group ${feature.bentoStyle}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-1">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                    {feature.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== How It Works ========== */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Three steps to never miss a meeting again
            </h2>
            <p className="text-lg text-gray-600">
              Setup takes less than 2 minutes. Simplicity at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-2 border-t border-dashed border-violet-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Testimonials Carousel ========== */}
      <section id="testimonials" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What our users say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of professionals who already reclaimed their time.
            </p>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-gray-200 shadow-sm h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-1 mb-3">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">“{testimonial.quote}”</p>
                      </div>
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* ========== Stats & Chart ========== */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Results that speak for themselves</h2>
              <p className="text-lg text-violet-100 mb-8">
                Our clients report a 90% reduction in scheduling time and an 80% drop in no-shows.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">2.5x</p>
                  <p className="text-sm text-violet-200">more meetings booked</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-violet-200">customer satisfaction</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">12h</p>
                  <p className="text-sm text-violet-200">saved per week</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">10k+</p>
                  <p className="text-sm text-violet-200">active users</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <StatsBarChart />
            </div>
          </div>
        </div>
      </section>

      {/* ========== Pricing ========== */}
      <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Plans that grow with you
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose the best plan for your team. All include a 14‑day free trial.
            </p>

            <Tabs defaultValue="monthly" className="justify-center" onValueChange={setActivePricingTab}>
              <TabsList className="bg-gray-200 p-1">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-white">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annual" className="data-[state=active]:bg-white">
                  Annual <span className="ml-1 text-xs text-green-600">(Save 20%)</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative border ${
                  plan.highlighted
                    ? 'border-violet-400 shadow-xl scale-105'
                    : 'border-gray-200'
                } transition-all`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      $ {activePricingTab === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-violet-600 hover:bg-violet-700 text-white'
                        : 'border-violet-300 text-violet-700 hover:bg-violet-50'
                    }`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-violet-300 text-violet-700 hover:bg-violet-50"
              onClick={() => setCompareModalOpen(true)}
            >
              Compare all features
            </Button>
          </div>
        </div>

        {/* Compare modal */}
        <Dialog open={compareModalOpen} onOpenChange={setCompareModalOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Feature Comparison</DialogTitle>
            </DialogHeader>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Feature</th>
                    <th className="text-center py-2">Starter</th>
                    <th className="text-center py-2">Pro</th>
                    <th className="text-center py-2">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Connected calendars',
                    'Smart scheduling',
                    'Instant links',
                    'Mobile app',
                    'Group scheduling',
                    'Team analytics',
                    'CRM integrations',
                    'SSO & SAML',
                    'Audit trail',
                    'Dedicated API',
                  ].map((feature, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2">{feature}</td>
                      <td className="text-center">✔</td>
                      <td className="text-center">✔</td>
                      <td className="text-center">✔</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-violet-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to reclaim your time?
          </h2>
          <p className="text-lg text-violet-100 mb-8">
            Join 10,000+ professionals who have transformed the way they schedule meetings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Input
              placeholder="your@email.com"
              className="h-12 bg-white text-gray-900 placeholder:text-gray-500"
            />
            <Button className="h-12 px-8 bg-white text-violet-700 hover:bg-violet-50 font-semibold">
              Start for free
            </Button>
          </div>
          <p className="text-xs text-violet-200 mt-4">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Agenda AI</span>
              </div>
              <p className="text-sm">Smart scheduling that respects your time.</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7.5.1.9 1 .9 1 .8 1.4 2.2 1 2.8.8.1-.6.3-1 .6-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.2 2.7 1a9.3 9.3 0 014.9 0c1.9-1.2 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .2.2.5.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z"/></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zm-1.5-10.3A1.7 1.7 0 114.8 7a1.7 1.7 0 011.7 1.7zM19 19h-3v-4.9c0-1.2-.4-2-1.5-2s-1.7.9-1.7 2V19h-3v-9h2.9v1.2c.5-.9 1.6-1.4 2.7-1.4 2.5 0 3.6 1.6 3.6 4.2V19z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
              <Button className="mt-4 text-xs h-8 bg-violet-600 hover:bg-violet-700 text-white">
                Request a demo
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 Agenda AI. All rights reserved.</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors mt-4 sm:mt-0"
                    aria-label="Back to top"
                  >
                    <ChevronUp className="w-5 h-5 text-white" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Back to top</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </footer>
    </div>
  );
}