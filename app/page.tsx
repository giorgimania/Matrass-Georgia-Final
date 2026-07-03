import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Stats } from "@/components/home/stats"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <FeaturedProducts />
        <Stats />
      </main>
      <Footer />
    </>
  )
}
