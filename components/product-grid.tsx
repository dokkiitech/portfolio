import { ProductCard } from "@/components/product-card";
import { fetchProducts, Product } from "@/lib/microcms";

export async function ProductGrid() {
  const products = await fetchProducts();

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">プロダクトを準備中です...</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
