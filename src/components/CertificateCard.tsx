"use client"
import { Button } from "@/components/ui/button"

interface CertificateCardProps {
  title: string
  certificateUrl: string
}

export function CertificateCard({ title, certificateUrl }: CertificateCardProps) {
  return (
    <article className="group relative transform perspective-1000 transition-transform duration-300 hover:scale-105">
      <section className="bg-teal-400/20 backdrop-blur-sm p-6 rounded-lg shadow-lg transform-style-3d rotate-x-12 group-hover:rotate-x-0 transition-transform duration-300">
        <h3 className="text-white text-sm mb-4 min-h-[60px]">
          {title}
        </h3>
        <footer>
          <Button
            variant="outline"
            className="w-full bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-500/30"
            onClick={() => window.open(certificateUrl, '_blank')}
          >
            LINK CERTIFICADO
          </Button>
        </footer>
      </section>
    </article>
  )
}