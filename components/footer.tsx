"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"
import { openAssistantForConsultor } from "@/lib/assistant-events"
import { GeoLink } from "@/components/geo-link"
import Image from "next/image"
import { NewsletterSection } from "@/components/newsletter-section"

export function Footer() {
  return (
    <>
      <NewsletterSection />

      <footer className="w-full bg-zinc-900">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          {/* Mobile: Layout empilhado (padrão atual) */}
          <div className="md:hidden text-center">
            <GeoLink href="/">
              <Logo variant="light" className="h-8 w-auto mx-auto mb-6" />
            </GeoLink>
            <p className="text-zinc-300 text-base mb-8 max-w-2xl mx-auto">
              A melhor escolha para quem busca ensino de excelência, qualidade reconhecida e resultados reais na
              carreira
            </p>
            <Button
              size="default"
              className="bg-white hover:bg-white/90 text-black px-6 rounded-full"
              onClick={openAssistantForConsultor}
            >
              Fale com um consultor
              <MessageSquare className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://facebook.com/ipog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/ipog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/ipog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/ipog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>

            <div className="mt-8">
              <a
                href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTI5MTY="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Acesse o cadastro do IPOG no e-MEC"
              >
                <Image
                  src="/selo-mec.png"
                  alt="Selo e-MEC - Acesse o cadastro do IPOG"
                  width={120}
                  height={180}
                  className="mx-auto"
                />
              </a>
            </div>

            <div className="mt-8 bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-3">
              <GeoLink
                href="/central-atendimento"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Central de atendimento
              </GeoLink>
              <GeoLink
                href="/documentos-institucionais"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Documentos Institucionais
              </GeoLink>
              <GeoLink
                href="/editais"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Editais
              </GeoLink>
              <GeoLink
                href="/blog"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Blog
              </GeoLink>
              <GeoLink
                href="/sobre"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Institucional
              </GeoLink>
              <GeoLink
                href="/programas-beneficios/ipog-plus"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Programas de Benefícios
              </GeoLink>
              <GeoLink
                href="/calendario-academico"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Acadêmico
              </GeoLink>
              <GeoLink
                href="/faq"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Perguntas frequentes
              </GeoLink>
              <GeoLink
                href="/unidades"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Unidades IPOG
              </GeoLink>
              <a
                href="https://portal.ipog.edu.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-sm text-zinc-200 hover:text-white transition-colors"
              >
                Portal do Aluno
              </a>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-zinc-400 text-sm">© 2025 IPOG Todos os direitos reservados.</p>
              <div className="flex flex-col gap-2 items-center text-sm">
                <button className="text-zinc-400 hover:text-zinc-200 transition-colors">Política de Privacidade</button>
                <button className="text-zinc-400 hover:text-zinc-200 transition-colors">Termos de Uso</button>
                <button className="text-zinc-400 hover:text-zinc-200 transition-colors">LGPD</button>
              </div>
            </div>
          </div>

          {/* Desktop: 4 colunas */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-8">
            {/* Coluna 1: Logo, proposta de valor, botão, redes sociais */}
            <div className="space-y-6">
              <GeoLink href="/">
                <Logo variant="light" className="h-8 w-auto" />
              </GeoLink>
              <p className="text-zinc-300 text-sm leading-relaxed">
                A melhor escolha para quem busca ensino de excelência, qualidade reconhecida e resultados reais na
                carreira
              </p>
              <Button
                size="default"
                className="bg-white hover:bg-white/90 text-black px-6 rounded-full w-full"
                onClick={openAssistantForConsultor}
              >
                Fale com um consultor
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com/ipog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/ipog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/ipog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/ipog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Validação MEC */}
            <div className="flex items-start justify-center">
              <a
                href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTI5MTY="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Acesse o cadastro do IPOG no e-MEC"
              >
                <Image src="/selo-mec.png" alt="Selo e-MEC - Acesse o cadastro do IPOG" width={100} height={150} />
              </a>
            </div>

            {/* Coluna 3: Links */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-sm mb-4">Links Úteis</h3>
              <GeoLink
                href="/central-atendimento"
                className="block text-sm text-zinc-300 hover:text-white transition-colors"
              >
                Central de atendimento
              </GeoLink>
              <GeoLink
                href="/documentos-institucionais"
                className="block text-sm text-zinc-300 hover:text-white transition-colors"
              >
                Documentos Institucionais
              </GeoLink>
              <GeoLink href="/editais" className="block text-sm text-zinc-300 hover:text-white transition-colors">
                Editais
              </GeoLink>
              <GeoLink href="/blog" className="block text-sm text-zinc-300 hover:text-white transition-colors">
                Blog
              </GeoLink>
              <GeoLink href="/sobre" className="block text-sm text-zinc-300 hover:text-white transition-colors">
                Institucional
              </GeoLink>
              <GeoLink
                href="/programas-beneficios/ipog-plus"
                className="block text-sm text-zinc-300 hover:text-white transition-colors"
              >
                Programas de Benefícios
              </GeoLink>
              <GeoLink
                href="/calendario-academico"
                className="block text-sm text-zinc-300 hover:text-white transition-colors"
              >
                Acadêmico
              </GeoLink>
              <GeoLink href="/faq" className="block text-sm text-zinc-300 hover:text-white transition-colors">
                Perguntas frequentes
              </GeoLink>
              <GeoLink href="/unidades" className="block text-sm text-zinc-300 hover:text-white transition-colors">
                Unidades IPOG
              </GeoLink>
              <a
                href="https://portal.ipog.edu.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-zinc-300 hover:text-white transition-colors"
              >
                Portal do Aluno
              </a>
            </div>

            {/* Coluna 4: Copyright e políticas */}
            <div className="space-y-4">
              <p className="text-zinc-400 text-xs leading-relaxed">© 2025 IPOG Todos os direitos reservados.</p>
              <div className="space-y-2">
                <button className="block text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
                  Política de Privacidade
                </button>
                <button className="block text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
                  Termos de Uso
                </button>
                <button className="block text-xs text-zinc-400 hover:text-zinc-200 transition-colors">LGPD</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
