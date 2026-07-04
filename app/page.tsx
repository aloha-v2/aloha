import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Specs } from '@/components/specs'
import { Stack } from '@/components/stack'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Specs />
        <Stack />
      </main>
      <footer className="border-t border-border px-4 py-8">
        <p className="text-center text-sm text-muted-foreground">AlohaOS</p>
      </footer>
    </>
  )
}
