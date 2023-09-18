"use client"
import Image from "next/image"
import Link from "next/link"
import { SwitchTheme } from "./switch-theme"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu"

export function Header() {
  return (
    <div className="z-20 w-full border-b border-gray-200">
      <div className="flex justify-between max-w-screen-xl p-4 mx-auto">
        <Link href="/">
          <Image src="/snowprint_logo.png" width={30} height={30} alt="icon" />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/confirmed_breachs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>See breachs</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/signal_breachs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Report breachs</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <SwitchTheme />
      </div>
    </div>
  )
}
