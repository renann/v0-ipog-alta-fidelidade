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
        <BreadcrumbWithItems
          items={[{ label: "Início", href: "/" }, { label: "Extensão", href: "/extensao" }, { label: "Atualização" }]}
        />
        <Hero
          badge="EXTENSÃO"
          title="Mantenha-se à frente"
          description="Acompanhe tecnologias e práticas do mercado com conteúdo autoral exclusivo, biblioteca viva e apoio especializado."
          valueBadges={[
            { icon: <TrendingUp className="h-5 w-5" />, text: "Conteúdo Autoral" },
            { icon: <BookOpen className="h-5 w-5" />, text: "Biblioteca Viva" },
            { icon: <Users className="h-5 w-5" />, text: "Apoio Especializado" },
          ]}
          primaryCTA={{ text: "Mantenha-se à frente", href: "#cursos" }}
          secondaryCTA={{ text: "Ver conteúdos exclusivos", href: "#biblioteca" }}
        />

        <section className="w-full py-12 md:py-16">
          <Dilema
            titulo="O mercado não espera. Você está acompanhando?"
            subtitulo="Mantenha sua relevância e vantagem competitiva com atualização contínua"
            dores={[
              {
                icon: <Clock className="h-5 w-5" />,
                titulo: "Obsolescência técnica",
                descricao: "Suas habilidades perdem valor enquanto novas tecnologias surgem diariamente",
                solucao: "Biblioteca viva com atualizações constantes sobre tendências e práticas emergentes",
              },
              {
                icon: <Target className="h-5 w-5" />,
                titulo: "Falta de tempo para pesquisa",
                descricao: "Você não tem tempo para filtrar o que realmente importa no mar de informações",
                solucao: "Conteúdo curado por especialistas: apenas o essencial, direto ao ponto",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                titulo: "Perda de vantagem competitiva",
                descricao: "Profissionais atualizados estão conquistando as melhores oportunidades",
                solucao: "Acesso antecipado a frameworks, ferramentas e metodologias de ponta",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodologiaUnificada />
        </section>

        <section className="w-full py-12 md:py-16">
          <Beneficios
            titulo="Por que escolher a Atualização IPOG?"
            subtitulo="Vantagens exclusivas para profissionais que buscam evolução contínua"
            beneficios={[
              {
                icone: <BookOpen className="h-8 w-8" />,
                titulo: "Biblioteca Viva",
                subtitulo: "Conteúdo autoral exclusivo",
                itens: [
                  "Guias práticos atualizados mensalmente",
                  "Frameworks e templates prontos",
                  "Acesso vitalício ao conteúdo",
                  "Curadoria de especialistas do mercado",
                ],
              },
              {
                icone: <Users className="h-8 w-8" />,
                titulo: "Apoio Especializado",
                subtitulo: "Mentoria e networking contínuo",
                itens: [
                  "Sessões de mentoria com especialistas",
                  "Comunidade exclusiva de profissionais",
                  "Eventos e webinars mensais",
                  "Suporte técnico dedicado",
                ],
              },
              {
                icone: <Rocket className="h-8 w-8" />,
                titulo: "Aplicação Imediata",
                subtitulo: "Conteúdo prático e acionável",
                itens: [
                  "Cases reais do mercado",
                  "Ferramentas e checklists prontos",
                  "Projetos práticos guiados",
                  "ROI comprovado em 30 dias",
                ],
              },
            ]}
            textoBotao="Começar atualização"
            acaoBotao={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("openAssistant", {
                    detail: { origin: "beneficios-atualizacao" },
                  }),
                )
              }
            }}
            corDeFundo="bg-muted/30"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Cursos
            titulo="Escolha o curso que mantém você relevante"
            subtitulo="Cursos com atualizações contínuas, conteúdo autoral e biblioteca viva"
            badge="EXTENSÃO"
            cursos={[
              {
                nome: "Inteligência Artificial Aplicada",
                duracao: "4 meses",
                descricao: "Domine IA generativa, automação e ferramentas emergentes para aplicação imediata",
                modalidade: "EAD",
              },
              {
                nome: "Transformação Digital",
                duracao: "3 meses",
                descricao: "Estratégias e frameworks atuais para liderar mudanças tecnológicas na sua empresa",
                modalidade: "Ao Vivo",
              },
              {
                nome: "Gestão Ágil Avançada",
                duracao: "4 meses",
                descricao: "Metodologias ágeis de ponta e práticas de liderança para equipes de alta performance",
                modalidade: "Presencial",
              },
              {
                nome: "Data Analytics & BI",
                duracao: "3 meses",
                descricao: "Análise de dados, visualização e tomada de decisão baseada em dados",
                modalidade: "EAD",
              },
              {
                nome: "Cibersegurança Moderna",
                duracao: "4 meses",
                descricao: "Proteção de dados, compliance e gestão de riscos digitais atualizados",
                modalidade: "Ao Vivo",
              },
              {
                nome: "Marketing Digital Avançado",
                duracao: "3 meses",
                descricao: "Estratégias digitais, growth hacking e ferramentas de automação de marketing",
                modalidade: "Presencial",
              },
            ]}
            ctaText="Ver curso"
            ctaLink="/extensao/curso/inteligencia-artificial-aplicada"
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Modalidades
            title="Formatos que se adaptam à sua rotina"
            subtitle="Escolha a modalidade que melhor se encaixa no seu ritmo de trabalho e atualização"
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD Gravado",
                descricao: "Flexibilidade total e atualização contínua",
                beneficios: [
                  "Estude no seu ritmo, sem comprometer o trabalho",
                  "Acesso ilimitado ao conteúdo e atualizações",
                  "Biblioteca viva com novos materiais mensais",
                  "Certificação reconhecida pelo mercado",
                ],
                buttonText: "Encontrar cursos EAD",
                link: "/catalogo?tipo=extensao&modalidade=ead",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Ao Vivo Online",
                descricao: "Interaja com especialistas e receba atualizações em tempo real",
                beneficios: [
                  "Mentorias ao vivo com líderes do mercado",
                  "Discussões sobre tendências emergentes",
                  "Networking remoto com profissionais de ponta",
                  "Gravações disponíveis após cada sessão",
                ],
                buttonText: "Encontrar cursos Ao Vivo",
                link: "/catalogo?tipo=extensao&modalidade=ao-vivo",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Presencial",
                descricao: "Vivencie práticas e networking presencial com líderes de mercado",
                beneficios: [
                  "Workshops intensivos com cases reais",
                  "Networking de alto nível presencial",
                  "Acesso a laboratórios e ferramentas de ponta",
                  "Certificação IPOG reconhecida nacionalmente",
                ],
                buttonText: "Encontrar cursos Presencial",
                link: "/catalogo?tipo=extensao&modalidade=presencial",
              },
            ]}
            backgroundColor="bg-background"
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Trilha
            titulo="Sua jornada de atualização contínua"
            subtitulo="Evolua de forma estruturada e mantenha-se sempre à frente"
            etapas={[
              {
                numero: 1,
                titulo: "Fundamentos Atualizados",
                descricao: "Revise e atualize conceitos essenciais com as práticas mais recentes do mercado",
                duracao: "Mês 1",
                topicos: [
                  "Diagnóstico de gaps técnicos",
                  "Fundamentos revisitados com novas práticas",
                  "Ferramentas e frameworks atuais",
                  "Primeiros projetos práticos",
                ],
              },
              {
                numero: 2,
                titulo: "Tendências e Inovações",
                descricao: "Explore tecnologias emergentes e metodologias de ponta aplicadas ao mercado",
                duracao: "Mês 2-3",
                topicos: [
                  "Tecnologias emergentes e disruptivas",
                  "Cases de sucesso e aplicações práticas",
                  "Workshops com especialistas do mercado",
                  "Projetos avançados e desafios reais",
                ],
              },
              {
                numero: 3,
                titulo: "Domínio e Liderança",
                descricao: "Consolide conhecimentos e torne-se referência na sua área de atuação",
                duracao: "Mês 4",
                topicos: [
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
            titulo="Profissionais atualizados conquistam mais"
            subtitulo="Dados reais de quem mantém a vantagem competitiva com o IPOG"
            estatisticas={[
              {
                icone: <TrendingUp className="h-8 w-8" />,
                valor: "94%",
                descricao: "aplicaram novas práticas no trabalho",
                ganho: "+35% de produtividade",
              },
              {
                icone: <Trophy className="h-8 w-8" />,
                valor: "87%",
                descricao: "conquistaram promoções ou novos projetos",
                ganho: "+R$ 3.200/mês em média",
              },
              {
                icone: <Rocket className="h-8 w-8" />,
                valor: "91%",
                descricao: "se tornaram referência em suas áreas",
                ganho: "Reconhecimento profissional",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <DepoimentosDeTexto
            titulo="Profissionais que se mantiveram à frente"
            subtitulo="Histórias reais de quem escolheu a atualização contínua"
            depoimentos={[
              {
                nome: "Mariana Costa",
                cargo: "Tech Lead",
                area: "Tecnologia",
                texto:
                  "A biblioteca viva do IPOG me mantém atualizada sem precisar gastar horas pesquisando. Recebo conteúdo curado, frameworks prontos e acesso a especialistas. Em 6 meses, liderei a transformação digital da minha empresa.",
                ganho: "Promoção para Tech Lead",
              },
              {
                nome: "Roberto Almeida",
                cargo: "Gerente de Projetos",
                area: "Gestão",
                texto:
                  "Precisava me manter relevante em um mercado que muda rápido. O curso de Gestão Ágil Avançada me deu frameworks atuais e networking com líderes do setor. Hoje sou referência em metodologias ágeis na minha empresa.",
                ganho: "+40% de produtividade da equipe",
              },
              {
                nome: "Juliana Santos",
                cargo: "Head de Marketing",
                area: "Marketing Digital",
                texto:
                  "O conteúdo autoral e as atualizações mensais me deram vantagem competitiva. Aprendi sobre IA aplicada ao marketing antes da concorrência e implementei estratégias que aumentaram nossos resultados em 60%.",
                ganho: "+60% em conversões",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Autoridade
            titulo="Especialistas que vivem o futuro"
            subtitulo="Professores atuantes que trazem tendências e inovações do mercado"
            credenciais={[
              {
                icon: <Lightbulb className="h-5 w-5" />,
                texto: "Especialistas em Tendências e Inovação",
              },
              {
                icon: <Award className="h-5 w-5" />,
                texto: "Conteúdo Autoral Exclusivo",
              },
              {
                icon: <Building className="h-5 w-5" />,
                texto: "Líderes em Empresas de Tecnologia",
              },
            ]}
            professores={[
              {
                nome: "Dr. Paulo Henrique",
                area: "Inteligência Artificial",
                bio: "PhD em IA. CTO de startup de IA generativa. Palestrante internacional sobre tendências tecnológicas.",
              },
              {
                nome: "Profa. Ana Beatriz",
                area: "Transformação Digital",
                bio: "CDO de multinacional. 20 anos liderando transformações digitais em grandes corporações.",
              },
              {
                nome: "Prof. Carlos Eduardo",
                area: "Gestão Ágil",
                bio: "Agile Coach certificado. Implementou metodologias ágeis em +50 empresas. Autor de frameworks proprietários.",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            titulo="Mantenha-se à frente. Evolua com o IPOG."
            descricao="Cursos com biblioteca viva, conteúdo autoral exclusivo e apoio especializado. Mantenha sua relevância e vantagem competitiva com atualização contínua."
            botaoPrimario={{
              texto: "Começar atualização",
              href: "/catalogo?tipo=extensao",
            }}
            botaoSecundario={{
              texto: "Falar com consultor",
              onClick: openAssistantForConsultor,
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
