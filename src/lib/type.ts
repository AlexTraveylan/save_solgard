export type Statut = "validated" | "rejected" | "pending"

export type BrechImage = {
  description: string
  url: string
  alt: string
}

export type ConfirmedBrechs = {
  title: string
  description: string
  images: BrechImage[]
  solution: string
}
