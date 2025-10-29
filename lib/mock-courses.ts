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
    price: 24000.0,
    enrollmentValue: 500.0,
    monthlyPrice: 499.0,
    unit: "Brasília",
  },
  administracao: {
    id: "administracao",
    name: "Administração",
    modality: "EAD",
    duration: "4 anos",
    type: "Graduação",
    price: 18000.0,
    enrollmentValue: 450.0,
    monthlyPrice: 399.0,
    unit: "São Paulo",
  },
  direito: {
    id: "direito",
    name: "Direito",
    modality: "Presencial",
    duration: "5 anos",
    type: "Graduação",
    price: 32000.0,
    enrollmentValue: 600.0,
    monthlyPrice: 599.0,
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
}

export function getCourse(courseId: string): Course | null {
  return MOCK_COURSES[courseId] || null
}

export function getCoursesByType(type: CourseType): Course[] {
  return Object.values(MOCK_COURSES).filter((course) => course.type === type)
}
