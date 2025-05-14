import Image from "next/image"

const logos = [
    {
        id: "20",
        path: "/photos/nba-logo.png",
        alt: "NBA logo"
    },
    {
        id: "21",
        path: "/photos/airjordan-logo.png",
        alt: "Air Jordan logo"
    },
    {
        id: "22",
        path: "/photos/new-era-logo.png",
        alt: "New Era logo"
    },
    {
            id: "23",
            path: "/photos/pp-logo.jpeg",
            alt: "Air Jordan logo"
    },
]

const BrandsBar = () => {
  return (
    <div className="flex">
            {logos.map((logo) => (
                <div key={logo.id} className="px-6">
                    <Image
                        src={logo.path}
                        alt={logo.alt}
                        width="50"
                        height="50"
                    />
                </div>
            ))}
    </div>
  )
}

export default BrandsBar