import { generateAccessToken } from "@/lib/auth"
import CryptoJS from "crypto-js"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const envSalt = process.env.NEXT_PUBLIC_SUPERMASTERSALT
  const real_admin_password = process.env.ADMIN_PASSWORD
  const { hashed_admin_password } = await request.json()

  if (!envSalt || !real_admin_password || !hashed_admin_password) {
    return NextResponse.json({ error: "Can't get environnements variables." }, { status: 400 })
  }

  const hashed_real_admin_password = CryptoJS.SHA256(envSalt + real_admin_password).toString(CryptoJS.enc.Hex)

  if (hashed_real_admin_password === hashed_admin_password) {
    const cookieHeaders = cookies()
    const accessToken = generateAccessToken()
    cookieHeaders.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60,
      path: "/",
    })
    return NextResponse.json({ message: "ok" }, { status: 200 })
  }
}
