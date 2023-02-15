import React, {useState} from "react"
import {Icon} from "@iconify/react"
import {Link} from "react-router-dom"

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-blueSecondary-800 py-2 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5">
        <div>
          <Link to="/">
            {/* <img
              src="./images/logo.webp"
              alt="Anirveda Logo"
              className="w-1/4"
            /> */}
            <h1 className="text-3xl font-semibold uppercase">Logo</h1>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Icon
            icon="charm:menu-hamburger"
            color={"white"}
            className="text-4xl"
            onClick={handleHamburgerClick}
          />
        </div>
      </div>

      {/* Hamburger bar items */}
      <div
        className={` absolute top-0 z-10 h-full w-full bg-blueSecondary-800 px-5 pt-3 transition-transform duration-300 ease-in  ${
          isOpen ? "translate-x-0" : "translate-x-[-100%]"
        } `}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div>
            {/* <img
              src="./images/logo_white.webp"
              alt="Anirveda Logo"
              className="w-1/4"
            /> */}
            <h1 className="text-3xl font-semibold uppercase">Logo</h1>
          </div>
          <div className="cursor-pointer">
            <Icon
              icon="akar-icons:cross"
              color={"white"}
              className="text-4xl"
              onClick={handleHamburgerClick}
            />
          </div>
        </div>

        <div className="mt-4 text-center text-2xl">
          <Link to="/clubs">
            <h1 className="mt-3 cursor-pointer uppercase">
              Clubs
            </h1>
          </Link>
          <Link to="/epf">
            <h1 className="mt-3 cursor-pointer uppercase">
              EPF
            </h1>
          </Link>
          {/* <Link to="/committees">
            <h1 className="mt-3 cursor-pointer uppercase">
              Committees
            </h1>
          </Link>
          <Link to="/snt/clubinfo">
            <h1 className="mt-3 cursor-pointer uppercase">
              Club Info
            </h1>
          </Link> */}
          <Link to="/calendar">
            <h1 className="mt-3 cursor-pointer uppercase">
              Calender
            </h1>
          </Link>
          <Link to="/about">
            <h1 className="mt-3 cursor-pointer uppercase">
              About Us
            </h1>
          </Link>
          <a href="#">
            <h1 className="mt-3 cursor-pointer uppercase">
              Sign Up
            </h1>
          </a>
        </div>
      </div>
    </div>
  )
}
