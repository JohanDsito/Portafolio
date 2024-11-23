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
    <article className="bg-teal-600 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:scale-105 dark:bg-teal-800 dark:hover:bg-teal-700">
      <figure className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </figure>
      <section className="p-4 space-y-4">
        <p className="text-sm text-white/90 leading-relaxed dark:text-white/80">
          {description}
        </p>
        <footer>
          <Button
            variant="outline"
            className="w-full bg-teal-700 text-white hover:bg-teal-600 border-teal-500 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-500"
            onClick={() => window.open(repoUrl, '_blank')}
          >
            VIEW REPO
          </Button>
        </footer>
      </section>
    </article>
  )
}
