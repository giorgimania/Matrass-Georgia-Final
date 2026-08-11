"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Logo } from "./logo"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", key: "nav.home" },
  { href: "/products", key: "nav.products", dropdown: true },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
]

const productLinks = [
  { href: "/products", key: "nav.mattresses" },
  { href: "/beds", key: "nav.beds" },
  { href: "/pillows", key: "nav.pillows" },
]

export function Navbar() {
  const { lang, setLang, tr } = useLang()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const geFont = lang === "ge" ? "font-georgian" : "font-sans"

  // Close dropdown when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120)
  }

  return (
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

            if (l.dropdown) {
              return (
                <li
                  key={l.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    onClick={() => setProductsOpen((o) => !o)}
                    aria-expanded={productsOpen}
                    aria-haspopup="menu"
                    className={cn(
                      "group relative flex items-center gap-1 py-1 text-sm text-text-mid transition-colors hover:text-text-dark",
                      geFont,
                      (active || productsOpen) && "text-text-dark",
                    )}
                  >
                    {tr(l.key)}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        productsOpen && "rotate-180",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-purple transition-transform duration-300 group-hover:scale-x-100",
                        (active || productsOpen) && "scale-x-100",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.ul
                        role="menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-soft-grey bg-white p-1.5 shadow-[0_8px_30px_rgba(26,26,26,0.10)]"
                      >
                        {productLinks.map((p) => (
                          <li key={p.href} role="none">
                            <Link
                              role="menuitem"
                              href={p.href}
                              onClick={() => setProductsOpen(false)}
                              className={cn(
                                "block rounded-lg px-3.5 py-2.5 text-sm text-text-mid transition-colors hover:bg-purple-light hover:text-purple",
                                geFont,
                              )}
                            >
                              {tr(p.key)}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              )
            }

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
          {links.map((l) => {
            if (l.dropdown) {
              return (
                <li key={l.href}>
                  <span
                    className={cn(
                      "block px-3 pb-1 pt-2.5 text-xs font-medium uppercase tracking-wide text-text-mid/50",
                      geFont,
                    )}
                  >
                    {tr(l.key)}
                  </span>
                  <ul className="flex flex-col gap-1">
                    {productLinks.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm text-text-mid hover:bg-purple-light hover:text-purple",
                            geFont,
                            pathname === p.href && "text-purple",
                          )}
                        >
                          {tr(p.key)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            }

            return (
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
            )
          })}
        </ul>
      )}
    </header>
  )
}
