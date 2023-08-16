import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function OurMission() {
  return (
    <div className="w-[100vw] p-5">
      <div className="flex gap-5 flex flex-wrap justify-center items-center">
        <div className="min-w-[360px] max-w-[500px] p-2">
          <h1 className="text-center font-bold">Our Mission</h1>
          <p className="mt-2">
            As Embla stands tall against the icy threats of Solgard, we too, are committed to shielding players and developers against the cold
            winds of security threats. At Solgard Security Central, we envision a world where every player can indulge in the gripping tales of
            Solgard without a shred of concern about their digital safety. Let's join forces, ensuring that the only frost we encounter is in the
            game and not in our systems! Embark on your adventure in Solgard, and let us handle the security. Because every hero needs a shield.
          </p>
          <div className="flex justify-center mt-5">
            <Link href="https://github.com/AlexTraveylan/save_solgard" target="_blank">
              <Button>Add a pull request</Button>
            </Link>
          </div>
        </div>
        <Image src="/emba2.png" alt="logo legend of solgard" width={700} height={700} />
      </div>
    </div>
  )
}
