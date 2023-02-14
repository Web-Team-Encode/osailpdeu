import React from "react"
import ClubsGrid from "../Components/ClubInfo/ClubsGrid"

export default function ClubInfo() {
  return (
    <div className="bg-blueSecondary-100 font-Roboto pt-20">
      <h1 className="text-2xl sm:text-3xl md:text-5xl ml-14">Clubs under S&T</h1>

      <ClubsGrid />
    </div>
  )
}
