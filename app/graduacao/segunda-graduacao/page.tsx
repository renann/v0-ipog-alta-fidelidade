"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dilema } from "@/components/dilema"
import { MetodoSegundaGraduacao } from "@/components/segunda-graduacao/metodo-segunda-graduacao"
import { Cursos } from "@/components/cursos"
import { Modalidades } from "@/components/modalidades"
import { RetornoProfissional } from "@/components/segunda-graduacao/retorno-profissional"
import { Autoridade } from "@/components/autoridade"
import { FormasIngresso } from "@/components/formas-ingresso"
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
          dores={[
            {
              icon: <Clock className="h-5 w-5" />,
              titulo: "Tempo é seu maior ativo",
              descricao: "Você não pode pausar sua carreira por 4 anos para uma nova graduação",
              solucao:
                "Sua carreira não pode esperar. Por isso, reconhecemos seus conhecimentos e otimizamos sua grade, reduzindo o tempo de formação em até 40%.",
            },
            {
              icon: <DollarSign className="h-5 w-5" />,
              titulo: "Investimento inteligente",
              descricao: "Pagar por disciplinas que você já domina não faz sentido",
              solucao:
                "Invista apenas no que impulsiona sua carreira. Sua experiência elimina matérias básicas, e seu investimento é focado em conhecimento avançado e aplicável.",
            },
            {
              icon: <Target className="h-5 w-5" />,
              titulo: "Foco no que importa",
              descricao: "Conteúdos básicos não agregam à sua experiência profissional",
              solucao:
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
              link: "/graduacao/curso/psicologia-ead/segunda-graduacao",
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
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="A mesma graduação de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao:
                "Conquiste seu diploma IPOG em menos tempo e com reconhecimento oficial. Aproveite disciplinas já cursadas, valide sua experiência profissional e estude com flexibilidade total, aplicando o conhecimento em até 90 dias para garantir retorno real no seu investimento.",
              beneficios: [
                "Tempo de formação reduzido com aproveitamento de disciplinas",
                "Flexibilidade total para o profissional ativo",
                "Reconhecimento oficial que valida sua experiência",
                "Aplicação do conhecimento em até 90 dias",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=ead",
              buttonText: "Encontrar cursos EAD",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao:
                "Acelere sua transição de carreira com o prestígio IPOG. Conte com orientação especializada, infraestrutura moderna e networking em uma formação presencial de excelência que une teoria, prática e conexões estratégicas para transformar sua trajetória profissional.",
              beneficios: [
                "Aceleração da transição de carreira com uma rede de contatos forte",
                "Coordenação acessível que orienta sua mudança profissional",
                "Networking regional estabelecido e de alto valor",
                "Estrutura moderna que suporta a aplicação prática do conhecimento",
              ],
              link: "/catalogo?tipo=graduacao&modalidade=presencial",
              buttonText: "Encontrar cursos Presencial",
            },
          ]}
        />
        <RetornoProfissional />
        <Empregabilidade
          title="Profissionais que aceleraram suas carreiras com uma segunda graduação"
          subtitle="Veja como a validação de conhecimentos e uma formação focada transformaram trajetórias profissionais."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "87%",
              descricao: "conseguiram promoção após a segunda graduação",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "40%",
              descricao: "de redução no tempo de formação",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "92%",
              descricao: "aplicaram conhecimentos em até 6 meses",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "Já tinha 10 anos de experiência em RH quando decidi fazer Psicologia. O IPOG validou minha experiência e reduziu minha formação em quase 2 anos. Hoje sou psicóloga organizacional e minha carreira deu um salto.",
              autor: "Mariana Costa",
              cargo: "Psicóloga Organizacional",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Trabalhava como engenheiro e decidi fazer Administração para abrir meu próprio negócio. O IPOG aproveitou várias disciplinas e em 2 anos eu tinha meu segundo diploma. Hoje sou CEO da minha empresa.",
              autor: "Roberto Almeida",
              cargo: "CEO e Engenheiro",
            },
            {
              texto:
                "Fiz Direito há 15 anos e agora quis fazer Administração para gerenciar melhor meu escritório. O IPOG validou minha experiência e consegui concluir em tempo recorde. Meu faturamento triplicou.",
              autor: "Juliana Ferreira",
              cargo: "Advogada e Administradora",
            },
          ]}
          bgColor="bg-background"
        />
        <Autoridade
          title="Professores de mercado • Certificação reconhecida • Networking executivo"
          subtitle="Uma formação que valoriza sua experiência e acelera sua carreira"
          credenciais={[
            { icone: <Award className="w-5 h-5 text-muted-foreground" />, texto: "MEC Credenciado" },
            { icone: <Users className="w-5 h-5 text-muted-foreground" />, texto: "Professores de Mercado" },
            { icone: <BookOpen className="w-5 h-5 text-muted-foreground" />, texto: "Networking Executivo" },
            { icone: <GraduationCap className="w-5 h-5 text-muted-foreground" />, texto: "Certificação Reconhecida" },
          ]}
          professores={[
            {
              nome: "Dr. Roberto Almeida",
              area: "Administração Estratégica",
              bio: "Doutor em Administração, CEO de consultoria empresarial e especialista em gestão executiva",
            },
            {
              nome: "Dra. Fernanda Rocha",
              area: "Psicologia Organizacional",
              bio: "Mestre em Psicologia, consultora de RH e especialista em desenvolvimento de liderança",
            },
            {
              nome: "Dr. Marcelo Dias",
              area: "Direito Empresarial",
              bio: "PhD em Direito, advogado corporativo e consultor jurídico de grandes empresas",
            },
            {
              nome: "Dra. Juliana Martins",
              area: "Gestão de Pessoas",
              bio: "Doutora em Administração, executiva de RH e especialista em transformação organizacional",
            },
          ]}
          tituloProfessores="Aprenda com os Profissionais que Lideram o Mercado"
          bgColor="bg-muted/30"
        />
        <FormasIngresso />
        <AcaoFinal
          title="Sua Próxima Conquista Começa Aqui. A Escolha que Conecta Você ao Sucesso."
          descricao="Valide sua trajetória, otimize seu tempo e seu investimento. Conquiste um novo diploma com a qualidade e o reconhecimento que sua carreira merece."
          botaoPrimario={{
            texto: "Iniciar Minha Validação",
            href: "/catalogo?tipo=graduacao",
          }}
          botaoSecundario={{
            texto: "Valide seus conhecimentos",
            onClick: () => window.openAssistantForConsultor(),
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
