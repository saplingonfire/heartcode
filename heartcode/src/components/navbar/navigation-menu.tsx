import Link from "next/link"; 
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu"; 
import { ModeToggle } from "../modetoggle/mode-toggle"; 
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"; 
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"; 
 
export function NavigationBar() { 
    return ( 
        <NavigationMenu className="list-none flex items-center justify-between h-16 sticky top-0 p-5 min-w-full  bg-white z-50"> 
            <div className="flex flex-row space-x-4"> 
            <NavigationMenuItem> 
                <Link href="/" legacyBehavior passHref> 
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}> 
                        Home 
                    </NavigationMenuLink> 
                </Link> 
            </NavigationMenuItem> 
            <NavigationMenuItem> 
                <Link href="/quiz" legacyBehavior passHref> 
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}> 
                        Quiz 
                    </NavigationMenuLink> 
                </Link> 
            </NavigationMenuItem> 
            <NavigationMenuItem> 
                <Link href="/aboutus" legacyBehavior passHref> 
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}> 
                        About Us 
                    </NavigationMenuLink> 
                </Link> 
            </NavigationMenuItem> 
            <NavigationMenuItem> 
                <Link href="/resources" legacyBehavior passHref> 
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}> 
                        Resources
                    </NavigationMenuLink> 
                </Link> 
            </NavigationMenuItem> 
            <NavigationMenuItem> 
                <Link href="/data" legacyBehavior passHref> 
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}> 
                        Data
                    </NavigationMenuLink> 
                </Link> 
            </NavigationMenuItem> 
            <NavigationMenuItem> 
                <Link href="/game" legacyBehavior passHref> 
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}> 
                        Game
                    </NavigationMenuLink> 
                </Link> 
            </NavigationMenuItem> 
            </div> 
            <div className="flex gap-4"> 
                <ModeToggle /> 
                <SignedIn> 
                    <UserButton/> 
                </SignedIn> 
                <SignedOut> 
                    <SignInButton/> 
                </SignedOut> 
            </div> 
        </NavigationMenu> 
    ) 
}