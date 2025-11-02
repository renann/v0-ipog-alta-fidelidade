"use client"

import { Header } from "@/components/header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

export default function FAQPage() {
  const router = useRouter()

  const breadcrumbItems = [{ label: "Início", href: "/" }, { label: "Perguntas Frequentes" }]

  const faqCategories = [
    {
      category: "Geral",
      items: [
        {
          question: "Qual o diferencial do IPOG em relação a outras instituições com valores mais baixos?",
          answer:
            "O IPOG se posiciona como uma Smart Choice: um investimento estratégico para quem busca ensino de excelência com resultados reais. Nosso valor se traduz em um corpo docente formado por mestres, doutores e, principalmente, por profissionais que já chegaram lá. Em vez de apenas reproduzir conteúdo, nós convergimos teorias e ferramentas numa metodologia simples, prática e extremamente efetiva, com material autoral e exclusivo. Em resumo, oferecemos uma experiência premium que garante um retorno superior para sua carreira, algo que instituições de menor valor simplesmente não conseguem entregar.",
        },
        {
          question: "Quem são os professores do IPOG?",
          answer:
            "Nosso corpo docente é o pilar da nossa excelência e nosso maior diferencial. Ele é formado por profissionais que já chegaram lá: mestres e doutores que unem teoria, prática e uma visão de mercado atualizada. São eles que criam nosso conteúdo autoral e exclusivo, garantindo que você aprenda com quem atua nas maiores empresas do país e está na vanguarda de sua área.",
        },
      ],
    },
    {
      category: "Cursos e Metodologia",
      items: [
        {
          question: "O conhecimento adquirido nos cursos pode ser aplicado de forma imediata na minha carreira?",
          answer:
            "Sim. Nosso compromisso com a aplicabilidade imediata é um pilar da nossa metodologia, resumido em nosso lema: Estuda hoje. Aplica amanhã. Desenvolvemos uma metodologia prática e interativa, com estudos de caso e workshops que conectam o aprendizado diretamente às exigências do mercado. Aqui é sem teoria solta, sem tempo perdido: o conhecimento é projetado para gerar impacto imediato em sua carreira.",
        },
        {
          question: "Quais são as modalidades de ensino disponíveis (Presencial, Ao Vivo, EAD)?",
          answer:
            "Oferecemos três modalidades pensadas para diferentes necessidades:\n• Presencial: Ideal para quem valoriza o networking presencial valioso e a experiência em campus com laboratórios modernos e clínicas.\n• On-line e Ao vivo: A combinação de flexibilidade e interação em tempo real com especialistas de mercado, permitindo que você participe de aulas de qualquer lugar.\n• EAD: Oferece flexibilidade total para você estudar e acessar nosso conteúdo autoral e exclusivo no seu próprio ritmo.",
        },
      ],
    },
    {
      category: "Inscrição e Processos",
      items: [
        {
          question: "Como posso realizar minha matrícula nos cursos do IPOG?",
          answer:
            "Nosso processo de matrícula é simplificado e pensado para sua conveniência. Você pode se inscrever diretamente pelo nosso site, escolhendo o curso desejado e finalizando o processo de forma 100% online. Caso prefira um atendimento personalizado, você pode optar por Falar com um Consultor para receber uma consultoria de carreira e garantir que está fazendo a escolha certa. Escolha seu curso e inicie sua jornada de sucesso hoje mesmo.",
        },
        {
          question: "Já curso em outra instituição. É possível transferir e aproveitar disciplinas no IPOG?",
          answer:
            "Sim, é totalmente possível. O IPOG possui uma política clara de equivalências para facilitar sua transição. Nosso processo é ágil e transparente: realizamos uma análise do seu histórico acadêmico para identificar quais disciplinas podem ser aproveitadas, garantindo que você não perca tempo e conclua sua formação com a excelência que sua carreira merece.",
        },
      ],
    },
    {
      category: "Suporte e Vida Acadêmica",
      items: [
        {
          question: "Que tipo de suporte o IPOG oferece ao longo do curso?",
          answer:
            "Oferecemos um suporte completo e integrado para acompanhar você em toda a sua jornada. Seu primeiro ponto de contato para qualquer dúvida é nosso Assistente Virtual, que de forma inteligente e ágil, direciona sua necessidade ao canal correto. Seja para questões administrativas, com nossa Central de Relacionamento, ou para dúvidas acadêmicas, com professores, tutores e coordenadores, garantimos que você sempre encontre a ajuda que precisa de forma rápida e eficiente.",
        },
        {
          question: "Existem benefícios para ex-alunos que desejam continuar estudando?",
          answer:
            "Sim. Entendemos que profissionais em ascensão buscam ampliar seu portfólio e autoridade com novas especializações. Por isso, o programa IPOG Mais é mais que um benefício: é nossa parceria estratégica para uma carreira que exige evolução contínua. Ele oferece condições especiais e descontos exclusivos para ex-alunos que desejam cursar novas formações, reforçando nosso compromisso com o seu sucesso contínuo, muito além da primeira formatura.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb + Title */}
      <section className="w-full bg-background py-8 md:py-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <BreadcrumbWithItems items={breadcrumbItems} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Dúvidas? Encontre aqui suas respostas.
          </h1>
          <div className="mt-4 h-px bg-border" />
        </div>
      </section>

      {/* Introdução */}
      <section className="w-full bg-muted/30 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-lg text-muted-foreground">
              Aqui, você encontra a clareza e a segurança necessárias para fazer a escolha que conecta você ao sucesso.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="w-full bg-background py-6 border-b">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <Tabs value="faq" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="historia" onClick={() => router.push("/sobre/historia")}>
                História
              </TabsTrigger>
              <TabsTrigger value="governanca" onClick={() => router.push("/sobre/governanca")}>
                Governança
              </TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="w-full bg-background py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                      <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground whitespace-pre-line">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
