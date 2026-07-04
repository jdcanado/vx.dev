import { Truck, ShieldCheck, Package, Clock, MapPin, Search, Check, User, Sheet, Menu, Badge, ArrowRight, Star } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';


const features = [
  {
    icon: <Truck className="h-10 w-10 text-blue-600" />,
    title: "Entrega Rápida",
    description: "Receba seus pacotes em até 24h em toda a cidade.",
    badge: "Novo",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Seguro e Confiável",
    description:
      "Todos os envios com seguro incluso e rastreamento em tempo real.",
  },
  {
    icon: <Package className="h-10 w-10 text-blue-600" />,
    title: "Embalagem Inteligente",
    description:
      "Serviço de embalagem profissional para itens frágeis e especiais.",
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "Agendamento Flexível",
    description: "Escolha o melhor horário para receber suas encomendas.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cadastre seu pedido",
    description: "Informe o endereço de coleta e entrega.",
    icon: <MapPin className="h-8 w-8" />,
  },
  {
    number: "02",
    title: "Escolha o tipo de entrega",
    description: "Selecione entrega expressa ou econômica.",
    icon: <Truck className="h-8 w-8" />,
  },
  {
    number: "03",
    title: "Acompanhe em tempo real",
    description: "Rastreie seu pacote pelo app ou site.",
    icon: <Search className="h-8 w-8" />,
  },
  {
    number: "04",
    title: "Receba com segurança",
    description: "Confirmação de entrega e avaliação do serviço.",
    icon: <Check className="h-8 w-8" />,
  },
];

const pricingPlans = [
  {
    name: "Básico",
    price: "R$9,90",
    period: "/mês",
    description: "Para envios ocasionais.",
    features: [
      "Até 5 entregas por mês",
      "Suporte por email",
      "Rastreamento básico",
    ],
    cta: "Assinar",
    popular: false,
  },
  {
    name: "Profissional",
    price: "R$29,90",
    period: "/mês",
    description: "Ideal para pequenos negócios.",
    features: [
      "Até 50 entregas por mês",
      "Suporte prioritário",
      "Rastreamento avançado",
      "Seguro grátis",
    ],
    cta: "Assinar",
    popular: true,
  },
  {
    name: "Empresarial",
    price: "R$99,90",
    period: "/mês",
    description: "Para grandes volumes.",
    features: [
      "Entregas ilimitadas",
      "Gerente de conta dedicado",
      "API de integração",
      "Seguro total",
      "Relatórios customizados",
    ],
    cta: "Fale Conosco",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Ana Silva",
    role: "Dona de loja online",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "A entrega mais rápida que já usei! Meus clientes adoram.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Empreendedor",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "O rastreamento em tempo real me dá tranquilidade total.",
    rating: 4,
  },
  {
    name: "Juliana Costa",
    role: "Artesã",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "Excelente cuidado com as embalagens, nada quebra.",
    rating: 5,
  },
  {
    name: "Ricardo Lima",
    role: "Gerente de e-commerce",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "Integramos via API e os processos ficaram muito mais ágeis.",
    rating: 5,
  },
];

const footerLinks = {
  Empresa: ["Sobre nós", "Carreiras", "Imprensa", "Blog"],
  Produto: ["Preços", "Aplicativo", "Integrações", "Status"],
  Recursos: ["Central de ajuda", "Contato", "Comunidade", "Desenvolvedores"],
};

export default function DeliveryLandingPage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">FastDelivery</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-6 md:flex">
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                Início
              </a>
              <a
                href="#features"
                className="text-sm font-medium hover:text-blue-600"
              >
                Funcionalidades
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium hover:text-blue-600"
              >
                Como funciona
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-blue-600"
              >
                Planos
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-blue-600"
              >
                Depoimentos
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Minha Conta
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Entrar</DropdownMenuItem>
                  <DropdownMenuItem>Cadastrar</DropdownMenuItem>
                  <DropdownMenuItem>Rastrear pedido</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-2">
                      <Package className="h-6 w-6 text-blue-600" />
                      <span>FastDelivery</span>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="mt-6 flex flex-col space-y-4">
                    <a
                      href="#"
                      className="text-sm font-medium hover:text-blue-600"
                    >
                      Início
                    </a>
                    <a
                      href="#features"
                      className="text-sm font-medium hover:text-blue-600"
                    >
                      Funcionalidades
                    </a>
                    <a
                      href="#how-it-works"
                      className="text-sm font-medium hover:text-blue-600"
                    >
                      Como funciona
                    </a>
                    <a
                      href="#pricing"
                      className="text-sm font-medium hover:text-blue-600"
                    >
                      Planos
                    </a>
                    <a
                      href="#testimonials"
                      className="text-sm font-medium hover:text-blue-600"
                    >
                      Depoimentos
                    </a>
                    <Separator />
                    <Button variant="outline" size="sm">
                      Entrar
                    </Button>
                    <Button size="sm">Cadastrar</Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4 text-sm">
                Entrega no mesmo dia disponível
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                Sua entrega,{" "}
                <span className="text-blue-600">mais rápida e segura</span>
              </h1>
              <p className="max-w-md text-lg text-gray-600">
                Entregamos seus pacotes com agilidade, rastreamento em tempo
                real e seguro incluso. A solução completa para suas necessidades
                de logística.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full">
                  Começar agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Ver planos
                </Button>
              </div>
              <div className="flex items-center space-x-2 pt-4 text-sm text-gray-500">
                <Check className="h-4 w-4 text-green-500" />
                <span>Sem taxas escondidas</span>
                <Check className="ml-4 h-4 w-4 text-green-500" />
                <span>Cancele a qualquer momento</span>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative h-72 w-full max-w-md rounded-xl bg-blue-100 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                  alt="Entregador sorrindo com caixa"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              {/* Floating tracking card */}
              <div className="absolute -bottom-6 left-4 rounded-lg border bg-white p-4 shadow-lg md:left-12">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pedido #12345</p>
                    <p className="text-xs text-gray-500">
                      Em trânsito • Chega hoje
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Por que escolher a FastDelivery?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tudo que você precisa para uma entrega perfeita.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="relative transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                      {feature.icon}
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      {feature.title}
                      {feature.badge && (
                        <Badge variant="secondary" className="ml-2">
                          {feature.badge}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Como funciona em 4 passos
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Simples, rápido e sem complicação.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-md">
                    {step.number}
                  </div>
                  <h3 className="mb-2 flex items-center justify-center text-xl font-semibold">
                    {step.icon && <span className="mr-2">{step.icon}</span>}
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Planos para todos os tamanhos
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Escolha o plano ideal para você ou sua empresa.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`relative flex flex-col transition-shadow hover:shadow-lg ${
                    plan.popular ? "border-blue-600 shadow-lg" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                        Mais popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-extrabold">
                        {plan.price}
                      </span>
                      <span className="ml-1 text-gray-500">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              * Preços podem variar conforme a região. Consulte nossos termos.
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section id="testimonials" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                O que nossos clientes dizem
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A satisfação é a nossa prioridade número um.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="mx-auto max-w-5xl"
            >
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem
                    key={idx}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="flex h-full flex-col">
                      <CardContent className="flex flex-1 flex-col justify-between pt-6">
                        <div>
                          <div className="mb-2 flex">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              )
                            )}
                          </div>
                          <p className="italic text-gray-600">
                            "{testimonial.quote}"
                          </p>
                        </div>
                        <div className="mt-4 flex items-center space-x-3 border-t pt-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-4 flex justify-center gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* FAQ / Accordion */}
        <section className="py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Perguntas frequentes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tire suas dúvidas sobre nosso serviço.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Como rastrear minha entrega?
                </AccordionTrigger>
                <AccordionContent>
                  Você pode rastrear pelo aplicativo ou site usando o código
                  enviado no seu e-mail após a confirmação do pedido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Quais áreas são atendidas?
                </AccordionTrigger>
                <AccordionContent>
                  Atendemos toda a região metropolitana e expandimos
                  constantemente para novas cidades.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  O que acontece se a entrega atrasar?
                </AccordionTrigger>
                <AccordionContent>
                  Se a entrega não ocorrer no prazo prometido, você recebe um
                  crédito automático na sua conta.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Posso agendar um horário específico?
                </AccordionTrigger>
                <AccordionContent>
                  Sim! Nos planos Profissional e Empresarial você escolhe a
                  janela de entrega que preferir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Como faço para me tornar um entregador?
                </AccordionTrigger>
                <AccordionContent>
                  Acesse a página "Carreiras" ou envie um email para
                  entregadores@fastdelivery.com com seus dados.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto flex flex-col items-center px-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Pronto para acelerar suas entregas?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-blue-100">
              Cadastre-se agora e ganhe 10% de desconto na primeira entrega.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Digite seu melhor e-mail"
                className="w-full rounded-full bg-white text-gray-800 placeholder-gray-400"
              />
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-white text-blue-600 hover:bg-blue-50"
              >
                Começar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-sm text-blue-200">
              Sem spam, apenas dicas e novidades.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-gray-100 py-12">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center space-x-2">
                <Package className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">FastDelivery</span>
              </div>
              <p className="text-sm text-gray-600">
                Entregando sonhos com segurança e agilidade desde 2020. Sua
                parceira de logística completa.
              </p>
              <div className="flex space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <div className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Twitter</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <div className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Facebook</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <div className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <div className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
              </div>
            </div>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-3 font-semibold">{category}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-blue-600 hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="container mx-auto mt-8 flex flex-col items-center justify-between space-y-4 border-t px-4 pt-8 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 FastDelivery. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600">
                Privacidade
              </a>
              <a href="#" className="hover:text-blue-600">
                Termos de uso
              </a>
              <a href="#" className="hover:text-blue-600">
                Cookies
              </a>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}