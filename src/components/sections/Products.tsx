import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { Wifi, Smartphone } from 'lucide-react'

export function Products() {
  return (
    <section id="produits" className="py-24 bg-green-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Produits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des outils technologiques innovants pour connecter et simplifier votre gestion des déchets.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Waste Loop */}
          <FadeIn delay={0.1}>
            <Card hoverEffect className="h-full p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Wifi className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Waste Loop</h3>
              </div>

              <div className="mb-8 flex-grow">
                <div className="aspect-video bg-green-100 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-green-200/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Wifi className="h-16 w-16 text-green-600/50" />
                  <span className="absolute bottom-2 right-2 text-xs font-mono text-green-800 bg-white/80 px-2 py-1 rounded">
                    IoT Sensor
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Avec Waste Loop, découvrez nos poubelles durables et connectées,
                  une innovation pour vous aider à atteindre vos objectifs de réduction de coût.
                </p>
              </div>

              <Button className="w-full">Voir prototype</Button>
              <p className="text-xs text-center mt-3 text-gray-500">Redirige vers nos modèles prototype</p>
            </Card>
          </FadeIn>

          {/* Waste Link */}
          <FadeIn delay={0.2}>
            <Card hoverEffect className="h-full p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Waste Link</h3>
              </div>

              <div className="mb-8 flex-grow">
                <div className="aspect-video bg-blue-100 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-200/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Smartphone className="h-16 w-16 text-blue-600/50" />
                  <span className="absolute bottom-2 right-2 text-xs font-mono text-blue-800 bg-white/80 px-2 py-1 rounded">
                    App Interface
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Avec Waste Link, simplifiez le management de vos opérations.
                  Utilisez les données pour vous améliorer et créer de la valeur en recyclant vos déchets.
                </p>
              </div>

              <Button variant="outline" className="w-full">Voir une vidéo démonstrante</Button>
              <p className="text-xs text-center mt-3 text-gray-500">Redirige vers une vidéo une fois prête</p>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}