import { ResponsiveLine } from '@nivo/line';
import { Calendar, Badge, Mail, ArrowRight, Zap, Users, Home, Star, Check, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';


function GrowthChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveLine
        data={[
          {
            id: "usuários",
            data: [
              { x: "Jan", y: 120 },
              { x: "Fev", y: 250 },
              { x: "Mar", y: 400 },
              { x: "Abr", y: 650 },
              { x: "Mai", y: 980 },
              { x: "Jun", y: 1450 },
            ],
          },
          {
            id: "horas economizadas",
            data: [
              { x: "Jan", y: 80 },
              { x: "Fev", y: 170 },
              { x: "Mar", y: 300 },
              { x: "Abr", y: 480 },
              { x: "Mai", y: 720 },
              { x: "Jun", y: 1100 },
            ],
          },
        ]}
        enableCrosshair={false}
        margin={{ top: 30, right: 50, bottom: 40, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 0, max: "auto" }}
        axisBottom={{ tickSize: 0 }}
        axisLeft={{ tickSize: 0 }}
        colors={["#8b5cf6", "#06b6d4"]}
        pointSize={8}
        pointColor="#ffffff"
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enableGridX={false}
        enableGridY={false}
        legends={[
          {
            anchor: "top",
            direction: "row",
            justify: false,
            translateX: -20,
            translateY: -20,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 120,
            itemHeight: 20,
            symbolSize: 10,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-violet-600" />
            <span className="text-xl font-bold text-slate-900">Agenda AI</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#recursos" className="hover:text-violet-600 transition-colors">
              Recursos
            </a>
            <a href="#planos" className="hover:text-violet-600 transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="hover:text-violet-600 transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-violet-600 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
              Testar grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 max-w-xl">
          <Badge variant="secondary" className="text-violet-700 bg-violet-50 px-3 py-1">
            🚀 Lançamento oficial
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Sua agenda inteligente com{" "}
            <span className="text-violet-600">IA preditiva</span>
          </h1>
          <p className="text-lg text-slate-600">
            Organize compromissos, otimize horários e economize até 10h por semana com
            sugestões automáticas da nossa inteligência artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Seu melhor e-mail"
                className="pl-10"
                type="email"
              />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 whitespace-nowrap">
              Começar agora <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
            <span>+2.500 pessoas já usam</span>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-1 shadow-2xl shadow-violet-200">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="p-4 bg-slate-50 border-b flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Terça, 15 Out</span>
                  <Badge variant="secondary" className="bg-violet-50 text-violet-700">
                    6 compromissos
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="bg-violet-50 p-3 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                    <div>
                      <p className="text-sm font-medium">Reunião de alinhamento</p>
                      <p className="text-xs text-slate-500">09:00 - 10:00</p>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <div>
                      <p className="text-sm font-medium">Revisão de projeto</p>
                      <p className="text-xs text-slate-500">11:00 - 12:00</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-sm font-medium">Almoço com cliente</p>
                      <p className="text-xs text-slate-500">12:30 - 14:00</p>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-3 flex justify-between items-center text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3" /> IA sugeriu 2 otimizações
                  </div>
                  <Button size="sm" variant="outline">
                    Ver sugestões
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / logos */}
      <section className="container mx-auto px-4 py-12 border-t border-slate-100">
        <p className="text-center text-sm text-slate-500 mb-6">
          Usado por equipes inovadoras em todo o mundo
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <span className="text-slate-400 font-bold text-lg">TechCorp</span>
          <span className="text-slate-400 font-bold text-lg">InovaX</span>
          <span className="text-slate-400 font-bold text-lg">CloudNet</span>
          <span className="text-slate-400 font-bold text-lg">DataFlow</span>
          <span className="text-slate-400 font-bold text-lg">NextGen</span>
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-violet-700 bg-violet-50 px-3 py-1 mb-4">
            Recursos principais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Tudo que você precisa para dominar sua agenda
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Combinamos inteligência artificial com design intuitivo para oferecer a experiência mais produtiva.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="group hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center mb-3 group-hover:bg-violet-200 transition-colors">
                <Zap className="w-6 h-6 text-violet-600" />
              </div>
              <CardTitle>Priorização automática</CardTitle>
              <CardDescription>
                A IA analisa seus padrões e reorganiza tarefas por importância e urgência.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-3 group-hover:bg-indigo-200 transition-colors">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle>Integração de equipe</CardTitle>
              <CardDescription>
                Compartilhe agendas, defina horários em grupo e evite conflitos com um clique.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-3 group-hover:bg-emerald-200 transition-colors">
                <div className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle>Insights de produtividade</CardTitle>
              <CardDescription>
                Relatórios semanais mostram onde você mais gasta tempo e como melhorar.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats / Growth visualization */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-4">
              <Badge className="bg-white/20 text-white">+320% em 6 meses</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Nosso crescimento diz tudo
              </h2>
              <p className="text-white/80">
                Em apenas meio ano, ajudamos mais de 2.500 profissionais a recuperar
                horas preciosas do seu dia.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-white/70">satisfação</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">10h</p>
                  <p className="text-sm text-white/70">economizadas/semana</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">+50</p>
                  <p className="text-sm text-white/70">integrações</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-white/70">suporte</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <GrowthChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-violet-700 bg-violet-50 px-3 py-1 mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Amado por profissionais de todas as áreas
          </h2>
        </div>
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-white rounded-xl border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Mariana Costa</p>
                    <p className="text-sm text-slate-500">CEO da InovaX</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <blockquote className="text-slate-600">
                  "Antes eu perdia horas reorganizando a agenda. Agora a Agenda AI faz isso
                  por mim enquanto tomo café. Minha equipe está mais alinhada do que nunca."
                </blockquote>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-white rounded-xl border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">João Pedro Silva</p>
                    <p className="text-sm text-slate-500">Engenheiro de Software</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <blockquote className="text-slate-600">
                  "A sugestão automática de horários baseada na minha energia diária mudou
                  minha produtividade. Recomendo para todos que têm rotina dinâmica."
                </blockquote>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-white rounded-xl border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop" />
                    <AvatarFallback>AF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ana Freitas</p>
                    <p className="text-sm text-slate-500">Consultora Financeira</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <blockquote className="text-slate-600">
                  "Consegui reduzir meus conflitos de horário em 80%! A interface é linda e
                  o suporte é incrível. Vale cada centavo."
                </blockquote>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Pricing */}
      <section id="planos" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-violet-700 bg-violet-50 px-3 py-1 mb-4">
            Planos flexíveis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Escolha o plano ideal para você
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Sem contratos longos. Cancele quando quiser. Comece com 14 dias grátis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="relative border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Inicial</CardTitle>
              <CardDescription>Para começar a se organizar</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold text-slate-900">R$39</span>
                <span className="text-slate-500">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Agenda pessoal ilimitada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Sugestões de horário</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Lembretes inteligentes</span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Começar grátis
              </Button>
            </CardContent>
          </Card>
          <Card className="relative border-2 border-violet-500 shadow-lg scale-105 transform">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-violet-600 text-white">Mais popular</Badge>
            </div>
            <CardHeader>
              <CardTitle>Profissional</CardTitle>
              <CardDescription>Recursos avançados de produtividade</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold text-slate-900">R$79</span>
                <span className="text-slate-500">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Tudo do Inicial +</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">IA preditiva de tarefas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Integração com equipe (até 5)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Relatórios de produtividade</span>
              </div>
              <Button className="w-full mt-4 bg-violet-600 hover:bg-violet-700">
                Testar 14 dias grátis
              </Button>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Empresarial</CardTitle>
              <CardDescription>Para times de alto desempenho</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold text-slate-900">R$149</span>
                <span className="text-slate-500">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Tudo do Profissional +</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Equipe ilimitada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">API e webhooks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-sm">Suporte prioritário</span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Falar com vendas
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-violet-700 bg-violet-50 px-3 py-1 mb-4">
            Dúvidas frequentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Tudo o que você precisa saber
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Como a IA sugere horários?</AccordionTrigger>
            <AccordionContent>
              Nossa IA analisa sua rotina, preferências de horário, níveis de energia e até o trânsito para sugerir os melhores momentos para cada atividade. Ela aprende com suas escolhas e fica cada vez mais precisa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Posso integrar com Google/Outlook?</AccordionTrigger>
            <AccordionContent>
              Sim! A Agenda AI conecta-se nativamente com Google Calendar, Outlook e Apple iCal. Basta autorizar a sincronização e seus compromissos aparecem automaticamente na plataforma.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Qual a política de privacidade?</AccordionTrigger>
            <AccordionContent>
              Levamos a privacidade a sério. Todos os dados são criptografados em trânsito e em repouso. Não compartilhamos suas informações com terceiros. A IA processa seus dados apenas para melhorar sua experiência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Existe versão para dispositivos móveis?</AccordionTrigger>
            <AccordionContent>
              Sim, o aplicativo está disponível para iOS e Android. Você pode baixar gratuitamente e acessar sua agenda de qualquer lugar, com todas as funcionalidades da versão web.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Posso cancelar a qualquer momento?</AccordionTrigger>
            <AccordionContent>
              Com certeza. Sem multas ou taxas escondidas. Você pode cancelar sua assinatura com apenas um clique na seção de configurações da sua conta.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <Badge className="bg-white/20 text-white mb-4">Última chance</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua produtividade?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Junte-se a milhares de profissionais que já recuperaram horas do seu dia. Comece agora gratuitamente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <div className="relative flex-1 max-w-md mx-auto">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input
                placeholder="Digite seu e-mail"
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                type="email"
              />
            </div>
            <Button className="bg-white text-violet-700 hover:bg-violet-50 font-semibold">
              Quero começar agora <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-white/60 mt-4">
            Sem necessidade de cartão de crédito. Teste grátis de 14 dias.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-violet-400" />
                <span className="font-bold text-lg">Agenda AI</span>
              </div>
              <p className="text-slate-400 text-sm">
                Inteligência artificial para sua rotina.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Produto</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Atualizações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Empresa</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenças</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-700 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Agenda AI. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}