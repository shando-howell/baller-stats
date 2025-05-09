import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

import { players } from "@/data"

const PlayersPage = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap place-content-center p-2">
      {players.map((player) => 
        <div key={player.id} className="p-2 text-center">
          <Card className="px-10 md:px-2">
            <CardTitle>{player.name}</CardTitle>
            <CardContent>
              <Image 
                src={player.photo}
                alt={player.name}
                height="180"
                width="180"
              />
            </CardContent>
            <CardDescription>
              <p className="text-gray-800">
                {player.number}{" - "}
                {player.position}
              </p>
            </CardDescription>
          </Card>
        </div>
      )}
    </div>
  )
}

export default PlayersPage