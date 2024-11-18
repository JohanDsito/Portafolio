"use client"
interface SkillItemProps {
    name: string
    icon: string
  }
  
  export function SkillItem({ name, icon }: SkillItemProps) {
    return (
      <article className="flex flex-col items-center gap-2 transition-transform hover:scale-110">
        <figure className="w-16 h-16 rounded-full bg-teal-600/20 backdrop-blur-sm flex items-center justify-center">
          <img src={icon} alt={name} className="w-8 h-8" />
        </figure>
        <p className="text-sm font-medium text-white">{name}</p>
      </article>
    )
  }