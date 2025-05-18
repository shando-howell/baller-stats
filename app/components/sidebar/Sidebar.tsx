"use client"

import { NavigationContext } from "@/context/nav";
import { useRouter } from "next/navigation";
import { use } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
    const router = useRouter();
    const { closeMobileNav, isMobileNavOpen } = use(NavigationContext)

    const handleTickets = () => {
        router.push("/tickets");
        closeMobileNav()
    }

    const handleShop = () => {
        router.push("/shop");
        closeMobileNav();
    }

    const handlePlayers = () => {
        router.push("/players");
        closeMobileNav();
    }

    const handleLogin = () => {
        router.push("/login");
        closeMobileNav();
    }

    const handleSignUp = () => {
        router.push("/sign-up");
        closeMobileNav();
    }

    return (
        <>
            {isMobileNavOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={closeMobileNav}
                />
            )}

            <div className={cn(
                "fixed md:inset-y-0 top-14 bottom-0 left-0 z-50 w-72 bg-grey-50/80 backdrop-blue-xl border-r border-gray-200/50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:top-0 flex flex-col",
                isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-4 border-b border-gray-200/50">
                    <Button
                        onClick={handleTickets}
                        className="w-full mb-4 bg-white hover:bg-gray-50 text-blue-700 border border-gray-200/50 shadow-sm hover:shadow transition-all duration-200"
                    >
                        Tickets
                    </Button>

                    <Button
                        onClick={handleShop}
                        className="w-full mb-4 bg-white hover:bg-gray-50 text-blue-700 border border-gray-200/50 shadow-sm hover:shadow transition-all duration-200"
                    >
                        Shop
                    </Button>

                    <Button
                        onClick={handlePlayers}
                        className="w-full mb-4 bg-white hover:bg-gray-50 text-blue-700 border border-gray-200/50 shadow-sm hover:shadow transition-all duration-200"
                    >
                        Players
                    </Button>

                    <Button
                        onClick={handleLogin}
                        className="w-full mb-4 bg-white hover:bg-gray-50 text-blue-700 border border-gray-200/50 shadow-sm hover:shadow transition-all duration-200"
                    >
                        Login
                    </Button>

                    <Button
                        onClick={handleSignUp}
                        className="w-full mb-4 bg-white hover:bg-gray-50 text-blue-700 border border-gray-200/50 shadow-sm hover:shadow transition-all duration-200"
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Sidebar