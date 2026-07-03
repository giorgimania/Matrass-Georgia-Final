"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { useLang } from "@/lib/i18n"
import { usePageSound } from "@/lib/use-page-sound"
import { LeftPage, RightPage, spreads } from "./pages"
import { cn } from "@/lib/utils"

export function Flipbook({ initialSpread = 0 }: { initialSpread?: number }) {
  const { lang, tr } = useLang()
  const playSound = usePageSound()
  const [index, setIndex] = useState(initialSpread)
  const [flip, setFlip] = useState<null | { dir: "next" | "prev"; from: number }>(null)

  const total = spreads.length

  useEffect(() => {
    setIndex(initialSpread)
  }, [initialSpread])

  const goNext = useCallback(() => {
    if (flip || index >= total - 1) return
    playSound()
    setFlip({ dir: "next", from: index })
    setTimeout(() => {
      setIndex((i) => Math.min(i + 1, total - 1))
      setFlip(null)
    }, 600)
  }, [flip, index, total, playSound])

  const goPrev = useCallback(() => {
    if (flip || index <= 0) return
    playSound()
    setFlip({ dir: "prev", from: index })
    setTimeout(() => {
      setIndex((i) => Math.max(i - 1, 0))
      setFlip(null)
    }, 600)
  }, [flip, index, playSound])

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [goNext, goPrev])

  // swipe (mobile)
  const [touchX, setTouchX] = useState<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (dx < -50) goNext()
    else if (dx > 50) goPrev()
    setTouchX(null)
  }

  const cur = spreads[index]

  return (
    <div className="flex flex-col items-center">
      {/* ===== DESKTOP: two-page book ===== */}
      <div
        className="group relative hidden md:block book-perspective"
        style={{ width: 900, height: 580 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* drop shadow beneath */}
        <div className="absolute -bottom-6 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-[50%] bg-text-dark/15 blur-2xl" />

        <div className="relative flex h-full w-full overflow-hidden rounded-md bg-white shadow-[0_30px_80px_rgba(26,26,26,0.18)]">
          {/* Static left page */}
          <div className="relative h-full w-1/2 border-r border-soft-grey/70">
            <LeftPage spread={cur} lang={lang} tr={tr} />
          </div>
          {/* Static right page */}
          <div className="relative h-full w-1/2">
            <RightPage spread={cur} lang={lang} tr={tr} />
          </div>

          {/* faint spine */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 bg-gradient-to-r from-black/8 via-transparent to-black/8" />

          {/* ===== Flipping page overlay ===== */}
          <AnimatePresence>
            {flip?.dir === "next" && (
              <motion.div
                key="flip-next"
                className="absolute right-0 top-0 h-full w-1/2 origin-left preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -180 }}
                exit={{ rotateY: -180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* front = current right */}
                <div className="absolute inset-0 overflow-hidden preserve-3d [backface-visibility:hidden]">
                  <RightPage spread={spreads[flip.from]} lang={lang} tr={tr} />
                  <FlipShade side="front" dir="next" />
                </div>
                {/* back = next left */}
                <div
                  className="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {spreads[flip.from + 1] && (
                    <LeftPage spread={spreads[flip.from + 1]} lang={lang} tr={tr} />
                  )}
                  <FlipShade side="back" dir="next" />
                </div>
              </motion.div>
            )}

            {flip?.dir === "prev" && (
              <motion.div
                key="flip-prev"
                className="absolute left-0 top-0 h-full w-1/2 origin-right preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                exit={{ rotateY: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* front = current left */}
                <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
                  <LeftPage spread={spreads[flip.from]} lang={lang} tr={tr} />
                  <FlipShade side="front" dir="prev" />
                </div>
                {/* back = prev right */}
                <div
                  className="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {spreads[flip.from - 1] && (
                    <RightPage spread={spreads[flip.from - 1]} lang={lang} tr={tr} />
                  )}
                  <FlipShade side="back" dir="prev" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <NavButton
          side="left"
          disabled={index <= 0}
          onClick={goPrev}
        />
        <NavButton
          side="right"
          disabled={index >= total - 1}
          onClick={goNext}
        />
      </div>

      {/* ===== MOBILE: single page ===== */}
      <div
        className="relative w-full max-w-sm md:hidden book-perspective"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] bg-text-dark/15 blur-2xl" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ rotateY: 25, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -25, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-white shadow-[0_20px_50px_rgba(26,26,26,0.16)]"
          >
            {/* On mobile show the "content" page: cover-right, product-left (info), or back */}
            {cur.type === "product" ? (
              <LeftPage spread={cur} lang={lang} tr={tr} />
            ) : cur.type === "cover" ? (
              <RightPage spread={cur} lang={lang} tr={tr} />
            ) : (
              <LeftPage spread={cur} lang={lang} tr={tr} />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={goPrev}
            disabled={index <= 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple text-purple disabled:opacity-30"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            disabled={index >= total - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple text-purple disabled:opacity-30"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Page counter */}
      <p className="mt-8 font-serif text-sm tracking-wide text-text-mid/70">
        {index + 1} / {total}
      </p>
    </div>
  )
}

function NavButton({
  side,
  disabled,
  onClick,
}: {
  side: "left" | "right"
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Previous page" : "Next page"}
      className={cn(
        "absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-purple bg-white/90 text-purple opacity-0 shadow-lg backdrop-blur transition-all duration-300 hover:bg-purple hover:text-white group-hover:opacity-100 disabled:pointer-events-none disabled:opacity-0",
        side === "left" ? "-left-6" : "-right-6",
      )}
    >
      {side === "left" ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  )
}

// gradient shadow that sweeps across the turning page
function FlipShade({ side, dir }: { side: "front" | "back"; dir: "next" | "prev" }) {
  const gradient =
    dir === "next"
      ? side === "front"
        ? "bg-gradient-to-l from-black/20 to-transparent"
        : "bg-gradient-to-r from-black/25 to-transparent"
      : side === "front"
        ? "bg-gradient-to-r from-black/20 to-transparent"
        : "bg-gradient-to-l from-black/25 to-transparent"
  return <div className={cn("pointer-events-none absolute inset-0", gradient)} aria-hidden />
}
