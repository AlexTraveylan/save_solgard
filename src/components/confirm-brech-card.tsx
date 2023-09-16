import { ConfirmedBrechs } from "@/lib/type"

import { ImageBrechCard } from "@/components/image-brech-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ConfirmBrechCard({ brech }: { brech: ConfirmedBrechs }) {
  return (
    <Card className="min-w-[350px] w-full max-w-[700px]">
      <CardHeader>
        <CardTitle>{brech.title}</CardTitle>
        <CardDescription>
          {brech.description.split("\n").map((desc, index) => (
            <p key={`${index}_desc`}>{desc}</p>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          {brech.images.map((image, index) => (
            <ImageBrechCard key={index} image={image} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
