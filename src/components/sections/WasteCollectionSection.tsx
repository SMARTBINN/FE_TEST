import { FadeIn } from '@/components/ui/FadeIn'
import { CheckCircle, Trash2 } from 'lucide-react'

const features = [
  'Équipés de capteurs IoT pour mesurer en temps réel le niveau de remplissage, le poids, et transmettre des données précieuses.',
  "Alimentées par IA pour analyser les flux de déchets, détecter des schémas récurrents et générer des insights stratégiques.",
  'Personnalisables (formats variés) : petites, moyennes ou grandes, selon le volume attendu.',
]

const benefits = [
  'Une collecte optimisée et moins coûteuse.',
  'Des informations concrètes pour réduire le gaspillage.',
  "Un outil qui s'adapte à vos besoins spécifiques.",
]

export function WasteCollectionSection() {
  return (
    <section id="collecte" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-6">
              <Trash2 className="h-4 w-4" />
              Service
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tri et Collecte Intelligente des déchets
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Avec Waste Loop, nous proposons une gamme flexible de bacs connectés,
              conçus pour s&apos;adapter à chaque besoin.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-4">Ce que vous gagnez :</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-green-800">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-green-100 rounded-full opacity-50 blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col items-center justify-center border border-gray-100">

                <div className="w-48 h-48 bg-green-50 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 border-4 border-green-200 rounded-full border-t-green-500 animate-spin-slow" />
                  <Trash2 className="h-20 w-20 text-green-600" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Benne Connectée</h3>
                  <p className="text-gray-500 text-sm">Transmission de données en temps réel</p>
                </div>

                <div className="mt-8 w-full space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Remplissage</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[85%]" />
                  </div>

                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-gray-600">Batterie</span>
                    <span className="font-bold text-green-600">92%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[92%]" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}