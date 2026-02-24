import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { WasteCollectionSection } from '@/components/sections/WasteCollectionSection'
import { MonitoringSection } from '@/components/sections/MonitoringSection'
import { AnalyseSection } from '@/components/sections/AnalyseSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <WasteCollectionSection />
      <MonitoringSection />
      <AnalyseSection />
      <StatsSection />
      <ValuesSection />
      <PartnersSection />
      <ContactSection />
    </main>
  )
}