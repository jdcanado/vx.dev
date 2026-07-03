import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Sparkles, Badge, Calendar, Rocket, ArrowRight, X, Menu, BadgeCheck, Play, Star, Shield, Home, Zap, Phone, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';


function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Seg", agendamentos: 45 },
          { name: "Ter", agendamentos: 52 },
          { name: "Qua", agendamentos: 48 },
          { name: "Qui", agendamentos: 61 },
          { name: "Sex", agendamentos: 55 },
          { name: "Sáb", agendamentos: 38 },
          { name: "Dom", agendamentos: 20 },
        ]}
        keys={["agendamentos"]}
        indexBy="name"
        margin={{ top: 20, right: 20, bottom: 40, left: 45 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#6366f1"]}
        borderRadius={6}
        axisBottom={{
          tickSize: 0,
          tickPadding: 8,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickValues: 4,
        }}
        enableGridY={true}
        gridYValues={5}
        theme={{
          grid: {
            line: {
              stroke: "#e5e7eb",
              strokeWidth: 1,
            },
          },
        }}
        enableLabel={false}
      />
    </div>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Conversão",
            data: [
              { x: "Jan", y: 2.1 },
              { x: "Fev", y: 2.8 },
              { x: "Mar", y: 3.5 },
              { x: "Abr", y: 4.2 },
              { x: "Mai", y: 5.1 },
              { x: "Jun", y: 6.3 },
              { x: "Jul", y: 7.8 },
            ],
          },
          {
            id: "No-shows",
            data: [
              { x: "Jan", y: 8.5 },
              { x: "Fev", y: 7.2 },
              { x: "Mar", y: 6.1 },
              { x: "Abr", y: 5.0 },
              { x: "Mai", y: 4.0 },
              { x: "Jun", y: 3.2 },
              { x: "Jul", y: 2.5 },
            ],
          },
        ]}
        enableCrosshair={false}
        margin={{ top: 20, right: 30, bottom: 40, left: 45 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        colors={["#6366f1", "#f43f5e"]}
        curve="cardinal"
        enablePoints={true}
        pointSize={8}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enableGridX={false}
        enableGridY={true}
        gridYValues={6}
        theme={{
          grid: {
            line: {
              stroke: "#e5e7eb",
              strokeWidth: 1,
            },
          },
        }}
        axisBottom={{
          tickSize: 0,
          tickPadding: 8,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickValues: 5,
        }}
        legends={[
          {
            anchor: "top",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: -28,
            itemsSpacing: 16,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}

export default function AgenDAYLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 text-center text-sm font-medium">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="w-4 h-4" />
            <span>
              🎉 Lançamento especial:{" "}
              <strong>50% OFF no plano anual</strong> por tempo limitado!
            </span>
            <span className="hidden sm:inline">—</span>
            <span className="hidden sm:inline">
              Use o cupom <Badge className="bg-white text-indigo-600 hover:bg-white/90 ml-1 font-bold">LANÇAMENTO50</Badge>
            </span>
          </div>
        </div>

        {/* Header / Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-9 h-9 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">
                  Agen<span className="text-indigo-600">DAY</span>
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <a
                  href="#funcionalidades"
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Funcionalidades
                </a>
                <a
                  href="#planos"
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Planos
                </a>
                <a
                  href="#depoimentos"
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Depoimentos
                </a>
                <a
                  href="#faq"
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Blog
                </a>
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <Button variant="ghost" className="text-gray-700 font-medium">
                  Entrar
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2 shadow-lg shadow-indigo-200 transition-all hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5">
                      <Rocket className="w-4 h-4" />
                      Começar Grátis
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center">
                        Crie sua conta grátis 🚀
                      </DialogTitle>
                      <DialogDescription className="text-center text-gray-500">
                        Comece a receber agendamentos em menos de 2 minutos.
                        Sem cartão de crédito.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 mt-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome completo</Label>
                        <Input id="nome" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-signup">E-mail</Label>
                        <Input
                          id="email-signup"
                          type="email"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">WhatsApp</Label>
                        <Input id="telefone" placeholder="(11) 99999-9999" />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2"
                      >
                        Criar conta gratuita
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                      <p className="text-xs text-center text-gray-400 mt-2">
                        Ao criar uma conta, você concorda com nossos{" "}
                        <a href="#" className="text-indigo-600 underline">
                          Termos de Uso
                        </a>{" "}
                        e{" "}
                        <a href="#" className="text-indigo-600 underline">
                          Política de Privacidade
                        </a>
                        .
                      </p>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
                <nav className="flex flex-col gap-3">
                  <a
                    href="#funcionalidades"
                    className="text-sm font-medium text-gray-600 hover:text-indigo-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Funcionalidades
                  </a>
                  <a
                    href="#planos"
                    className="text-sm font-medium text-gray-600 hover:text-indigo-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Planos
                  </a>
                  <a
                    href="#depoimentos"
                    className="text-sm font-medium text-gray-600 hover:text-indigo-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Depoimentos
                  </a>
                  <a
                    href="#faq"
                    className="text-sm font-medium text-gray-600 hover:text-indigo-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                  <div className="flex flex-col gap-2 pt-2">
                    <Button variant="ghost" className="justify-start">
                      Entrar
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2 w-full">
                          <Rocket className="w-4 h-4" />
                          Começar Grátis
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-center">
                            Crie sua conta grátis 🚀
                          </DialogTitle>
                          <DialogDescription className="text-center text-gray-500">
                            Comece a receber agendamentos em menos de 2 minutos.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome-mobile">Nome completo</Label>
                            <Input id="nome-mobile" placeholder="Seu nome" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email-mobile">E-mail</Label>
                            <Input
                              id="email-mobile"
                              type="email"
                              placeholder="seu@email.com"
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2"
                          >
                            Criar conta gratuita
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-20 lg:pt-24 lg:pb-32">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 -translate-x-1/2 translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6 shadow-sm">
                  <BadgeCheck className="w-4 h-4 text-indigo-500" />
                  +10.000 empresas já confiam na AgenDAY
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  Agendamento online que{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    converte
                  </span>{" "}
                  em vendas
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A plataforma de agendamento inteligente que aumenta sua taxa
                  de conversão em até <strong className="text-indigo-600">40%</strong>.
                  Automatize reservas, reduza no-shows e venda mais — tudo em um só lugar.
                </p>

                {/* Hero CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-8 py-6 gap-2 shadow-xl shadow-indigo-200 transition-all hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-0.5 rounded-xl">
                        <Rocket className="w-5 h-5" />
                        Começar Grátis Agora
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center">
                          Crie sua conta grátis 🚀
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-500">
                          Sem compromisso. Cancele quando quiser.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome-hero">Nome completo</Label>
                          <Input id="nome-hero" placeholder="Seu nome" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-hero">E-mail profissional</Label>
                          <Input
                            id="email-hero"
                            type="email"
                            placeholder="seu@empresa.com"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2"
                        >
                          Criar conta gratuita
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    className="font-semibold gap-2 border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600 rounded-xl px-6 py-6"
                  >
                    <Play className="w-5 h-5 fill-indigo-600 text-indigo-600" />
                    Ver demonstração
                  </Button>
                </div>

                {/* Social Proof */}
                <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                      ].map((src, i) => (
                        <Avatar key={i} className="border-2 border-white w-9 h-9">
                          <AvatarImage src={src} />
                          <AvatarFallback>U{i + 1}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 font-medium">
                        4.9/5 de 2.000+ avaliações
                      </span>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="h-8 hidden sm:block" />
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Dados seguros • LGPD</span>
                  </div>
                </div>
              </div>

              {/* Hero Image / Dashboard Preview */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/50 border border-gray-100 bg-white">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-gray-400 ml-2 font-mono">
                      dashboard.agenday.com
                    </span>
                  </div>
                  <div className="p-4 sm:p-6">
                    {/* Mini Dashboard */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        {
                          label: "Agendamentos",
                          value: "1.247",
                          icon: Calendar,
                          color: "text-indigo-600",
                          bg: "bg-indigo-50",
                        },
                        {
                          label: "Conversão",
                          value: "38,5%",
                          icon: TrendingUp,
                          color: "text-emerald-600",
                          bg: "bg-emerald-50",
                        },
                        {
                          label: "Receita",
                          value: "R$ 52k",
                          icon: CreditCard,
                          color: "text-amber-600",
                          bg: "bg-amber-50",
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className={`${stat.bg} rounded-xl p-3 text-center`}
                        >
                          <stat.icon
                            className={`w-5 h-5 ${stat.color} mx-auto mb-1`}
                          />
                          <p className="text-lg font-bold text-gray-900">
                            {stat.value}
                          </p>
                          <p className="text-[10px] text-gray-500">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="aspect-[16/10]">
                      <BarChart />
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3 animate-bounce-slow">
                  <div className="bg-green-100 rounded-full p-2">
                    <div className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Último agendamento</p>
                    <p className="text-sm font-bold text-gray-900">
                      há 2 minutos
                    </p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Setup em</p>
                    <p className="text-sm font-bold text-gray-900">
                      menos de 2 min
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By / Logos */}
        <section className="py-12 border-y border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-medium text-gray-500 mb-8">
              Empresas que confiam e crescem com a AgenDAY
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {[
                { name: "Clínica Saúde+", color: "bg-emerald-100" },
                { name: "Studio FitPro", color: "bg-blue-100" },
                { name: "Beauty & Co", color: "bg-pink-100" },
                { name: "Consult RH", color: "bg-purple-100" },
                { name: "PetCare VIP", color: "bg-amber-100" },
              ].map((company, i) => (
                <div
                  key={i}
                  className={`${company.color} rounded-lg px-4 py-3 text-center`}
                >
                  <span className="text-sm font-bold text-gray-700">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Benefícios */}
        <section id="funcionalidades" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 px-4 py-1.5 text-sm font-semibold rounded-full mb-4">
                Funcionalidades Poderosas
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Tudo que você precisa para{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  vender mais
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Ferramentas inteligentes que automatizam seu processo de
                agendamento e aumentam sua taxa de conversão.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Agendamento Inteligente",
                  description:
                    "Seu cliente escolhe o melhor horário em segundos. Sincronização automática com Google Calendar e Outlook.",
                  color: "bg-indigo-100",
                  iconColor: "text-indigo-600",
                },
                {
                  icon: Bell,
                  title: "Lembretes Automáticos",
                  description:
                    "Reduza no-shows em até 75% com lembretes por WhatsApp, SMS e e-mail. Confirmação com 1 clique.",
                  color: "bg-amber-100",
                  iconColor: "text-amber-600",
                },
                {
                  icon: CreditCard,
                  title: "Pagamento Integrado",
                  description:
                    "Aceite pagamentos via PIX, cartão de crédito ou boleto no ato do agendamento. Antecipe sua receita.",
                  color: "bg-emerald-100",
                  iconColor: "text-emerald-600",
                },
                {
                  icon: BarChart3,
                  title: "Dashboard de Vendas",
                  description:
                    "Acompanhe métricas de conversão, receita e ocupação em tempo real. Tome decisões baseadas em dados.",
                  color: "bg-purple-100",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Smartphone,
                  title: "100% Responsivo",
                  description:
                    "Experiência perfeita em qualquer dispositivo. Seus clientes agendam de onde estiverem, quando quiserem.",
                  color: "bg-cyan-100",
                  iconColor: "text-cyan-600",
                },
                {
                  icon: Globe,
                  title: "Página de Agendamento",
                  description:
                    "Link personalizado com sua marca. Compartilhe nas redes sociais, WhatsApp ou incorpore no seu site.",
                  color: "bg-rose-100",
                  iconColor: "text-rose-600",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="group border border-gray-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-3">
                    <div
                      className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${feature.iconColor}`}
                      />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona / Steps */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1.5 text-sm font-semibold rounded-full mb-4">
                Simples e Rápido
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Em apenas{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  3 passos
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Configure sua conta em menos de 2 minutos e comece a receber
                agendamentos hoje mesmo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300" />

              {[
                {
                  step: "01",
                  icon: User,
                  title: "Crie sua conta",
                  description:
                    "Cadastro rápido e gratuito. Conecte seu Google ou crie com e-mail e senha em segundos.",
                },
                {
                  step: "02",
                  icon: Clock,
                  title: "Configure seus horários",
                  description:
                    "Defina seus serviços, horários disponíveis e valores. Interface intuitiva e simplificada.",
                },
                {
                  step: "03",
                  icon: TrendingUp,
                  title: "Compartilhe e venda",
                  description:
                    "Divulgue seu link de agendamento e comece a receber reservas com pagamento integrado.",
                },
              ].map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-20 h-20 bg-white border-4 border-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-extrabold text-indigo-600">
                      {step.step}
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estatísticas + Gráficos */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 px-4 py-1.5 text-sm font-semibold rounded-full mb-4">
                  Resultados Comprovados
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Seus concorrentes já estão usando.{" "}
                  <span className="text-indigo-600">E você?</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Empresas que usam a AgenDAY aumentam sua taxa de conversão em
                  até <strong className="text-indigo-600 font-bold">40%</strong>{" "}
                  e reduzem no-shows em{" "}
                  <strong className="text-indigo-600 font-bold">75%</strong>.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: "40%", label: "Aumento na conversão", icon: TrendingUp },
                    { value: "75%", label: "Redução de no-shows", icon: Shield },
                    { value: "2min", label: "Para configurar tudo", icon: Zap },
                    { value: "98%", label: "Satisfação dos clientes", icon: Heart },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-xl p-4 flex items-start gap-3"
                    >
                      <div className="bg-white rounded-lg p-2 shadow-sm">
                        <stat.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold text-gray-900">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">
                    Evolução da Conversão
                  </h3>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                    +285% em 7 meses
                  </Badge>
                </div>
                <div className="aspect-[4/3]">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planos / Pricing */}
        <section id="planos" className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 px-4 py-1.5 text-sm font-semibold rounded-full mb-4">
                Planos e Preços
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Invista no crescimento do{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  seu negócio
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Escolha o plano ideal para o seu momento. Todos incluem 14 dias
                de teste grátis.
              </p>
            </div>

            <Tabs defaultValue="mensal" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
                  <TabsTrigger
                    value="mensal"
                    className="rounded-lg px-6 py-2 text-sm font-semibold data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                  >
                    Pagamento Mensal
                  </TabsTrigger>
                  <TabsTrigger
                    value="anual"
                    className="rounded-lg px-6 py-2 text-sm font-semibold data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                  >
                    Pagamento Anual
                    <Badge className="ml-2 bg-emerald-100 text-emerald-700 text-xs">
                      -50%
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>

              {["mensal", "anual"].map((periodo) => (
                <TabsContent key={periodo} value={periodo}>
                  <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                      {
                        nome: "Starter",
                        descricao: "Para quem está começando",
                        preco: periodo === "mensal" ? "R$ 49" : "R$ 24",
                        destaque: false,
                        recursos: [
                          "Até 50 agendamentos/mês",
                          "1 usuário",
                          "Lembretes por e-mail",
                          "Página de agendamento",
                          "Integração Google Calendar",
                          "Suporte por chat",
                        ],
                        cta: "Começar Grátis",
                      },
                      {
                        nome: "Pro",
                        descricao: "Para profissionais estabelecidos",
                        preco: periodo === "mensal" ? "R$ 99" : "R$ 49",
                        destaque: true,
                        recursos: [
                          "Agendamentos ilimitados",
                          "Até 5 usuários",
                          "Lembretes WhatsApp + SMS + E-mail",
                          "Pagamentos integrados (PIX/Cartão)",
                          "Dashboard de analytics",
                          "Personalização completa",
                          "API de integração",
                          "Suporte prioritário",
                        ],
                        cta: "Começar Grátis",
                      },
                      {
                        nome: "Enterprise",
                        descricao: "Para equipes e franquias",
                        preco: periodo === "mensal" ? "R$ 199" : "R$ 99",
                        destaque: false,
                        recursos: [
                          "Tudo do plano Pro",
                          "Usuários ilimitados",
                          "Múltiplas unidades",
                          "Relatórios avançados",
                          "White label",
                          "Onboarding dedicado",
                          "SLA 99,9%",
                          "Gerente de conta",
                        ],
                        cta: "Falar com Vendas",
                      },
                    ].map((plano, i) => (
                      <Card
                        key={i}
                        className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                          plano.destaque
                            ? "border-2 border-indigo-500 shadow-2xl shadow-indigo-100 scale-[1.03] z-10"
                            : "border border-gray-200 hover:shadow-xl hover:border-indigo-200"
                        }`}
                      >
                        {plano.destaque && (
                          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
                            ⭐ Mais Popular
                          </div>
                        )}
                        <CardHeader className="text-center pt-8 pb-4">
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {plano.nome}
                          </CardTitle>
                          <CardDescription className="text-gray-500 mt-1">
                            {plano.descricao}
                          </CardDescription>
                          <div className="mt-4">
                            <span className="text-5xl font-extrabold text-gray-900">
                              {plano.preco}
                            </span>
                            <span className="text-gray-400 text-sm">
                              /mês
                            </span>
                          </div>
                          {periodo === "anual" && (
                            <Badge className="mt-2 bg-emerald-100 text-emerald-700">
                              Economize 50%
                            </Badge>
                          )}
                        </CardHeader>
                        <CardContent className="pb-6">
                          <ul className="space-y-3">
                            {plano.recursos.map((recurso, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <div className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                {recurso}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="pb-8 px-6">
                          <Button
                            className={`w-full font-bold rounded-xl ${
                              plano.destaque
                                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200"
                                : "border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
                            }`}
                            variant={plano.destaque ? "default" : "outline"}
                          >
                            {plano.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100 px-4 py-1.5 text-sm font-semibold rounded-full mb-4">
                Depoimentos
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Quem usa,{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  recomenda
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Veja o que nossos clientes estão dizendo sobre a transformação
                que a AgenDAY trouxe para seus negócios.
              </p>
            </div>

            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {[
                  {
                    nome: "Ana Silva",
                    cargo: "CEO, Clínica Saúde+",
                    avatar:
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                    texto:
                      "Desde que implementamos a AgenDAY, nossa taxa de conversão aumentou 45%. O sistema de lembretes automáticos reduziu drasticamente os no-shows. Recomendo demais!",
                    estrelas: 5,
                  },
                  {
                    nome: "Carlos Oliveira",
                    cargo: "Diretor, Studio FitPro",
                    avatar:
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                    texto:
                      "A integração com pagamentos mudou nosso jogo. Agora recebemos no ato do agendamento. Nossa receita aumentou 60% em apenas 3 meses usando a plataforma.",
                    estrelas: 5,
                  },
                  {
                    nome: "Mariana Costa",
                    cargo: "Fundadora, Beauty & Co",
                    avatar:
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                    texto:
                      "O dashboard de analytics me ajuda a tomar decisões estratégicas. Consigo ver exatamente quais serviços vendem mais e em quais horários. Ferramenta essencial!",
                    estrelas: 5,
                  },
                  {
                    nome: "Rafael Mendes",
                    cargo: "Gerente, PetCare VIP",
                    avatar:
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
                    texto:
                      "A facilidade de uso é impressionante. Meus clientes adoram a experiência de agendamento e eu amo a praticidade. Suporte nota 10!",
                    estrelas: 5,
                  },
                  {
                    nome: "Juliana Ferreira",
                    cargo: "Psicóloga Autônoma",
                    avatar:
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
                    texto:
                      "Como autônoma, a AgenDAY me ajudou a profissionalizar meu atendimento. A página de agendamento personalizada passa muita credibilidade para meus pacientes.",
                    estrelas: 5,
                  },
                ].map((depoimento, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all rounded-2xl">
                      <CardHeader>
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: depoimento.estrelas }).map(
                            (_, j) => (
                              <Star
                                key={j}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            )
                          )}
                        </div>
                        <CardDescription className="text-gray-700 leading-relaxed text-sm italic">
                          "{depoimento.texto}"
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={depoimento.avatar} />
                            <AvatarFallback>
                              {depoimento.nome
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">
                              {depoimento.nome}
                            </p>
                            <p className="text-xs text-gray-500">
                              {depoimento.cargo}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative static rounded-full border-2 border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 w-12 h-12" />
                <CarouselNext className="relative static rounded-full border-2 border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 w-12 h-12" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Garantia + CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Satisfação garantida ou seu dinheiro de volta
              </h2>
              <p className="mt-4 text-lg text-indigo-100 leading-relaxed">
                Oferecemos 30 dias de garantia incondicional. Se não estiver
                satisfeito, devolvemos 100% do seu investimento. Sem perguntas,
                sem burocracia.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-lg px-10 py-6 rounded-xl shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 gap-2">
                      <Rocket className="w-5 h-5" />
                      Quero Começar Agora
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center">
                        Comece seu teste grátis 🚀
                      </DialogTitle>
                      <DialogDescription className="text-center text-gray-500">
                        14 dias grátis. Sem cartão de crédito.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome-garantia">Nome completo</Label>
                        <Input id="nome-garantia" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-garantia">E-mail</Label>
                        <Input
                          id="email-garantia"
                          type="email"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2"
                      >
                        Iniciar teste grátis
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl px-8 py-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Consultor
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 px-4 py-1.5 text-sm font-semibold rounded-full mb-4">
                Dúvidas Frequentes
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Perguntas que todo mundo faz
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Respostas rápidas para suas principais dúvidas sobre a AgenDAY.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  pergunta: "Quanto tempo leva para configurar a AgenDAY?",
                  resposta:
                    "A configuração inicial leva menos de 2 minutos. Basta criar sua conta, definir seus serviços e horários disponíveis, e seu link de agendamento estará pronto para compartilhar. Nosso assistente de onboarding guia você em cada etapa.",
                },
                {
                  pergunta: "Preciso de cartão de crédito para testar?",
                  resposta:
                    "Não! Oferecemos 14 dias de teste totalmente gratuito em qualquer plano, sem necessidade de cartão de crédito. Você só escolhe um plano pago quando decidir que a AgenDAY é a solução ideal para o seu negócio.",
                },
                {
                  pergunta: "Como funcionam os lembretes automáticos?",
                  resposta:
                    "A AgenDAY envia lembretes automáticos por WhatsApp, SMS e/ou e-mail para seus clientes antes dos agendamentos. Você pode configurar o intervalo dos lembretes (1 hora, 24 horas, etc.) e personalizar as mensagens. Isso reduz no-shows em até 75%.",
                },
                {
                  pergunta: "A plataforma integra com outros sistemas?",
                  resposta:
                    "Sim! A AgenDAY integra nativamente com Google Calendar e Outlook. No plano Pro e Enterprise, você tem acesso à nossa API para integrações personalizadas com CRMs, ERPs e outras ferramentas que sua empresa utiliza.",
                },
                {
                  pergunta: "Como funcionam os pagamentos integrados?",
                  resposta:
                    "Você pode habilitar pagamentos via PIX ou cartão de crédito no ato do agendamento. O cliente paga para confirmar a reserva, reduzindo no-shows e antecipando sua receita. Os valores são depositados diretamente na sua conta em até 2 dias úteis.",
                },
                {
                  pergunta: "Posso personalizar a página de agendamento?",
                  resposta:
                    "Com certeza! Você pode adicionar seu logo, cores da marca, foto de capa e até um domínio personalizado (no plano Pro). A página de agendamento fica com a cara do seu negócio, transmitindo profissionalismo e credibilidade.",
                },
                {
                  pergunta: "A AgenDAY funciona no celular?",
                  resposta:
                    "Sim, a plataforma é 100% responsiva. Tanto a página de agendamento quanto o painel administrativo funcionam perfeitamente em smartphones, tablets e desktops. Seus clientes podem agendar de qualquer dispositivo.",
                },
                {
                  pergunta: "Tem limite de agendamentos?",
                  resposta:
                    "O plano Starter tem limite de 50 agendamentos por mês. Os planos Pro e Enterprise oferecem agendamentos ilimitados. Se você precisar de mais agendamentos no plano Starter, pode fazer upgrade a qualquer momento.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-gray-200 rounded-xl px-4 data-[state=open]:border-indigo-200 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-indigo-600 text-base py-5">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-indigo-100 p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
                  <Gift className="w-4 h-4" />
                  Oferta de Lançamento
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Pronto para{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    transformar
                  </span>{" "}
                  seus agendamentos em vendas?
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Junte-se a mais de 10.000 empresas que já estão crescendo com
                  a AgenDAY. Comece seu teste grátis hoje e veja a diferença em
                  menos de 24 horas.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    className="h-12 rounded-xl text-base flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 h-12 rounded-xl shadow-lg shadow-indigo-200 gap-2 text-base"
                      >
                        Começar Grátis
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center">
                          Bem-vindo à AgenDAY! 🎉
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-500">
                          Seu teste grátis de 14 dias começa agora.
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-4 mt-4"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="nome-final">Nome completo</Label>
                          <Input id="nome-final" placeholder="Seu nome" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-final">E-mail</Label>
                          <Input
                            id="email-final"
                            type="email"
                            placeholder="seu@email.com"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-2"
                        >
                          Criar conta gratuita
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </form>
                <p className="mt-4 text-xs text-gray-400">
                  Sem compromisso. Cancele quando quiser. Não pedimos cartão de
                  crédito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-xl text-white">
                    Agen<span className="text-indigo-400">DAY</span>
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                  A plataforma de agendamento online que transforma visitantes
                  em clientes. Automatize, converta e cresça com a AgenDAY.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Youtube, href: "#" },
                    { icon: Twitter, href: "#" },
                  ].map((social, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <a
                          href={social.href}
                          className="bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                          aria-label={`Siga-nos no ${social.icon.name}`}
                        >
                          <social.icon className="w-4 h-4" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Siga-nos</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  Produto
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {[
                    "Funcionalidades",
                    "Planos e Preços",
                    "Integrações",
                    "API",
                    "Calculadora de ROI",
                    "Novidades",
                  ].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  Empresa
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {[
                    "Sobre nós",
                    "Blog",
                    "Cases de Sucesso",
                    "Carreiras",
                    "Imprensa",
                    "Contato",
                  ].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  Suporte
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {[
                    "Central de Ajuda",
                    "Documentação",
                    "Status do Sistema",
                    "Comunidade",
                    "Parceiros",
                    "Afiliados",
                  ].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="bg-gray-800 mb-8" />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} AgenDAY. Todos os direitos
                reservados.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LGPD
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}