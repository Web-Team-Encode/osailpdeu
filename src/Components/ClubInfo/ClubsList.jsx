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
      <div className="hidden lg:block">
        <h1 className="text-lg font-medium">{club.name}</h1>
        <h2>@club.id</h2>
      </div>
    </div>
  ))

  return (
    <div className="space-y-2 px-3 lg:max-h-[650px] lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-track-blueSecondary-100 lg:scrollbar-thumb-gray-300 lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:h-full lg:after:w-[1px] xl:px-10 ">
      {clubsList}
    </div>
  )
}
