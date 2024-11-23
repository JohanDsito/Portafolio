"use client"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { CertificateCard } from "./CertificateCard"

const certificates = [
  {
    title: "Bootcamp de programación nivel intermedio enfocado en las estructuras de datos y manejo de base de datos con una duración de 159 horas",
    certificateUrl: "https://drive.google.com/file/d/1995axTqfowjICSWuBzwj87zMjY9CLTEE/view?usp=sharing"
  },
  {
    title: "Certificado por IBM titulado 'Python 101 for Data Science'",
    certificateUrl: "https://drive.google.com/file/d/1xGhOYTgbYEnRq-7GWwiqLDn-dsy48BgY/view?usp=sharing"
  },
  {
    title: "Formación Técnica en Gestión de recursos humanos Instituto técnico comfamiliar",
    certificateUrl: "#"
  },
  {
    title: "Certificado lógica de programación institución 'egg' de argentina",
    certificateUrl: "#"
  }
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative py-16 px-4 bg-sky-50 dark:bg-sky-800">
      <section className="py-16 px-4 bg-teal-700 dark:bg-teal-900 -mt-16">
        <header className="max-w-7xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-center text-white dark:text-teal-100 mb-12">
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
              className="bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-500/30 gap-2 dark:bg-teal-800/20 dark:text-teal-300 dark:hover:bg-teal-800/30 dark:border-teal-800/30"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </Button>
          </section>
        </section>
      </section>
    </section>
  )
}
