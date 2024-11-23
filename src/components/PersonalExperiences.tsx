'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ExperienceImage {
  src: string;
  alt: string;
}

const experiences: ExperienceImage[] = [
  {
    src: '/galeras1.png',
    alt: 'Performance musical en escenario',
  },
  {
    src: '/galeras2.png',
    alt: 'Tocando batería en evento',
  },
  {
    src: '/raices.png',
    alt: 'Grupo musical en evento',
  },
  {
    src: '/runas.jpg',
    alt: 'Logo Capital en evento',
  },
];

export function PersonalExperiences() {
  return (
    <section id="experiencias" className="relative py-16 px-4 bg-sky-50 dark:bg-slate-800 -mt-20">
      <section className="relative bg-teal-700 dark:bg-teal-900 py-16 px-4 overflow-hidden -mt-52">
        <header className="max-w-7xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-center text-white dark:text-teal-300">
            EXPERIENCIAS PERSONALES
          </h2>
        </header>

        <section className="max-w-4xl mx-auto">
          <article className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={16}
              breakpoints={{
                480: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="mb-8"
            >
              {experiences.map((exp, index) => (
                <SwiperSlide key={index}>
                  <figure className="relative aspect-[4/3] overflow-hidden rounded-lg border-4 border-white/10">
                    <Image
                      src={exp.src}
                      alt={exp.alt}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </article>

          <article className="max-w-3xl mx-auto text-center">
            <p className="text-white/90 dark:text-white/80 leading-relaxed">
              En mi vida personal la música ah sido la encargada de llevarme por
              un camino distinto en el cual puedo expresarme libremente y crear a
              base de ritmos y melodías distintos tipos de pensamientos los cuales
              no pueden ser simplemente expresados con palabras, por lo cual es mi
              manera de expresarme y sentirme en un lugar seguro, mas allá de un
              solo enfoque en el mundo del software, salir de el no esta mal y es
              aquello lo que nos hace personas.
            </p>
          </article>
        </section>

        <footer className="absolute -bottom-32 left-0 right-0 h-48 md:h-56 lg:h-64">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#f0f9ff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </footer>
      </section>
    </section>
  );
}
