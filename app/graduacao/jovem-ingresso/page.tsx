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
import { AlertCircle, MapPin, Clock, TrendingUp, Briefcase } from "lucide-react"
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
          title="Comece sua carreira com segurança e propósito"
          description="Sua primeira graduação com acompanhamento próximo, empregabilidade garantida e flexibilidade para estudar do seu jeito"
          valueBadges={[
            { icon: "BadgeCheck", text: "Acompanhamento Próximo" },
            { icon: "BadgeCheck", text: "Empregabilidade 92%" },
            { icon: "BadgeCheck", text: "Flexibilidade Total" },
          ]}
          primaryCTA={{ text: "Começar minha jornada", href: "/catalogo?categoria=graduacao&persona=jovem-ingresso" }}
          secondaryCTA={{ text: "Falar com consultor", onClick: "openAssistantForConsultor" }}
        />
        <Dilema
          title="Escolher o caminho certo é um desafio"
          subtitle="O tempo, o trabalho e os custos muitas vezes parecem barreiras. Mas é possível transformar sua rotina em um plano de crescimento — com orientação, clareza e resultados reais"
          dores={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              titulo: "Medo de não conseguir emprego",
              solucao: "Empregabilidade garantida com 94% dos egressos empregados na área",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              titulo: "Incerteza sobre a matriz curricular",
              solucao: "Trilhas personalizadas com aplicação prática desde o primeiro semestre",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Falta de tempo e recursos",
              solucao: "Flexibilidade total com modalidades EAD e bolsas de estudo",
            },
          ]}
        />
        <MetodoJovemIngresso />
        <Cursos
          badge="GRADUAÇÃO"
          title="Escolha o curso que abre portas para seu futuro profissional"
          cursos={[
            {
              nome: "Psicologia",
              duracao: "5 anos",
              descricao:
                "Compreenda o comportamento humano e transforme vidas. Você não está escolhendo apenas um curso, está escolhendo transformar sua escuta em acolhimento.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao:
                "Justiça e transformação social através do direito. Transforme argumentos em justiça, conhecimento em defesa, sua voz em autoridade.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
            {
              nome: "Arquitetura e Urbanismo",
              duracao: "5 anos",
              descricao:
                "Projete espaços e transforme ambientes. Transforme ideias em projetos, espaços em experiências, sua criatividade em realidade.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/arquitetura",
            },
          ]}
          ctaText="Ver curso"
          ctaLink="/catalogo?categoria=graduacao&persona=jovem-ingresso"
        />
        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="A mesma graduação de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem precisa máxima autonomia e quer 'encaixar' módulos na agenda",
              beneficios: [
                "Estude no seu ritmo; reveja aulas quando quiser",
                "Conteúdos atualizados e interativos",
                "Tutoria online e suporte contínuo",
                "Certificação igual ao presencial",
              ],
              link: "/catalogo?categoria=graduacao&modalidade=ead",
              buttonText: "Encontrar cursos EAD",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem busca imersão estratégica e networking executivo",
              beneficios: [
                "Encontros presenciais",
                "Projetos práticos",
                "Conexões C-level",
                "Certificação reconhecida",
              ],
              link: "/catalogo?categoria=graduacao&modalidade=presencial",
              buttonText: "Encontrar cursos Presencial",
            },
          ]}
        />
        <Empregabilidade
          title="Milhares de jovens já transformaram suas carreiras"
          subtitle="Indicadores de empregabilidade e serviços de carreira para aumentar sua empregabilidade."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "94%",
              descricao: "dos egressos empregados na área",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "6 meses",
              descricao: "tempo médio para primeiro emprego",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "100%",
              descricao: "acesso a serviços de carreira",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimento={{
            texto: "Consegui meu primeiro estágio através do programa de mentoria IPOG.",
            autor: "Aluno IPOG",
          }}
          bgColor="bg-background"
        />
        <SuporteAcompanhamento />
        <AcaoFinal
          title="Comece sua graduação com segurança e propósito"
          descricao="Acompanhamento próximo, empregabilidade garantida e flexibilidade para estudar do seu jeito. Transforme sua primeira graduação em uma jornada de crescimento real."
          botaoPrimario={{
            texto: "Começar minha jornada",
            href: "/catalogo?categoria=graduacao&persona=jovem-ingresso",
          }}
          botaoSecundario={{
            texto: "Falar com consultor",
            onClick: "openAssistantForConsultor",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
