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
    name: "Psicologia EAD",
    modality: "EAD",
    duration: "5 anos",
    type: "Graduação",
    price: 24000.0,
    enrollmentValue: 100.0,
    monthlyPrice: 499.0,
    unit: "Brasília",
  },
  direito: {
    id: "direito",
    name: "Direito",
    modality: "Presencial",
    duration: "5 anos",
    type: "Graduação",
    price: 32000.0,
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
    price: 35000.0,
    enrollmentValue: 100.0,
    monthlyPrice: 649.0,
    unit: "São Paulo",
  },

  // Pós-Graduação
  "avaliacao-psicologica": {
    id: "avaliacao-psicologica",
    name: "Avaliação Psicológica",
    modality: "EAD",
    duration: "18 meses",
    type: "Pós-Graduação",
    price: 8982.0,
    enrollmentValue: 100.0,
    monthlyPrice: 499.0,
    unit: "Brasília",
    restricted: true,
    requiredDegree: "Psicologia",
    moduleLimit: 4,
  },
  "engenharia-estrutural": {
    id: "engenharia-estrutural",
    name: "Engenharia Estrutural e Fundações",
    modality: "Híbrido",
    duration: "18 meses",
    type: "Pós-Graduação",
    price: 9600.0,
    enrollmentValue: 100.0,
    monthlyPrice: 549.0,
    unit: "São Paulo",
    restricted: true,
    requiredDegree: "Engenharia",
    moduleLimit: 4,
  },
  "intervencao-aba": {
    id: "intervencao-aba",
    name: "Intervenção ABA Aplicada ao TEA",
    modality: "EAD",
    duration: "12 meses",
    type: "Pós-Graduação",
    price: 6500.0,
    enrollmentValue: 100.0,
    monthlyPrice: 449.0,
    unit: "Brasília",
    moduleLimit: 4,
  },

  // Extensão
  "gestao-projetos-ageis": {
    id: "gestao-projetos-ageis",
    name: "Gestão de Projetos Ágeis",
    modality: "EAD",
    duration: "6 meses",
    type: "Extensão",
    price: 3600.0,
    enrollmentValue: 100.0,
    monthlyPrice: 599.0,
    unit: "Online",
  },
  "inteligencia-artificial-aplicada": {
    id: "inteligencia-artificial-aplicada",
    name: "Inteligência Artificial Aplicada",
    modality: "EAD",
    duration: "4 meses",
    type: "Extensão",
    price: 2400.0,
    enrollmentValue: 100.0,
    monthlyPrice: 549.0,
    unit: "Online",
  },
  "marketing-digital": {
    id: "marketing-digital",
    name: "Marketing Digital",
    modality: "EAD",
    duration: "5 meses",
    type: "Extensão",
    price: 3000.0,
    enrollmentValue: 100.0,
    monthlyPrice: 579.0,
    unit: "Online",
  },
}

export function getCourse(courseId: string): Course | null {
  return MOCK_COURSES[courseId] || null
}

export function getCoursesByType(type: CourseType): Course[] {
  return Object.values(MOCK_COURSES).filter((course) => course.type === type)
}
