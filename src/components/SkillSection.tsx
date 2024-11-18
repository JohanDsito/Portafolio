"use client"
import { SkillItem } from "./SkillItem"

const skills = [
  { name: "PYTHON", icon: "/python.svg" },
{ name: "TAILWIND", icon: "/tailwind.svg" },
{ name: "GIT", icon: "/git.svg" },
{ name: "AZURE DEVOPS", icon: "/azure.svg" },
{ name: "HTML", icon: "/html.svg" },
{ name: "GITHUB", icon: "/github.svg" },
{ name: "FIGMA", icon: "/figma.svg" },
{ name: "CSS", icon: "/css.svg" }
]

export function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-teal-600/10">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        HABILIDADES
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </section>
    </section>
  )
}