import Link from "next/link"
import AuthButtons from "../auth-buttons/AuthButtons"

const Navbar = () => {
  return (
    <div className="flex px-3 py-4 bg-blue-500 text-yellow-400">
        <div className="flex-1">
          <Link href="/">
            <span className="font-bold tracking-widest">BallerFit</span>
          </Link>
        </div>
        <div className="px-2">
          <Link href="/tickets">Tickets</Link>
        </div>
        <div className="px-2">
          <Link href="/shop">Shop</Link>
        </div>
        <div className="px-2">
          <Link href="/players">Players</Link>
        </div>
        <div>
          <AuthButtons/>
        </div>
    </div>
  )
}

export default Navbar