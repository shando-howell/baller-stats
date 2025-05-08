import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex p-2 bg-blue-500 text-yellow-400">
        <div className="flex-1">
          <Link href="/">
            <span className="font-bold tracking-widest">BallerFit</span>
          </Link>
        </div>
        <div className="px-1">
          <Link href="/tickets">Tickets</Link>
        </div>
        <div className="px-1">
          <Link href="/shop">Shop</Link>
        </div>
        <div className="px-1">
          <Link href="/players">Players</Link>
        </div>
    </div>
  )
}

export default Navbar