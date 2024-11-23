import Image from "next/image";

export function MainContent() {
  return (
    <section id="sobre-mi" className="relative py-16 overflow-hidden bg-teal-600 dark:bg-teal-900">
      <article className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <section className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <header className="relative z-10 mb-8 lg:mb-0 lg:-mt-20 lg:ml-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-teal-100 mb-4">
              SOBRE MI
            </h1>
            <p className="text-xl text-teal-100 dark:text-teal-300 leading-relaxed mb-8 max-w-2xl">
              Hola, Soy Johan Delgado, estudiante de Ingeniería de Software, apasionado
              por el desarrollo de aplicaciones y la optimización de procesos. Mi
              objetivo es seguir creciendo como desarrollador y crear soluciones que
              mejoren la experiencia del usuario y el rendimiento de los sistemas.
            </p>
          </header>
          <figure className="relative lg:mt-0 flex justify-center">
            <figcaption className="sr-only">Foto de perfil</figcaption>
            <figure
              className="relative mx-auto transform translate-x-8 translate-y-[-20px]"
              style={{
                width: "250px",
                height: "300px",
              }}
            >
              <Image
                src="/foto_perfil.png"
                alt="Profile photo"
                width={300}
                height={300}
                className="rounded-full shadow-xl"
                priority
              />
            </figure>
          </figure>
        </section>
      </article>
      <section className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-40">
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
      </section>
    </section>
  );
}
