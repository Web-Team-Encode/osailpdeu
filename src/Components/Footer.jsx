import React from "react"

export default function Footer() {
  return (
    <footer className="bg-blueSecondary-800 py-16 text-white md:px-60">
      <div className="flex justify-center ">
        {/* <p className='mx-2 md:mx-8 text-lg'>Calender</p> */}
        {/* <p className='mx-2 md:mx-8 text-lg'>EPF</p> */}
        <p className="mx-2 text-lg md:mx-8">Committees</p>
        <p className="mx-2 text-2xl font-bold md:mx-8">LOGO</p>
        {/* <p className='mx-2 md:mx-8 text-lg'>Clubs</p> */}
        <p className="mx-2 text-lg md:mx-8">About Us</p>
      </div>

      <hr className="mt-10" />
      <div className="mt-14 flex items-center justify-center">
        <div className="mx-4 h-10 w-10 rounded-full border border-red-500"></div>
        <div className="mx-4 h-10 w-10 rounded-full border border-red-500"></div>
        <div className="mx-4 h-10 w-10 rounded-full border border-red-500"></div>
        <div className="mx-4 h-10 w-10 rounded-full border border-red-500"></div>
        <div className="mx-4 h-10 w-10 rounded-full border border-red-500"></div>
      </div>
    </footer>
  )
}
