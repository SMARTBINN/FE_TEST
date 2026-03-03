import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { Trash2, Monitor, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Tri et Collecte Intelligente des déchets',
    icon: <Trash2 className="h-10 w-10 text-green-600" />,
    color: 'bg-green-50',
    link: '#collecte',
  },
  {
    title: 'Monitoring & Supervision',
    icon: <Monitor className="h-10 w-10 text-blue-600" />,
    color: 'bg-blue-50',
    link: '#monitoring',
  },
  {
    title: 'Analyse et reporting environnemental',
    icon: <BarChart3 className="h-10 w-10 text-purple-600" />,
    color: 'bg-purple-50',
    link: '#analyse',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour optimiser votre gestion des déchets,
              de la collecte à l&apos;analyse des données.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card hoverEffect className="h-full flex flex-col p-8 text-center items-center">
                <div className={`p-4 rounded-2xl ${service.color} mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex-grow">
                  {service.title}
                </h3>
                <Button variant="secondary" className="w-full group">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 italic">
          * Le détail de chaque service s&apos;ouvre dans une section dédiée ci-dessous
        </div>
      </div>
    </section>
  )
}