const rows = [
  { key: 'Bootloader', value: 'AlohaBoot (Custom UEFI Bootloader)' },
  { key: 'Firmware', value: 'UEFI' },
  { key: 'Architecture', value: 'x86_64' },
  { key: 'Language', value: 'Rust' },
  { key: 'Kernel', value: 'Hybrid' },
]

export function Stack() {
  return (
    <section id="stack" className="mx-auto w-full max-w-3xl scroll-mt-24 px-4 pb-28">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Технический стек
      </h2>
      <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
        <dl>
          {rows.map((row, i) => (
            <div
              key={row.key}
              className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                i > 0 ? 'border-t border-border' : ''
              }`}
            >
              <dt className="text-sm font-medium text-muted-foreground">{row.key}</dt>
              <dd className="font-mono text-sm text-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
