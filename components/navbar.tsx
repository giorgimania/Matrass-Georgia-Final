"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", key: "nav.home" },
  { href: "/products", key: "nav.products" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
]

export function Navbar() {
  const { lang, setLang, tr } = useLang()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const geFont = lang === "ge" ? "font-georgian" : "font-sans"

  return (
    <>
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-16 z-40 w-full"
      style={{ height: 120, background: "linear-gradient(to bottom, rgba(187,0,255,0.15) 0%, rgba(187,0,255,0.05) 50%, transparent 100%)" }}
    />
    <header className="sticky top-0 z-50 w-full border-b border-soft-grey bg-white/90 backdrop-blur-md shadow-[0_1px_12px_rgba(26,26,26,0.04)]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-purple">
          <Logo className="h-9 w-9" />
          <span className="font-serif text-lg font-semibold tracking-tight text-text-dark">
            Matrass Georgia
          </span>
        </Link>

        {/* Center links */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "group relative py-1 text-sm text-text-mid transition-colors hover:text-text-dark",
                    geFont,
                    active && "text-text-dark",
                  )}
                >
                  {tr(l.key)}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-purple transition-transform duration-300 group-hover:scale-x-100",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center overflow-hidden rounded-full border border-purple text-xs font-medium">
            <button
              onClick={() => setLang("ge")}
              className={cn(
                "px-2.5 py-1 transition-colors",
                lang === "ge" ? "bg-purple text-white" : "text-purple hover:bg-purple-light",
              )}
              aria-pressed={lang === "ge"}
            >
              GE
            </button>
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-2.5 py-1 transition-colors",
                lang === "en" ? "bg-purple text-white" : "text-purple hover:bg-purple-light",
              )}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-dark"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-soft-grey bg-white px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm text-text-mid hover:bg-off-white hover:text-text-dark",
                  geFont,
                  pathname === l.href && "text-purple",
                )}
              >
                {tr(l.key)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
    </>
  )
}
