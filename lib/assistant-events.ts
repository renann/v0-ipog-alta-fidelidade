export type AssistantFlow = "consultor" | "preco" | "matriz"

export function openAssistantForConsultor() {
  const event = new CustomEvent("openAssistant", {
    detail: { flow: "consultor" },
  })
  window.dispatchEvent(event)
}

export function openAssistantForPrice() {
  const event = new CustomEvent("openAssistant", {
    detail: { flow: "preco" },
  })
  window.dispatchEvent(event)
}

export function openAssistantForMatriz() {
  const event = new CustomEvent("openAssistant", {
    detail: { flow: "matriz" },
  })
  window.dispatchEvent(event)
}

export function openAssistantWithFlow(flow: AssistantFlow) {
  const event = new CustomEvent("openAssistant", {
    detail: { flow },
  })
  window.dispatchEvent(event)
}
