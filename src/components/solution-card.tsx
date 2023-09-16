import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConfirmedBrechs } from "@/lib/type"

export function SolutionCard({ brech }: { brech: ConfirmedBrechs }) {
  return (
    <Card className="min-w-[350px] w-full max-w-[700px]">
      <CardHeader>
        <CardTitle>Our solution</CardTitle>
        <CardDescription>Don't forget submit a ticket to support</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {brech.solution.split("\n").map((sol, index) => (
          <p key={`${index}_sol`}>{sol}</p>
        ))}
      </CardContent>
    </Card>
  )
}
