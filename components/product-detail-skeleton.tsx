import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ProductDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Skeleton className="h-10 w-48 rounded-full" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Card className="rounded-3xl overflow-hidden">
            <Skeleton className="aspect-video w-full" />
          </Card>
        </div>

        <div className="space-y-6">
          <div>
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-6 w-full" />
          </div>

          <div>
            <Skeleton className="h-6 w-24 mb-3" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
          </div>

          <Skeleton className="h-12 w-full rounded-2xl" />
        </div>
      </div>

      <Card className="rounded-3xl border-2 mt-12">
        <CardContent className="p-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
