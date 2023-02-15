import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import EPFform from "../Components/EPF/EPFform"

export default function EPF() {
  return (
    <>
      <Navbar />
      {/* // TODO: This "h-60vh" class to be removed once the desgin is defined more clearly. */ }
      <div className="h-[60vh] bg-blueSecondary-100 px-5 pt-10 font-Roboto md:px-12 xl:px-24">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-5xl">EPF</h1>
        <EPFform />
      </div>
      <Footer />
    </>
  )
}
