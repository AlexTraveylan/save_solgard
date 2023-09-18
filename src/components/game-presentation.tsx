import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function GamePresentation() {
  const features: { title: string; content: string }[] = [
    {
      title: "Security Diagnostics",
      content:
        "Dive deep into the security intricacies of the game, where we identify and elucidate vulnerabilities that might be lurking in the shadows.",
    },
    {
      title: "Defensive Strategies for Developers",
      content:
        "For every vulnerability we unearth, our team provides detailed patching guidelines, ensuring that the battles remain within Solgard and not in the real world of data breaches.",
    },
    {
      title: "Community Hub",
      content:
        "Collaborate, learn, and engage with a community of fellow developers, security experts, and passionate Solgard players. Together, we can ensure a secure and enjoyable gaming experience for all.",
    },
  ]
  return (
    <div className="w-full p-5">
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <Link href="https://snowprintstudios.com/solgard/" target="_blank">
          <Image src="/SolFeatureOptimized.png" alt="logo legend of solgard" width={700} height={700} className="hover:scale-110 transition-all" />
        </Link>
        <div className="min-w-[360px] max-w-[500px] p-2">
          <h2 className="font-bold text-center">Welcome to Solgard Security Central: Ensuring a Safe Battle Against Ragnarok!</h2>
          <p className="mt-5">
            Our primary goal is to provide a comprehensive resource for Solgard players to identify and address glitches, cheats, and bugs within
            the game. We aim to uncover these issues and create a platform for gamers like you to report your discoveries. Our mission is twofold:
            first, we expose these glitches, cheats, and bugs to shed light on their existence. Second, we encourage players to report their
            findings, enabling us to compile a detailed inventory of issues within the game. By doing so, we hope to draw attention to these
            problems so that the game developers can take prompt action to correct them. Our ultimate aim is to enhance the overall gaming
            experience and make the competition more enjoyable for all Solgard enthusiasts. Together, we can contribute to a more entertaining and
            fair gaming environment.
          </p>
          <div className="mt-2">
            <h3 className="font-bold text-center">What We Offer:</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index} className=" mt-2 ">
                  <span className="font-semibold pl-4">{feature.title}: </span>
                  {feature.content}
                </li>
              ))}
            </ul>
            <div className="flex gap-5 justify-center mt-5">
              <Link href="/confirmed_brechs">
                <Button>Explore</Button>
              </Link>
              <Link href="/signal_brechs">
                <Button>Share</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
