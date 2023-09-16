import Image from "next/image"
import { BrechImage } from "../lib/type"

export function ImageBrechCard({ image }: { image: BrechImage }) {
  return (
    <div className="flex flex-col gap-2 m-5 items-center">
      <Image src={image.url} alt={image.alt} width={500} height={500} />
      <div>
        {image.description.split("\n").map((descimg, index) => (
          <p key={`${index}_descimg`}>{descimg}</p>
        ))}
      </div>
    </div>
  )
}
