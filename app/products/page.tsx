import { ProductGrid } from "@/components/product-grid"
import { Suspense } from "react"
import { ProductGridSkeleton } from "@/components/product-grid-skeleton"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Products
        </h1>
        <p className="text-xl text-muted-foreground">これまでに制作したプロダクトの一覧</p>
      </div>

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </div>
  )
}
