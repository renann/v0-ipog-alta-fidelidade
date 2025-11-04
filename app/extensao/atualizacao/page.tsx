"use client"
import { HomeHeader } from "@/components/home-header"
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
      <HomeHeader />
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
            titulo="O mercado não espera. Você está acompanhando?"
            subtitulo="Mantenha sua relevância e vantagem competitiva com atualização contínua"
            dores={[
              {
                icon: <Clock className="h-5 w-5" />,
                titulo: "Obsolescência técnica",
                descricao:
                  "O mercado não espera. Cada dia de inação é um passo em direção à irrelevância profissional.",
                solucao:
                  "Nossa biblioteca viva é atualizada por especialistas para entregar apenas o conhecimento que gera impacto real e imediato na sua carreira.",
              },
              {
                icon: <Target className="h-5 w-5" />,
                titulo: "Falta de tempo para pesquisa",
                descricao:
                  "A sobrecarga de informações paralisa sua evolução. Perder tempo filtrando conteúdo irrelevante não é uma opção.",
                solucao:
                  "Nosso conteúdo é curado por especialistas para que você foque apenas no essencial, de forma prática e direta ao ponto.",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                titulo: "Perda de vantagem competitiva",
                descricao:
                  "A oportunidade ideal não espera por você. Profissionais atualizados já estão conquistando os melhores projetos e salários.",
                solucao:
                  "Oferecemos acesso a frameworks, ferramentas e metodologias de ponta que colocam você à frente da concorrência.",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodologiaUnificada titulo="Metodologia IPOG: teoria + prática + mentoria" />
        </section>

        <section className="w-full py-12 md:py-16">
          <Beneficios
            title="Por que escolher a Atualização IPOG?"
            subtitle="Vantagens exclusivas para profissionais que buscam evolução contínua"
            beneficios={[
              {
                icone: <BookOpen className="h-8 w-8" />,
                titulo: "Biblioteca Viva",
                subtitulo: "Conteúdo autoral exclusivo",
                itens: [
                  "Guias práticos para aplicação imediata.",
                  "Frameworks e templates para acelerar seu trabalho.",
                  "Acesso contínuo para consultas futuras.",
                  "Curadoria de especialistas que filtra o ruído do mercado.",
                ],
              },
              {
                icone: <Users className="h-8 w-8" />,
                titulo: "Apoio Especializado",
                subtitulo: "Mentoria e networking contínuo",
                itens: [
                  "Sessões de mentoria para validar suas estratégias.",
                  "Comunidade exclusiva para networking de alto nível.",
                  "Eventos e webinars com as principais tendências.",
                  "Suporte dedicado para acompanhar sua evolução.",
                ],
              },
              {
                icone: <Rocket className="h-8 w-8" />,
                titulo: "Aplicação Imediata",
                subtitulo: "Conteúdo prático e acionável",
                itens: [
                  "Estudos de caso de empresas líderes.",
                  "Ferramentas e checklists para usar na segunda-feira.",
                  "Projetos práticos que constroem seu portfólio.",
                  "Retorno sobre o investimento percebido em semanas.",
                ],
              },
            ]}
            textoBotao="Começar atualização"
            onClickBotao={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("openAssistant", {
                    detail: { origin: "beneficios-atualizacao" },
                  }),
                )
              }
            }}
            corFundo="bg-muted/30"
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
            titulo="Formatos que se adaptam à sua rotina"
            subtitulo="Escolha a modalidade que melhor se encaixa no seu ritmo de trabalho e atualização"
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD Gravado",
                descricao: "Aprenda no seu ritmo, com acesso contínuo",
                beneficios: [
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
                titulo: "Ao Vivo Online",
                descricao: "Interaja com especialistas em tempo real",
                beneficios: [
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
                titulo: "Presencial",
                descricao: "Experiência imersiva e networking de alto valor",
                beneficios: [
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
            titulo="Sua jornada de atualização contínua"
            subtitulo="Evolua de forma estruturada e mantenha-se sempre à frente"
            etapas={[
              {
                numero: 1,
                titulo: "Nivele Seu Conhecimento",
                descricao:
                  "Atualize suas bases com os conceitos e práticas que o mercado adota hoje para construir uma base sólida para o futuro.",
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
                titulo: "Domine as Inovações",
                descricao:
                  "Explore as tecnologias emergentes e metodologias de ponta que estão definindo o futuro da sua área.",
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
                titulo: "Torne-se Referência",
                descricao:
                  "Consolide seu aprendizado, aplique o conhecimento em projetos de impacto e posicione-se como um líder estratégico no seu setor.",
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
                descricao: "dos alunos aplicam o conhecimento no trabalho já na semana seguinte.",
                ganho: "+35% de produtividade",
              },
              {
                icone: <Trophy className="h-8 w-8" />,
                valor: "87%",
                descricao: "relatam impacto direto em promoções e novos projetos.",
                ganho: "+R$ 3.200/mês em média",
              },
              {
                icone: <Rocket className="h-8 w-8" />,
                valor: "91%",
                descricao: "passaram a ser vistos como referência técnica em suas equipes.",
                ganho: "Reconhecimento profissional",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <DepoimentosDeTexto
            titulo="Resultados Reais na Carreira"
            subtitulo="Histórias reais de quem escolheu a atualização contínua"
            depoimentos={[
              {
                nome: "Mariana Costa",
                cargo: "Tech Lead",
                area: "Tecnologia",
                texto:
                  "O conteúdo é tão prático que consegui aplicar os frameworks no dia seguinte. Essa agilidade foi decisiva para minha promoção a Tech Lead.",
                ganho: "Promoção para Tech Lead",
              },
              {
                nome: "Roberto Almeida",
                cargo: "Gerente de Projetos",
                area: "Gestão",
                texto:
                  "As metodologias de gestão que aprendi me permitiram otimizar processos e levar minha equipe a um aumento de 40% em produtividade. O retorno foi imediato.",
                ganho: "+40% de produtividade da equipe",
              },
              {
                nome: "Juliana Santos",
                cargo: "Head de Marketing",
                area: "Marketing Digital",
                texto:
                  "Com as estratégias de growth hacking do curso, reestruturamos nossas campanhas e alcançamos um aumento de mais de 60% nas conversões em apenas um trimestre.",
                ganho: "+60% em conversões",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16">
          <Autoridade
            titulo="Aprenda com Quem Lidera o Mercado"
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
                bio: "PhD em IA e CTO de uma startup de IA generativa, traz para a sala de aula a aplicação real das tecnologias que estão revolucionando os negócios.",
              },
              {
                nome: "Profa. Ana Beatriz",
                area: "Transformação Digital",
                bio: "Com 20 anos de experiência como CDO, compartilha a visão estratégica por trás das maiores transformações digitais do mercado.",
              },
              {
                nome: "Prof. Carlos Eduardo",
                area: "Gestão Ágil",
                bio: "Agile Coach que já implementou metodologias ágeis em mais de 50 empresas, ensina os frameworks que aceleram resultados em equipes de alta performance.",
              },
            ]}
          />
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            titulo="Não espere o futuro chegar"
            descricao="Domine as competências que garantem sua relevância com conteúdo prático, especialistas de mercado e uma metodologia focada em resultados. A ESCOLHA QUE CONECTA VOCÊ AO SUCESSO."
            botaoPrimario={{
              texto: "Inicie Sua Atualização Agora",
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
