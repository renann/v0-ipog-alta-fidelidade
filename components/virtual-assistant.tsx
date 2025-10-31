"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, Mic, Square, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useRouter, usePathname } from "next/navigation"

interface Message {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
  type?: "text" | "audio"
  action?: {
    label: string
    href: string
  }
}

type FlowType = "consultor" | "preco" | "matriz" | null
type FlowStep = "nome" | "telefone" | "email" | "cidade" | "complete"

interface LeadData {
  nome: string
  telefone: string
  email: string
  cidade: string
}

function AudioPlayer({ src, timestamp }: { src: string; timestamp: Date }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center gap-3 min-w-[200px]">
      <Button
        onClick={togglePlay}
        size="icon"
        variant="ghost"
        className="h-8 w-8 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 shrink-0"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>

      <div className="flex-1 space-y-1">
        <div className="h-1 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-foreground/60 transition-all"
            style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
        <div className="flex justify-between text-xs opacity-70">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
    </div>
  )
}

export function VirtualAssistant() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou o assistente virtual do IPOG. Como posso ajudá-lo hoje?",
      sender: "assistant",
      timestamp: new Date(),
      type: "text",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const [activeFlow, setActiveFlow] = useState<FlowType>(null)
  const [flowStep, setFlowStep] = useState<FlowStep>("nome")
  const [leadData, setLeadData] = useState<LeadData>({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
  })

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOpenAssistant = (event: CustomEvent<{ flow: FlowType }>) => {
      setIsOpen(true)
      setActiveFlow(event.detail.flow)
      setFlowStep("nome")
      setLeadData({ nome: "", telefone: "", email: "", cidade: "" })

      const flowMessages: Record<FlowType, string> = {
        consultor:
          "Ótimo! Vou te ajudar a falar com um consultor acadêmico. Preciso de algumas informações. Qual é o seu nome completo?",
        preco:
          "Perfeito! Vou te mostrar o valor do curso. Primeiro, preciso de algumas informações. Qual é o seu nome completo?",
        matriz:
          "Ótimo! Vou enviar a matriz curricular completa para o seu e-mail. Primeiro, preciso de algumas informações. Qual é o seu nome completo?",
      }

      if (event.detail.flow) {
        setTimeout(() => {
          addAssistantMessage(flowMessages[event.detail.flow])
        }, 500)
      }
    }

    window.addEventListener("openAssistant" as any, handleOpenAssistant)
    return () => window.removeEventListener("openAssistant" as any, handleOpenAssistant)
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const addAssistantMessage = (text: string) => {
    const assistantMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "assistant",
      timestamp: new Date(),
      type: "text",
    }
    setMessages((prev) => [...prev, assistantMessage])
  }

  const handleFlowResponse = (userInput: string) => {
    console.log("[v0] handleFlowResponse called", { userInput, flowStep, activeFlow })

    const stepQuestions: Record<FlowStep, string> = {
      nome: "Ótimo! Agora, qual é o seu telefone com DDD?",
      telefone: "Perfeito! Qual é o seu e-mail?",
      email: "Excelente! Por último, em qual cidade você mora?",
      cidade: "",
      complete: "",
    }

    const stepFields: Record<FlowStep, keyof LeadData | null> = {
      nome: "nome",
      telefone: "telefone",
      email: "email",
      cidade: "cidade",
      complete: null,
    }

    // Save current step data
    const field = stepFields[flowStep]
    if (field) {
      setLeadData((prev) => {
        const updated = { ...prev, [field]: userInput }
        console.log("[v0] Updated lead data", updated)
        return updated
      })
    }

    const nextQuestion = stepQuestions[flowStep]
    console.log("[v0] Next question for current step", { flowStep, nextQuestion })

    // Move to next step
    const steps: FlowStep[] = ["nome", "telefone", "email", "cidade", "complete"]
    const currentIndex = steps.indexOf(flowStep)
    const nextStep = steps[currentIndex + 1]
    console.log("[v0] Moving to next step", { currentIndex, nextStep })

    if (nextStep === "complete") {
      const isGraduacao = pathname.startsWith("/graduacao")
      const ctaLabel = isGraduacao ? "Inscreva-se no processo seletivo" : "Matricule-se"

      const completeMessages: Record<FlowType, { text: string; action?: { label: string; href: string } }> = {
        consultor: {
          text: "Obrigado! Recebi suas informações. Um consultor acadêmico entrará em contato em breve para ajudá-lo. 😊",
        },
        preco: {
          text: "Perfeito! Aqui está o valor do curso:\n\n💰 Investimento mensal: R$ 499,00 em 18x\nTotal: R$ 12.582,00\n\n✅ Sem taxa de inscrição\n✅ Parcelamento facilitado\n\nUm consultor entrará em contato para mais detalhes!",
          action: {
            label: ctaLabel,
            href: "/checkout",
          },
        },
        matriz: {
          text:
            "Perfeito! A matriz curricular completa será enviada para o e-mail " +
            leadData.email +
            " em instantes. Verifique sua caixa de entrada e spam. 📧",
        },
      }

      setTimeout(() => {
        const messageData = completeMessages[activeFlow!]
        const finalMessage: Message = {
          id: Date.now().toString(),
          text: messageData.text,
          sender: "assistant",
          timestamp: new Date(),
          type: "text",
          action: messageData.action,
        }
        setMessages((prev) => [...prev, finalMessage])
        setActiveFlow(null)
        setFlowStep("nome")
        console.log("[v0] Flow completed")
      }, 800)
    } else {
      setFlowStep(nextStep)
      setTimeout(() => {
        addAssistantMessage(nextQuestion)
        console.log("[v0] Added next question", nextQuestion)
      }, 800)
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")

    if (activeFlow) {
      handleFlowResponse(currentInput)
    } else {
      // Regular conversation
      setTimeout(() => {
        addAssistantMessage("Obrigado pela sua mensagem. Como posso ajudá-lo hoje?")
      }, 1000)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
        const audioUrl = URL.createObjectURL(audioBlob)

        const userMessage: Message = {
          id: Date.now().toString(),
          text: audioUrl,
          sender: "user",
          timestamp: new Date(),
          type: "audio",
        }

        setMessages((prev) => [...prev, userMessage])

        // Simulate assistant response
        setTimeout(() => {
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: "Recebi seu áudio. Um consultor acadêmico entrará em contato em breve para ajudá-lo.",
            sender: "assistant",
            timestamp: new Date(),
            type: "text",
          }
          setMessages((prev) => [...prev, assistantMessage])
        }, 1000)

        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Error accessing microphone:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleActionClick = (href: string) => {
    console.log("[v0] Action button clicked", { href })
    setIsOpen(false)
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  const shouldShowFAB = pathname !== "/busca" && pathname !== "/checkout"

  return (
    <>
      {/* Floating Action Button */}
      {shouldShowFAB && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 px-4 sm:px-6 gap-2 sm:gap-3 group"
          aria-label="Abrir assistente virtual"
        >
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap text-primary-foreground">
            Fale com seu Assistente de Navegação
          </span>
          <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
            <MessageCircle className="h-5 w-5 text-primary-foreground" />
          </div>
        </Button>
      )}

      {/* Bottom Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="h-[80vh] p-0 flex flex-col">
          <SheetHeader className="px-6 py-4 border-b shrink-0">
            <SheetTitle className="text-xl font-bold">Assistente Virtual</SheetTitle>
          </SheetHeader>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    {message.type === "audio" ? (
                      <AudioPlayer src={message.text} timestamp={message.timestamp} />
                    ) : (
                      <>
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        {message.action && (
                          <Button
                            onClick={() => handleActionClick(message.action!.href)}
                            className="w-full mt-4"
                            size="lg"
                          >
                            {message.action.label}
                          </Button>
                        )}
                      </>
                    )}
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t px-6 py-4 bg-background shrink-0">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 h-12"
                disabled={isRecording}
              />
              <Button
                onClick={isRecording ? stopRecording : startRecording}
                size="icon"
                variant={isRecording ? "destructive" : "outline"}
                className="h-12 w-12 shrink-0"
              >
                {isRecording ? <Square className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </Button>
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="h-12 w-12 shrink-0"
                disabled={!inputValue.trim() || isRecording}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            {isRecording && (
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Gravando áudio...
              </p>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
