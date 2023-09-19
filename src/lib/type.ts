export type Statut = "validated" | "rejected" | "pending"

export type BreachImage = {
  description: string
  url: string
  alt: string
}

export type ConfirmedBreach = {
  title: string
  description: string
  images: BreachImage[]
  solution: string
}
