import { ConfirmBrechCard } from "@/components/confirm-brech-card"
import { SolutionCard } from "@/components/solution-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { firstcConfirmedBrech } from "@/lib/1stBrech"
import { ConfirmedBreach } from "@/lib/type"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ConfirmedBrechsPage() {
  const confirmedBreaches: ConfirmedBreach[] = [firstcConfirmedBrech]

  return (
    <div className="flex flex-col m-2 gap-5 items-center">
      <Card className="min-w-[350px] w-full max-w-[700px] relative">
        <Link href="/" className="absolute top-0 right-0 p-5">
          <ArrowLeft className="hover:scale-110" />
        </Link>

        <CardHeader>
          <CardTitle>Confirmed breaches</CardTitle>
          <CardDescription>Here you can found all confirmed breaches</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <h1>In this page, you will found breaches on solgard.</h1>
          <p>You can send tickets to support for encourage them to fix it.</p>
          <p>We propose solutions to help them to fix it.</p>
        </CardContent>
      </Card>
      {confirmedBreaches.map((breach, breachIndex) => (
        <>
          <h1 className="font-semibold text-xl">Confirmed brech n°{breachIndex + 1}</h1>
          <ConfirmBrechCard breach={breach} key={`${breachIndex}_cbc`} />
          <SolutionCard breach={breach} key={`${breachIndex}_sc`} />
        </>
      ))}
    </div>
  )
}
