import Link from "next/link"; 
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu"; 
<<<<<<< Updated upstream
import { ModeToggle } from "../modetoggle/mode-toggle"; 
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"; 
=======
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"; 
>>>>>>> Stashed changes
 
export function NavigationBar() { 
    return ( 
        <NavigationMenu className="list-none flex items-center justify-between h-16 sticky top-0 p-5 min-w-full  bg-white"> 
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
            </div> 
            <div className="flex gap-4"> 
<<<<<<< Updated upstream
                <ModeToggle /> 
=======
                <SignedIn> 
                    <UserButton/> 
                </SignedIn> 
                <SignedOut> 
                    <SignInButton/> 
                </SignedOut> 
>>>>>>> Stashed changes
            </div> 
        </NavigationMenu> 
    ) 
}