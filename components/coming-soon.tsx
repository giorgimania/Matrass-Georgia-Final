"use client"

import { motion } from "framer-motion"
import { Logo } from "./logo"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function ComingSoon() {
  const { lang, tr } = useLang()

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <Logo className="mb-8 h-14 w-14 text-purple" />
        <h1
          className={cn(
            "text-5xl font-semibold text-purple sm:text-6xl",
            lang === "ge" ? "font-georgian" : "font-serif",
          )}
        >
          {tr("soon.title")}
        </h1>
        <p
          className={cn(
            "mt-5 max-w-sm text-pretty text-base text-text-mid/60",
            lang === "ge" ? "font-georgian" : "font-sans",
          )}
        >
          {tr("soon.subtitle")}
        </p>
      </motion.div>
    </main>
  )
}
