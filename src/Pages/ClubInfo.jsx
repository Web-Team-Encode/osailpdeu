import React from "react"
import ClubsGrid from "../Components/ClubInfo/ClubsGrid"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import sntClubs from "../data/sntClubs"
import sntClubsDescription from "../data/sntClubsDescription"
import sncClubs from "../data/sncClubs"
import sncClubsDescription from "../data/sncClubsDescription"

export default function ClubInfo({committee}) {
  return (
    <>
      <Navbar />
      <div className="font-Robotos bg-blueSecondary-100 py-20">
        <h1 className="text-center text-2xl  sm:text-3xl md:text-5xl lg:ml-14 lg:text-left">
          Clubs under {committee}
        </h1>

        {committee === "S&T" ? (
          <ClubsGrid
            data={sntClubs}
            clubsDescription={sntClubsDescription}
            clubName="SNT Club 1"
          />
        ) : (
          <ClubsGrid
            data={sncClubs}
            clubsDescription={sncClubsDescription}
            clubName="SNC Club 1"
          />
        )}

        {/* <ClubsGrid data={"abc"} /> */}
      </div>
      <Footer />
    </>
  )
}
