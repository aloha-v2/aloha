export function Hero() {
  return (
    <section className="flex flex-col items-center px-4 pt-40 pb-20 text-center md:pt-48 md:pb-28">
      <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
        В стадии разработки
      </span>
      <h1 className="mt-6 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
        AlohaOS
      </h1>
      <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Операционная система с гибридным ядром для архитектуры x86_64. Загружается через
        собственный UEFI-загрузчик AlohaBoot. Проект ещё не завершён и находится в активной
        разработке.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://github.com/aloha-v2/AlohaOS-Vibe-Edition"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          GitHub
        </a>
        <a
          href="#specs"
          className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          Характеристики
        </a>
      </div>
    </section>
  )
}
