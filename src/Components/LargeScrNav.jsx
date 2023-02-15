import React from "react"
import {Link} from "react-router-dom"

export default function LargeScrNav() {

  return (
    <div className="flex items-center justify-between bg-blueSecondary-800 py-2 px-5 text-white md:px-10 lg:px-16">
      <div className="text-3xl font-semibold uppercase">Logo</div>
      <div className="flex gap-7 text-xl">
        <Link to="/clubs">
          <h1>Clubs</h1>
        </Link>
        <Link to="/epf">
          <h1>EPF</h1>
        </Link>
        {/* <Link to="/committees">
          <h1>Committees</h1>
        </Link> */}
        {/* <Link to="/snt/clubinfo">
          <h1>Club Info</h1>
        </Link> */}
        <Link to="/calendar">
          <h1>Calender</h1>
        </Link>
        <Link to="/about">
          <h1>About Us</h1>
        </Link>
      </div>
      <div>
        <a href="#">
          <button className="rounded-3xl bg-redTertiary px-6 pb-1 pt-[3px] text-lg text-whitePrimary">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  )
}
