import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  product_title: string
  sub_title: string
  picture: {
    url: string
  }
  technology: string[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={product.picture?.url || "/placeholder.svg?height=300&width=500&query=product"}
            alt={product.product_title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.product_title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{product.sub_title}</p>
          <div className="flex flex-wrap gap-2">
            {product.technology?.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                {tech}
              </Badge>
            ))}
            {product.technology?.length > 3 && (
              <Badge variant="secondary" className="rounded-full text-xs">
                +{product.technology.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
