import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react"

export default function AboutPage() {
  const skills = ["Next.js", "React", "TypeScript", "CloudFlare", "AWS", "Docker", "PostgreSQL","Python","Java","GAS"]

  const experiences = [
    {
      title: "福岡デザイン&テクノロジー専門学校 ホワイトハッカー専攻",
      period: "202404 - 現在",
      description: "現在2年生ホワイトハッカーを育成するための専攻でセキュリティについての知識を勉強しています",
    },
    {
      title: "インターン先 S様",
      period: "20202507 - ",
      description: "中長期インターンにてサーバーサイド業務を中心に活動",
    },
    {
      title: "インターン先 W様",
      period: "20202507 - ",
      description: "中長期インターンに参加中",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground">システムエンジニアとしての詳細なプロフィール</p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {/* プロフィール */}
        <Card className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">プロフィール</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                当サイトをご覧いただきありがとうございます。福岡デザイン＆テクノロジー専門学校 
                ホワイトハッカー専攻2年の木戸亮輔です。
              </p>
              <p>
                学校ではセキュリティ分野の学習に力を入れており、普段の個人開発ではフロント開発をはじめバックインフラなど
                フルスタックで開発をしています。
              </p>
              <p>モダンな技術を使うのが大好きでハッカソンなど出場時は新しい技術を必ず取り入れるようにしています。</p>
            </div>
          </CardContent>
        </Card>

        {/* スキル */}
        <Card className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">スキル</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 経験 */}
        <Card className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">経験</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary/20 pl-6 pb-6 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <Badge variant="outline" className="rounded-full w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 趣味・興味 */}
        <Card className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">趣味</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                休日にDJプレイをしています。DJ以外にも身体を動かしたり、開発したりするのが大好きです。
              </p>
              <p>
                実は剣道3段を持っています。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
