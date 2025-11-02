"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodologiaUnificada } from "@/components/metodologia-unificada"
import { Beneficios } from "@/components/beneficios"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { Trilha } from "@/components/trilha"
import { Empregabilidade } from "@/components/empregabilidade"
import { DepoimentosDeTexto } from "@/components/depoimentos-de-texto"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { TrendingUp, Target, Clock, BookOpen, Users, Award, Building, Lightbulb, Rocket, Trophy } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function AtualizacaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Extensão", href: "/extensao" },
                { label: "Atualização" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="EXTENSÃO"
          title="Domine as tecnologias que definem o futuro"
          description="Acesse o conhecimento prático que o mercado exige agora. Nossos conteúdos exclusivos, biblioteca em constante evolução e suporte de especialistas do mercado são sua rota direta para a vantagem competitiva."
          valueBadges={[
            { icon: <TrendingUp className="h-5 w-5" />, text: "Conteúdo Autoral" },
            { icon: <BookOpen className="h-5 w-5" />, text: "Biblioteca Viva" },
            { icon: <Users className="h-5 w-5" />, text: "Apoio Especializado" },
          ]}
          primaryCTA={{ text: "Inicie Sua Atualização", href: "#cursos" }}
          secondaryCTA={{ text: "Explorar Cursos", href: "#biblioteca" }}
        />

        <section className="w-full py-12 md:py-16">
          <Dilema
            title="O mercado não espera. Você está acompanhando?"
            subtitle="Mantenha sua relevância e vantagem competitiva com atualização contínua"
            problems={[
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Obsolescência técnica",
                description:
                  "O mercado não espera. Cada dia de inação é um passo em direção à irrelevância profissional.",
                solution:
                  "Nossa biblioteca viva é atualizada por especialistas para entregar apenas o conhecimento que gera impacto real e imediato na sua carreira.",
              },
              {
                icon: <Target className="h-5 w-5" />,
                title: "Falta de tempo para pesquisa",
                description:
                  "A sobrecarga de informações paralisa sua evolução. Perder tempo filtrando conteúdo irrelevante não é uma opção.",
                solution:
                  "Nosso conteúdo é curado por especialistas para que você foque apenas no essencial, de forma prática e direta ao ponto.",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: "Perda de vantagem competitiva",
                description:
                  "A oportunidade ideal não espera por você. Profissionais atualizados já estão conquistando os melhores projetos e salários.",
                solution:
                  "Oferecemos acesso a frameworks, ferramentas e metodologias de ponta que colocam você à frente da concorrência.",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodologiaUnificada title="Metodologia IPOG: teoria + prática + mentoria" />
        </section>

        <section className="w-full py-12 md:py-16">
          <Beneficios
            title="Por que escolher a Atualização IPOG?"
            subtitle="Vantagens exclusivas para profissionais que buscam evolução contínua"
            benefits={[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Biblioteca Viva",
                subtitle: "Conteúdo autoral exclusivo",
                items: [
                  "Guias práticos para aplicação imediata.",
                  "Frameworks e templates para acelerar seu trabalho.",
                  "Acesso contínuo para consultas futuras.",
                  "Curadoria de especialistas que filtra o ruído do mercado.",
                ],
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Apoio Especializado",
                subtitle: "Mentoria e networking contínuo",
                items: [
                  "Sessões de mentoria para validar suas estratégias.",
                  "Comunidade exclusiva para networking de alto nível.",
                  "Eventos e webinars com as principais tendências.",
                  "Suporte dedicado para acompanhar sua evolução.",
                ],
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Aplicação Imediata",
                subtitle: "Conteúdo prático e acionável",
                items: [
                  "Estudos de caso de empresas líderes.",
                  "Ferramentas e checklists para usar na segunda-feira.",
                  "Projetos práticos que constroem seu portfólio.",
                  "Retorno sobre o investimento percebido em semanas.",
                ],
              },
            ]}
            buttonText="Começar atualização"
            onClickButton={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("openAssistant", {
                    detail: { origin: "beneficios-atualizacao" },
                  }),
                )
              }
            }}
            backgroundColor="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Cursos
            title="Cursos Práticos para Resultados Imediatos"
            subtitle="Explore trilhas de conhecimento focadas em competências que o mercado valoriza agora."
            badge="EXTENSÃO"
            cursos={[
              {
                nome: "Inteligência Artificial Aplicada",
                duracao: "4 meses",
                descricao:
                  "Desenvolva projetos com IA generativa e automação. Aplique ferramentas emergentes no seu trabalho na próxima semana.",
                modalidade: "EAD",
                link: "/extensao/curso/inteligencia-artificial-aplicada",
              },
              {
                nome: "Transformação Digital",
                duracao: "3 meses",
                descricao: "Estratégias e frameworks atuais para liderar mudanças tecnológicas na sua empresa.",
                modalidade: "Ao Vivo",
                link: "/extensao/curso/marketing-digital",
              },
              {
                nome: "Gestão Ágil Avançada",
                duracao: "4 meses",
                descricao: "Metodologias ágeis de ponta e práticas de liderança para equipes de alta performance.",
                modalidade: "Presencial",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
              {
                nome: "Data Analytics & BI",
                duracao: "3 meses",
                descricao: "Análise de dados, visualização e tomada de decisão baseada em dados.",
                modalidade: "EAD",
                link: "/extensao/curso/inteligencia-artificial-aplicada",
              },
              {
                nome: "Cibersegurança Moderna",
                duracao: "4 meses",
                descricao: "Proteção de dados, compliance e gestão de riscos digitais atualizados.",
                modalidade: "Ao Vivo",
                link: "/extensao/curso/marketing-digital",
              },
              {
                nome: "Marketing Digital Avançado",
                duracao: "3 meses",
                descricao: "Estratégias digitais, growth hacking e ferramentas de automação de marketing.",
                modalidade: "Presencial",
                link: "/extensao/curso/marketing-digital",
              },
            ]}
            ctaText="Ver Detalhes do Curso"
            ctaLink="/extensao/curso/inteligencia-artificial-aplicada"
            footerCTA={{
              text: "Ver todos os cursos disponíveis",
              link: "/catalogo?tipo=extensao",
            }}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Modalidades
            title="Formatos que se adaptam à sua rotina"
            subtitle="Escolha a modalidade que melhor se encaixa no seu ritmo de trabalho e atualização"
            modalities={[
              {
                badge: "EXTENSÃO",
                title: "EAD Gravado",
                description: "Aprenda no seu ritmo, com acesso contínuo",
                benefits: [
                  "Estude quando e onde quiser, sem comprometer sua agenda profissional.",
                  "Acesso ilimitado ao conteúdo e a todas as futuras atualizações.",
                  "Biblioteca de conhecimento com novos materiais práticos todos os meses.",
                  "Certificação IPOG que o mercado reconhece e valoriza.",
                ],
                buttonText: "Ver Cursos EAD",
                link: "/catalogo?tipo=extensao&modalidade=ead",
              },
              {
                badge: "EXTENSÃO",
                title: "Ao Vivo Online",
                description: "Interaja com especialistas em tempo real",
                benefits: [
                  "Participe de mentorias ao vivo com os líderes que definem as tendências.",
                  "Valide suas estratégias e tire dúvidas sobre os temas mais emergentes.",
                  "Construa um networking remoto com profissionais de alto nível.",
                  "Acesse as gravações para revisar o conteúdo sempre que precisar.",
                ],
                buttonText: "Ver Cursos Ao Vivo",
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
              },
              {
                badge: "EXTENSÃO",
                title: "Presencial",
                description: "Experiência imersiva e networking de alto valor",
                benefits: [
                  "Participe de workshops intensivos com estudos de caso reais e aplicados.",
                  "Construa um networking presencial de alto impacto para sua carreira.",
                  "Acesse laboratórios e ferramentas de ponta para praticar suas novas habilidades.",
                  "Receba a certificação IPOG, com reconhecimento nacional.",
                ],
                buttonText: "Ver Cursos Presenciais",
                link: "/catalogo?tipo=extensao&modalidade=presencial",
              },
            ]}
            backgroundColor="bg-background"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Trilha
            title="Sua jornada de atualização contínua"
            subtitle="Evolua de forma estruturada e mantenha-se sempre à frente"
            stages={[
              {
                number: 1,
                title: "Nivele Seu Conhecimento",
                description:
                  "Atualize suas bases com os conceitos e práticas que o mercado adota hoje para construir uma base sólida para o futuro.",
                duration: "Mês 1",
                topics: [
                  "Diagnóstico de gaps técnicos",
                  "Fundamentos revisitados com novas práticas",
                  "Ferramentas e frameworks atuais",
                  "Primeiros projetos práticos",
                ],
              },
              {
                number: 2,
                title: "Domine as Inovações",
                description:
                  "Explore as tecnologias emergentes e metodologias de ponta que estão definindo o futuro da sua área.",
                duration: "Mês 2-3",
                topics: [
                  "Tecnologias emergentes e disruptivas",
                  "Cases de sucesso e aplicações práticas",
                  "Workshops com especialistas do mercado",
                  "Projetos avançados e desafios reais",
                ],
              },
              {
                number: 3,
                title: "Torne-se Referência",
                description:
                  "Consolide seu aprendizado, aplique o conhecimento em projetos de impacto e posicione-se como um líder estratégico no seu setor.",
                duration: "Mês 4",
                topics: [
                  "Projeto final com aplicação real",
                  "Apresentação para banca de especialistas",
                  "Networking com líderes do setor",
                  "Certificação e acesso à biblioteca viva",
                ],
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Empregabilidade
            title="Profissionais atualizados conquistam mais"
            subtitle="Dados reais de quem mantém a vantagem competitiva com o IPOG"
            statistics={[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                value: "94%",
                description: "dos alunos aplicam o conhecimento no trabalho já na semana seguinte.",
                gain: "+35% de produtividade",
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                value: "87%",
                description: "relatam impacto direto em promoções e novos projetos.",
                gain: "+R$ 3.200/mês em média",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                value: "91%",
                description: "passaram a ser vistos como referência técnica em suas equipes.",
                gain: "Reconhecimento profissional",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <DepoimentosDeTexto
            title="Resultados Reais na Carreira"
            subtitle="Histórias reais de quem escolheu a atualização contínua"
            testimonials={[
              {
                name: "Mariana Costa",
                role: "Tech Lead",
                area: "Tecnologia",
                testimonial:
                  "O conteúdo é tão prático que consegui aplicar os frameworks no dia seguinte. Essa agilidade foi decisiva para minha promoção a Tech Lead.",
                gain: "Promoção para Tech Lead",
              },
              {
                name: "Roberto Almeida",
                role: "Gerente de Projetos",
                area: "Gestão",
                testimonial:
                  "As metodologias de gestão que aprendi me permitiram otimizar processos e levar minha equipe a um aumento de 40% em produtividade. O retorno foi imediato.",
                gain: "+40% de produtividade da equipe",
              },
              {
                name: "Juliana Santos",
                role: "Head de Marketing",
                area: "Marketing Digital",
                testimonial:
                  "Com as estratégias de growth hacking do curso, reestruturamos nossas campanhas e alcançamos um aumento de mais de 60% nas conversões em apenas um trimestre.",
                gain: "+60% em conversões",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Autoridade
            title="Aprenda com Quem Lidera o Mercado"
            subtitle="Professores atuantes que trazem tendências e inovações do mercado"
            credentials={[
              {
                icon: <Lightbulb className="h-5 w-5" />,
                text: "Especialistas em Tendências e Inovação",
              },
              {
                icon: <Award className="h-5 w-5" />,
                text: "Conteúdo Autoral Exclusivo",
              },
              {
                icon: <Building className="h-5 w-5" />,
                text: "Líderes em Empresas de Tecnologia",
              },
            ]}
            professors={[
              {
                name: "Dr. Paulo Henrique",
                area: "Inteligência Artificial",
                bio: "PhD em IA e CTO de uma startup de IA generativa, traz para a sala de aula a aplicação real das tecnologias que estão revolucionando os negócios.",
              },
              {
                name: "Profa. Ana Beatriz",
                area: "Transformação Digital",
                bio: "Com 20 anos de experiência como CDO, compartilha a visão estratégica por trás das maiores transformações digitais do mercado.",
              },
              {
                name: "Prof. Carlos Eduardo",
                area: "Gestão Ágil",
                bio: "Agile Coach que já implementou metodologias ágeis em mais de 50 empresas, ensina os frameworks que aceleram resultados em equipes de alta performance.",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            title="Não espere o futuro chegar"
            description="Domine as competências que garantem sua relevância com conteúdo prático, especialistas de mercado e uma metodologia focada em resultados. A ESCOLHA QUE CONECTA VOCÊ AO SUCESSO."
            primaryButton={{
              text: "Inicie Sua Atualização Agora",
              href: "/catalogo?tipo=extensao",
            }}
            secondaryButton={{
              text: "Falar com consultor",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
