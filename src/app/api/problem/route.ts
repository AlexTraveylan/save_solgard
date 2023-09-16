import { verifyAccessToken } from "@/lib/auth"
import { problemSubmissionService } from "@/lib/problem.service"
import { ProblemSubmission } from "@/lib/type"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { title, content, author }: { title: string, content: string, author: string }  = await request.json()

  if (!title || !content) {
    return NextResponse.json({ error: "data not submited" }, { status: 400 })
  }

  const submitedProblem: Omit<ProblemSubmission, "id" | "createdAt" | "updatedAt"> = 
    {
        title: title,
        content: content, 
        author: author ? author : "anonymus",
        statut: 'pending'
    }

  const createdProblem = await problemSubmissionService.create(submitedProblem)
  if (!createdProblem) {
    return NextResponse.json({ error: "cannot send request to database" }, { status: 400 }) 
  }

  return NextResponse.json({ message: "Problem submitted, an admin will read it soon." }, { status: 201 })
}

export async function GET(request: NextRequest) {
  const problems = await problemSubmissionService.getAll()

  if (!problems) {
    return NextResponse.json({ error: "cannot send request to database" }, { status: 400 }) 
  }

  const cookieStore = cookies()
  const accessToken = cookieStore.get("accessToken")


  try {
    if (!accessToken) {
      throw new Error("You need to be admin" ) 
   }
    verifyAccessToken(accessToken.value)
    return NextResponse.json({problems}, {status: 200})
  } catch (err) {
     return NextResponse.json({ nbr_problems: problems.length }, { status: 200 }) 
  }
  
}
