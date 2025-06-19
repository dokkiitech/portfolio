import { ProductCard } from "@/components/product-card"

interface Product {
  id: string
  product_title: string
  sub_title: string
  picture: {
    url: string
  }
  technology: string[]
}

async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://dokkiitech.microcms.io/api/v1/product", {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    const data = await response.json()
    return data.contents || []
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function ProductGrid() {
  const products = await getAllProducts()

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
