import { Cpu } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="flex w-full max-w-3xl items-center justify-between rounded-full border border-border bg-card/70 px-5 py-3 backdrop-blur-xl"
        aria-label="Основная навигация"
      >
        <a href="#" className="flex items-center gap-2 text-foreground">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Cpu className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight">AlohaOS</span>
        </a>
        <div className="flex items-center gap-1 text-sm">
          <a
            href="#specs"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Характеристики
          </a>
          <a
            href="#stack"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Стек
          </a>
          <a
            href="https://github.com/aloha-v2/AlohaOS-Vibe-Edition"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
