import { Rocket, Microchip, Layers, Code2, HardDrive } from 'lucide-react'

const specs = [
  {
    icon: Rocket,
    label: 'Загрузчик',
    value: 'AlohaBoot',
    description: 'Собственный UEFI-загрузчик, разработанный специально для AlohaOS.',
  },
  {
    icon: HardDrive,
    label: 'Прошивка',
    value: 'UEFI',
    description: 'Система работает поверх современной прошивки UEFI.',
  },
  {
    icon: Microchip,
    label: 'Архитектура',
    value: 'x86_64',
    description: '64-битная архитектура — стандарт для современных ПК и ноутбуков.',
  },
  {
    icon: Code2,
    label: 'Язык',
    value: 'Rust',
    description: 'Система написана на Rust — языке с безопасной работой с памятью.',
  },
  {
    icon: Layers,
    label: 'Ядро',
    value: 'Hybrid',
    description: 'Гибридное ядро — сочетание подходов монолитного ядра и микроядра.',
  },
]

export function Specs() {
  return (
    <section id="specs" className="mx-auto w-full max-w-4xl scroll-mt-24 px-4 pb-24">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Характеристики
      </h2>
      <p className="mx-auto mt-3 max-w-md text-center text-pretty leading-relaxed text-muted-foreground">
        Технические параметры AlohaOS.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specs.map((spec) => (
          <article
            key={spec.label}
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <spec.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {spec.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-foreground">{spec.value}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{spec.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
