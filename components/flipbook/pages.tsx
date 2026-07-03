"use client"

import { Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { type Lang } from "@/lib/i18n"
import { products, type Product, WHATSAPP_URL, PHONE, PHONE_TEL } from "@/lib/products"
import { cn } from "@/lib/utils"

type Tr = (k: string) => string

// A single physical page (half of a spread)
export function PageShell({
  children,
  className,
  side,
}: {
  children: React.ReactNode
  className?: string
  side: "left" | "right"
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden",
        side === "left" ? "rounded-l-md" : "rounded-r-md",
        className,
      )}
    >
      {children}
    </div>
  )
}

/* ---------- COVER SPREAD ---------- */
export function CoverLeft() {
  return (
    <PageShell side="left" className="items-center justify-center bg-purple px-8 text-center text-white">
      <Logo className="h-24 w-24" />
      <p className="mt-5 font-serif text-2xl font-semibold">Matrass Georgia</p>
      <p className="mt-1 font-serif text-sm text-salmon">Premium Quality</p>
    </PageShell>
  )
}

export function CoverRight({ lang, tr }: { lang: Lang; tr: Tr }) {
  return (
    <PageShell side="right" className="justify-center bg-[#fdfcfa] px-10">
      <h2 className={cn("text-3xl font-bold leading-tight text-text-dark sm:text-4xl", lang === "ge" ? "font-georgian" : "font-serif")}>
        {tr("catalog.collection")}
      </h2>
      <div className="my-5 h-0.5 w-20 rounded-full bg-purple" />
      <p className={cn("text-pretty text-base leading-relaxed text-text-mid", lang === "ge" && "font-georgian")}>
        {tr("catalog.tagline")}
      </p>
      <p className="mt-auto pt-10 text-xs tracking-wide text-text-mid/70">matrasgeorgia.ge</p>
    </PageShell>
  )
}

/* ---------- PRODUCT SPREAD ---------- */
export function ProductLeft({
  product,
  pageNum,
  lang,
  tr,
}: {
  product: Product
  pageNum: number
  lang: Lang
  tr: Tr
}) {
  return (
    <PageShell side="left" className="bg-[#fdfcfa] px-8 py-7">
      <div className="flex items-start justify-between">
        <Logo className="h-5 w-5 text-purple" />
        <span className="font-serif text-xs text-text-mid/60">{pageNum}</span>
      </div>

      <h3 className={cn("mt-4 text-2xl font-bold leading-tight text-text-dark", lang === "ge" ? "font-georgian" : "font-serif")}>
        {product.nameGe}
      </h3>
      <p className="font-serif text-base italic text-text-mid">{product.nameEn}</p>
      <div className="my-3 h-0.5 w-12 rounded-full bg-purple" />

      <p className={cn("text-[13px] leading-[1.8] text-text-mid", lang === "ge" && "font-georgian")}>
        {lang === "ge" ? product.descGe : product.descEn}
      </p>

      {/* Size / price table */}
      {product.sizes.length > 0 && (
        <div className="mt-4 max-h-40 overflow-y-auto hide-scrollbar">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-text-mid/70">
                <th className="pb-1 font-medium">{tr("catalog.size")}</th>
                <th className="pb-1 text-right font-medium">{tr("catalog.price")}</th>
              </tr>
            </thead>
            <tbody>
              {product.sizes.map((row, i) => (
                <tr key={row.size} className={i % 2 === 1 ? "bg-off-white" : ""}>
                  <td className="py-0.5 pl-1 text-text-dark">{row.size}</td>
                  <td className="py-0.5 pr-1 text-right font-semibold text-purple">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {product.fixedPrice && (
        <p className="mt-4 text-lg font-semibold text-purple">{product.fixedPrice} ₾</p>
      )}
      {product.contactForPrice && (
        <p className={cn("mt-4 text-sm font-semibold text-purple", lang === "ge" && "font-georgian")}>
          {tr("catalog.contactPrice")}
        </p>
      )}

      <div className="mt-auto pt-4">
        <span className="inline-block rounded-full bg-purple-light px-3 py-1 text-[11px] font-medium text-purple">
          {lang === "ge" ? product.categoryGe : product.category}
        </span>
        <div className="mt-3 flex items-center gap-4 text-xs font-semibold">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#128C4B] hover:underline"
          >
            WhatsApp
          </a>
          <a href={PHONE_TEL} className="inline-flex items-center gap-1 text-purple hover:underline">
            <Phone className="h-3 w-3" />
            {tr("catalog.call")}
          </a>
        </div>
      </div>
    </PageShell>
  )
}

export function ProductRight({
  product,
  pageNum,
  lang,
  tr,
}: {
  product: Product
  pageNum: number
  lang: Lang
  tr: Tr
}) {
  return (
    <PageShell side="right" className="items-center justify-center bg-white p-8">
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="pointer-events-none absolute inset-6 rounded-2xl bg-purple-light/40 blur-xl" />
        <div className="relative flex h-[88%] w-[88%] flex-col overflow-hidden rounded-2xl bg-off-white shadow-[0_10px_30px_rgba(26,26,26,0.08)]">
          <img
            src={product.image || "/placeholder.svg"}
            alt={lang === "ge" ? product.nameGe : product.nameEn}
            className="h-full w-full object-cover"
          />
          <span
            className={cn(
              "absolute inset-x-0 bottom-0 bg-gradient-to-t from-text-dark/70 to-transparent px-4 pb-3 pt-8 text-center text-sm font-semibold text-white",
              lang === "ge" ? "font-georgian" : "font-serif",
            )}
          >
            {lang === "ge" ? product.nameGe : product.nameEn}
          </span>
        </div>
        <span className="absolute bottom-0 right-0 font-serif text-xs text-text-mid/60">{pageNum}</span>
      </div>
    </PageShell>
  )
}

/* ---------- BACK COVER (full spread) ---------- */
export function BackCover() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-purple px-8 text-center text-white">
      <Logo className="h-28 w-28" />
      <p className="mt-6 font-serif text-2xl font-semibold">Matrass Georgia</p>
      <p className="mt-4 text-sm text-white/80">{PHONE}</p>
      <p className="text-sm text-white/80">{"ტარიელ ფუტკარაძის 2, თბილისი"}</p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 rounded-full border border-white px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-purple"
      >
        WhatsApp
      </a>
    </div>
  )
}

/* ---------- Spread definition ---------- */
export type Spread =
  | { type: "cover" }
  | { type: "product"; product: Product; index: number }
  | { type: "back" }

export const spreads: Spread[] = [
  { type: "cover" },
  ...products.map((product, index) => ({ type: "product" as const, product, index })),
  { type: "back" },
]

export function LeftPage({ spread, lang, tr }: { spread: Spread; lang: Lang; tr: Tr }) {
  if (spread.type === "cover") return <CoverLeft />
  if (spread.type === "back") return <BackCover />
  return <ProductLeft product={spread.product} pageNum={spread.index * 2 + 2} lang={lang} tr={tr} />
}

export function RightPage({ spread, lang, tr }: { spread: Spread; lang: Lang; tr: Tr }) {
  if (spread.type === "cover") return <CoverRight lang={lang} tr={tr} />
  if (spread.type === "back") return <div className="h-full w-full bg-purple" aria-hidden />
  return <ProductRight product={spread.product} pageNum={spread.index * 2 + 3} lang={lang} tr={tr} />
}

export function slugToSpreadIndex(slug: string): number {
  const pi = products.findIndex((p) => p.slug === slug)
  return pi >= 0 ? pi + 1 : 0
}
