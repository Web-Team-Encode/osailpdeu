import React from "react"
import {Link} from "react-router-dom"

export default function CommitteeCards() {
  const committeesData = [
    {
      id: 1,
      name: "S&T",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "/snt",
    },
    {
      id: 2,
      name: "S&C",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "/snc",
    },
    {
      id: 3,
      name: "Sports",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "/sports",
    },
  ]

  const committeesCards = committeesData.map((committee) => (
    // Each committee card
    <div key={committee} className="w-64 mx-auto lg:mx-0">
      <div className="bg-white w-full h-60 flex items-center justify-center">
        <h1 className="text-redTertiary text-5xl">{committee.name}</h1>
      </div>
      <p className="mt-3">{committee.description}</p>
      <Link to={committee.link}>
        <p className="mt-1 text-sm">Learn more</p>
      </Link>
    </div>
  ))

  return <div className="space-y-11 mt-10 sm:flex sm:space-y-0 sm:flex-wrap sm:gap-5 lg:gap-8 lg:justify-center lg:flex-nowrap">{committeesCards}</div>
}
