import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import type { ZennArticle } from "@/lib/zenn"

interface BlogCardProps {
  article: ZennArticle
}

export function BlogCard({ article }: BlogCardProps) {
  // 日付をフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-[1.02]"
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        {article.thumbnail && (
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="flex items-start justify-between gap-2">
            <span className="line-clamp-2">{article.title}</span>
            <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.description}
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            {formatDate(article.pubDate)}
          </p>
        </CardFooter>
      </Card>
    </a>
  )
}
