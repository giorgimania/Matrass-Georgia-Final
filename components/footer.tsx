"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", key: "nav.home" },
  { href: "/products", key: "nav.products" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
]

export function Footer() {
  const { lang, tr } = useLang()
  const geFont = lang === "ge" ? "font-georgian" : "font-sans"

  return (
    <footer className="bg-text-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3 text-white">
          <Logo className="h-10 w-10" />
          <div>
            <p className="font-serif text-lg font-semibold">Matrass Georgia</p>
            <p className="font-serif text-sm text-salmon">{tr("footer.premium")}</p>
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn("text-sm text-white/60 transition-colors hover:text-white", geFont)}
                >
                  {tr(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/40">
          © 2026 Matrass Georgia. {tr("footer.rights")}.
        </p>
      </div>
    </footer>
  )
}
