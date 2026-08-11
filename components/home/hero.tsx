"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { WHATSAPP_URL } from "@/lib/products"
import { cn } from "@/lib/utils"

const Mattress3D = dynamic(() => import("./mattress-3d").then((m) => m.Mattress3D), {
  ssr: false,
})

export function Hero() {
  const { lang, tr } = useLang()
  const geFont = lang === "ge" ? "font-georgian" : "font-serif"

  return (
    <section className="relative overflow-hidden bg-off-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-4 lg:py-20">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-10 max-w-xl"
        >
          <p className={cn("mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple", lang === "ge" && "font-georgian tracking-normal")}>
            {tr("hero.subtitle")}
          </p>
          <h1 className={cn("text-balance text-4xl font-bold leading-tight text-text-dark sm:text-5xl lg:text-6xl", geFont)}>
            {tr("hero.headline")}
          </h1>
          <p className={cn("mt-6 text-pretty text-lg leading-relaxed text-text-mid", lang === "ge" && "font-georgian")}>
            {tr("hero.body")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-purple px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(187,0,255,0.25)] transition-transform duration-200 hover:scale-[1.03]"
            >
              {tr("hero.catalog")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-purple bg-white px-7 py-3.5 text-sm font-semibold text-purple transition-transform duration-200 hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              {tr("hero.whatsapp")}
            </a>
          </div>
        </motion.div>

        {/* Right 3D mattress */}
        <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]">
          {/* soft lavender glow behind */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-light opacity-60 blur-3xl" />
          <Mattress3D />
        </div>
      </div>
    </section>
  )
}
