"use client"
import { FaBatteryFull } from "react-icons/fa"
import { FaMicrophoneSlash } from "react-icons/fa"
import { useState, useEffect } from "react"
import { Avatar } from "primereact/avatar"

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
          className="hover:bg-black! text-white bg-[#9c27b0]"
          shape="circle"
          size="xlarge"
        />
        <h1 className="text-lg">Username</h1>
      </div>
      <div className="flex gap-3">
        <FaMicrophoneSlash size={25} />
        <FaBatteryFull size={25} />
        <div> {time} </div>
      </div>
    </div>
  )
}
