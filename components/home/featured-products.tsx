"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { products } from "@/lib/products"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const featuredSlugs = ["bio-eco", "bio-memory-orthopedic", "elegance", "softmore"]

export function FeaturedProducts() {
  const { lang, tr } = useLang()
  const geFont = lang === "ge" ? "font-georgian" : "font-serif"
  const featured = featuredSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className={cn("text-center text-3xl font-bold text-text-dark sm:text-4xl", geFont)}>
            {tr("featured.title")}
          </h2>
          <p className={cn("mt-3 text-center text-text-mid", lang === "ge" ? "font-georgian" : "font-sans")}>
            {tr("featured.subtitle")} →
          </p>
        </Reveal>

        <div className="mt-12 flex snap-x gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className="shrink-0 snap-start">
              <div className="group flex w-72 flex-col overflow-hidden rounded-2xl border border-soft-grey bg-white shadow-[0_6px_24px_rgba(26,26,26,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(187,0,255,0.14)]">
                <div className="relative flex h-40 items-center justify-center bg-soft-grey">
                  {p.onSale && (
                    <span className="absolute left-3 top-3 rounded-full bg-purple px-3 py-1 text-xs font-semibold text-white">
                      {tr("catalog.sale")}
                    </span>
                  )}
                  <span className="px-4 text-center font-serif text-lg text-text-mid">
                    {lang === "ge" ? p.nameGe : p.nameEn}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className={cn("text-lg font-semibold text-text-dark", lang === "ge" ? "font-georgian" : "font-serif")}>
                    {lang === "ge" ? p.nameGe : p.nameEn}
                  </h3>
                  <p className="font-serif text-sm italic text-text-mid">
                    {lang === "ge" ? p.nameEn : p.nameGe}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-purple">
                    {p.contactForPrice ? tr("catalog.contactPrice") : p.priceRange}
                  </p>
                  <Link
                    href={`/products?p=${p.slug}`}
                    className="group/link mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-purple"
                  >
                    {tr("featured.open")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
