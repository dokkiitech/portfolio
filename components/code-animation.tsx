"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function CodeAnimation() {
  const [currentLine, setCurrentLine] = useState(0)
  const [mounted, setMounted] = useState(false)

  const codeLines = [
    "const developer = {",
    "  name: 'dokkiitech',",
    "  role: 'Student',",
    "  skills: ['Next.js', 'React', 'TypeScript', 'CloudFlare', 'AWS' ],",
    "  motto: 'Connecting the dots'",
    "};",
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [codeLines.length])

  if (!mounted) return null

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            {/* <p className="text-muted-foreground">システムエンジニアの視点から</p> */}
          </div>

          <Card className="rounded-3xl border-2 bg-slate-900 dark:bg-slate-950 p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-slate-400 text-sm">developer.ts</span>
            </div>

            <div className="font-mono text-sm space-y-2">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index <= currentLine ? "text-green-400 opacity-100" : "text-slate-600 opacity-50"
                  }`}
                >
                  <span className="text-slate-500 mr-4">{(index + 1).toString().padStart(2, "0")}</span>
                  {line}
                  {index === currentLine && <span className="animate-pulse text-green-400">|</span>}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
