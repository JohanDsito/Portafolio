"use client"
import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    title: "Restaurante Web",
    description: "Una página web interactiva e informativa de un restaurante diseña con HTML, CSS y JavaScript. compara diferentes precios y menus ademas contiene animaciones scroll",
    imageUrl: "/placeholder.svg",
    repoUrl: "#"
  },
  {
    title: "Sistema de Tickets",
    description: "Un simulador de tickets para eventos en el cual se asigna un numero de referencia para que el boleto no se repita de la misma manera un vencimiento para que no se pueda canjear, este proyecto fue diseño 100% en python incluida la interfaz",
    imageUrl: "/placeholder.svg",
    repoUrl: "#"
  },
  {
    title: "Sistema de Reservas",
    description: "Un sistema de reservas de habitaciones el cual asigna para sus 3 diferentes tipos de habitaciones una unica cantidad de su fecha de salida y de llegada, este fue diseñado con Java, HTML y CSS",
    imageUrl: "/placeholder.svg",
    repoUrl: "#"
  },
  {
    title: "Base de Datos de Ejercicios",
    description: "Una pagina web desarrollada con la herramienta vercel la cual se trata de un generador de rutinas de ejercicio mediante la universidad de la persona con su respectivo representación gráfica, fue hecho usando el framework Next.js y Tailwind",
    imageUrl: "/placeholder.svg",
    repoUrl: "#"
  }
]

export function ProjectsSection() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        MIS PROYECTOS
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </section>
  )
}