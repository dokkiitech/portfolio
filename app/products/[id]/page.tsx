import { ProductDetail } from "@/components/product-detail"
import { Suspense } from "react"
import { ProductDetailSkeleton } from "@/components/product-detail-skeleton"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail id={params.id} />
      </Suspense>
    </div>
  )
}
