import Image from "next/image"
import Header from "@/app/layouts/page"

export default function Home() {
  return (
    <div className="flex min-h-screen  justify-center bg-linear-to-br from-green-900 to-green-500 font-sans ">
      <div className="w-full ">
        <Header></Header>
      </div>
    </div>
  )
}
