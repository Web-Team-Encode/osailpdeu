import React from "react"

import AllClubs from "../Components/Clubs/AllClubs"
import sntClubs from "../data/sntClubs"

export default function Clubs() {
    // ? In figma "clubs" is given in navbar, and for clubs page, they have made this page in which they have written "Committees under S&T" but in the navbar, they have written "Clubs" so I am confused about this. So I am planning to made 2 pages "Clubs under S&T" and "Clubs under S&C" and then we can add the navbar links to them or maybe a dropdown in navbar for clubs. What do you think about this?
    // ? I think we should go for 2 different pages for clubs under S&T and S&C. What do you think about this?
  return (
    <div className="bg-blueSecondary-100 font-Roboto">
      <div className="text-center space-y-1 pt-10 md:space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-5xl">
          Clubs under S&T
        </h1>
        <p className="px-4 sm:w-4/5 sm:mx-auto md:w-3/4 lg:w-3/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          iure, hic fugiat sit placeat necessitatibus reiciendis iste eveniet ut
          sint voluptate incidunt, vero voluptas quam sapiente dolorem adipisci
          enim nostrum.
        </p>
      </div>
      <AllClubs data={sntClubs} />
    </div>
  )
}
