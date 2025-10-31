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
import { Clock, DollarSign, Target, Award, Users, BookOpen, GraduationCap } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

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
          title="Conquiste um novo diploma no seu ritmo"
          description="Aproveite sua experiência profissional e acelere sua nova formação com validação de conhecimentos, flexibilidade total e certificação reconhecida"
          valueBadges={[
            { text: "Validação de Conhecimentos" },
            { text: "Trilhas Aceleradas" },
            { text: "Flexibilidade Total" },
          ]}
          primaryCTA={{ text: "Começar minha jornada", href: "/catalogo?categoria=graduacao" }}
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
              solucao: "Validamos seus conhecimentos prévios e reduzimos o tempo de formação em até 40%",
            },
            {
              icon: <DollarSign className="h-5 w-5" />,
              titulo: "Investimento inteligente",
              descricao: "Pagar por disciplinas que você já domina não faz sentido",
              solucao: "Você só paga pelas disciplinas que realmente precisa cursar",
            },
            {
              icon: <Target className="h-5 w-5" />,
              titulo: "Foco no que importa",
              descricao: "Conteúdos básicos não agregam à sua experiência profissional",
              solucao: "Trilha personalizada focada em conhecimentos avançados e aplicáveis",
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
                "Transforme sua experiência em gestão estratégica. Aproveite seus conhecimentos prévios e acelere sua formação com foco executivo.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/administracao",
            },
            {
              nome: "Psicologia",
              duracao: "3 anos (acelerado)",
              descricao:
                "Combine sua experiência profissional com conhecimento em comportamento humano. Ideal para líderes que buscam desenvolvimento de equipes.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead",
            },
            {
              nome: "Direito",
              duracao: "3,5 anos (acelerado)",
              descricao:
                "Aproveite sua experiência corporativa e adicione conhecimento jurídico à sua carreira. Perfeito para gestores e empreendedores.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
          ]}
          ctaText="Ver curso"
          ctaLink="/catalogo?categoria=graduacao"
        />
        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="A mesma graduação de excelência, com diferentes formatos — escolha pelo seu ritmo, rotina e objetivos profissionais."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem precisa de autonomia e flexibilidade total durante a transição",
              beneficios: [
                "Estude no seu ritmo profissional",
                "Validação de conhecimentos prévios",
                "Suporte executivo dedicado",
                "Certificação igual ao presencial",
              ],
              link: "/catalogo?categoria=graduacao&modalidade=ead",
              buttonText: "Encontrar cursos EAD",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza networking executivo e imersão completa",
              beneficios: [
                "Networking com profissionais experientes",
                "Laboratórios equipados",
                "Mentoria presencial",
                "Certificação reconhecida",
              ],
              link: "/catalogo?categoria=graduacao&modalidade=presencial",
              buttonText: "Encontrar cursos Presencial",
            },
          ]}
        />
        <RetornoProfissional />
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
          tituloProfessores="Conheça alguns de nossos professores"
          bgColor="bg-muted/30"
        />
        <AcaoFinal
          title="Acelere sua nova formação com validação de conhecimentos"
          descricao="Aproveite sua experiência profissional e conquiste um novo diploma no seu ritmo, com trilhas aceleradas e certificação reconhecida."
          botaoPrimario={{
            texto: "Começar minha jornada",
            href: "/catalogo?categoria=graduacao",
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
