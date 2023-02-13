import React from "react"
import CommitteeCards from "../Components/Committees/CommitteeCards"

export default function Committees() {
  return (
    <div className="bg-blueSecondary-100 font-Roboto">
      <div className="text-center space-y-1 pt-10 md:space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-5xl">
          Committees under OSAIL
        </h1>
        <p className="px-4 sm:w-4/5 sm:mx-auto md:w-3/4 lg:w-3/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          iure, hic fugiat sit placeat necessitatibus reiciendis iste eveniet ut
          sint voluptate incidunt, vero voluptas quam sapiente dolorem adipisci
          enim nostrum.
        </p>
      </div>
      <CommitteeCards />
    </div>
  )
}
