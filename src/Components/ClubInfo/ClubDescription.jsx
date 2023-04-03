import React from "react"

// This is the right part of the grid
export default function ClubDescription({data}) {
  // console.log(data)
  return (
    <div className="px-5 lg:px-14 xl:w-[90%] 2xl:w-4/5">
      <div className="flex gap-4 ">
        <div className="h-20 w-20 rounded-full bg-whitePrimary"></div>
        <div className="mt-1">
          <h1 className="text-2xl font-medium">{data.name}</h1>
          {/* // TODO: Add social logos */}
          <h2>*links to social*</h2>
        </div>
      </div>
      <div>
        <p className="mt-4">{data.description}</p>
      </div>
      <h2 className="mt-4 text-2xl">View Photos</h2>
      <div className="mt-3 flex flex-wrap gap-3">
        <div className="h-24 w-24 bg-whitePrimary lg:h-40 lg:w-40"></div>
        <div className="h-24 w-24 bg-whitePrimary lg:h-40 lg:w-40"></div>
        <div className="h-24 w-24 bg-whitePrimary lg:h-40 lg:w-40"></div>
        <div className="h-24 w-24 bg-whitePrimary lg:h-40 lg:w-40"></div>
        <div className="h-24 w-24 bg-whitePrimary lg:h-40 lg:w-40"></div>
        <div className="h-24 w-24 bg-whitePrimary lg:h-40 lg:w-40"></div>
      </div>
    </div>
  )
}
