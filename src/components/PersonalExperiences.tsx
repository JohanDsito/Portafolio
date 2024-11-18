"use client"
import Image from "next/image"

interface ExperienceImage {
  src: string
  alt: string
}

const experiences: ExperienceImage[] = [
  {
    src: "/raice.png",
    alt: "Performance en escenario con iluminación"
  },
  {
    src: "/galera2.png",
    alt: "Tocando la batería en evento"
  },
  {
    src: "/galera1.png",
    alt: "Grupo musical en evento"
  },
  {
    src: "/placeholder.svg",
    alt: "Evento Capital"
  }
]

export function PersonalExperiences() {
  return (
    <section className="relative bg-teal-700 py-16 px-4">
      <header className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          EXPERIENCIAS PERSONALES
        </h2>
      </header>

      <section className="max-w-7xl mx-auto">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {experiences.map((exp, index) => (
            <figure 
              key={index} 
              className="relative aspect-video overflow-hidden rounded-lg transform transition-transform hover:scale-105"
            >
              <Image
                src={exp.src}
                alt={exp.alt}
                fill
                className="object-cover"
              />
            </figure>
          ))}
        </section>

        <article className="max-w-3xl mx-auto text-center">
          <p className="text-white/90 leading-relaxed">
            En mi vida personal la música ah sido la encargada de llevarme por un camino distinto en el cual puedo expresarme libremente y crear a base de ritmos y melodías distintos tipos de pensamientos los cuales no pueden ser simplemente expresados con palabras, por lo cual es mi manera de expresarme y sentirme en un lugar seguro, mas allá de un solo enfoque en el mundo del software, salir de el no esta mal y es aquello lo que nos hace personas
          </p>
        </article>
      </section>

      <footer className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </footer>
    </section>
  )
}