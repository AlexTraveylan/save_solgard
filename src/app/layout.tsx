import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Providers } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Save Solgard",
  description: "A website to report all cheats on solgard, and all developpers to path them.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={cn("font-sans dark:bg-slate-950 flex flex-col min-h-screen", inter.className)}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Toaster />
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
