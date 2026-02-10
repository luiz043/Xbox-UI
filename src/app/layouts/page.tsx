"use client"
import { FaBatteryFull } from "react-icons/fa"
import { FaMicrophoneSlash } from "react-icons/fa"
import { useState, useEffect } from "react"
import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"
import { LuLibraryBig } from "react-icons/lu"
import { FaStore } from "react-icons/fa"
import { LuGamepad2 } from "react-icons/lu"
import { FaSearch } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"

export default function Header() {
  const [time, setTime] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const hour = now.getHours()
      const minute = now.getMinutes()

      const formattedMinute = minute < 10 ? `0${minute}` : minute

      setTime(`${hour} : ${formattedMinute}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex m-5  justify-between">
      <div className="flex items-center gap-3">
        <Avatar
          label="U"
          className=" size-10! text-white bg-[#0caa14]"
          shape="circle"
          size="xlarge"
        />
        <h1 className="text-lg">Username</h1>
      </div>
      <div className="flex items-center  gap-3">
        <Button
          className="bg-gray-800 hover:bg-gray-500 transition-all p-2 rounded-3xl"
          severity="secondary"
        >
          <LuLibraryBig size={25} />
        </Button>
        <Button
          className="bg-gray-800 hover:bg-gray-500 transition-all p-2 rounded-3xl"
          severity="secondary"
        >
          <FaStore size={25} />
        </Button>
        <Button
          className="bg-gray-800 hover:bg-gray-500 transition-all p-2 rounded-3xl"
          severity="secondary"
        >
          <LuGamepad2 size={25} />
        </Button>
        <Button
          className="bg-gray-800 hover:bg-gray-500 transition-all p-2 rounded-3xl"
          severity="secondary"
        >
          <FaSearch size={25} />
        </Button>
        <Button
          className="bg-gray-800 hover:bg-gray-500 transition-all p-2 rounded-3xl"
          severity="secondary"
        >
          <IoMdSettings size={25} />
        </Button>
      </div>
      <div className="flex gap-3">
        <FaMicrophoneSlash size={25} />
        <FaBatteryFull size={25} />
        <div> {time} </div>
      </div>
    </div>
  )
}
