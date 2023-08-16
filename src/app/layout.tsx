import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Providers } from "@/components/theme-provider"
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
        <body
          className={cn(
            "font-sans min-h-screen flex flex-col dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black",
            inter.className
          )}
        >
          <Header />
          <main className="flex flex-grow">{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
