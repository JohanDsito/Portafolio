'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, imageUrl, repoUrl }: ProjectCardProps) {
  return (
    <article className="bg-teal-600/20 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:scale-105">
      <figure className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </figure>
      <section className="p-4 space-y-4">
        <p className="text-sm text-white/90 leading-relaxed">
          {description}
        </p>
        <footer>
          <Button
            variant="outline"
            className="w-full bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-500/30"
            onClick={() => window.open(repoUrl, '_blank')}
          >
            VIEW REPO
          </Button>
        </footer>
      </section>
    </article>
  )
}