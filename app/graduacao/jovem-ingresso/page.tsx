import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoJovemIngresso } from "@/components/jovem-ingresso/metodo-jovem-ingresso"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { SuporteAcompanhamento } from "@/components/jovem-ingresso/suporte-acompanhamento"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { AlertCircle, MapPin, Clock, TrendingUp, Briefcase, BadgeCheck } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function JovemIngressoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Graduação", href: "/graduacao" },
                { label: "Jovem Ingresso" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Sua Jornada de Conquistas Começa Aqui"
          description="Com professores que são referência no mercado e uma formação focada na prática, o IPOG conecta você às melhores oportunidades desde o primeiro semestre."
          valueBadges={[
            { icon: <BadgeCheck className="w-5 h-5" />, text: "Acompanhamento Próximo" },
            { icon: <BadgeCheck className="w-5 h-5" />, text: "Empregabilidade 92%" },
            { icon: <BadgeCheck className="w-5 h-5" />, text: "Flexibilidade Total" },
          ]}
          primaryCTA={{
            text: "Comece sua jornada para o sucesso",
            href: "/catalogo?tipo=graduacao&persona=jovem-ingresso",
          }}
          secondaryCTA={{ text: "Falar com consultor", onClick: "openAssistantForConsultor" }}
        />
        <Dilema
          title="We understand the challenges of starting a career"
          subtitle="At IPOG, we transform your concerns into a clear and achievable path to success."
          problems={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              title: "Insecurity about your first job?",
              solution:
                "Here, your career begins before your diploma. With a 94% employment rate in the area, we connect you to the job market from your first semesters.",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              title: "Uncertainty about what you will learn?",
              solution:
                "Our curriculum is focused on practice and is entirely transparent. You participate in real projects and develop the skills that companies really seek.",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              title: "Concerned about costs and routine?",
              solution:
                "Study at your own pace. We offer EAD and Presential modalities that adapt to your routine, as well as a scholarship simulator to find the best option for your pocket.",
            },
          ]}
        />
        <MetodoJovemIngresso />
        <Cursos
          badge="GRADUAÇÃO"
          title="Choose the course that opens doors to your professional future"
          cursos={[
            {
              nome: "Psicologia",
              duracao: "5 anos",
              descricao:
                "Explore the complexity of the human mind and prepare yourself to promote well-being and transformation. At IPOG, you develop empathetic listening and the skills to become a reference professional in the area.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao:
                "Transform arguments into justice and knowledge into defense. Here, you develop critical thinking and tools to become a standout professional, ready to lead and positively impact society.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
            {
              nome: "Arquitetura e Urbanismo",
              duracao: "5 anos",
              descricao:
                "Give shape to ideas and build the future of cities. Our course unites creativity and technique so that you can design innovative, functional, and sustainable spaces, leaving your mark on the world.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/arquitetura",
            },
          ]}
          ctaText="Ver curso"
          ctaLink="/catalogo?tipo=graduacao&persona=jovem-ingresso"
          footerCTA={{
            text: "Ver todos os cursos disponíveis",
            link: "/catalogo?tipo=graduacao",
          }}
        />
        <Modalidades
          title="Compare the modalities and choose the one that best suits you"
          subtitle="The same excellence graduation, with different formats — choose by your rhythm, routine, and professional goals."
          modalities={[
            {
              badge: "GRADUAÇÃO",
              title: "EAD",
              description:
                "Start your graduation with flexibility and focus on your first job. Study online with exclusive contents, have clear costs, and count on agile support to conquer your place in the market.",
              benefits: [
                "Study at your own pace; review classes whenever you want",
                "Updated and interactive contents",
                "Online tutoring and continuous support",
                "Certification equal to presential",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=ead",
              buttonText: "See EAD courses",
            },
            {
              badge: "GRADUAÇÃO",
              title: "Presencial",
              description:
                "Experience the complete university experience with the prestige of IPOG. Learn from renowned teachers in modern laboratories and build a valuable networking to accelerate your career.",
              benefits: [
                "Presential meetings",
                "Practical projects",
                "C-level connections",
                "Recognized certification",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=presencial",
              buttonText: "See presential courses",
            },
          ]}
        />
        <Empregabilidade
          title="Thousands of young people have already transformed their careers"
          subtitle="Employment indicators and career services to increase your employability."
          statistics={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "94%",
              description: "of graduates employed in the area",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              value: "6 months",
              description: "average time to first job",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              value: "100%",
              description: "access to career services",
            },
          ]}
          statisticsLayout="carousel"
          testimonials={[
            {
              text: "Thanks to practical projects and teachers' guidance who are really in the market, I got my first internship in Psychology already in the third semester. IPOG gave me the confidence I needed.",
              author: "Camila Rocha",
              role: "Psychology Student",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              text: "I entered IPOG with no experience and today, before even graduating, I already work in a renowned law office. The practical methodology made all the difference.",
              author: "Lucas Mendes",
              role: "Law Student",
            },
            {
              text: "IPOG taught me not only theory but also how to apply in practice from day one. I got my first architecture project even in the second year and today I have my own office.",
              author: "Beatriz Santos",
              role: "Graduate in Architecture",
            },
          ]}
          bgColor="bg-background"
        />
        <SuporteAcompanhamento />
        <AcaoFinal
          title="The choice that connects you to success."
          description="Everything you need to build an impactful career is here. Take the first step towards your future."
          primaryButton={{
            text: "Secure your spot now",
            href: "/catalogo?tipo=graduacao&persona=jovem-ingresso",
          }}
          secondaryButton={{
            text: "Talk to a consultant",
            onClick: "openAssistantForConsultor",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
