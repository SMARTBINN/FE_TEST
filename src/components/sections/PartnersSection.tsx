import { FadeIn } from '@/components/ui/FadeIn'

export function PartnersSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Nos partenaires</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">

            <div className="border-2 border-black p-4 rounded-lg">
              <div className="text-3xl font-black tracking-tighter flex items-center gap-1">
                <span>alx</span>
                <span className="text-sm font-normal tracking-widest uppercase ml-1">Ventures</span>
              </div>
            </div>

            <div className="text-2xl font-bold text-gray-400 border-2 border-gray-200 p-4 rounded-lg">
              NGDS
            </div>

            <div className="text-2xl font-bold text-gray-400 border-2 border-gray-200 p-4 rounded-lg">
              UMP
            </div>

            <div className="text-sm text-gray-400 italic">+ UM6P etc (à venir ...)</div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}