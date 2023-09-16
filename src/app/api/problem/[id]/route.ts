import { verifyAccessToken } from "@/lib/auth"
import { problemSubmissionService } from "@/lib/problem.service"
import { Statut } from "@/lib/type"
import { ProblemSubmission } from "@prisma/client"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("accessToken")

  if (!accessToken) {
    return NextResponse.json({ error: "You need to be admin" }, { status: 403 })
  }

  try {
    verifyAccessToken(accessToken.value)
  } catch (err) {
    return NextResponse.json({ error: "You need to be admin" }, { status: 403 })
  }

  const problem = await problemSubmissionService.get(params.id)

  if (!problem) {
    return NextResponse.json({ error: "cannot send request to database" }, { status: 400 })
  }

  return NextResponse.json({ problem }, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("accessToken")

  if (!accessToken) {
    return NextResponse.json({ error: "You need to be admin" }, { status: 403 })
  }

  try {
    verifyAccessToken(accessToken.value)
  } catch (err) {
    return NextResponse.json({ error: "You need to be admin" }, { status: 403 })
  }

  const problem_to_delete = await problemSubmissionService.delete(params.id)

  if (!problem_to_delete) {
    return NextResponse.json({ error: "cannot send request to database" }, { status: 400 })
  }

  return NextResponse.json({ message: "message deleted" }, { status: 200 })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("accessToken")

  if (!accessToken) {
    return NextResponse.json({ error: "You need to be admin" }, { status: 403 })
  }

  try {
    verifyAccessToken(accessToken.value)
  } catch (err) {
    return NextResponse.json({ error: "You need to be admin" }, { status: 403 })
  }

  const { statut, comment }: { statut: Statut; comment: string } = await request.json()

  const modified_field: Pick<ProblemSubmission, "statut" | "comment"> = {
    statut: statut,
    comment: comment ? comment : `Statut become ${statut}`,
  }

  const updated_problem = await problemSubmissionService.update(params.id, modified_field)

  if (!updated_problem) {
    return NextResponse.json({ error: "cannot send request to database" }, { status: 400 })
  }

  return NextResponse.json({ message: "problem updated" }, { status: 200 })
}
