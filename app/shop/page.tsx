import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

import { products } from "@/data"

const ShopPage = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap place-content-center p-2">
      {products.map((product) => 
        <div key={product.id} className="p-2 text-center">
          <Card className="px-10 md:px-2">
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

export default ShopPage;