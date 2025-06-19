import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MessageCircle } from "lucide-react"

export default function AppointPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Appointment
        </h1>
        <p className="text-xl text-muted-foreground">お打ち合わせのご予約</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* 予約カード */}
        <Card className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">予約システム</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                お打ち合わせのご予約はこちらからお願いします。お急ぎの場合は各種SNSよりご連絡ください。
              </p>
              <Button
                size="lg"
                className="w-full rounded-2xl h-14 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                asChild
              >
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3whB7e22y-Jp_M3XR9B8drZ8rJji3IGLGfAsw="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  予約する
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 詳細情報 */}
        <Card className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">詳細</h2>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">対応時間</h3>
                    <p className="text-sm text-muted-foreground">平日 11:00 - 23:59</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">所要時間</h3>
                    <p className="text-sm text-muted-foreground">30分 - 60分程度</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">形式</h3>
                    <p className="text-sm text-muted-foreground">オンライン（Google Meet）</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">お急ぎの場合</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  各種SNSよりダイレクトメッセージでご連絡ください。 迅速に対応いたします。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
