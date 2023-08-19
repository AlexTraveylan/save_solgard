import { IsAdminForm } from "@/components/is-admin-form"
import { verifyAccessToken } from "@/lib/auth"
import { cookies } from "next/headers"

export default function AdminPage() {
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

  return <h1>Admin page.</h1>
}
