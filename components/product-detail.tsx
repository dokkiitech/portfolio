import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Product {
  id: string
  product_title: string
  sub_title: string
  produce: string
  picture: {
    url: string
  }
  technology: string[]
  git_URL: string
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`https://dokkiitech.microcms.io/api/v1/product/${id}`, {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

interface ProductDetailProps {
  id: string
}

export async function ProductDetail({ id }: ProductDetailProps) {
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* 戻るボタン */}
      <div className="mb-8">
        <Button variant="ghost" className="rounded-full" asChild>
          <Link href="/products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            プロダクト一覧に戻る
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* 画像 */}
        <div className="space-y-4">
          <Card className="rounded-3xl overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={product.picture?.url || "/placeholder.svg?height=400&width=600&query=product"}
                alt={product.product_title}
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>

        {/* 詳細情報 */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.product_title}</h1>
            <p className="text-xl text-muted-foreground">{product.sub_title}</p>
          </div>

          {/* 使用技術 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">使用技術</h2>
            <div className="flex flex-wrap gap-2">
              {product.technology?.map((tech) => (
                <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* GitHubリンク */}
          {product.git_URL && (
            <Button
              size="lg"
              className="w-full rounded-2xl bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
              asChild
            >
              <a href={product.git_URL} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHubで見る
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* 特徴・説明 */}
      <Card className="rounded-3xl border-2 mt-12">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6">特徴・詳細</h2>
          <div
            className="prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: product.produce }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
