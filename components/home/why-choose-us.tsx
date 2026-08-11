"use client"

import { Activity, Layers, MapPin } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function WhyChooseUs() {
  const { lang, tr } = useLang()
  const geFont = lang === "ge" ? "font-georgian" : "font-serif"
  const body = lang === "ge" ? "font-georgian" : "font-sans"

  const cards = [
    { icon: Activity, title: "why.ortho.title", body: "why.ortho.body" },
    { icon: Layers, title: "why.materials.title", body: "why.materials.body" },
    { icon: MapPin, title: "why.made.title", body: "why.made.body" },
  ]

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className={cn("mb-14 text-center text-3xl font-bold text-text-dark sm:text-4xl", geFont)}>
            {tr("why.title")}
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-transparent bg-white p-8 shadow-[0_6px_30px_rgba(26,26,26,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(187,0,255,0.12)]">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-purple transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-light text-purple">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className={cn("mb-2 text-xl font-semibold text-text-dark", geFont)}>{tr(c.title)}</h3>
                <p className={cn("leading-relaxed text-text-mid", body)}>{tr(c.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
