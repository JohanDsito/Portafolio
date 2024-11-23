'use client';

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/johan-delgado-175540333/',
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: 'Instagram',
    href: 'https://www.instagram.com/johan._.delgado/?hl=es',
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: 'X',
    href: 'https://x.com/elonmusk',
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: 'Github',
    href: 'https://github.com/JohanDsito',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    observation: '',
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    console.log('Form submitted:', formData);

    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', observation: '' });
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="relative py-16 px-4 bg-sky-50 dark:bg-sky-800">
      <header className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-left text-gray-900 dark:text-white mb-8">
          CONTÁCTAME
        </h2>
      </header>

      <section className="max-w-7xl mx-auto grid md:grid-cols-[1fr,auto,1fr] gap-12 items-start">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <label className="relative block">
            <input
              type="text"
              placeholder="Nombre:"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 bg-teal-50/50 dark:bg-teal-800/20 border-none rounded shadow-md placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-600 text-black dark:text-white"
              required
            />
          </label>
          <label className="relative block">
            <input
              type="email"
              placeholder="Email:"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 bg-teal-50/50 dark:bg-teal-800/20 border-none rounded shadow-md placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-600 text-black dark:text-white"
              required
            />
          </label>
          <label className="relative block">
            <textarea
              placeholder="Observación:"
              value={formData.observation}
              onChange={(e) =>
                setFormData({ ...formData, observation: e.target.value })
              }
              className="w-full p-3 bg-teal-50/50 dark:bg-teal-800/20 border-none rounded shadow-md placeholder-gray-500 dark:placeholder-gray-400 min-h-[150px] focus:ring-2 focus:ring-teal-600 text-black dark:text-white"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded shadow-md hover:bg-teal-700 transition-all"
          >
            Enviar
          </button>
          {success && (
            <p className="text-teal-700 dark:text-teal-300 font-medium text-center mt-4">
              ¡Formulario enviado con éxito!
            </p>
          )}
        </form>

        <section className="flex flex-col items-start gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ir a ${link.label}`}
              className="flex items-center gap-3 text-gray-800 hover:text-teal-600 dark:text-white dark:hover:text-teal-500 transition-colors"
            >
              <span className="p-2 bg-gray-200 rounded-full hover:bg-teal-50 dark:bg-gray-700 dark:hover:bg-teal-600">
                {link.icon}
              </span>
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </section>

        <section className="text-center space-y-6">
          <figure className="relative w-56 h-56 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl -mt-20">
            <Image
              src="/profile.png"
              alt="Perfil"
              fill
              className="object-cover"
            />
          </figure>
          <blockquote className="relative text-gray-800 italic dark:text-teal-100">
            &quot;Programar es componer sinfonías digitales: cada función una nota,
            cada algoritmo una melodía que transforma el mundo.&quot;
          </blockquote>
          <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 font-mono mb-6 dark:text-gray-400">
            {'<Encoding dreams into reality>'}
          </p>
        </section>
      </section>
    </section>
  );
}
