import Image from "next/image"
import { SwitchTheme } from "./switch-theme"

export function Header() {
  return (
    <div className="z-20 w-full border-b border-gray-200">
      <div className="flex justify-between max-w-screen-xl p-4 mx-auto">
        <Image src="/snowprint_logo.png" width={30} height={30} alt="icon" />
        <SwitchTheme />
      </div>
    </div>
  )
}
