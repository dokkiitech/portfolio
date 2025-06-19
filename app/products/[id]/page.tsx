import { ProductDetail } from "@/components/product-detail";
import { Suspense } from "react";
import { ProductDetailSkeleton } from "@/components/product-detail-skeleton";

// Define a type for the resolved params, if preferred, though not strictly necessary
// interface ResolvedParams {
//   id: string;
// }

export default async function ProductPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const { id } = await paramsPromise; // Await the promise to get the id

  return (
    <div className="container mx-auto px-4 py-16">
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
}
