"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoSegundaGraduacao } from "@/components/segunda-graduacao/metodo-segunda-graduacao"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { RetornoProfissional } from "@/components/segunda-graduacao/retorno-profissional"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { Clock, DollarSign, Target, Award, Users, BookOpen, GraduationCap, TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Empregabilidade } from "@/components/empregabilidade"

export default function SegundaGraduacaoPage() {
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
                { label: "Segunda Graduação" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Sua Experiência Vale um Novo Diploma. Acelere sua Carreira no IPOG."
          description="Transforme sua experiência em um diploma reconhecido, com uma trilha de aprendizado mais rápida e um investimento focado no seu próximo salto profissional."
          valueBadges={[
            { text: "Validação de Conhecimentos" },
            { text: "Trilhas Aceleradas" },
            { text: "Flexibilidade Total" },
          ]}
          primaryCTA={{ text: "Valide sua Experiência Agora", href: "/catalogo?tipo=graduacao" }}
          secondaryCTA={{ text: "Valide seus conhecimentos", href: "/central-atendimento" }}
        />
        <Dilema
          title="Você já tem experiência. Por que começar do zero?"
          subtitle="Reconhecemos sua trajetória profissional e aceleramos sua nova formação"
          problems={[
            {
              icon: <Clock className="h-5 w-5" />,
              title: "Tempo é seu maior ativo",
              description: "Você não pode pausar sua carreira por 4 anos para uma nova graduação",
              solution:
                "Sua carreira não pode esperar. Por isso, reconhecemos seus conhecimentos e otimizamos sua grade, reduzindo o tempo de formação em até 40%.",
            },
            {
              icon: <DollarSign className="h-5 w-5" />,
              title: "Investimento inteligente",
              description: "Pagar por disciplinas que você já domina não faz sentido",
              solution:
                "Invista apenas no que impulsiona sua carreira. Sua experiência elimina matérias básicas, e seu investimento é focado em conhecimento avançado e aplicável.",
            },
            {
              icon: <Target className="h-5 w-5" />,
              title: "Foco no que importa",
              description: "Conteúdos básicos não agregam à sua experiência profissional",
              solution:
                "Sua formação deve ser tão experiente quanto você. Desenvolvemos uma trilha de aprendizado avançada, sem conteúdos básicos, para complementar sua trajetória profissional.",
            },
          ]}
        />
        <MetodoSegundaGraduacao />
        <Cursos
          badge="GRADUAÇÃO"
          title="Escolha a área que complementa sua experiência profissional"
          cursos={[
            {
              nome: "Administração",
              duracao: "2,5 anos (acelerado)",
              descricao:
                "Transforme sua vivência de mercado em liderança estratégica. Ideal para profissionais que buscam formalizar competências em gestão e acelerar a ascensão para cargos executivos.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/administracao",
            },
            {
              nome: "Psicologia",
              duracao: "3 anos (acelerado)",
              descricao:
                "Aplique sua vivência em liderança e gestão de pessoas para compreender o comportamento humano em profundidade. Ideal para profissionais que desejam formalizar suas habilidades e liderar equipes com mais estratégia e empatia.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead",
            },
            {
              nome: "Direito",
              duracao: "3,5 anos (acelerado)",
              descricao:
                "Adicione uma camada de conhecimento jurídico à sua expertise de mercado. Perfeito para gestores, empreendedores e consultores que precisam de segurança para tomar decisões complexas e estratégicas.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
          ]}
          ctaText="Ver curso"
          ctaLink="/catalogo?tipo=graduacao"
          footerCTA={{
            text: "Ver todos os cursos disponíveis",
            link: "/catalogo?tipo=graduacao",
          }}
        />
        <Modalidades
          title="Compare the modalities and choose the one that best suits you"
          subtitle="The same excellence graduation, with different formats — choose by your rhythm, routine and professional goals."
          modalities={[
            {
              badge: "GRADUAÇÃO",
              title: "EAD",
              description:
                "Achieve your IPOG diploma in less time and with official recognition. Take advantage of already taken courses, validate your professional experience and study with total flexibility, applying knowledge in up to 90 days to ensure real return on your investment.",
              benefits: [
                "Reduced formation time with course approval",
                "Total flexibility for the active professional",
                "Official recognition that validates your experience",
                "Application of knowledge in up to 90 days",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=ead",
              buttonText: "Find EAD courses",
            },
            {
              badge: "GRADUAÇÃO",
              title: "Presencial",
              description:
                "Accelerate your career transition with the prestige of IPOG. Count on specialized guidance, modern infrastructure and networking in an excellent formation that combines theory, practice and strategic connections to transform your professional trajectory.",
              benefits: [
                "Accelerate career transition with a strong network of contacts",
                "Accessible coordination that guides your professional change",
                "Established regional networking of high value",
                "Modern infrastructure that supports practical application of knowledge",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=presencial",
              buttonText: "Find presencial courses",
            },
          ]}
        />
        <RetornoProfissional />
        <Empregabilidade
          title="Professionals who accelerated their careers with a second graduation"
          subtitle="See how the validation of knowledge and a focused formation transformed professional trajectories."
          statistics={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "87%",
              description: "gained promotion after the second graduation",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              value: "40%",
              description: "reduction in formation time",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              value: "92%",
              description: "applied knowledge in up to 6 months",
            },
          ]}
          statisticsLayout="carousel"
          testimonials={[
            {
              text: "Already had 10 years of experience in HR when I decided to do Psychology. IPOG validated my experience and reduced my formation by almost 2 years. Today I am an organizational psychologist and my career took a leap.",
              author: "Mariana Costa",
              role: "Psicóloga Organizacional",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              text: "I was working as an engineer and decided to do Administration to open my own business. IPOG took advantage of several courses and in 2 years I had my second diploma. Today I am CEO of my company.",
              author: "Roberto Almeida",
              role: "CEO and Engineer",
            },
            {
              text: "Did Law 15 years ago and now I wanted to do Administration to manage my office better. IPOG validated my experience and I concluded on time record. My revenue tripled.",
              author: "Juliana Ferreira",
              role: "Advogada and Administradora",
            },
          ]}
          bgColor="bg-background"
        />
        <Autoridade
          title="Market professionals • Recognized certification • Executive networking"
          subtitle="A formation that values your experience and accelerates your career"
          credentials={[
            { icon: <Award className="w-5 h-5 text-muted-foreground" />, text: "MEC Credenciado" },
            { icon: <Users className="w-5 h-5 text-muted-foreground" />, text: "Professores de Mercado" },
            { icon: <BookOpen className="w-5 h-5 text-muted-foreground" />, text: "Networking Executivo" },
            { icon: <GraduationCap className="w-5 h-5 text-muted-foreground" />, text: "Certificação Reconhecida" },
          ]}
          professors={[
            {
              name: "Dr. Roberto Almeida",
              area: "Administração Estratégica",
              bio: "Doutor em Administração, CEO de consultoria empresarial e especialista em gestão executiva",
            },
            {
              name: "Dra. Fernanda Rocha",
              area: "Psicologia Organizacional",
              bio: "Mestre em Psicologia, consultora de RH e especialista em desenvolvimento de liderança",
            },
            {
              name: "Dr. Marcelo Dias",
              area: "Direito Empresarial",
              bio: "PhD em Direito, advogado corporativo e consultor jurídico de grandes empresas",
            },
            {
              name: "Dra. Juliana Martins",
              area: "Gestão de Pessoas",
              bio: "Doutora em Administração, executiva de RH e especialista em transformação organizacional",
            },
          ]}
          professorsTitle="Learn from the Professionals who Led the Market"
          bgColor="bg-muted/30"
        />
        <AcaoFinal
          title="Your Next Achievement Starts Here. The Choice that Connects You to Success."
          description="Validate your journey, optimize your time and investment. Achieve a new diploma with the quality and recognition your career deserves."
          primaryButton={{
            text: "Start My Validation",
            href: "/catalogo?tipo=graduacao",
          }}
          secondaryButton={{
            text: "Validate my knowledge",
            onClick: () => window.openAssistantForConsultor(),
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
