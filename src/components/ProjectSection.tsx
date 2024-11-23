'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const projects = [
  {
    title: 'Restaurante Web',
    description:
      'Una página web interactiva e informativa de un restaurante diseñada con HTML, CSS y JavaScript. Compara diferentes precios y menús, además contiene animaciones de scroll.',
    imageUrl: '/restaurante.png',
    repoUrl: 'https://github.com/JohanDsito/Restaurante_web',
  },
  {
    title: 'Sistema de Tickets',
    description:
      'Un simulador de tickets para eventos en el cual se asigna un número de referencia para que el boleto no se repita, con vencimiento para evitar canje. Este proyecto fue diseñado 100% en Python, incluida la interfaz.',
    imageUrl: '/sistema_tickets.png',
    repoUrl: 'https://github.com/JohanDsito/Sistema_Tickets',
  },
  {
    title: 'Sistema de Reservas',
    description:
      'Un sistema de reservas de habitaciones que asigna una única cantidad por tipo de habitación, con fechas de entrada y salida. Fue diseñado con Java, HTML y CSS.',
    imageUrl: '/reserva_habitaciones.png',
    repoUrl: 'https://github.com/JohanDsito/Reserva_Hoteles',
  },
  {
    title: 'Base de Datos de Ejercicios',
    description:
      'Una página web desarrollada con Vercel que genera rutinas de ejercicio mediante la intensidad de la persona, con representación gráfica. Utiliza Next.js y Tailwind.',
    imageUrl: '/rutinas.png',
    repoUrl: 'https://github.com/JohanDsito/Rutina_ejercicio',
  },
];

export function ProjectsSection() {
  return (
    <section id="mis-proyectos" className="relative py-16 px-4 bg-sky-50 dark:bg-sky-900 transition-colors">
      <section className="py-16 px-4 bg-white dark:bg-sky-800 -mt-24 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
          MIS PROYECTOS
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <article className="bg-teal-500 rounded-lg overflow-hidden transition-transform hover:scale-105 dark:bg-teal-700">
                <figure className="relative aspect-video">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-teal-80 mb-4 text-white dark:text-gray-300">
                    {project.description}
                  </p>
                  <a
                    href={project.repoUrl}
                    className="inline-flex items-center justify-center px-4 py-2 bg-teal-600 text-white font-medium rounded-md shadow-md hover:bg-teal-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:bg-teal-500 dark:hover:bg-teal-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver el repositorio de ${project.title}`}
                  >
                    Ver en GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
