import Link from "next/link"; 
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu"; 
// import { ModeToggle } from "../mode-toggle"; 
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"; 
 
export function NavigationBar() { 
    return ( 
        <NavigationMenu className="list-none flex items-center justify-between h-16 sticky top-0 p-5 min-w-full"> 
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
                <Link href="/aboutme" legacyBehavior passHref> 
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}> 
                        About me 
                    </NavigationMenuLink> 
                </Link> 
            </NavigationMenuItem> 
            </div> 
            <div className="flex gap-4"> 
                {/* <ModeToggle/> 
                <SignedIn> 
                    <UserButton/> 
                </SignedIn> 
                <SignedOut> 
                    <SignInButton/> 
                </SignedOut>  */}
            </div> 
        </NavigationMenu> 
    ) 
}