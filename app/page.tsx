import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { ProductDetail } from "@/components/product-detail"
import { ControllerDetail } from "@/components/controller-detail"
import { SoftwareDetail } from "@/components/software-detail"
import { EmbryologistDetail } from "@/components/embryologist-detail"
import { CultureDishDetail } from "@/components/culture-dish-detail"
import { Showcase } from "@/components/showcase"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <ProductDetail />
        <ControllerDetail />
        <SoftwareDetail />
        <EmbryologistDetail />
        <CultureDishDetail />
        <Showcase />
        <About />
      </main>
      <Footer />
    </div>
  )
}
