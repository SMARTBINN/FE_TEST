import { FadeIn } from '@/components/ui/FadeIn'
import { Monitor, Bell, BarChart, Users } from 'lucide-react'

const features = [
  { icon: <BarChart className="h-6 w-6 text-blue-600" />, title: 'Tableaux de bord', desc: 'Visuels et interactifs pour une compréhension immédiate.' },
  { icon: <Monitor className="h-6 w-6 text-blue-600" />, title: 'Suivi instantané', desc: 'Des volumes de déchets et de leur évolution dans le temps.' },
  { icon: <Bell className="h-6 w-6 text-blue-600" />, title: 'Alertes intelligentes', desc: 'Pour anticiper les débordements ou anomalies.' },
]

export function MonitoringSection() {
  return (
    <section id="monitoring" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Dashboard mockup */}
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-900 p-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400 font-mono flex-grow text-center">
                  dashboard.bioloop.app
                </div>
              </div>

              <div className="p-6 bg-gray-50 min-h-[400px]">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Volume Total</div>
                    <div className="text-2xl font-bold text-gray-900">1,240 kg</div>
                    <div className="text-xs text-green-500 mt-1">↑ 12% vs hier</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Bennes Actives</div>
                    <div className="text-2xl font-bold text-gray-900">24/24</div>
                    <div className="text-xs text-green-500 mt-1">100% opérationnel</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm mb-4 h-48 flex items-end justify-between px-2 pb-2 gap-2">
                  {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
                    <div key={i} className="w-full bg-blue-100 rounded-t hover:bg-blue-200 transition-colors relative group">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t transition-all duration-1000"
                        style={{ height: `${h}%` }}
                      />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Alertes Récentes</span>
                    <span className="text-xs text-blue-600 cursor-pointer">Voir tout</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm p-2 bg-red-50 text-red-700 rounded border border-red-100">
                      <Bell className="h-4 w-4" />
                      <span>Benne #12 — Niveau critique (95%)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm p-2 bg-yellow-50 text-yellow-700 rounded border border-yellow-100">
                      <Bell className="h-4 w-4" />
                      <span>Benne #08 — Maintenance requise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text content */}
          <FadeIn className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <Monitor className="h-4 w-4" />
              Application
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Monitoring & Supervision
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Avec Waste Link, gardez le contrôle total sur vos flux de déchets.
              Une supervision claire et accessible en temps réel.
            </p>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Bénéfices clés
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Visibilité complète sur vos activités',
                  'Identification des zones de gaspillage',
                  'Outil collaboratif pour toutes les équipes',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}