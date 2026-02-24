import { FadeIn } from '@/components/ui/FadeIn'
import { Droplets, DollarSign, Users, Globe, Trash2, TrendingUp } from 'lucide-react'

const stats = [
  { value: '4,2',  unit: 'milliards de tonnes', desc: 'de nourriture jetée en 2022',   icon: <Trash2    className="h-8 w-8 text-red-500"    />, color: 'text-red-600'    },
  { value: '3,9',  unit: 'milliards de litres',  desc: "d'eau gaspillée",              icon: <Droplets  className="h-8 w-8 text-blue-500"   />, color: 'text-blue-600'   },
  { value: '113',  unit: 'kg',                   desc: 'par habitant',                 icon: <Users     className="h-8 w-8 text-orange-500" />, color: 'text-orange-600' },
  { value: '40',   unit: 'milliards de dollars', desc: 'de pertes économiques',        icon: <DollarSign className="h-8 w-8 text-green-500" />, color: 'text-green-600'  },
  { value: '+900k',unit: 'tonnes',               desc: 'supplémentaires (France)',     icon: <TrendingUp className="h-8 w-8 text-yellow-500"/>, color: 'text-yellow-600' },
  { value: '1,3',  unit: 'milliards de tonnes',  desc: 'de CO₂ émis',                 icon: <Globe     className="h-8 w-8 text-purple-500" />, color: 'text-purple-600' },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi agir contre le gaspillage alimentaire ?
            </h2>
            <p className="text-lg text-gray-600">
              Chaque tonne de nourriture jetée, c&apos;est de l&apos;argent gaspillé, de l&apos;eau précieuse disparue,
              une empreinte carbone alourdie, et des émissions de CO₂ qui aggravent la crise climatique.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">{stat.icon}</div>
                <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">{stat.unit}</div>
                <div className="text-gray-500">{stat.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}