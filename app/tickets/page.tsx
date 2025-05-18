import { Button } from "@/components/ui/button"
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const TicketsPage = () => {
  return (
    <div className="p-2">
      <Image 
        src="/photos/chase-center/chase-center-1.jpg"
        alt="Chase Center"
        height="300"
        width="450"
      />

      <div className="flex flex-wrap md:flex-nowrap place-content-center p-2">
          <Card>
              <CardTitle className="text-center">
                <h1>Game 3</h1>
              </CardTitle>
              <CardContent>
                <h3>Golden State Warriors vs Minesota Timberwolves</h3>
              </CardContent>
              <CardDescription className="flex">
                <div className="flex flex-1">
                  <MapPin /> Chase Center
                </div>
                <div className="flex">
                  <Calendar/> Saturday, May 12th
                </div>
              </CardDescription>
              <Button>Purchase Tickets</Button>
              <CardFooter>
                <h2>Unleash your fandom</h2>
              </CardFooter>
          </Card>
        </div>
    </div>
  )
}

export default TicketsPage