'use client';

interface SkillItemProps {
  name: string;
  icon: string;
}

export function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <article className="flex flex-col items-center gap-2 transition-transform hover:scale-110 hover:shadow-xl dark:hover:scale-105">
      <figure
        className="w-16 h-16 rounded-full backdrop-blur-sm flex items-center justify-center bg-sky-100 dark:bg-sky-700"
        role="img"
        aria-label={`Icono de ${name}`}
      >
        <img src={icon} alt={name} className="w-8 h-8" />
      </figure>
      <p className="text-sm font-medium text-white dark:text-gray-200">{name}</p>
    </article>
  );
}
