import React, {useState} from "react"

import ClubsList from "../../Components/ClubInfo/ClubsList"
import ClubDescription from "../../Components/ClubInfo/ClubDescription"

// import sntClubs from "../../data/sntClubs"
// import clubsDescription from "../../data/sntClubsDescription"

export default function ClubsGrid({data, clubsDescription, clubName}) {
  // console.log(clubsDescription)
  const [selectedClub, setSelectedClub] = useState(clubName)

  const handleClubSelect = (e) => {
    setSelectedClub(e.currentTarget.children[1].children[0].innerHTML)
  }

  const selectedClubDescription = clubsDescription.filter(
    (club) => club.name === selectedClub
  )

  //   console.log(selectedClubDescription)
  // console.log(selectedClub)

  return (
    // Visible after "lg (1024px)" breakpoint only
    // Grid with 2 cols, left for club list and right for club info
    // <div className=" lg:mt-12 lg:grid lg:grid-cols-1/3 xl:grid-cols-1.2/3">
    <div className=" mt-10 grid grid-cols-1/3 lg:mt-0 lg:mt-12 xl:grid-cols-1.2/3">
      {/* Left part */}
      <ClubsList data={data} handleClubSelect={handleClubSelect} />
      {/* Right Part */}
      {/* selectedClubDescription array will contain only one object that's why we are passing directly object as the prop */}
      <ClubDescription data={selectedClubDescription[0]} />
    </div>
  )
}
