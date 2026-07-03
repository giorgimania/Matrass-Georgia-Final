import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter, Noto_Serif_Georgian } from "next/font/google"
import { LanguageProvider } from "@/lib/i18n"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoGeorgian = Noto_Serif_Georgian({
  subsets: ["georgian"],
  variable: "--font-noto-georgian",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Matrass Georgia — The Art of Perfect Sleep",
  description:
    "Premium mattresses crafted in Georgia — designed for the perfect night's sleep. Explore our 2026 collection.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#f8f6f2",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ka"
      className={`${playfair.variable} ${inter.variable} ${notoGeorgian.variable} bg-background`}
    >
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
