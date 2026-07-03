"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Flipbook } from "@/components/flipbook/flipbook"
import { slugToSpreadIndex } from "@/components/flipbook/pages"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function CatalogInner() {
  const { lang, tr } = useLang()
  const params = useSearchParams()
  const slug = params.get("p")
  const initial = slug ? slugToSpreadIndex(slug) : 0

  return (
    <main className="min-h-screen bg-off-white">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        {/* Header bar above the book */}
        <div className="mb-10 flex items-center justify-between">
          <p className={cn("text-sm tracking-wide text-text-mid/70", lang === "ge" ? "font-georgian" : "font-serif")}>
            {tr("catalog.title")}
          </p>
          <Link
            href="/"
            className={cn("inline-flex items-center gap-1.5 text-sm text-purple transition-opacity hover:opacity-70", lang === "ge" && "font-georgian")}
          >
            <ArrowLeft className="h-4 w-4" />
            {tr("catalog.back")}
          </Link>
        </div>

        <Flipbook key={initial} initialSpread={initial} />
      </div>
    </main>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-off-white" />}>
        <CatalogInner />
      </Suspense>
    </>
  )
}
