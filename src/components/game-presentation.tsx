import Image from "next/image"
import Link from "next/link"

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
      <div className="flex gap-5 flex flex-wrap justify-center items-center">
        <Link href="https://snowprintstudios.com/solgard/" target="_blank">
          <Image src="/SolFeatureOptimized.png" alt="logo legend of solgard" width={700} height={700} className="hover:scale-110 transition-all" />
        </Link>
        <div className="min-w-[360px] max-w-[500px] p-2">
          <h2 className="font-bold text-center">Welcome to Solgard Security Central: Ensuring a Safe Battle Against Ragnarok!</h2>
          <p className="mt-5">
            In the mystical realm of Solgard, winter's icy grip is more than just a seasonal change. The world teeters on the brink of Ragnarok,
            and creatures lie trapped within chilling ice crystals. Only Embla, blessed by the Sun Goddess, stands against this eternal frost,
            rallying an army of creatures to restore Solgard to its former glory. While you immerse yourself in Snowprint Studio's debut title,
            exploring its plethora of game modes and engaging storylines, we're here to ensure your gaming experience remains as secure as
            Solgard's fortresses!
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
          </div>
        </div>
      </div>
    </div>
  )
}
