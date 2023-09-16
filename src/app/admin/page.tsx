import { IsAdminForm } from "@/components/is-admin-form"
import { PendingProblemCard, RejectedProblemCard, ValidedProblemCard } from "@/components/problems-cards"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { verifyAccessToken } from "@/lib/auth"
import { problemSubmissionService } from "@/lib/problem.service"
import { cookies } from "next/headers"

export default async function AdminPage() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("accessToken")

  if (!accessToken) {
    return <IsAdminForm />
  }

  try {
    verifyAccessToken(accessToken.value)
  } catch (err) {
    return <IsAdminForm />
  }

  const problems = await problemSubmissionService.getAll()
  if (!problems) {
    throw new Error("Canot load problems")
  }

  const pendingProblems = problems.filter((problem) => problem.statut === "pending")
  const validedProblems = problems.filter((problem) => problem.statut === "validated")
  const rejectedProblems = problems.filter((problem) => problem.statut === "rejected")

  return (
    <div className="flex flex-col m-2 gap-5 items-center">
      <Card className="min-w-[350px] w-full max-w-[700px]">
        <CardHeader>
          <CardTitle>Admin page</CardTitle>
          <CardDescription>Here our page for admin</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <h2>{pendingProblems.length} problem(s) have been submited ...</h2>
          <h2>{validedProblems.length} problem(s) have been validated ...</h2>
          <h2>{rejectedProblems.length} problem(s) have been rejected ...</h2>
        </CardContent>
      </Card>
      {pendingProblems.map((problem, pindex) => (
        <PendingProblemCard key={`${pindex}_ppc`} problem={problem} />
      ))}
      {validedProblems.map((problem, pindex) => (
        <ValidedProblemCard key={`${pindex}_vpc`} problem={problem} />
      ))}
      {rejectedProblems.map((problem, pindex) => (
        <RejectedProblemCard key={`${pindex}_rpc`} problem={problem} />
      ))}
    </div>
  )
}
