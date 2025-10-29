import { Button } from "@/components/ui/button"

export function MentorshipSection() {
  return (
    <section className="w-full px-4 py-8 bg-foreground text-background">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-sm">Tenha acesso direto a profissionais experientes que podem orientar sua carreira</p>
          <Button variant="secondary" className="w-full max-w-xs">
            Mentorias na IPOG
          </Button>
        </div>
      </div>
    </section>
  )
}
