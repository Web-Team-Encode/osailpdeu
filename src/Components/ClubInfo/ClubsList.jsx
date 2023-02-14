import React, {useState} from "react"

// This is the left part of the grid
export default function ClubsList(props) {
  // ? Try to use data/sntClubs.js file only to generate the list of the clubs. So need to add these few fields to the data file: img (ig image will be added because it is needed for the clubs overview page (currently /clubs page))
  // ? What to add in "@club.id"? Refer to the figma design

  const {data, handleClubSelect} = props

  const clubsList = data.map((club) => (
    <div
      key={club.id}
      className="flex cursor-pointer items-center gap-4 rounded-[40px] bg-redTertiary px-4 py-2"
      onClick={handleClubSelect}
    >
      <div className="h-14 w-14 rounded-full bg-whitePrimary"></div>
      <div>
        <h1 className="text-lg font-medium">{club.name}</h1>
        <h2>@club.id</h2>
      </div>
    </div>
  ))

  return (
    <div className="relative max-h-[650px] space-y-2 overflow-y-scroll px-3 scrollbar-thin scrollbar-track-blueSecondary-100 scrollbar-thumb-gray-300 after:absolute after:top-0 after:right-0 after:h-full after:w-[1px]  xl:px-10 ">
      {clubsList}
    </div>
  )
}
