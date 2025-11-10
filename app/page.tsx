import { HeroSection } from "@/components/hero-section"
import { LatestProducts } from "@/components/latest-products"
import { Suspense, lazy } from "react"

// 他のコンポーネントを遅延読み込み
const CodeAnimation = lazy(() => import("@/components/code-animation").then(m => ({ default: m.CodeAnimation })))

// フォールバック用のローディングコンポーネント
function SectionSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded mb-4 w-1/3 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded mb-8 w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクションを最優先で読み込み */}
      <HeroSection />

      {/* 他のコンポーネントは遅延読み込み */}
      <Suspense fallback={<SectionSkeleton />}>
        <CodeAnimation />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LatestProducts />
      </Suspense>
    </main>
  )
}
