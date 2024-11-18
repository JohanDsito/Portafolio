'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
}

const socialLinks: SocialLink[] = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "#"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    href: "#"
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "X",
    href: "#"
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: "Github",
    href: "#"
  }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    observation: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-teal-600/20 to-transparent">
      <header className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center text-black mb-2">
          CONTACTAME
        </h2>
      </header>

      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Nombre:"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-teal-50/50 border-teal-100"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email:"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-teal-50/50 border-teal-100"
            />
          </div>
          <div>
            <Textarea
              placeholder="Observación:"
              value={formData.observation}
              onChange={(e) => setFormData({ ...formData, observation: e.target.value })}
              className="min-h-[150px] bg-teal-50/50 border-teal-100"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          >
            Enviar
          </Button>
        </form>

        {/* Social Links */}
        <section className="flex flex-col items-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-800 hover:text-teal-600 transition-colors"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </section>

        {/* Profile Section */}
        <section className="text-center space-y-6">
          <figure className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </figure>
          <blockquote className="text-teal-800 italic">
            "Programar es componer sinfonías digitales: cada función una nota, cada algoritmo una melodía que transforma el mundo."
          </blockquote>
          <p className="text-sm text-teal-600 font-mono">
            {'<Encoding dreams into reality>'}
          </p>
        </section>
      </section>
    </section>
  )
}