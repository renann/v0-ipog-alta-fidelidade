"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MetodoIpog } from "@/components/graduacao/metodo-ipog"
import { Cursos } from "@/components/cursos"
import { Jornadas } from "@/components/jornadas"
import { ResultadosReais } from "@/components/resultados-reais"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { GraduationCap, Briefcase, ArrowRightLeft, TrendingUp, Users, Building2, Award, BookOpen } from "lucide-react"
import { Dilema } from "@/components/dilema"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export default function GraduacaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Graduação" }]} />
          </div>
        </div>

        <Hero
          badge="GRADUAÇÃO"
          title="Construa sua carreira com ensino de excelência, valor estratégico e experiência prática"
          description="Aprenda com professores de mercado, participe de projetos reais e conecte teoria e prática desde o primeiro dia. Uma formação reconhecida pelo MEC que acelera sua empregabilidade e transforma seu potencial em sucesso."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Qualidade Reconhecida" },
            { icon: <GraduationCap className="h-5 w-5" />, text: "Corpo Docente de Mercado" },
            { icon: <GraduationCap className="h-5 w-5" />, text: "Formatos Flexíveis" },
          ]}
          primaryCTA={{ text: "Encontre seu curso", href: "/catalogo?tipo=graduacao" }}
          secondaryCTA={{ text: "Falar com consultor" }}
        />

        <Dilema
          title="O futuro profissional exige mais que um diploma"
          subtitle="Sabemos que a incerteza sobre o investimento, a grade curricular e a empregabilidade futura são barreiras reais."
          solucao="Por isso, a Graduação IPOG oferece uma jornada de aprendizado estratégica, com foco prático, suporte real e a garantia de uma formação sólida que abre portas no mercado de trabalho."
        />

        <MetodoIpog />

        <Cursos
          badge="GRADUAÇÃO"
          title="Encontre a formação que vai transformar sua carreira"
          cursos={[
            {
              nome: "Psicologia",
              duracao: "5 anos",
              descricao:
                "Ciências humanas e comportamento para transformar vidas através da compreensão do ser humano.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/psicologia-ead",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao: "Ciências jurídicas e advocacia com foco em justiça e transformação social.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/direito",
            },
            {
              nome: "Arquitetura e Urbanismo",
              duracao: "5 anos",
              descricao: "Projete espaços que transformam vidas e cidades com criatividade e técnica.",
              modalidade: "EAD • Presencial",
              link: "/graduacao/curso/arquitetura",
            },
          ]}
          ctaText="Ver curso"
          footerCTA={{
            text: "Ver todos os cursos disponíveis",
            link: "/catalogo?tipo=graduacao",
          }}
        />

        <Jornadas
          title="Qual é o seu próximo passo?"
          subtitle="O IPOG tem a jornada certa para cada momento da sua carreira. Escolha o caminho que conecta você ao sucesso."
          jornadas={[
            {
              icon: <GraduationCap className="w-8 h-8 text-primary" />,
              titulo: "Primeira Graduação",
              promessa: "Para quem busca: Uma formação sólida para entrar no mercado com confiança.",
              dores:
                "Insegurança sobre empregabilidade, falta de experiência prática e dúvidas sobre o retorno do investimento.",
              ganho:
                "Solução IPOG: Conteúdo prático, ferramentas de simulação de bolsas e mensalidades, e projetos reais que garantem empregabilidade desde o início.",
              cta: "Comece sua graduação",
              href: "/graduacao/jovem-ingresso",
            },
            {
              icon: <Briefcase className="w-8 h-8 text-primary" />,
              titulo: "Segunda Graduação",
              promessa: "Para quem busca: Validar sua experiência ou fazer uma transição de carreira segura.",
              dores:
                "Perda de tempo e dinheiro refazendo disciplinas já cursadas, e incerteza sobre a nova área de atuação.",
              ganho:
                "Solução IPOG: Aproveite disciplinas já cursadas e conquiste um diploma de peso em menos tempo, com um currículo tão prático que você aplica o conhecimento em sua carreira em até 90 dias.",
              cta: "Acelere sua nova formação",
              href: "/graduacao/segunda-graduacao",
            },
            {
              icon: <ArrowRightLeft className="w-8 h-8 text-primary" />,
              titulo: "Transferência Externa",
              promessa: "Para quem busca: Concluir seus estudos em uma instituição com mais qualidade e estrutura.",
              dores:
                "Frustração com a qualidade do ensino atual, burocracia na transferência e medo de perder créditos já conquistados.",
              ganho:
                "Solução IPOG: Aproveite seus créditos com nosso simulador de disciplinas e tempo restante, em um processo ágil e com um plano de estudos personalizado.",
              cta: "Simule sua transferência",
              href: "/graduacao/transferencia",
            },
          ]}
        />

        <ResultadosReais
          title="A escolha que gera resultados reais na carreira"
          subtitle="Resultados comprovados que transformam carreiras"
          estatisticas={[
            {
              icone: <TrendingUp className="w-12 h-12 text-primary" />,
              valor: "89%",
              label: "Avanço na carreira em menos de 6 meses",
            },
            {
              icone: <Users className="w-12 h-12 text-primary" />,
              valor: "95%",
              label: "Egressos empregados na área de formação",
            },
            {
              icone: <Building2 className="w-12 h-12 text-primary" />,
              valor: "+2.000",
              label: "Empresas com egressos IPOG",
            },
          ]}
          depoimentos={[
            {
              tipo: "simples",
              texto:
                "O IPOG não apenas ensina, ele prepara para o sucesso. A metodologia prática e o foco em empregabilidade foram decisivos para minha promoção em menos de seis meses.",
              nome: "Maria Silva",
              cargo: "Egressa de Administração",
            },
            {
              tipo: "video",
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "Fazer Direito no IPOG foi a melhor decisão da minha carreira. Os professores são referências no mercado e o networking que construí aqui abriu portas que eu nem imaginava.",
              nome: "Carlos Eduardo Santos",
              cargo: "Advogado Corporativo",
            },
            {
              tipo: "simples",
              texto:
                "A graduação em Psicologia no IPOG me preparou não só tecnicamente, mas emocionalmente para atuar no mercado. Hoje tenho minha própria clínica e atendo grandes empresas.",
              nome: "Ana Paula Oliveira",
              cargo: "Psicóloga Clínica e Organizacional",
            },
          ]}
        />

        <Autoridade
          title="Aprenda com quem o mercado respeita"
          subtitle="Nosso corpo docente é formado por mestres e doutores com vasta experiência prática, prontos para conectar você às exigências reais da sua futura profissão."
          credenciais={[
            { icone: <Award className="w-5 h-5 text-muted-foreground" />, texto: "MEC Credenciado" },
            {
              icone: <Users className="w-5 h-5 text-muted-foreground" />,
              texto: "+100 Professores Mestres e Doutores",
            },
            { icone: <BookOpen className="w-5 h-5 text-muted-foreground" />, texto: "20+ Anos de Experiência" },
            { icone: <GraduationCap className="w-5 h-5 text-muted-foreground" />, texto: "Metodologia Validada" },
          ]}
          professores={[
            {
              nome: "Dr. João Silva",
              bio: "Doutor em Psicologia Clínica, 15 anos de experiência em avaliação psicológica",
              area: "Psicologia Clínica",
            },
            {
              nome: "Dra. Maria Santos",
              bio: "Mestre em Neuropsicologia, especialista em testes projetivos",
              area: "Neuropsicologia",
            },
            {
              nome: "Prof. Carlos Oliveira",
              bio: "PhD em Psicometria, autor de 3 livros sobre avaliação",
              area: "Psicometria",
            },
            {
              nome: "Dra. Ana Costa",
              bio: "Doutora em Psicologia Organizacional, consultora de RH",
              area: "Psicologia Organizacional",
            },
          ]}
          tituloProfessores="Conheça alguns de nossos professores"
          bgColor="bg-muted/30"
        />

        <AcaoFinal
          title="Dê o passo decisivo para sua carreira."
          descricao="A escolha que conecta você ao sucesso. Encontre seu curso e comece a construir um futuro de conquistas com a excelência, a prática e o reconhecimento que só o IPOG oferece."
          botaoPrimario={{
            texto: "Encontre seu curso",
            href: "/catalogo?tipo=graduacao",
          }}
          botaoSecundario={{
            texto: "Falar com consultor",
            onClick: openAssistantForConsultor,
          }}
        />

        <FAQSection
          title="Perguntas Frequentes sobre Graduação"
          subtitle="Tire suas dúvidas sobre nossos cursos de graduação"
          bgColor="bg-muted/30"
          items={[
            {
              pergunta: "Como funciona o processo de ingresso na graduação IPOG?",
              resposta:
                "O processo de ingresso é simples e flexível. Você pode ingressar através do ENEM, vestibular tradicional, transferência externa ou segunda graduação. Cada modalidade tem seus próprios requisitos e prazos. Entre em contato com nossos consultores para entender qual é a melhor opção para o seu caso.",
            },
            {
              pergunta: "Os cursos de graduação do IPOG são reconhecidos pelo MEC?",
              resposta:
                "Sim! Todos os nossos cursos de graduação são devidamente credenciados e reconhecidos pelo Ministério da Educação (MEC), garantindo a validade nacional do seu diploma e sua aceitação no mercado de trabalho e em processos seletivos de pós-graduação.",
            },
            {
              pergunta: "Qual a diferença entre as modalidades EAD e Presencial?",
              resposta:
                "Na modalidade EAD, você tem flexibilidade para estudar quando e onde quiser, com aulas gravadas disponíveis 24/7 e encontros síncronos opcionais. Já no Presencial, você tem a experiência completa no campus, com aulas ao vivo, laboratórios práticos e networking presencial. Ambas as modalidades têm a mesma qualidade de ensino e o mesmo diploma reconhecido pelo MEC.",
            },
            {
              pergunta: "Posso transferir minha graduação de outra instituição para o IPOG?",
              resposta:
                "Sim! Aceitamos transferências externas e você pode aproveitar as disciplinas já cursadas. Nosso processo de análise é rápido e transparente. Use nosso simulador online para verificar quantas disciplinas podem ser aproveitadas e quanto tempo você economiza na sua formação.",
            },
            {
              pergunta: "Como funciona a segunda graduação no IPOG?",
              resposta:
                "Se você já tem um diploma de graduação, pode fazer uma segunda graduação aproveitando disciplinas compatíveis do seu curso anterior. Isso reduz significativamente o tempo de formação e o investimento. O processo de análise curricular é gratuito e você recebe um plano de estudos personalizado.",
            },
            {
              pergunta: "Qual a duração dos cursos de graduação?",
              resposta:
                "A duração varia de acordo com o curso e a modalidade escolhida. Em geral, os cursos de bacharelado têm duração de 4 a 5 anos. Para quem opta por segunda graduação ou transferência, o tempo pode ser reduzido conforme o aproveitamento de disciplinas.",
            },
            {
              pergunta: "Posso aproveitar disciplinas já cursadas em outras instituições?",
              resposta:
                "Sim! Analisamos seu histórico escolar e aproveitamos todas as disciplinas compatíveis com a grade curricular do curso escolhido. Isso vale tanto para transferências quanto para segunda graduação. O processo é transparente e você recebe um relatório detalhado do que pode ser aproveitado.",
            },
            {
              pergunta: "Como funciona o sistema de bolsas e descontos?",
              resposta:
                "Oferecemos diversas modalidades de bolsas e descontos: bolsas por desempenho no ENEM, descontos para pagamento antecipado, programas de financiamento estudantil e condições especiais para grupos. Use nosso simulador online para calcular o valor da sua mensalidade com os descontos aplicáveis ao seu perfil.",
            },
            {
              pergunta: "Qual o valor médio da mensalidade?",
              resposta:
                "O valor varia de acordo com o curso, modalidade e descontos aplicáveis. Em média, as mensalidades variam de R$ 400 a R$ 1.200. Recomendamos usar nosso simulador online ou falar com um consultor para receber uma proposta personalizada com todos os descontos que você tem direito.",
            },
            {
              pergunta: "Como é o suporte ao aluno durante a graduação?",
              resposta:
                "Oferecemos suporte completo durante toda a sua jornada: tutoria acadêmica, orientação de carreira, acesso a biblioteca digital, plataforma de estudos 24/7, suporte técnico e atendimento personalizado. Além disso, você tem acesso a eventos, workshops e uma comunidade ativa de alunos e professores.",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
