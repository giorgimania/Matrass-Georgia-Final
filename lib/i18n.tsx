"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "ge" | "en"

type Dict = Record<string, { ge: string; en: string }>

// UI strings
export const t: Dict = {
  "nav.home": { ge: "მთავარი", en: "Home" },
  "nav.products": { ge: "პროდუქცია", en: "Products" },
  "nav.about": { ge: "ჩვენ შესახებ", en: "About" },
  "nav.contact": { ge: "კონტაქტი", en: "Contact" },

  "nav.mattresses": { ge: "მატრასები", en: "Mattresses" },
  "nav.beds": { ge: "საწოლები", en: "Beds" },
  "nav.pillows": { ge: "ბალიშები", en: "Pillows" },

  "soon.title": { ge: "მალე", en: "Coming Soon" },
  "soon.subtitle": {
    ge: "კოლექცია მალე დაემატება.",
    en: "This collection is on its way.",
  },

  "hero.headline": { ge: "იდეალური ძილის ხელოვნება", en: "The Art of Perfect Sleep" },
  "hero.subtitle": { ge: "პრემიუმ ხარისხი", en: "Premium Quality" },
  "hero.body": {
    ge: "საქართველოში დამზადებული პრემიუმ მატრასები — შექმნილია იდეალური ძილისთვის.",
    en: "Premium mattresses crafted in Georgia — designed for the perfect night's sleep.",
  },
  "hero.catalog": { ge: "კატალოგის ნახვა", en: "View Catalog" },
  "hero.whatsapp": { ge: "WhatsApp", en: "WhatsApp" },

  "why.title": { ge: "რატომ ჩვენ", en: "Why Choose Us" },
  "why.ortho.title": { ge: "ორთოპედიული მხარდაჭერა", en: "Orthopedic Support" },
  "why.ortho.body": {
    ge: "ხერხემლის სწორი პოზიცია და ღამის სრული დასვენება.",
    en: "Proper spinal alignment for complete overnight rest.",
  },
  "why.materials.title": { ge: "პრემიუმ მასალები", en: "Premium Materials" },
  "why.materials.body": {
    ge: "მხოლოდ საუკეთესო ქსოვილები და ღრუბლის ფენები.",
    en: "Only the finest fabrics and foam layers throughout.",
  },
  "why.made.title": { ge: "საქართველოში დამზადებული", en: "Made in Georgia" },
  "why.made.body": {
    ge: "ადგილობრივი ხელოსნობა, გლობალური ხარისხის სტანდარტი.",
    en: "Local craftsmanship, global standard of quality.",
  },

  "featured.title": { ge: "ჩვენი მატრასები", en: "Our Mattresses" },
  "featured.subtitle": { ge: "დაათვალიერეთ ჩვენი კატალოგი ქვემოთ", en: "Turn the pages of our catalog below" },
  "featured.open": { ge: "კატალოგში გახსნა", en: "Open in Catalog" },

  "stats.products": { ge: "პროდუქტი", en: "Products" },
  "stats.quality": { ge: "ხარისხი", en: "Quality" },
  "stats.delivery": { ge: "მიწოდება", en: "Delivery" },
  "stats.fast": { ge: "სწრაფი", en: "Fast" },

  "catalog.title": { ge: "ჩვენი კატალოგი", en: "Our Catalog" },
  "catalog.back": { ge: "მთავარზე დაბრუნება", en: "Back to Home" },
  "catalog.collection": { ge: "კოლექცია 2026", en: "Collection 2026" },
  "catalog.tagline": { ge: "შექმნილია იდეალური ძილისთვის", en: "Crafted for perfect sleep" },
  "catalog.photoSoon": { ge: "ფოტო მალე", en: "photo coming soon" },
  "catalog.size": { ge: "ზომა (სმ)", en: "Size (cm)" },
  "catalog.price": { ge: "ფასი (₾)", en: "Price (₾)" },
  "catalog.call": { ge: "დარეკვა", en: "Call" },
  "catalog.contactPrice": { ge: "დაგვიკავშირდით ფასისთვის", en: "Contact for price" },
  "catalog.sale": { ge: "ფასდაკლება", en: "On Sale" },

  "about.title": { ge: "ჩვენ შესახებ", en: "About Us" },
  "about.body": {
    ge: "მატრას ჯორჯია — პრემიუმ მატრასების მწარმოებელი, დაფუძნებული თბილისში. ჩვენ ვამზადებთ თითოეულ მატრასს საუკეთესო მასალებისგან.",
    en: "Matrass Georgia is a premium mattress manufacturer based in Tbilisi. We craft every mattress from the finest materials, combining traditional craftsmanship with modern orthopedic science.",
  },
  "about.quality.title": { ge: "ხარისხი", en: "Quality" },
  "about.quality.body": {
    ge: "ყოველი დეტალი დახვეწილია სრულყოფილებამდე.",
    en: "Every detail refined to perfection.",
  },
  "about.comfort.title": { ge: "კომფორტი", en: "Comfort" },
  "about.comfort.body": {
    ge: "შექმნილია მშვიდი და ღრმა ძილისთვის.",
    en: "Designed for calm and restorative sleep.",
  },
  "about.georgian.title": { ge: "ქართული წარმოება", en: "Georgian-made" },
  "about.georgian.body": {
    ge: "ამაყად დამზადებული საქართველოში.",
    en: "Proudly manufactured in Georgia.",
  },

  "contact.title": { ge: "დაგვიკავშირდით", en: "Get in Touch" },
  "contact.address": { ge: "ტარიელ ფუტკარაძის 2, თბილისი", en: "Tariel Putkaradze St. 2, Tbilisi" },
  "contact.call": { ge: "დარეკვა", en: "Call" },
  "contact.name": { ge: "სახელი", en: "Name" },
  "contact.phone": { ge: "ტელეფონი", en: "Phone" },
  "contact.message": { ge: "შეტყობინება", en: "Message" },
  "contact.send": { ge: "გაგზავნა", en: "Send" },
  "contact.sent": { ge: "მადლობა! მალე დაგიკავშირდებით.", en: "Thank you! We'll be in touch soon." },

  "footer.premium": { ge: "პრემიუმ ხარისხი", en: "Premium Quality" },
  "footer.rights": { ge: "ყველა უფლება დაცულია", en: "All rights reserved" },
}

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  tr: (key: string) => string
}>({ lang: "ge", setLang: () => {}, tr: (k) => k })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ge")

  useEffect(() => {
    const stored = localStorage.getItem("matrass-lang") as Lang | null
    if (stored === "ge" || stored === "en") setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("matrass-lang", l)
  }

  const tr = (key: string) => t[key]?.[lang] ?? key

  return <LangContext.Provider value={{ lang, setLang, tr }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
