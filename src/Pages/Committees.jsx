import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import CommitteeCards from "../Components/Committees/CommitteeCards"

export default function Committees() {
  return (
    <>
      <Navbar />
      <div className="bg-blueSecondary-100 py-20 font-Roboto">
        <div className="space-y-1  text-center md:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-5xl">
            Committees under OSAIL
          </h1>
          <p className="px-4 sm:mx-auto sm:w-4/5 md:w-3/4 lg:w-3/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur iure, hic fugiat sit placeat necessitatibus reiciendis
            iste eveniet ut sint voluptate incidunt, vero voluptas quam sapiente
            dolorem adipisci enim nostrum.
          </p>
        </div>
        <CommitteeCards />
      </div>
      <Footer />
    </>
  )
}
