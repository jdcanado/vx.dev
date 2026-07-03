import { ResponsiveBar } from '@nivo/bar';
import { CalendarDays } from '@/components/ui/calendar';
import { Zap, Globe, Smartphone, Lock, Home, Sparkles, Menu, Mail, ArrowRight, Check, Play, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';


function StatsBarChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveBar
        data={[
          { metric: "Time Saved", before: 100, after: 35 },
          { metric: "No-Shows", before: 80, after: 20 },
          { metric: "Booking Time", before: 90, after: 10 },
          { metric: "Team Satisfaction", before: 55, after: 95 },
        ]}
        keys={["before", "after"]}
        indexBy="metric"
        margin={{ top: 30, right: 40, bottom: 50, left: 50 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#e2e8f0", "#7c3aed"]}
        borderWidth={0}
        borderRadius={4}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legend: "Score",
          legendOffset: -40,
        }}
        enableGridY={true}
        gridYValues={[0, 25, 50, 75, 100]}
        theme={{
          grid: {
            line: {
              stroke: "#f1f5f9",
              strokeWidth: 1,
            },
          },
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fill: "#64748b",
              },
            },
          },
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: -25,
            itemsSpacing: 16,
            itemWidth: 60,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderRadius: 12,
            itemTextColor: "#64748b",
          },
        ]}
      />
    </div>
  );
}

export default function AgendaAILanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [activePricingTab, setActivePricingTab] = useState("monthly");

  const features = [
    {
      icon: <CalendarDays className="h-6 w-6 text-violet-600" />,
      title: "Smart Scheduling",
      description:
        "AI encontra o horário perfeito para todos os participantes, respeitando fusos horários e preferências automaticamente.",
      highlight: "90% mais rápido",
    },
    {
      icon: <Zap className="h-6 w-6 text-violet-600" />,
      title: "Links Instantâneos",
      description:
        "Um clique gera uma sala virtual com vídeo, notas compartilhadas e agenda – sem trocas intermináveis de e‑mails.",
      highlight: "Configuração em 1 clique",
    },
    {
      icon: <Globe className="h-6 w-6 text-violet-600" />,
      title: "Sincronização Multi‑Calendário",
      description:
        "Conecte Google, Outlook e Apple Calendar sem problemas. Zero conflitos de agenda, garantido.",
      highlight: "3+ plataformas",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-violet-600" />,
      title: "Mobile First",
      description:
        "Agende, participe e gerencie reuniões em qualquer lugar com nossos aplicativos nativos iOS e Android.",
      highlight: "iOS & Android",
    },
    {
      icon: <Lock className="h-6 w-6 text-violet-600" />,
      title: "Segurança Empresarial",
      description:
        "Certificação SOC 2 Type II, criptografia ponta a ponta e SSO SAML mantêm seus dados seguros e em conformidade.",
      highlight: "Certificação SOC 2",
    },
    {
      icon: <div className="h-6 w-6 text-violet-600" />,
      title: "Análise de Equipe",
      description:
        "Veja como seu time usa o tempo e otimize a cultura de reuniões com insights acionáveis baseados em dados.",
      highlight: "Dashboards em tempo real",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Conecte Seus Calendários",
      description:
        "Vincule seu Google, Outlook ou Apple Calendar em dois cliques. O Agenda AI aprende instantaneamente seus padrões de disponibilidade.",
      icon: <CalendarDays className="h-8 w-8 text-white" />,
      color: "from-violet-500 to-purple-600",
    },
    {
      number: "02",
      title: "Defina Suas Preferências",
      description:
        "Defina horários ideais, intervalos de buffer, plataformas de vídeo favoritas e até seus ritmos pessoais de produtividade.",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "from-indigo-500 to-blue-600",
    },
    {
      number: "03",
      title: "Deixe a IA Trabalhar",
      description:
        'Basta digitar o que você precisa – "Agende uma reunião de 30 minutos com o time de design na próxima terça à tarde." Feito em segundos.',
      icon: <Sparkles className="h-8 w-8 text-white" />,
      color: "from-fuchsia-500 to-pink-600",
    },
  ];

  const testimonials = [
    {
      quote:
        "Agenda AI reduziu meu tempo de agendamento em 90%. Agora passo zero minutos jogando Tetris de calendário. É realmente libertador.",
      name: "Sarah Chen",
      role: "Líder de Produto, Acme Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Nossa equipe de vendas economizou 12 horas por semana desde que adotamos o Agenda AI. A integração com o CRM foi perfeita.",
      name: "Carlos Mendez",
      role: "Diretor de Vendas, TechNova",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "A funcionalidade de análise nos ajudou a identificar reuniões desnecessárias e recuperar 20% do nosso tempo produtivo.",
      name: "Emily Park",
      role: "COO, FinScale",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const pricing = [
    {
      name: "Starter",
      priceMonthly: 8,
      priceAnnual: 6,
      description: "Para profissionais que querem agilizar seu agendamento pessoal.",
      features: [
        "1 calendário conectado",
        "Agendamento inteligente básico",
        "Links de reunião instantâneos",
        "Aplicativo mobile",
        "Suporte por e‑mail",
      ],
      cta: "Começar Grátis",
      highlighted: false,
    },
    {
      name: "Pro",
      priceMonthly: 19,
      priceAnnual: 15,
      description: "Para equipes que precisam de coordenação e análises avançadas.",
      features: [
        "Calendários ilimitados",
        "Agendamento em grupo",
        "Análise da equipe",
        "Integrações com CRM e ferramentas",
        "Suporte prioritário",
      ],
      cta: "Teste Grátis",
      highlighted: true,
    },
    {
      name: "Enterprise",
      priceMonthly: 49,
      priceAnnual: 39,
      description: "Para organizações que exigem segurança e controle total.",
      features: [
        "Tudo do Pro",
        "SSO e SAML",
        "Trilha de auditoria",
        "API dedicada",
        "Gerente de sucesso do cliente",
      ],
      cta: "Falar com Vendas",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/30 to-slate-50">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-violet-900">Agenda AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">Recursos</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">Como Funciona</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">Depoimentos</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">Preços</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50">Entrar</Button>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Começar</Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#features" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>Recursos</a>
                <a href="#how-it-works" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
                <a href="#testimonials" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
                <a href="#pricing" className="text-lg font-medium text-gray-700 hover:text-violet-700" onClick={() => setMobileMenuOpen(false)}>Preços</a>
                <Button variant="outline" className="w-full mt-4">Entrar</Button>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Começar</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-indigo-600/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 px-3 py-1 text-sm">
                IA para Agendamento
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Agendamento <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">inteligente</span><br/>com o poder da IA
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Elimine a troca de e‑mails e encontre o horário perfeito automaticamente. Conecte seus calendários e deixe a IA fazer o trabalho pesado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Digite seu melhor e‑mail"
                    className="pl-10 h-12"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
                <Button className="h-12 px-8 bg-violet-600 hover:bg-violet-700 text-white gap-2">
                  Comece Agora <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> Teste grátis de 14 dias</span>
                <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> Sem cartão de crédito</span>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <Avatar key={i} className="border-2 border-white w-8 h-8">
                      <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=50&h=50&fit=crop&crop=face`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-violet-700">+2.500 empresas</span> já estão usando
                </div>
              </div>
            </div>

            {/* Hero visual: video thumbnail + chart */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-violet-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="Dashboard preview"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                  >
                    <Play className="h-8 w-8 text-violet-600 ml-1" />
                  </button>
                </div>
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4 text-violet-500" />
                  <span>Tempo médio de agendamento</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-1">24 seg</div>
                <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <ArrowRight className="h-3 w-3 rotate-180" /> 10x mais rápido
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by brands */}
      <section className="border-t border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center sm:justify-between flex-wrap gap-6">
          <p className="text-sm text-gray-500">Confiado por times inovadores em:</p>
          <div className="flex items-center gap-8 opacity-70">
            <span className="text-xl font-bold text-gray-400">Acme</span>
            <span className="text-xl font-bold text-gray-400">TechNova</span>
            <span className="text-xl font-bold text-gray-400">FinScale</span>
            <span className="text-xl font-bold text-gray-400">DataFlow</span>
            <span className="text-xl font-bold text-gray-400">PixelCorp</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">Recursos</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para agendar como um profissional
            </h2>
            <p className="text-lg text-gray-600">
              Deixe de perder tempo com logística e foque no que realmente importa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="border border-gray-200 hover:border-violet-200 transition-all duration-200 hover:shadow-md group">
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

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">Como Funciona</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Três passos para nunca mais perder uma reunião
            </h2>
            <p className="text-lg text-gray-600">
              Simplicidade que escala. Configure em menos de 2 minutos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6`}>
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

      {/* Social Proof / Testimonials */}
      <section id="testimonials" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">Depoimentos</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-lg text-gray-600">
              Junte-se a milhares de profissionais que já recuperaram seu tempo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">“{testimonial.quote}”</p>
                  <div className="flex items-center gap-3">
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
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Chart */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Resultados que falam por si
              </h2>
              <p className="text-lg text-violet-100 mb-8">
                Nossos clientes reportam uma redução de 90% no tempo gasto com agendamento e uma queda de 80% nos no‑shows.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">2,5x</p>
                  <p className="text-sm text-violet-200">mais reuniões agendadas</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-violet-200">de satisfação do cliente</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">12h</p>
                  <p className="text-sm text-violet-200">economizadas por semana</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold">10k+</p>
                  <p className="text-sm text-violet-200">usuários ativos</p>
                </div>
              </div>
            </div>
            <div className="h-80 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <StatsBarChart />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">Preços</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Planos que crescem com você
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Escolha o melhor plano para sua equipe. Todos incluem teste grátis de 14 dias.
            </p>

            <Tabs defaultValue="monthly" className="justify-center" onValueChange={setActivePricingTab}>
              <TabsList className="bg-gray-200 p-1">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-white">Mensal</TabsTrigger>
                <TabsTrigger value="annual" className="data-[state=active]:bg-white">Anual (-20%)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`relative border ${plan.highlighted ? 'border-violet-400 shadow-xl scale-105' : 'border-gray-200'} transition-all`}>
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Mais Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      R${activePricingTab === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                    </span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.highlighted ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'border-violet-300 text-violet-700 hover:bg-violet-50'}`} variant={plan.highlighted ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pronto para recuperar seu tempo?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Junte-se a mais de 10.000 profissionais que já transformaram a maneira de agendar reuniões.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Input placeholder="seu@email.com" className="h-12" />
            <Button className="h-12 px-8 bg-violet-600 hover:bg-violet-700 text-white">Comece de graça</Button>
          </div>
          <p className="text-xs text-gray-400 mt-4">Sem cartão de crédito necessário. Cancele a qualquer momento.</p>
        </div>
      </section>

      {/* Footer */}
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
              <p className="text-sm">
                Agendamento inteligente que respeita seu tempo.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div