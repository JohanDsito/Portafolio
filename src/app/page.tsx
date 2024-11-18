"use client"
import '@/src/app/globals.css'
import { ContactSection } from "@/src/components/ContactSection"
import { ExperienceSection } from "@/src/components/ExperienceSection"
import { MainContent } from "@/src/components/MainContent"
import { Navigation } from "@/src/components/Navigation"
import { PersonalExperiences } from "@/src/components/PersonalExperiences"
import { ProjectsSection } from "@/src/components/ProjectSection"
import { SkillsSection } from "@/src/components/SkillSection"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-700">
      <Navigation />
      <MainContent />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <PersonalExperiences />
      <ContactSection />
    </main>
  )
}