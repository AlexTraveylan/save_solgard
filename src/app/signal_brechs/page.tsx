import { RequestProblemForm } from "@/components/request-problem-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { problemSubmissionService } from "@/lib/problem.service"
import Link from "next/link"
import { ArrowLeft } from "../../../node_modules/lucide-react"

export default async function SignalBrechPage() {
  const problems = await problemSubmissionService.getAll()

  if (!problems) {
    throw new Error("Cannot get problems")
  }

  const nbrProblems = problems.length

  return (
    <div className="flex flex-col m-2 gap-5 items-center">
      <Card className="min-w-[350px] w-full max-w-[700px] relative">
        <Link href="/" className="absolute top-0 right-0 p-5">
          <ArrowLeft className="hover:scale-110" />
        </Link>
        <CardHeader>
          <CardTitle>Report new brech</CardTitle>
          <CardDescription>Here our page for signal breachs you found</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <h2>{nbrProblems} problem(s) have been submited ...</h2>
          {nbrProblems > 1 && <p>Our admin is looking for them</p>}

          <div>
            <h2 className="font-semibold">Share your breach to help us</h2>
            <p className="pl-3">We will search for confirm it, then proprose a solution to help dev to fix it.</p>
            <p className="pl-3">It cost a lot for photos, so you can send to AlexTraveylan on Discord.</p>
            <p className="pl-3">You can submit a ticket to Solgard Support to.</p>
          </div>
        </CardContent>
      </Card>
      <RequestProblemForm />
    </div>
  )
}
