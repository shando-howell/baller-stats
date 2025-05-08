import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    id: "1",
    name: "GSW Jacket",
    bestSeller: true,
    photo: "/photos/products/gsw-jacket.png",
    category: "Outerwears"
  },
  {
    id: "2",
    name: "GSW Jersey",
    bestSeller: true,
    photo: "/photos/products/gsw-jersey.png",
    category: "Jerseys"
  },
  {
    id: "3",
    name: "GSW Cap",
    bestSeller: true,
    photo: "/photos/products/gsw-cap.png",
    category: "Headwears"
  }
]

const BestSellers = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap p-2">
      {products.map((product) => 
        <div key={product.id} className="px-1.5 text-center">
          <Card>
            <CardTitle>{product.name}</CardTitle>
            <CardContent>
              <Image 
                src={product.photo}
                alt={product.name}
                height="180"
                width="180"
              />
            </CardContent>
            <CardDescription>
              <p className="text-gray-800">
                {product.category}
              </p>
            </CardDescription>
          </Card>
        </div>
      )}
    </div>
  )
}

export default BestSellers