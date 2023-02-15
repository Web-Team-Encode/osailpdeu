import React from "react"
import ClubsGrid from "../Components/ClubInfo/ClubsGrid"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function ClubInfo() {
  return (
    <>
      <Navbar />
      <div className="bg-blueSecondary-100 py-20 font-Roboto">
        <h1 className="ml-14 text-2xl sm:text-3xl md:text-5xl">
          Clubs under S&T
        </h1>

        <ClubsGrid />
      </div>
      <Footer />
    </>
  )
}
