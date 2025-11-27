import { HomeHeader } from "@/components/home-header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoJovemIngresso } from "@/components/jovem-ingresso/metodo-jovem-ingresso"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { SuporteAcompanhamento } from "@/components/jovem-ingresso/suporte-acompanhamento"
import { FormasIngresso } from "@/components/formas-ingresso"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { AlertCircle, MapPin, Clock, TrendingUp, Briefcase, BadgeCheck } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function JovemIngressoPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Graduação", href: "/graduacao" },
                { label: "Primeira Graduação" },
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
          title="Entendemos os desafios de começar a carreira"
          subtitle="No IPOG, transformamos suas preocupações em um plano de sucesso claro e alcançável."
          dores={[
            {
              icon: <AlertCircle className="h-5 w-5" />,
              titulo: "Insegurança sobre o primeiro emprego?",
              solucao:
                "Aqui, sua carreira começa antes do diploma. Com um índice de 94% de egressos empregados na área, conectamos você ao mercado de trabalho desde os primeiros semestres.",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              titulo: "Incerteza sobre o que vai aprender?",
              solucao:
                "Nossa matriz curricular é focada na prática e totalmente transparente. Você participa de projetos reais e desenvolve as habilidades que as empresas realmente procuram.",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Preocupado com custos e a rotina?",
              solucao:
                "Estude do seu jeito. Oferecemos modalidades EAD e Presencial que se adaptam à sua rotina, além de um simulador de bolsas para encontrar a melhor opção para o seu bolso.",
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
                "Explore a complexidade da mente humana e prepare-se para promover bem-estar e transformação. No IPOG, você desenvolve a escuta empática e as competências para se tornar um profissional de referência na área.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead/jovem-ingresso",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao:
                "Transforme argumentos em justiça e conhecimento em defesa. Aqui, você desenvolve a visão crítica e as ferramentas para se tornar um profissional de destaque, pronto para liderar e impactar positivamente a sociedade.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
            {
              nome: "Arquitetura e Urbanismo",
              duracao: "5 anos",
              descricao:
                "Dê forma a ideias e construa o futuro das cidades. Nosso curso une criatividade e técnica para que você projete espaços inovadores, funcionais e sustentáveis, deixando sua marca no mundo.",
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
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="A mesma graduação de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao:
                "Comece sua graduação com flexibilidade e foco no primeiro emprego. Estude online com conteúdos exclusivos, tenha clareza de custos e conte com suporte ágil para conquistar sua vaga no mercado.",
              beneficios: [
                "Estude no seu ritmo; reveja aulas quando quiser",
                "Conteúdos atualizados e interativos",
                "Tutoria online e suporte contínuo",
                "Certificação igual ao presencial",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=ead",
              buttonText: "Ver cursos EAD",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao:
                "Viva a experiência universitária completa com o prestígio do IPOG. Aprenda com professores renomados em laboratórios modernos e construa um networking valioso para acelerar sua carreira.",
              beneficios: [
                "Encontros presenciais",
                "Projetos práticos",
                "Conexões C-level",
                "Certificação reconhecida",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=presencial",
              buttonText: "Ver cursos presenciais",
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
          depoimentos={[
            {
              texto:
                "Graças aos projetos práticos e à orientação de professores que realmente estão no mercado, consegui meu primeiro estágio em Psicologia já no terceiro semestre. O IPOG me deu a confiança que eu precisava.",
              autor: "Camila Rocha",
              cargo: "Aluna de Psicologia",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Entrei no IPOG sem experiência nenhuma e hoje, antes mesmo de me formar, já trabalho em um escritório de advocacia renomado. A metodologia prática fez toda a diferença.",
              autor: "Lucas Mendes",
              cargo: "Aluno de Direito",
            },
            {
              texto:
                "O IPOG me ensinou não só a teoria, mas como aplicar na prática desde o primeiro dia. Consegui meu primeiro projeto de arquitetura ainda no segundo ano e hoje tenho meu próprio escritório.",
              autor: "Beatriz Santos",
              cargo: "Egressa de Arquitetura",
            },
          ]}
          bgColor="bg-background"
        />
        <SuporteAcompanhamento />
        <FormasIngresso />
        <AcaoFinal
          title="A escolha que conecta você ao sucesso."
          descricao="Tudo o que você precisa para construir uma carreira de impacto está aqui. Dê o primeiro passo na direção do seu futuro."
          botaoPrimario={{
            texto: "Garanta sua vaga agora",
            href: "/catalogo?tipo=graduacao&persona=jovem-ingresso",
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
