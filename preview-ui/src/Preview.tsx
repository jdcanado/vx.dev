import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Gift, X, CalendarDays, Home, LogIn, ArrowRight, Menu, Sparkles, Users, Eye, Check, Play, ChevronRight, Star, Clock, Calendar, TrendingUp, Shield, Globe, Lock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';


// ---------------------- Helper Components ----------------------
function BeforeAfterChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveBar
        data={[
          { category: 'Before Agenda AI', conflicts: 12 },
          { category: 'After Agenda AI', conflicts: 2 },
        ]}
        keys={['conflicts']}
        indexBy="category"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear', min: 0, max: 15 }}
        indexScale={{ type: 'band', round: true }}
        colors={({ data }) =>
          data.category === 'Before Agenda AI' ? '#f43f5e' : '#6366f1'
        }
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Meetings Conflicts per Week',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
          },
        ]}
      />
    </div>
  );
}

function TimeSavedChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveLine
        data={[
          {
            id: 'Time Saved (hrs)',
            data: [
              { x: 'Mon', y: 1.2 },
              { x: 'Tue', y: 2.5 },
              { x: 'Wed', y: 1.8 },
              { x: 'Thu', y: 3.1 },
              { x: 'Fri', y: 2.4 },
              { x: 'Sat', y: 0.5 },
              { x: 'Sun', y: 0.2 },
            ],
          },
        ]}
        margin={{ top: 40, right: 30, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        curve="cardinal"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableCrosshair={false}
        colors={['#6366f1']}
        lineWidth={3}
        pointSize={10}
        pointColor="#fff"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        legends={[]}
      />
    </div>
  );
}

// ---------------------- Feature Icons Mapping ----------------------
const featureIcons = {
  SmartScheduling: CalendarDays,
  ConflictResolution: Zap,
  Privacy: Shield,
  TimeAnalytics: Clock,
  TeamCoordination: Users,
  CustomReminders: Bell,
};

// ---------------------- Main Component ----------------------
export default function AgendaAILandingRevised() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [meetingsPerWeek, setMeetingsPerWeek] = React.useState(10);
  const [avgDuration, setAvgDuration] = React.useState(45);
  const [isAnnual, setIsAnnual] = React.useState(false);
  const [showOffer, setShowOffer] = React.useState(true);
  const [demoOpen, setDemoOpen] = React.useState(false);
  const [exitIntentOpen, setExitIntentOpen] = React.useState(false);
  const [countdown, setCountdown] = React.useState(86400); // 24h in seconds
  const [liveVisitors, setLiveVisitors] = React.useState(57);
  const [recentSignup, setRecentSignup] = React.useState(null);
  const [chatOpen, setChatOpen] = React.useState(false);

  // Countdown timer effect
  React.useEffect(() => {
    if (!showOffer) return;
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [showOffer]);

  // Exit intent detection
  React.useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setExitIntentOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // Simulate live visitors count (changes every 3–7s)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(Math.floor(Math.random() * 20) + 45);
    }, Math.random() * 4000 + 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulate recent signup notifications (every 10–20s)
  React.useEffect(() => {
    const fakeSignups = [
      { name: 'Sarah from Stripe', avatar: 'https://github.com/sarah.png' },
      { name: 'Marcos from Brazil', avatar: 'https://github.com/marcus.png' },
      { name: 'Emily from Figma', avatar: 'https://github.com/emily.png' },
      { name: 'David from Berlin', avatar: 'https://github.com/david.png' },
    ];
    const interval = setInterval(() => {
      const randomUser = fakeSignups[Math.floor(Math.random() * fakeSignups.length)];
      setRecentSignup(randomUser);
      // Auto-dismiss after 4 seconds
      setTimeout(() => setRecentSignup(null), 4000);
    }, Math.random() * 10000 + 8000);
    return () => clearInterval(interval);
  }, []);

  const formatCountdown = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const yearlySavings = (meetingsPerWeek * avgDuration * 0.3) / 60;
  const yearlyCost = isAnnual ? 90 : 12 * 15;

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* ---- Sticky CTA Banner (urgency with countdown) ---- */}
        {showOffer && (
          <div className="bg-indigo-600 text-white py-3 px-4 flex items-center justify-center gap-3 text-sm font-medium relative">
            <Gift className="h-4 w-4" />
            <span>
              🎉 <strong>Limited-time offer:</strong> 50% off your first year ends in{' '}
              <span className="font-mono bg-white/20 px-2 py-0.5 rounded">{formatCountdown()}</span>
              . Use code <strong>SAVE50</strong>
            </span>
            <Button
              variant="link"
              size="sm"
              className="text-white underline hover:no-underline ml-2"
              onClick={() => alert('Promo applied!')}
            >
              Claim now
            </Button>
            <button
              className="absolute right-4 hover:opacity-70"
              onClick={() => setShowOffer(false)}
              aria-label="Close offer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* ---- Header/Navbar with glass effect and micro-interactions ---- */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-6 w-6 text-indigo-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Agenda AI
                </span>
                <div variant="outline" className="ml-2 text-xs font-medium border-indigo-200 text-indigo-600">
                  Beta
                </div>
              </div>

              <nav className="hidden md:flex items-center space-x-1">
                {['Features', 'How It Works', 'Testimonials', 'Pricing', 'FAQ'].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                      className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
                    </a>
                  )
                )}
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2 hover:bg-indigo-50">
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Welcome back</DialogTitle>
                      <DialogDescription>
                        Sign in to your Agenda AI account.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <Input placeholder="Email" />
                      <Input type="password" placeholder="Password" />
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        Sign In
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700 gap-2 shadow-md shadow-indigo-200 transition-all hover:scale-105"
                  onClick={() => alert('Redirecting to signup...')}
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200 animate-in slide-in-from-top-2">
              <div className="px-4 py-3 space-y-2">
                {['Features', 'How It Works', 'Testimonials', 'Pricing', 'FAQ'].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                      className="block py-2 text-sm font-medium text-slate-700 hover:text-indigo-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
                <Separator />
                <Button variant="ghost" size="sm" className="w-full gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 gap-2"
                  onClick={() => alert('Redirecting to signup...')}
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </header>

        {/* ---- Hero Section with countdown, social proof, and interactive demo entry ---- */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
          <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-indigo-400 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-bounce" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-10 lg:mb-0">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="bg-indigo-100 text-indigo-700 border-indigo-200 flex items-center gap-1 animate-pulse">
                    <Sparkles className="h-3 w-3" /> Limited Offer – 50% off ends in {formatCountdown()}
                  </div>
                  <div variant="outline" className="text-slate-600 border-slate-300">
                    <Users className="h-3 w-3 mr-1" /> Join 15,000+ users
                  </div>
                  <div variant="outline" className="text-green-600 border-green-200">
                    <Eye className="h-3 w-3 mr-1" /> {liveVisitors} people viewing now
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                  AI that finds the{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    perfect meeting time
                  </span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-lg">
                  Stop wasting time coordinating schedules. Agenda AI analyzes calendars across your team, suggests optimal slots, and books meetings automatically. Free up 30% of your week starting today.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                  <div className="flex-1 relative">
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-indigo-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
                    />
                    <Users className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  </div>
                  <Button
                    size="lg"
                    className="bg-indigo-600 hover:bg-indigo-700 h-12 gap-2 shadow-lg shadow-indigo-200 group transition-all hover:scale-105"
                    onClick={() => alert('Starting free trial...')}
                  >
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <p className="mt-4 text-sm text-slate-500 flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  No credit card required · 14-day free trial · Cancel anytime
                </p>

                <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex -space-x-2">
                    {[
                      'https://github.com/sarah.png',
                      'https://github.com/marcus.png',
                      'https://github.com/emily.png',
                    ].map((url, i) => (
                      <Avatar key={i} className="h-8 w-8 border-2 border-white">
                        <AvatarImage src={url} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span>
                    <strong>200+</strong> signups today
                  </span>
                </div>

                {/* Quick Demo CTA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 gap-2 group"
                    onClick={() => setDemoOpen(true)}
                  >
                    <Play className="h-4 w-4" /> See a live demo
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="gap-2 group"
                    onClick={() => {
                      const testimonials = document.getElementById('testimonials');
                      testimonials?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Star className="h-4 w-4" /> Read reviews
                  </Button>
                </div>
              </div>

              {/* Dashboard mockup with statistics */}
              <div className="relative">
                <div className="rounded-2xl shadow-2xl bg-white/90 backdrop-blur-sm border border-slate-200 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-slate-400">
                      agenda.ai/dashboard
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Card className="bg-indigo-50 border-indigo-100">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                          <CalendarDays className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-indigo-900">
                            12
                          </p>
                          <p className="text-xs text-indigo-700">
                            Meetings this week
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50 border-purple-100">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Clock className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-900">
                            8.5h
                          </p>
                          <p className="text-xs text-purple-700">
                            Saved this month
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-3">
                    {['Team standup', 'Client call', 'Design review'].map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer group"
                        >
                          <Checkbox id={`meeting-${idx}`} defaultChecked />
                          <Label
                            htmlFor={`meeting-${idx}`}
                            className="text-sm font-medium group-hover:text-indigo-600"
                          >
                            {item}
                          </Label>
                          <span className="ml-auto text-xs text-slate-500">
                            {idx === 0
                              ? '9:00 AM'
                              : idx === 1
                              ? '11:00 AM'
                              : '2:00 PM'}
                          </span>
                          <ChevronRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      )
                    )}
                  </div>
                </div>
                {/* Floating element with bounce animation */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 border border-slate-200 animate-bounce">
                  <Avatar>
                    <AvatarImage src="https://github.com/Yuyz0112.png" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Agenda AI</p>
                    <p className="text-xs text-slate-500">
                      Perfect slot found!
                    </p>
                  </div>
                  <Check className="h-4 w-4 text-green-500 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Dialogue for Quick Demo ---- */}
        <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Quick Demo – Pick a Date</DialogTitle>
              <DialogDescription>
                See how Agenda AI recommends time slots for you.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
              />
              <div className="flex-1 w-full">
                <h4 className="text-sm font-medium mb-2">
                  Available Slots for{' '}
                  {date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h4>
                <div className="space-y-2">
                  {['9:00 AM', '10:15 AM', '1:30 PM', '3:45 PM'].map(
                    (slot, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-between group hover:bg-indigo-50 hover:border-indigo-300"
                        onClick={() => alert(`Slot ${slot} selected!`)}
                      >
                        <span className="font-mono text-indigo-700">
                          {slot}
                        </span>
                        <span className="text-sm text-green-600 flex items-center">
                          <Check className="h-3 w-3 mr-1" /> Optimal
                        </span>
                      </Button>
                    )
                  )}
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  AI ranks slots based on your calendar density and team preferences.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* ---- Social Proof Bar with trust badges and company logos ---- */}
        <section className="py-12 border-y border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-medium text-slate-500 mb-8">
              TRUSTED BY INNOVATIVE TEAMS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 mb-8">
              {['Stripe', 'Shopify', 'Figma', 'Notion', 'Vercel'].map(
                (company) => (
                  <div
                    key={company}
                    className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-default"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { icon: Shield, text: 'SOC 2 Type II' },
                { icon: Globe, text: 'GDPR Compliant' },
                { icon: Lock, text: '256-bit Encryption' },
              ].map((badge) => (
                <Tooltip key={badge.text}>
                  <TooltipTrigger asChild>
                    <div variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 cursor-help hover:bg-indigo-50">
                      <badge.icon className="h-3 w-3 mr-1" /> {badge.text}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>We take security seriously</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Stats Section with animated progress ---- */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div variant="outline" className="mb-4 text-indigo-600 border-indigo-200">
                BY THE NUMBERS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                The results speak for themselves
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '15,000+', label: 'Active Users', detail: '+28% this month' },
                { number: '3.2M+', label: 'Hours Saved', detail: '0.5M last week' },
                { number: '98%', label: 'Satisfaction Rate', detail: 'Based on 4,500 reviews' },
                { number: '1.8M', label: 'Meetings Scheduled', detail: '24/7 automation' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-slate-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.detail}</p>
                  <div className="mt-3 w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Features with Tabs – modern card design ---- */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div variant="outline" className="mb-4 text-indigo-600 border-indigo-200">
                <Sparkles className="h-3 w-3 mr-1" /> Powerful Features
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Everything you need to master your schedule
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From smart scheduling to advanced analytics, Agenda AI gives you the tools to take control of your time.
              </p>
            </div>

            <Tabs defaultValue="SmartScheduling" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-3 gap-2 mb-12">
                {[
                  { id: 'SmartScheduling', label: 'Smart Scheduling' },
                  { id: 'ConflictResolution', label: 'Conflict Resolution' },
                  { id: 'Privacy', label: 'Privacy First' },
                  { id: 'TimeAnalytics', label: 'Time Analytics' },
                  { id: 'TeamCoordination', label: 'Team Coord.' },
                  { id: 'CustomReminders', label: 'Custom Reminders' },
                ].map(({ id, label }) => (
                  <TabsTrigger key={id} value={id} className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700">
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(featureIcons).map(([key, Icon]) => (
                <TabsContent key={key} value={key}>
                  <Card className="border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                        <div className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {key === 'SmartScheduling' &&
                          'AI finds the best time for everyone based on calendar data, time zones, and preferences.'}
                        {key === 'ConflictResolution' &&
                          'Automatically detects and resolves double-bookings before they happen.'}
                        {key === 'Privacy' &&
                          'Your data is encrypted and never shared. We’re SOC 2 Type II compliant.'}
                        {key === 'TimeAnalytics' &&
                          'See how your time is spent and get AI‑powered recommendations to optimize your week.'}
                        {key === 'TeamCoordination' &&
                          'Easily coordinate across departments with shared calendars and polls.'}
                        {key === 'CustomReminders' &&
                          'Set intelligent reminders that learn your habits and reduce no‑shows.'}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 hover:bg-indigo-50 hover:text-indigo-600"
                        onClick={() => alert('Explore more features')}
                      >
                        Learn more <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* ---- Interactive Time Savings Calculator ---- */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Interactive
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                See Your Time Savings
              </h2>
              <p className="mt-4 text-slate-600">
                Adjust the sliders to estimate how much time Agenda AI can save you every week.
              </p>
            </div>
            <div className="space-y-8 p-6 bg-slate-50 rounded-2xl">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Meetings per week: <span className="font-bold">{meetingsPerWeek}</span>
                </label>
                <Slider
                  value={[meetingsPerWeek]}
                  onValueChange={(vals) => setMeetingsPerWeek(vals[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average meeting length (minutes): <span className="font-bold">{avgDuration}</span>
                </label>
                <Slider
                  value={[avgDuration]}
                  onValueChange={(vals) => setAvgDuration(vals[0])}
                  min={15}
                  max={120}
                  step={5}
                  className="w-full"
                />
              </div>
              <Card className="bg-indigo-50 border-indigo-100">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-indigo-900">
                      Weekly time saved
                    </p>
                    <p className="text-3xl font-extrabold text-indigo-600">
                      {yearlySavings.toFixed(1)} hours
                    </p>
                  </div>
                  <TrendingUp className="h-12 w-12 text-indigo-400" />
                </CardContent>
              </Card>
              <div className="text-center text-sm text-slate-500">
                Based on an average of 30% time saved per meeting (typical user result).
              </div>
            </div>
          </div>
        </section>

        {/* ---- Interactive AI Demo Section (Calendar + Slots) ---- */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Live Demo
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Try Agenda AI
              </h2>
              <p className="mt-4 text-slate-600">
                Pick a date and see how AI suggests the best time slots for you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow"
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Available Slots for{' '}
                  {date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h3>
                <div className="space-y-2">
                  {['9:00 AM', '10:15 AM', '1:30 PM', '3:45 PM'].map(
                    (slot, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-between group hover:bg-indigo-50 hover:border-indigo-300 transition-all"
                        onClick={() => alert(`Slot ${slot} selected!`)}
                      >
                        <span className="font-mono text-indigo-700">
                          {slot}
                        </span>
                        <span className="text-sm text-green-600 flex items-center">
                          <Check className="h-3 w-3 mr-1" /> Optimal
                        </span>
                      </Button>
                    )
                  )}
                </div>
                <p className="mt-6 text-sm text-slate-500">
                  AI automatically ranks slots based on your past behavior and calendar density.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Before/After Chart + Time Saved Trend ---- */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Real Results
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                See the Difference
              </h2>
              <p className="mt-4 text-slate-600">
                Average weekly meeting conflicts dropped by 83% after adopting Agenda AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">
                  Weekly Conflicts
                </h3>
                <BeforeAfterChart />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">
                  Weekly Time Saved (hrs)
                </h3>
                <TimeSavedChart />
              </div>
            </div>
          </div>
        </section>

        {/* ---- How It Works with step indicators ---- */}
        <section id="how-it-works" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div variant="outline" className="mb-4 text-indigo-600 border-indigo-200">
                Simple Process
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Get started in 3 easy steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Connect Calendars',
                  description:
                    'Link Google, Outlook, or Apple Calendar in one click.',
                  icon: CalendarDays,
                },
                {
                  step: '02',
                  title: 'Set Your Preferences',
                  description:
                    'Define your working hours, meeting buffers, and priorities.',
                  icon: Clock,
                },
                {
                  step: '03',
                  title: 'Let AI Do the Rest',
                  description:
                    'Agenda AI automatically schedules meetings and keeps your day optimized.',
                  icon: Zap,
                },
              ].map((step, idx) => (
                <div key={idx} className="relative text-center group">
                  <div className="mb-4 inline-flex p-4 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-5xl font-bold text-indigo-100 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{step.description}</p>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-300">
                      <ChevronRight className="h-8 w-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Testimonials Carousel with enhanced cards ---- */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div variant="outline" className="mb-4 text-indigo-600 border-indigo-200">
                Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Loved by busy professionals
              </h2>
            </div>

            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {[
                  {
                    name: 'Sarah Chen',
                    role: 'Product Manager at Stripe',
                    quote:
                      'Agenda AI saved me 10 hours a week. It’s like having a personal assistant who never sleeps.',
                    avatar: 'https://github.com/sarah.png',
                  },
                  {
                    name: 'Marcus Rodriguez',
                    role: 'Engineering Lead at Vercel',
                    quote:
                      'The smart scheduling alone is worth it. We cut meeting conflicts by 90% in our team.',
                    avatar: 'https://github.com/marcus.png',
                  },
                  {
                    name: 'Emily Watson',
                    role: 'Freelance Designer',
                    quote:
                      'Finally, a tool that understands time zones! My clients and I are always on the same page now.',
                    avatar: 'https://github.com/emily.png',
                  },
                  {
                    name: 'David Kim',
                    role: 'CEO, StartupHub',
                    quote:
                      'Implementation was seamless. We were up and running in minutes, and the AI scheduling is eerily accurate.',
                    avatar: 'https://github.com/david.png',
                  },
                ].map((person) => (
                  <CarouselItem
                    key={person.name}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="border-slate-200 h-full hover:shadow-md transition-all hover:-translate-y-1">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <blockquote className="text-slate-700 italic">
                            "{person.quote}"
                          </blockquote>
                        </CardContent>
                        <CardFooter className="border-t border-slate-100">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={person.avatar} />
                              <AvatarFallback>
                                {person.name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">
                                {person.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        {/* ---- Pricing with enhanced visual and toggle ---- */}
        <section id="pricing" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Pricing
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Plans for every team size
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Start free and upgrade as you grow. No hidden fees.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="bg-white border rounded-lg p-1 inline-flex gap-1 shadow-sm">
                  <Button
                    variant={isAnnual ? 'ghost' : 'default'}
                    size="sm"
                    onClick={() => setIsAnnual(false)}
                    className={
                      !isAnnual
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-600'
                    }
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={isAnnual ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setIsAnnual(true)}
                    className={
                      isAnnual
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-600'
                    }
                  >
                    Annually{' '}
                    <span className="text-xs ml-1 bg-green-100 text-green-700 rounded px-1">
                      Save 50%
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Starter',
                  price: 'Free',
                  description: 'For individuals getting started.',
                  features: [
                    '1 calendar connection',
                    '5 meetings/month',
                    'Basic analytics',
                    'Email support',
                  ],
                  cta: 'Get Started',
                  popular: false,
                },
                {
                  name: 'Pro',
                  price: isAnnual ? '$7.50' : '$15',
                  period: isAnnual ? '/mo, billed annually' : '/month',
                  description: 'For professionals and small teams.',
                  features: [
                    'Unlimited calendars',
                    'Unlimited meetings',
                    'Advanced analytics',
                    'Priority support',
                    'Custom branding',
                  ],
                  cta: 'Start Free Trial',
                  popular: true,
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  description: 'For large organizations with custom needs.',
                  features: [
                    'Everything in Pro',
                    'SSO & SAML',
                    'Dedicated support',
                    'Custom integrations',
                    'SLA guarantee',
                  ],
                  cta: 'Contact Sales',
                  popular: false,
                },
              ].map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.popular
                      ? 'border-indigo-500 shadow-lg scale-105 z-10'
                      : ''
                  } transition-all hover:-translate-y-1`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-indigo-600 hover:bg-indigo-600">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-sm text-slate-500 ml-1">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-indigo-600 hover:bg-indigo-700'
                          : 'bg-slate-900 hover:bg-slate-800'
                      }`}
                      onClick={() => alert(`Selected ${plan.name} plan`)}
                    >
                      {plan.cta}
                    </Button>
                    {plan.popular && (
                      <div
                        variant="outline"
                        className="text-green-600 border-green-200"
                      >
                        30-day money-back guarantee
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---- FAQ with animated accordion ---- */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div variant="outline" className="mb-4 text-indigo-600 border-indigo-200">
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Frequently asked questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: 'How does Agenda AI handle time zones?',
                  answer:
                    'Agenda AI automatically detects each participant’s time zone and finds a mutually convenient slot. You can also set your preferred time zone in settings.',
                },
                {
                  question: 'Can I integrate with my existing tools?',
                  answer:
                    'Absolutely! We integrate with Google Calendar, Outlook, Apple Calendar, Zoom, Teams, and Slack. More integrations are added monthly.',
                },
                {
                  question: 'Is my data secure?',
                  answer:
                    'Security is our top priority. All data is encrypted in transit and at rest. We are SOC 2 Type II certified and GDPR compliant.',
                },
                {
                  question: 'What happens during the free trial?',
                  answer:
                    'You get full access to all Pro features for 14 days. No credit card required. Cancel anytime, and your data will be deleted or exported upon request.',
                },
                {
                  question: 'Is there a money-back guarantee?',
                  answer:
                    'Yes! All paid plans come with a 30-day money-back guarantee. If you’re not satisfied, contact us for a full refund.',
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left hover:text-indigo-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ---- Final CTA with powerful conversion techniques ---- */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 bg-white/20 text-white border-none">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to reclaim your time?
            </h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              Join 15,000+ professionals who already use Agenda AI to automate
              their scheduling. Start your free trial today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 gap-2 shadow-xl group transition-all hover:scale-105"
                onClick={() => alert('Starting free trial!')}
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 transition-all hover:scale-105"
                onClick={() => alert('Redirecting to sales')}
              >
                Talk to sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-indigo-200 flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              No credit card required · 14-day free trial · 30-day money-back
              guarantee
            </p>
            <div className="mt-3 text-xs text-indigo-300">
              Use code <strong>SAVE50</strong> for 50% off your first year.
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-indigo-200">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" /> 99.9% uptime SLA
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" /> SOC2 Type II certified
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" /> 24/7 support
              </div>
            </div>
          </div>
        </section>

        {/* ---- Exit Intent Popup (abandoned cart technique) ---- */}
        <Dialog open={exitIntentOpen} onOpenChange={setExitIntentOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Wait! Before you go...</DialogTitle>
              <DialogDescription>
                Get an extra <strong>20% off</strong> your first year and a free scheduling audit.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg flex items-center gap-3">
                <Gift className="h-8 w-8 text-indigo-600" />
                <div>
                  <p className="font-medium">Limited offer just for you</p>
                  <p className="text-sm text-slate-600">Code: EXIT20</p>
                </div>
              </div>
              <Input type="email" placeholder="Your best email" />
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                onClick={() => {
                  alert('Offer claimed!');
                  setExitIntentOpen(false);
                }}
              >
                Claim My Discount
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* ---- Recent Signup Notification (social proof popup) ---- */}
        {recentSignup && (
          <div className="fixed bottom-4 left-4 z-50 animate-slide-up bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg p-3 flex items-center gap-3 max-w-xs">
            <Avatar className="h-10 w-10">
              <AvatarImage src={recentSignup.avatar} />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{recentSignup.name}</p>
              <p className="text-xs text-green-600">just signed up</p>
            </div>
            <button onClick={() => setRecentSignup(null)}>
              <X className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        )}

        {/* ---- Chat / Help Button ---- */}
        <div className="fixed bottom-4 right-4 z-50">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full h-12 w-12 bg-indigo-600 hover:bg-indigo-700 shadow-lg"
                onClick={() => setChatOpen(true)}
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Need help? Chat with us</p>
            </TooltipContent>
          </Tooltip>

          <Dialog open={chatOpen} onOpenChange={setChatOpen}>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Live Chat</DialogTitle>
                <DialogDescription>
                  Leave your message and we’ll get back to you.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Your name" />
                <Input placeholder="Your email" />
                <Textarea placeholder="How can we help?" />
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Send Message
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* ---- Mobile Bottom Sticky CTA ---- */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex gap-2 z-50 shadow-lg">
          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            onClick={() => alert('Redirecting to signup...')}
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* ---- Footer with enhanced layout ---- */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Product
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Company
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Legal
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Stay Updated
                </h4>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                    <Button
                      size="sm"
                      className="bg-indigo-600 hover:bg-indigo-700"
                      onClick={() => alert('Subscribed!')}
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">
                    Get product updates and AI tips.
                  </p>
                </div>
              </div>
            </div>
            <Separator className="my-8 bg-slate-800" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-indigo-400" />
                <span className="text-white font-semibold">Agenda AI</span>
              </div>
              <p className="text-sm text-slate-500">
                © 2025 Agenda AI. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}