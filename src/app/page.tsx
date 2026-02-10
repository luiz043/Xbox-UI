import Image from "next/image"
import Header from "@/app/layouts/page"
import GameCards from "./components/game-cards"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen   bg-linear-to-br from-green-900 to-green-500 font-sans ">
      <div className="w-full ">
        <Header></Header>
      </div>
      <div className="h-[50vh]"></div>
      <div>
        <GameCards />
      </div>
    </div>
  )
}
