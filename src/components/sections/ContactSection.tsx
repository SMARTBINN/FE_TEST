'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, Share2, Facebook, Instagram, Twitter, CheckCircle } from 'lucide-react'

export function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState('success')
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-16">
            Contactez-nous
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                  <p className="text-gray-300">+212 6 00 00 00 00</p>
                  <p className="text-gray-400 text-sm mt-1">Du Lundi au Vendredi, 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">E-mail</h3>
                  <p className="text-gray-300">contact@bioloop.com</p>
                  <p className="text-gray-400 text-sm mt-1">Nous répondons sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Share2 className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Réseaux Sociaux</h3>
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="bg-white/5 p-3 rounded-lg hover:bg-green-600 transition-colors">
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Merci de nous avoir contactés. Notre équipe reviendra vers vous très prochainement.
                  </p>
                  <Button variant="outline" className="mt-8" onClick={() => setFormState('idle')}>
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="vous@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" isLoading={formState === 'submitting'}>
                    Envoyer le message
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BIOLOOP. Tous droits réservés.
        </div>
      </div>
    </section>
  )
}