"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Stats() {
  const { lang, tr } = useLang()
  const label = lang === "ge" ? "font-georgian" : "font-sans"

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 text-center sm:grid-cols-3">
        <div>
          <p className="font-serif text-5xl font-bold text-purple sm:text-6xl">
            <Counter target={16} suffix="+" />
          </p>
          <p className={cn("mt-2 text-sm uppercase tracking-wider text-text-mid", label)}>{tr("stats.products")}</p>
        </div>
        <div>
          <p className="font-serif text-5xl font-bold text-purple sm:text-6xl">
            <Counter target={100} suffix="%" />
          </p>
          <p className={cn("mt-2 text-sm uppercase tracking-wider text-text-mid", label)}>{tr("stats.quality")}</p>
        </div>
        <div>
          <p className="font-serif text-5xl font-bold text-purple sm:text-6xl">{tr("stats.fast")}</p>
          <p className={cn("mt-2 text-sm uppercase tracking-wider text-text-mid", label)}>{tr("stats.delivery")}</p>
        </div>
      </div>
    </section>
  )
}
