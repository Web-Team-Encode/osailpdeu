import React from "react"
import {Link} from "react-router-dom"

export default function CommitteeCards() {
  const committeesData = [
    {
      id: 1,
      name: "S&T",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "/snt/clubinfo",
    },
    {
      id: 2,
      name: "S&C",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "/snc/clubinfo",
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
    <div key={committee.id} className="mx-auto w-64 lg:mx-0">
      <div className="flex h-60 w-full items-center justify-center bg-white">
        <h1 className="text-5xl text-redTertiary">{committee.name}</h1>
      </div>
      <p className="mt-3">{committee.description}</p>
      <Link to={committee.link}>
        <p className="mt-1 text-sm">Learn more</p>
      </Link>
    </div>
  ))

  return (
    <div className="mt-10 space-y-11 sm:flex sm:flex-wrap sm:gap-5 sm:space-y-0 lg:flex-nowrap lg:justify-center lg:gap-8">
      {committeesCards}
    </div>
  )
}
