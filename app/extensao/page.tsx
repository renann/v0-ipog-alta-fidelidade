"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoExtensao } from "@/components/extensao/metodo-extensao"
import { Modalidades } from "@/components/modalidades"
import { Cursos } from "@/components/cursos"
import { Jornadas } from "@/components/jornadas"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { Zap, TrendingUp, RefreshCw, Clock, Users, Award, BookOpen } from "lucide-react"
import { ResultadosReais } from "@/components/resultados-reais"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function ExtensaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Extensão" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <Hero
          badge="EXTENSÃO IPOG"
          title="Expanda seus horizontes profissionais e acadêmicos"
          description="Desenvolva habilidades essenciais com conteúdo focado, metodologia hands-on e a credibilidade de uma certificação IPOG para acelerar seu impacto profissional."
          valueBadges={[
            { icon: <Zap className="w-5 h-5" />, text: "Aplicação Imediata no Trabalho" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "Aprenda na Prática, Gere Resultados" },
            { icon: <Award className="w-5 h-5" />, text: "Certificação de Peso IPOG" },
          ]}
          primaryCTA={{ text: "Encontrar meu curso", href: "/catalogo?categoria=extensao" }}
          secondaryCTA={{ text: "Falar com consultor", onClick: openAssistantForConsultor }}
        />

        {/* Dilema Section */}
        <section className="w-full py-12 md:py-16">
          <Dilema
            title="Sua carreira exige atualização constante, mas a rotina não espera?"
            subtitle="A Extensão IPOG foi desenhada para profissionais que precisam de resultados rápidos, transformando aprendizado em aplicação imediata com uma metodologia que respeita sua agenda."
            dores={[
              {
                icon: <Zap className="h-5 w-5" />,
                titulo: "Teoria excessiva, pouca aplicabilidade",
                solucao:
                  "Nossos cursos entregam conteúdo prático, com ferramentas e templates para você usar na semana seguinte.",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                titulo: "Falta de tempo e flexibilidade",
                solucao:
                  "Oferecemos formatos EAD, Ao Vivo e Presencial, pensados para se encaixar na sua agenda profissional sem abrir mão da qualidade.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                titulo: "Insegurança sobre o valor do certificado",
                solucao:
                  "Receba uma certificação universitária com o peso da marca IPOG, uma instituição com mais de 20 anos de reconhecimento nacional.",
              },
            ]}
            backgroundColor="bg-muted/30"
          />
        </section>

        {/* MetodoExtensao Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <MetodoExtensao />
        </section>

        {/* Modalidades Section */}
        <section className="w-full py-12 md:py-16">
          <Modalidades
            title="Escolha o formato ideal para a sua rotina"
            subtitle="Em qualquer modalidade, você conta com a excelência de conteúdo e a credibilidade da certificação IPOG."
            modalidades={[
              {
                badge: "EXTENSÃO",
                titulo: "EAD (Gravado): Autonomia e Flexibilidade Total",
                descricao:
                  "Aprenda no seu ritmo, quando e onde quiser, com acesso 24/7 a aulas e materiais práticos. Ideal para quem tem uma agenda imprevisível.",
                beneficios: [
                  "Aulas gravadas disponíveis 24/7",
                  "Aprenda no seu ritmo",
                  "Materiais práticos para download",
                  "Certificação IPOG reconhecida",
                ],
                link: "/catalogo?categoria=extensao&modalidade=ead",
                buttonText: "Ver cursos de Extensão - EAD",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Ao Vivo (Online): Interação e Suporte de Especialistas",
                descricao:
                  "Participe de aulas síncronas, tire dúvidas em tempo real com professores de mercado e construa networking sem sair de casa.",
                beneficios: [
                  "Aulas síncronas com especialistas",
                  "Tire dúvidas em tempo real",
                  "Networking com profissionais da área",
                  "Exercícios práticos com feedback",
                ],
                link: "/catalogo?categoria=extensao&modalidade=ao-vivo",
                buttonText: "Ver cursos de Extensão - Ao Vivo",
              },
              {
                badge: "EXTENSÃO",
                titulo: "Presencial: Imersão e Experiência Hands-On",
                descricao:
                  "Vivencie uma experiência intensiva em laboratórios modernos, valide soluções na prática e fortaleça sua rede de contatos presencialmente.",
                beneficios: [
                  "Experiência hands-on intensiva",
                  "Dinâmicas práticas e estudos de caso",
                  "Conexões presenciais fortes",
                  "Certificação imediata",
                ],
                link: "/catalogo?categoria=extensao&modalidade=presencial",
                buttonText: "Ver cursos de Extensão - Presencial",
              },
            ]}
            bgColor="bg-muted/30"
          />
        </section>

        {/* Cursos Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Cursos
            badge="CURSOS EM DESTAQUE"
            title="Encontre sua atualização"
            subtitle="Gestão & Operações • Tecnologia & Dados • Marketing & Vendas • Pessoas & Cultura"
            cursos={[
              {
                nome: "Gestão de Projetos Ágeis",
                duracao: "40h",
                descricao: "Aplique Scrum e Kanban na prática e gerencie projetos com agilidade e eficiência.",
                modalidade: "EAD • Presencial",
                link: "/extensao/curso/gestao-projetos-ageis",
              },
              {
                nome: "Marketing Digital",
                duracao: "60h",
                descricao: "Domine estratégias digitais e transforme dados em resultados mensuráveis.",
                modalidade: "EAD • Ao Vivo",
                link: "/extensao/curso/marketing-digital",
              },
              {
                nome: "Inteligência Artificial Aplicada",
                duracao: "80h",
                descricao: "Implemente soluções de IA no seu negócio e automatize processos estratégicos.",
                modalidade: "Ao Vivo • Presencial",
                link: "/extensao/curso/inteligencia-artificial-aplicada",
              },
            ]}
            ctaText="Ver curso"
            footerCTA={{
              text: "Ver todos os cursos de Extensão",
              link: "/catalogo?categoria=extensao",
            }}
          />
        </section>

        {/* Jornadas Section */}
        <section className="w-full py-12 md:py-16">
          <Jornadas
            title="Soluções direcionadas para seu desafio profissional"
            jornadas={[
              {
                icon: <Zap className="h-6 w-6" />,
                titulo: "Para Resolver um Gap Imediato",
                promessa:
                  "Cursos curtíssimos e práticos, com templates e checklists, para você aplicar a solução na semana seguinte e gerar retorno rápido.",
                dores: "",
                ganho: "",
                cta: "Resolver meu gap agora",
                href: "/extensao/gap-imediato",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                titulo: "Para Acelerar sua Recolocação",
                promessa:
                  "Desenvolva projetos guiados, monte um portfólio tangível e conquiste uma certificação que impressiona recrutadores e abre portas no mercado.",
                dores: "",
                ganho: "",
                cta: "Construir meu portfólio",
                href: "/extensao/recolocacao",
              },
              {
                icon: <RefreshCw className="h-6 w-6" />,
                titulo: "Para se Manter Relevante no Mercado",
                promessa:
                  "Domine as ferramentas e habilidades emergentes da sua área. Workshops práticos e conteúdo sempre atualizado para você não ficar para trás.",
                dores: "",
                ganho: "",
                cta: "Ver cursos de atualização",
                href: "/extensao/atualizacao",
              },
            ]}
          />
        </section>

        {/* ResultadosReais Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <ResultadosReais
            title="O impacto da Extensão IPOG na sua carreira"
            subtitle="Nossos alunos comprovam: o conhecimento adquirido aqui se transforma em resultado mensurável e avanço profissional."
            estatisticas={[
              {
                icone: <Zap className="w-8 h-8 text-primary" />,
                valor: "92%",
                descricao: "aplicaram no trabalho na primeira semana",
              },
              {
                icone: <BookOpen className="w-8 h-8 text-primary" />,
                valor: "85%",
                descricao: "geraram portfólio e projetos práticos",
              },
              {
                icone: <TrendingUp className="w-8 h-8 text-primary" />,
                valor: "78%",
                descricao: "obtiveram promoção ou transição de área",
              },
              {
                icone: <Users className="w-8 h-8 text-primary" />,
                valor: "50mil+",
                descricao: "profissionais na rede IPOG",
              },
            ]}
            depoimentos={[
              {
                tipo: "antes-depois",
                nome: "Profissional em Operações",
                cargo: "Egresso IPOG",
                antes: "Processos manuais e sem indicadores",
                depois: "Usei o material do curso já na semana seguinte",
                impacto:
                  "Com os templates do curso, automatizei um relatório que levava horas. O investimento no curso se pagou na primeira semana.",
              },
              {
                tipo: "antes-depois",
                nome: "Profissional em Marketing",
                cargo: "Egressa IPOG",
                antes: "Fora do mercado há 6 meses",
                depois: "Entreguei um projeto-piloto do curso",
                impacto:
                  "O projeto prático do curso virou meu principal diferencial na entrevista. Consegui a vaga mostrando o que eu era capaz de fazer.",
              },
            ]}
          />
        </section>

        {/* Autoridade Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <Autoridade
            title="Quem faz, recomenda"
            subtitle="Docentes de mercado, entregáveis práticos e comunidade ativa de profissionais"
            credenciais={[
              {
                icone: <Users className="w-6 h-6 text-foreground" />,
                texto: "Docentes de mercado",
                descricao: "Profissionais atuantes que ensinam o que realmente funciona",
              },
              {
                icone: <BookOpen className="w-6 h-6 text-foreground" />,
                texto: "Entregáveis práticos",
                descricao: "Checklists, templates e projetos que viram portfólio",
              },
              {
                icone: <Award className="w-6 h-6 text-foreground" />,
                texto: "Certificação IPOG",
                descricao: "Reconhecimento nacional com indicação de carga horária",
              },
            ]}
            professores={[
              {
                nome: "Dr. Roberto Silva",
                area: "Marketing Digital",
                bio: "15 anos de experiência em estratégias digitais para grandes empresas",
              },
              {
                nome: "Dra. Ana Costa",
                area: "Gestão de Pessoas",
                bio: "Especialista em liderança e desenvolvimento de equipes de alta performance",
              },
              {
                nome: "Dr. Paulo Mendes",
                area: "Compliance",
                bio: "Consultor em conformidade e gestão de riscos para empresas nacionais",
              },
            ]}
            bgColor="bg-muted/30"
          />
        </section>

        {/* AcaoFinal Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <AcaoFinal
            title="Pronto(a) para transformar conhecimento em resultado?"
            descricao="Não adie seu crescimento. Encontre o curso de extensão que resolve seu desafio hoje e comece a aplicar o conhecimento imediatamente."
            botaoPrimario={{
              texto: "Escolher meu curso agora",
              href: "/catalogo?categoria=extensao",
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
