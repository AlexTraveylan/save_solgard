"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { format_date } from "@/lib/formats"
import { ProblemSubmission } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { PenSquare, Trash } from "../../node_modules/lucide-react"
import { ModifyStatutForm } from "./modify-problem-statut-form"
import { toast } from "./ui/use-toast"

export function PendingProblemCard({ problem }: { problem: ProblemSubmission }) {
  const [isModifying, setIsModifying] = useState(false)
  const router = useRouter()

  async function handledelete() {
    toast({
      description: "Submiting your request ...",
    })

    const response = await fetch(`api/problem/${problem.id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      toast({
        description: "Deleted !",
      })
      router.refresh()
    } else {
      toast({
        description: "Failed to delete ...",
        variant: "destructive",
      })
    }
  }
  return (
    <Card className="min-w-[350px] w-full max-w-[700px] relative">
      <div className="absolute top-0 right-0 p-5 flex gap-5">
        <PenSquare onClick={() => setIsModifying(!isModifying)} className="cursor-pointer hover:scale-105" strokeWidth={1.4} />
        <Trash onClick={handledelete} className="text-red-700 cursor-pointer hover:scale-105" strokeWidth={1.4} />
      </div>
      <CardHeader>
        <CardTitle>{problem.title}</CardTitle>
        <CardDescription>
          <h3>
            <span className="text-orange-400">New problem</span>, an admin have to check it
          </h3>
          {problem.comment && <h3>Statut reason : {problem.comment}</h3>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div>{problem.content}</div>
        {isModifying && <ModifyStatutForm id_problem={problem.id} current_statut={problem.statut} />}
      </CardContent>
      <CardFooter className="flex justify-between">
        <h3>By : {problem.author}</h3>
        <h3>Last update : {format_date(problem.updatedAt)}</h3>
      </CardFooter>
    </Card>
  )
}

export function ValidedProblemCard({ problem }: { problem: ProblemSubmission }) {
  const [isModifying, setIsModifying] = useState(false)
  const router = useRouter()

  async function handledelete() {
    toast({
      description: "Submiting your request ...",
    })

    const response = await fetch(`api/problem/${problem.id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      toast({
        description: "Deleted !",
      })

      router.refresh()
    } else {
      toast({
        description: "Failed to delete ...",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="min-w-[350px] w-full max-w-[700px] relative">
      <div className="absolute top-0 right-0 p-5 flex gap-5">
        <PenSquare onClick={() => setIsModifying(!isModifying)} className="cursor-pointer hover:scale-105" strokeWidth={1.4} />
        <Trash onClick={handledelete} className="text-red-700 cursor-pointer hover:scale-105" strokeWidth={1.4} />
      </div>
      <CardHeader>
        <CardTitle>{problem.title}</CardTitle>
        <CardDescription>
          <span className="text-green-400">Problem validated by an admin</span>. Make the public explaination.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div>{problem.content}</div>
        {isModifying && <ModifyStatutForm id_problem={problem.id} current_statut={problem.statut} />}
      </CardContent>
      <CardFooter className="flex justify-between">
        <h3>By : {problem.author}</h3>
        <h3>Last update : {format_date(problem.updatedAt)}</h3>
      </CardFooter>
    </Card>
  )
}

export function RejectedProblemCard({ problem }: { problem: ProblemSubmission }) {
  const [isModifying, setIsModifying] = useState(false)
  const router = useRouter()

  async function handledelete() {
    toast({
      description: "Submiting your request ...",
    })

    const response = await fetch(`api/problem/${problem.id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      toast({
        description: "Deleted !",
      })
      router.refresh()
    } else {
      toast({
        description: "Failed to delete ...",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="min-w-[350px] w-full max-w-[700px] relative">
      <div className="absolute top-0 right-0 p-5 flex gap-5">
        <PenSquare onClick={() => setIsModifying(!isModifying)} className="cursor-pointer hover:scale-105" strokeWidth={1.4} />
        <Trash onClick={handledelete} className="text-red-700 cursor-pointer hover:scale-105" strokeWidth={1.4} />
      </div>
      <CardHeader>
        <CardTitle>{problem.title}</CardTitle>
        <CardDescription>
          <span className="text-red-400">Problem rejected by an admin</span>. Ignore it.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div>{problem.content}</div>
        {isModifying && <ModifyStatutForm id_problem={problem.id} current_statut={problem.statut} />}
      </CardContent>
      <CardFooter className="flex justify-between">
        <h3>By : {problem.author}</h3>
        <h3>Last update : {format_date(problem.updatedAt)}</h3>
      </CardFooter>
    </Card>
  )
}
