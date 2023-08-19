import jwt from "jsonwebtoken"

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the envronement.")
}

const JWT_SECRET = process.env.JWT_SECRET

export const generateAccessToken = () => {
  const payload = {
    type: "access",
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })
}

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET)
}
