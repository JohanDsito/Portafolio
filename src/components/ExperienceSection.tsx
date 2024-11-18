"use client"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { CertificateCard } from "./CertificateCard"

const certificates = [
  {
    title: "Bootcamp de programación nivel intermedio enfocado en los estándares de datos través de datos con una duración de 159 horas",
    certificateUrl: "#"
  },
  {
    title: "Certificado por IBM titulado 'Python 101 for Data Science'",
    certificateUrl: "#"
  },
  {
    title: "Formación Técnica en Gestión de recursos humanos Instituto técnico comfamiliar",
    certificateUrl: "#"
  },
  {
    title: "Certificado lógica de programación institución Soy de sistemas",
    certificateUrl: "#"
  }
]

export function ExperienceSection() {
  return (
    <section className="py-16 px-4 bg-teal-700">
      <header className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          EXPERIENCIA ACADÉMICA Y LABORAL
        </h2>
      </header>

      <section className="max-w-7xl mx-auto grid gap-8 mb-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              certificateUrl={cert.certificateUrl}
            />
          ))}
        </section>

        <section className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-500/30 gap-2"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="w-4 h-4" />
            DOWNLOAD CV
          </Button>
        </section>
      </section>
    </section>
  )
}