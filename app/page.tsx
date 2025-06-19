import { HeroSection } from "@/components/hero-section"
import { LatestProducts } from "@/components/latest-products"
import { CodeAnimation } from "@/components/code-animation"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CodeAnimation />
      <LatestProducts />
    </main>
  )
}
