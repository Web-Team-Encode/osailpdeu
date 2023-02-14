import React, {useState} from "react"

import ClubsList from "../../Components/ClubInfo/ClubsList"
import ClubDescription from "../../Components/ClubInfo/ClubDescription"

import sntClubs from "../../data/sntClubs"
import sntClubsDescription from "../../data/sntClubsDescription"

export default function ClubsGrid() {
  const [selectedClub, setSelectedClub] = useState("SNT Club 1")

  const handleClubSelect = (e) => {
    setSelectedClub(e.currentTarget.children[1].children[0].innerHTML)
  }

  const selectedClubDescription = sntClubsDescription.filter(
    (club) => club.name === selectedClub
  )

  //   console.log(selectedClubDescription)
  // console.log(selectedClub)

  return (
    // Visible after "lg (1024px)" breakpoint only
    // Grid with 2 cols, left for club list and right for club info
    <div className="hidden lg:grid lg:grid-cols-1/3 lg:mt-12 xl:grid-cols-1.2/3">
      {/* Left part */}
      <ClubsList data={sntClubs} handleClubSelect={handleClubSelect} />
      {/* Right Part */}
      {/* selectedClubDescription array will contain only one object that's why we are passing directly object as the prop */}
      <ClubDescription data={selectedClubDescription[0]} />
    </div>
  )
}
