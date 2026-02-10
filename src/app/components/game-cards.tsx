"use client"
import { useState, useEffect } from "react"
import { Carousel } from "primereact/carousel"

export default function GameCards() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const apiUrl = "https://api.pexels.com/v1/curated?page=1&per_page=30"
  const apiKey = "SmFsJEiD2IlwQtcdDfFkXxMHRRjPgaZ6q5lDDRQ4RNAGVM4JJCaYMI6y"

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  }
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch(apiUrl, requestOptions)
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchData()
    setLoading(false)
  }, [])

  const removed = data?.photos

  const template = (img) => {
    return (
      <img
        className="rounded-xl  shadow-2xl border-2 border-green-500"
        key={img.id}
        src={img.src.tiny}
        alt={img.alt}
      />
    )
  }

  return (
    // <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-8 gap-5 m-5  ">
    // <div className="flex  gap-5 m-5  ">
    //   {removed?.map((img) => (
    //     <img
    //       className="rounded-xl  shadow-2xl border-2 border-green-500"
    //       key={img.id}
    //       src={img.src.tiny}
    //       alt={img.alt}
    //     />
    //   ))}
    // </div>
    <div className="flex ">
      <Carousel
        pt={{
          previousButton: { className: "size-10" },
          nextButton: { className: "size-10" },
        }}
        circular
        value={data?.photos}
        numVisible={6}
        itemTemplate={template}
        numScroll={6}
      />
    </div>
  )
}
