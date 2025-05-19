"use client"

import { use } from "react";
import { Button } from "@/components/ui/button";
import { NavigationContext } from "@/context/nav";
import { Menu } from "lucide-react";
import Link from "next/link"

const Navbar = () => {
  const { setIsMobileNavOpen } = use(NavigationContext)

  return (
    <div className="flex px-3 py-4 bg-blue-500 text-yellow-400">
        <div className="flex-1">
          <Link href="/">
            {/* <span className="font-bold tracking-widest">BallerFit</span> */}
          </Link>
        </div>

        <div className="p-1">
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileNavOpen(true)}
            className="md:hidden text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          >
            <Menu />
          </Button>
        </div>
    </div>
  )
}

export default Navbar