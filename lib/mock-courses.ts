export type CourseType = "Graduação" | "Pós-Graduação" | "Extensão"

export interface Course {
  id: string
  name: string
  modality: "EAD" | "Presencial" | "Híbrido"
  duration: string
  type: CourseType
  price: number
  enrollmentValue: number
  monthlyPrice: number
  unit: string
  restricted?: boolean
  requiredDegree?: string
  moduleLimit?: number
}

export const MOCK_COURSES: Record<string, Course> = {
  // Graduação
  "psicologia-ead": {
    id: "psicologia-ead",
    name: "Psicologia",
    modality: "EAD",
    duration: "5 anos",
    type: "Graduação",
    price: 29940.0,
    enrollmentValue: 100.0,
    monthlyPrice: 499.0,
    unit: "Brasília",
  },
  administracao: {
    id: "administracao",
    name: "Administração",
    modality: "EAD",
    duration: "4 anos",
    type: "Graduação",
    price: 26352.0,
    enrollmentValue: 100.0,
    monthlyPrice: 549.0,
    unit: "São Paulo",
  },
  direito: {
    id: "direito",
    name: "Direito",
    modality: "Presencial",
    duration: "5 anos",
    type: "Graduação",
    price: 35940.0,
    enrollmentValue: 100.0,
    monthlyPrice: 599.0,
    unit: "Brasília",
  },
  arquitetura: {
    id: "arquitetura",
    name: "Arquitetura e Urbanismo",
    modality: "Presencial",
    duration: "5 anos",
    type: "Graduação",
    price: 38940.0,
    enrollmentValue: 100.0,
    monthlyPrice: 649.0,
    unit: "Brasília",
  },

  // Pós-Graduação
  "mba-gestao": {
    id: "mba-gestao",
    name: "MBA em Gestão Estratégica de Negócios",
    modality: "EAD",
    duration: "18 meses",
    type: "Pós-Graduação",
    price: 8982.0,
    enrollmentValue: 500.0,
    monthlyPrice: 499.0,
    unit: "Brasília",
    moduleLimit: 4,
  },
  "mba-marketing": {
    id: "mba-marketing",
    name: "MBA em Marketing Digital",
    modality: "Híbrido",
    duration: "12 meses",
    type: "Pós-Graduação",
    price: 7200.0,
    enrollmentValue: 400.0,
    monthlyPrice: 599.0,
    unit: "São Paulo",
    moduleLimit: 4,
  },
  "especializacao-psicologia": {
    id: "especializacao-psicologia",
    name: "Especialização em Psicologia Clínica",
    modality: "EAD",
    duration: "12 meses",
    type: "Pós-Graduação",
    price: 6500.0,
    enrollmentValue: 350.0,
    monthlyPrice: 549.0,
    unit: "Brasília",
    restricted: true,
    requiredDegree: "Psicologia",
    moduleLimit: 4,
  },
  "avaliacao-psicologica": {
    id: "avaliacao-psicologica",
    name: "Avaliação Psicológica",
    modality: "Híbrido",
    duration: "18 meses",
    type: "Pós-Graduação",
    price: 7282.0,
    enrollmentValue: 100.0,
    monthlyPrice: 399.0,
    unit: "Brasília",
    restricted: true,
    requiredDegree: "Psicologia",
    moduleLimit: 4,
  },
  "engenharia-estrutural": {
    id: "engenharia-estrutural",
    name: "Engenharia Estrutural",
    modality: "Híbrido",
    duration: "12 meses",
    type: "Pós-Graduação",
    price: 5488.0,
    enrollmentValue: 100.0,
    monthlyPrice: 449.0,
    unit: "Brasília",
    moduleLimit: 4,
  },
  "intervencao-aba": {
    id: "intervencao-aba",
    name: "Intervenção ABA para Autismo e Deficiência Intelectual",
    modality: "Híbrido",
    duration: "12 meses",
    type: "Pós-Graduação",
    price: 5248.0,
    enrollmentValue: 100.0,
    monthlyPrice: 429.0,
    unit: "Brasília",
    moduleLimit: 4,
  },

  // Extensão
  lideranca: {
    id: "lideranca",
    name: "Liderança e Gestão de Equipes",
    modality: "EAD",
    duration: "6 meses",
    type: "Extensão",
    price: 3600.0,
    enrollmentValue: 200.0,
    monthlyPrice: 599.0,
    unit: "Online",
  },
  "excel-avancado": {
    id: "excel-avancado",
    name: "Excel Avançado para Negócios",
    modality: "EAD",
    duration: "3 meses",
    type: "Extensão",
    price: 1800.0,
    enrollmentValue: 150.0,
    monthlyPrice: 549.0,
    unit: "Online",
  },
  comunicacao: {
    id: "comunicacao",
    name: "Comunicação Assertiva",
    modality: "Presencial",
    duration: "4 meses",
    type: "Extensão",
    price: 2400.0,
    enrollmentValue: 180.0,
    monthlyPrice: 599.0,
    unit: "Brasília",
  },
  compliance: {
    id: "compliance",
    name: "Compliance e Governança Corporativa",
    modality: "EAD",
    duration: "6 meses",
    type: "Extensão",
    price: 2094.0,
    enrollmentValue: 100.0,
    monthlyPrice: 349.0,
    unit: "Online",
  },
  "gestao-pessoas": {
    id: "gestao-pessoas",
    name: "Gestão de Pessoas",
    modality: "EAD",
    duration: "40 horas",
    type: "Extensão",
    price: 1794.0,
    enrollmentValue: 100.0,
    monthlyPrice: 299.0,
    unit: "Online",
  },
  "gestao-projetos-ageis": {
    id: "gestao-projetos-ageis",
    name: "Gestão de Projetos Ágeis",
    modality: "EAD",
    duration: "40 horas",
    type: "Extensão",
    price: 1674.0,
    enrollmentValue: 100.0,
    monthlyPrice: 279.0,
    unit: "Online",
  },
  "inteligencia-artificial-aplicada": {
    id: "inteligencia-artificial-aplicada",
    name: "Inteligência Artificial Aplicada",
    modality: "EAD",
    duration: "80 horas",
    type: "Extensão",
    price: 1196.0,
    enrollmentValue: 100.0,
    monthlyPrice: 299.0,
    unit: "Online",
  },
  "marketing-digital": {
    id: "marketing-digital",
    name: "Marketing Digital",
    modality: "EAD",
    duration: "3 meses",
    type: "Extensão",
    price: 747.0,
    enrollmentValue: 100.0,
    monthlyPrice: 249.0,
    unit: "Online",
  },
}

export function getCourse(courseId: string): Course | null {
  return MOCK_COURSES[courseId] || null
}

export function getCoursesByType(type: CourseType): Course[] {
  return Object.values(MOCK_COURSES).filter((course) => course.type === type)
}
