"use client"

import { Award, Moon, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const { lang, tr } = useLang()
  const geSerif = lang === "ge" ? "font-georgian" : "font-serif"
  const geSans = lang === "ge" ? "font-georgian" : "font-sans"

  const values = [
    { icon: Award, title: "about.quality.title", body: "about.quality.body" },
    { icon: Moon, title: "about.comfort.title", body: "about.comfort.body" },
    { icon: MapPin, title: "about.georgian.title", body: "about.georgian.body" },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <Reveal>
            <h1 className={cn("text-4xl font-bold text-text-dark sm:text-5xl", geSerif)}>
              {tr("about.title")}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={cn("mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-text-mid", geSans)}>
              {tr("about.body")}
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-12 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="text-center">
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-light text-purple">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className={cn("mb-2 text-xl font-semibold text-text-dark", geSerif)}>{tr(v.title)}</h3>
                  <p className={cn("leading-relaxed text-text-mid", geSans)}>{tr(v.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-purple-light py-16">
          <p className={cn("mx-auto max-w-2xl px-6 text-center text-xl font-medium text-purple sm:text-2xl", geSerif)}>
            {tr("catalog.tagline")}
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
