import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { BarChart3, TrendingUp, FileText, PieChart } from 'lucide-react'

const cards = [
  {
    icon: <FileText className="h-6 w-6 text-purple-600" />,
    title: 'Rapports Détaillés',
    desc: 'Rapports clairs sur vos pertes en Dirhams, CO₂, et litres d\'eau. Une vision financière et écologique précise.',
  },
  {
    icon: <PieChart className="h-6 w-6 text-purple-600" />,
    title: 'Analyses Comparatives',
    desc: 'Benchmarking par site, période ou type de déchet pour identifier les meilleures pratiques.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
    title: 'Recommandations RSE',
    desc: 'Conseils concrets pour réduire vos pertes et améliorer votre performance RSE globale.',
  },
]

const benefits = [
  'Mesurer précisément votre impact environnemental et économique',
  'Prendre des décisions fondées sur des données fiables',
  'Savoir exactement où et comment vos ressources sont gaspillées',
]

export function AnalyseSection() {
  return (
    <section id="analyse" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-6">
              <BarChart3 className="h-4 w-4" />
              Reporting
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Analyse et reporting environnemental
            </h2>
            <p className="text-lg text-gray-600">
              Au-delà de la simple collecte : grâce à l&apos;expertise de nos équipes
              Qualité et Data Engineers, vos données deviennent un véritable levier stratégique.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-purple-50 rounded-2xl p-8 h-full border border-purple-100">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Les bénéfices pour votre entreprise</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-purple-400" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-purple-400 mb-2">-25%</div>
                  <div className="text-sm text-gray-300">
                    de gaspillage en moyenne<br />dès la première année
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    Demander un audit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}