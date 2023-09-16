import { ConfirmBrechCard } from "@/components/confirm-brech-card"
import { SolutionCard } from "@/components/solution-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { firstcConfirmedBrech } from "@/lib/1stBrech"
import { ConfirmedBrechs } from "@/lib/type"
import Link from "next/link"
import { ArrowLeft } from "../../../node_modules/lucide-react"

export default function ConfirmedBrechsPage() {
  const confirmedBrechs: ConfirmedBrechs[] = [firstcConfirmedBrech]

  return (
    <div className="flex flex-col m-2 gap-5 items-center">
      <Card className="min-w-[350px] w-full max-w-[700px] relative">
        <Link href="/" className="absolute top-0 right-0 p-5">
          <ArrowLeft className="hover:scale-110" />
        </Link>

        <CardHeader>
          <CardTitle>Confirmed brechs</CardTitle>
          <CardDescription>Here you can found all confirmed brechs</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <h1>In this page, you will found brechs on solgard them</h1>
          <p>You can send ticket to support for encourage them to fix it.</p>
          <p>We propose solution to help them to fix it.</p>
        </CardContent>
      </Card>
      {confirmedBrechs.map((brech, brechIndex) => (
        <>
          <h1 className="font-semibold text-xl">Confirmed brech n°{brechIndex + 1}</h1>
          <ConfirmBrechCard brech={brech} key={`${brechIndex}_cbc`} />
          <SolutionCard brech={brech} key={`${brechIndex}_sc`} />
        </>
      ))}
    </div>
  )
}
