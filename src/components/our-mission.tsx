import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function OurMission() {
  return (
    <div className="w-full p-5">
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <div className="min-w-[360px] max-w-[500px] p-2">
          <h1 className="text-center font-bold">Our Mission</h1>
          <p className="mt-2">
            If you're a developer, we invite you to join us in maintaining this site and adding new features. You can contribute by submitting pull
            requests and actively participating in the project on GitHub. Your expertise and contributions are highly valued as we work together to
            enhance this platform.
          </p>
          <div className="flex justify-center mt-5">
            <Link href="https://github.com/AlexTraveylan/save_solgard" target="_blank">
              <Button>Add a pull request</Button>
            </Link>
          </div>
        </div>
        <Image className="p-2 hover:scale-110 transition-all rounded" src="/emba2.png" alt="logo legend of solgard" width={700} height={700} />
      </div>
    </div>
  )
}
