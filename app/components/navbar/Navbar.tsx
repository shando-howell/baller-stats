"use client"

import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavigationContext } from "@/context/nav";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { setIsMobileNavOpen } = use(NavigationContext)
  const router = useRouter()

  const handleHome = () => {
    router.push("/")
  }

  return (
    <div className="flex justify-between px-3 py-4 bg-blue-500 text-yellow-400">
          <div className="py-1">
            <Button 
              variant="ghost"
              onClick={handleHome}
              className="text-yellow-400 hover:text-blue-600 font-bold tracking-widest"
            >
              BallerFit
            </Button>
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