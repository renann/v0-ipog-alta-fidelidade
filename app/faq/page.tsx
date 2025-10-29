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

  const faqItems = [
    {
      question: "Como faço minha matrícula?",
      answer:
        "Você pode realizar sua matrícula pelo site do IPOG, selecionando o curso desejado e completando o checkout online com as opções de pagamento disponíveis.",
    },
    {
      question: "Quais são as modalidades de ensino oferecidas?",
      answer:
        "O IPOG oferece cursos nas modalidades presencial, EAD (100% online) e híbrida, permitindo que você escolha o formato que melhor se adapta à sua rotina e necessidades de aprendizado.",
    },
    {
      question: "Como funciona o processo de certificação?",
      answer:
        "Após a conclusão do curso e aprovação em todas as disciplinas, o certificado é emitido digitalmente e também pode ser solicitado em formato físico. O certificado do IPOG é reconhecido pelo MEC e tem validade em todo território nacional.",
    },
    {
      question: "Posso trancar minha matrícula?",
      answer:
        "Sim, é possível solicitar o trancamento de matrícula por até 12 meses, mediante solicitação formal à secretaria acadêmica. Consulte o regulamento do seu curso para mais detalhes sobre prazos e condições.",
    },
    {
      question: "O IPOG oferece bolsas de estudo?",
      answer:
        "Sim, o IPOG possui programas de bolsas de estudo e descontos especiais para diferentes públicos, incluindo convênios corporativos, ex-alunos e programas sociais. Entre em contato com nossa equipe comercial para conhecer as opções disponíveis.",
    },
    {
      question: "Como funciona o suporte ao aluno?",
      answer:
        "Os alunos do IPOG contam com suporte completo através da secretaria acadêmica, coordenação pedagógica, biblioteca digital, e atendimento online via chat, e-mail e telefone durante todo o período do curso.",
    },
    {
      question: "Qual é a duração dos cursos de pós-graduação?",
      answer:
        "Os cursos de pós-graduação lato sensu têm duração média de 12 a 18 meses, dependendo da modalidade e da carga horária. Cursos de extensão e atualização profissional podem ter durações variadas, geralmente entre 3 e 6 meses.",
    },
    {
      question: "O diploma do IPOG é reconhecido pelo MEC?",
      answer:
        "Sim, todos os cursos de pós-graduação do IPOG são reconhecidos pelo MEC e seguem as diretrizes do Conselho Nacional de Educação. O IPOG é credenciado como instituição de ensino superior e seus diplomas têm validade nacional.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb + Title */}
      <section className="w-full bg-background py-8 md:py-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <BreadcrumbWithItems items={breadcrumbItems} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Perguntas frequentes</h1>
          <div className="mt-4 h-px bg-border" />
        </div>
      </section>

      {/* Introdução */}
      <section className="w-full bg-muted/30 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-lg text-muted-foreground">
              Encontre respostas rápidas para as dúvidas mais comuns sobre nossos cursos, processos e políticas
              institucionais.
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
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
