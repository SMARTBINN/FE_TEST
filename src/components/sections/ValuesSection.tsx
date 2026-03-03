import { FadeIn } from '@/components/ui/FadeIn'
import { Sparkles, Leaf, Heart } from 'lucide-react'

const values = [
  { title: 'Propreté',    icon: <Sparkles className="h-10 w-10 text-white" />, desc: 'Des espaces plus sains et agréables pour tous.',                                      color: 'bg-blue-500'  },
  { title: 'Durabilité',  icon: <Leaf     className="h-10 w-10 text-white" />, desc: "Une approche respectueuse de l'environnement sur le long terme.",                    color: 'bg-green-500' },
  { title: 'Solidarité',  icon: <Heart    className="h-10 w-10 text-white" />, desc: 'Soutien aux collecteurs informels et inclusion sociale.',                             color: 'bg-red-500'   },
]

export function ValuesSection() {
  return (
    <section id="valeurs" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
            <p className="text-lg text-gray-600">
              Pour nous, propreté, durabilité et solidarité vont de pair. Nous plaçons l&apos;inclusion
              au cœur de notre démarche, en soutenant les collecteurs travaillant dans l&apos;informel
              en leur offrant reconnaissance et opportunités.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-gray-50 p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${value.color} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}
                />
                <div
                  className={`inline-flex p-4 rounded-xl ${value.color} shadow-lg mb-6 transform group-hover:-translate-y-1 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 relative z-10">{value.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}