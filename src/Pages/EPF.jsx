import React from "react"

import EPFform from "../Components/EPF/EPFform"

export default function EPF() {
    return (
    //   TODO: This "h-screen" class to be removed once the desgin is defined more clearly.
    <div className="bg-blueSecondary-100 font-Roboto px-5 md:px-12 pt-10 xl:px-24 h-screen">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-5xl">EPF</h1>
      <EPFform />
    </div>
  )
}
