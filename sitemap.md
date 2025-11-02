# Sitemap - IPOG

## Página Principal
- `/` - Home

## Busca e Catálogo
- `/busca` - Busca de cursos
- `/catalogo` - Catálogo de cursos

## Checkout
- `/checkout` - Checkout
- `/checkout/test` - Checkout Test

## Extensão
- `/extensao` - Extensão (página principal)
- `/extensao/atualizacao` - Atualização profissional
- `/extensao/gap-imediato` - Gap imediato
- `/extensao/recolocacao` - Recolocação profissional
- `/extensao/curso/gestao-projetos-ageis` - Gestão de Projetos Ágeis
- `/extensao/curso/inteligencia-artificial-aplicada` - Inteligência Artificial Aplicada
- `/extensao/curso/marketing-digital` - Marketing Digital
- `/extensao/curso/gestao-pessoas` - Gestão de Pessoas
- `/extensao/curso/compliance` - Compliance

## Graduação
- `/graduacao` - Graduação (página principal)
- `/graduacao/jovem-ingresso` - Jovem ingresso
- `/graduacao/segunda-graduacao` - Segunda graduação
- `/graduacao/transferencia` - Transferência
- `/graduacao/curso/psicologia-ead` - Psicologia EAD
- `/graduacao/curso/direito` - Direito
- `/graduacao/curso/arquitetura` - Arquitetura e Urbanismo
- `/graduacao/curso/administracao` - Administração

## Pós-Graduação
- `/pos-graduacao` - Pós-graduação (página principal)
- `/pos-graduacao/primeira-pos` - Primeira pós-graduação
- `/pos-graduacao/lifelong-learning` - Lifelong learning
- `/pos-graduacao/transicao-area` - Transição de área
- `/pos-graduacao/curso/avaliacao-psicologica` - Avaliação Psicológica
- `/pos-graduacao/curso/engenharia-estrutural` - Engenharia Estrutural e Fundações
- `/pos-graduacao/curso/intervencao-aba` - Intervenção ABA Aplicada ao TEA

## Enterprise
- `/enterprise` - Enterprise (página principal)
- `/enterprise/ceo` - CEO / Diretor Executivo
- `/enterprise/rh` - Gestora de RH

## Pós-Venda
- `/pos-venda` - Pós-venda unificada

## Institucional
- `/sobre` - Sobre nós
- `/sobre/historia` - História do IPOG
- `/sobre/governanca` - Governança
- `/sobre/estrutura` - Nossa Estrutura IPOG
- `/faq` - Perguntas Frequentes (FAQ)
- `/parceiros-internacionais` - Parcerias Internacionais
- `/unidades` - Unidades IPOG
- `/programas-beneficios/aluno-diamante` - Aluno Diamante
- `/programas-beneficios/ipog-plus` - IPOG+
- `/corpo-docente` - Corpo Docente
- `/corpo-docente/busca` - Busca de Docentes
- `/documentos-institucionais` - Documentos Institucionais
- `/editais` - Editais IPOG

## Atendimento
- `/central-atendimento` - Central de Atendimento

## Acadêmico
- `/calendario-academico` - Calendário Acadêmico

---

## Total de URLs: 52

### Estrutura por Categoria:
- **Principal:** 1 URL
- **Busca/Catálogo:** 2 URLs
- **Checkout:** 2 URLs
- **Extensão:** 9 URLs (4 páginas + 5 cursos)
- **Graduação:** 8 URLs (4 páginas + 4 cursos)
- **Pós-Graduação:** 7 URLs (4 páginas + 3 cursos)
- **Enterprise:** 3 URLs
- **Pós-Venda:** 1 URL
- **Institucional:** 13 URLs
- **Atendimento:** 1 URL
- **Acadêmico:** 1 URL

### Cursos por Vertical:
- **Extensão:** 5 cursos (Gestão de Projetos Ágeis, IA Aplicada, Marketing Digital, Gestão de Pessoas, Compliance)
- **Graduação:** 4 cursos (Psicologia EAD, Direito, Arquitetura, Administração)
- **Pós-Graduação:** 3 cursos (Avaliação Psicológica, Engenharia Estrutural, Intervenção ABA)

---

## Estrutura Padronizada de Páginas de Cursos

Todas as páginas de cursos seguem uma estrutura consistente com as seguintes seções obrigatórias:

### Seções Obrigatórias (em ordem):
1. **Hero** - Título do curso, subtítulo, CTA principal
2. **Diferenciais** - Cards com diferenciais do curso (com título H2)
3. **Métodos de Pagamento** - Formas de pagamento aceitas (com título H2)
4. **FAQ** - Perguntas frequentes (com título H2)
5. **CTA Final** - Ação final com informações de investimento

### Componentes Padronizados:
- Todos os componentes reutilizáveis aceitam prop `titulo` obrigatória
- Páginas controlam todos os títulos de seções
- Hierarquia de títulos: H1 (Hero) > H2 (Seções) > H3 (Subsections)

### Sistema de Prevenção:
- **SectionWrapper** - Componente que força títulos obrigatórios
- **GUIDELINES-SECOES.md** - Documentação de regras e boas práticas
- **validate-titles.js** - Script de validação automática
- **Comando:** `npm run validate:titles` - Executa validação

### Componentes Refatorados (aceitam prop titulo):
- RoiSection
- MetodologiaUnificada
- ResultadosComprovados
- ExperienceSection
- CicloInfo
- QuatroVerticais
- MetodosPagamento

### Última Atualização:
- Data: 2025-01-31
- Ação: Padronização completa de títulos e estrutura de seções
- Status: Todas as 12 páginas de cursos validadas e padronizadas
