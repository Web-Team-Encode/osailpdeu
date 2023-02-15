import React from "react"

import HamburgerNav from "./HamburgerNav"
import LargeScrNav from "./LargeScrNav"

export default function Navbar() {
  return (
    <div className="font-Roboto">
      <div className="sm:hidden">
        <HamburgerNav />
      </div>
      <div className="hidden sm:block">
        <LargeScrNav />
      </div>
    </div>
  )
}
