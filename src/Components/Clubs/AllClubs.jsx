import React from "react"

export default function AllClubs(props) {
  const {data} = props

  const allclubs = data.map((club) => (
    <div
      key={club.id}
      className="h-20 w-20 rounded-full bg-white md:h-24 md:w-24 lg:h-28 lg:w-28"
    ></div>
  ))

  return (
    <div className="mt-5 flex flex-wrap justify-center gap-3 px-5 md:mx-auto md:mt-10 md:w-4/5 lg:w-3/4 lg:gap-6 xl:grid xl:grid-cols-6 xl:justify-items-center">
      {allclubs}
    </div>
  )
}
