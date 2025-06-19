import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DOKKIITECH",
  description: "木戸亮輔のポートフォリオサイトです。私のプロダクト情報やSNSアカウントの紹介など木戸亮輔についての全ての情報が手に入ります。",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
