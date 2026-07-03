"use client"

import { useState } from "react"
import { MapPin, MessageCircle, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/i18n"
import { WHATSAPP_URL, PHONE, PHONE_TEL } from "@/lib/products"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const { lang, tr } = useLang()
  const [sent, setSent] = useState(false)
  const geSerif = lang === "ge" ? "font-georgian" : "font-serif"
  const geSans = lang === "ge" ? "font-georgian" : "font-sans"

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <Reveal>
            <h1 className={cn("text-4xl font-bold text-text-dark sm:text-5xl", geSerif)}>
              {tr("contact.title")}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.03] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                {PHONE}
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.03] sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                {PHONE}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={cn("mt-8 inline-flex items-center gap-2 text-text-mid", geSans)}>
              <MapPin className="h-5 w-5 text-purple" />
              {tr("contact.address")}
            </p>
          </Reveal>
        </section>

        {/* Form */}
        <section className="mx-auto max-w-lg px-6 pb-28">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-soft-grey bg-off-white p-8 shadow-[0_8px_30px_rgba(26,26,26,0.05)]"
            >
              <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-1.5 text-left">
                  <span className={cn("text-sm font-medium text-text-dark", geSans)}>{tr("contact.name")}</span>
                  <input
                    type="text"
                    required
                    className="rounded-lg border border-soft-grey bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-purple"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-left">
                  <span className={cn("text-sm font-medium text-text-dark", geSans)}>{tr("contact.phone")}</span>
                  <input
                    type="tel"
                    required
                    className="rounded-lg border border-soft-grey bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-purple"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-left">
                  <span className={cn("text-sm font-medium text-text-dark", geSans)}>{tr("contact.message")}</span>
                  <textarea
                    rows={4}
                    className="resize-none rounded-lg border border-soft-grey bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-purple"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-purple px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  {tr("contact.send")}
                </button>
                {sent && (
                  <p className={cn("text-center text-sm font-medium text-purple", geSans)}>
                    {tr("contact.sent")}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
