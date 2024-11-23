'use client';

import Image from 'next/image';

interface SkillItemProps {
  name: string;
  icon: string;
}

export function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <article className="flex flex-col items-center text-center transition-transform hover:scale-110">
      <Image
        src={icon}
        alt={`Ícono de ${name}`}
        width={64} // Equivalente a w-16 (16 * 4)
        height={64} // Equivalente a h-16 (16 * 4)
        className="mb-4 transition-all duration-300 hover:shadow-lg"
      />
      <p className="text-lg font-medium text-black dark:text-white">{name}</p>
    </article>
  );
}

const skills = [
  { name: "PYTHON", icon: "/python.svg" },
  { name: "TAILWIND", icon: "/tailwind.svg" },
  { name: "GIT", icon: "/git.svg" },
  { name: "AZURE DEVOPS", icon: "/azure.svg" },
  { name: "HTML", icon: "/html.svg" },
  { name: "GITHUB", icon: "/github.svg" },
  { name: "FIGMA", icon: "/figma.svg" },
  { name: "CSS", icon: "/css.svg" },
];

export function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 -mt-16">
      <h2 className="text-4xl font-bold text-center text-teal-700 dark:text-teal-300 mb-12">
        HABILIDADES
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </section>
    </section>
  );
}
