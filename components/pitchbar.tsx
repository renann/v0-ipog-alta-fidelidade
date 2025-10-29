"use client"

export function Pitchbar() {
  const message =
    "Transforme sua carreira com educação de excelência • +20 anos formando líderes • Certificação MEC • Presença nacional • Metodologia inovadora"

  return (
    <div className="w-full bg-primary text-primary-foreground overflow-hidden py-2">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="inline-block px-4 text-sm font-medium">{message}</span>
        <span className="inline-block px-4 text-sm font-medium">{message}</span>
        <span className="inline-block px-4 text-sm font-medium">{message}</span>
        <span className="inline-block px-4 text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}
