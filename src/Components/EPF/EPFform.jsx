import React from "react"

export default function EPFform() {
  // ? For now keep this EPF form as a simple form with 3 input fields. Design needs to be defined more clearly.
  // ? If needed and if possible we can try to make this form using array mapping.
  return (
    <div className="mt-6 space-y-2 md:mt-12">
      <div className="text-xl">
        <label htmlFor="clubName" className="inline-block w-36 ">
          Club Name:
        </label>
        <input
          type="text"
          name="clubName"
          id="clubName"
          className="border-b-[1px] border-b-black bg-blueSecondary-100"
        />
      </div>
      <div className="text-xl">
        <label htmlFor="eventName" className="inline-block w-36 ">
          Event Name:
        </label>
        <input
          type="text"
          name="eventName"
          id="eventName"
          className="border-b-[1px] border-b-black bg-blueSecondary-100"
        />
      </div>
      <div className="text-xl">
        <label htmlFor="otherDetails" className="inline-block w-36 ">
          Other Details:
        </label>
        <input
          type="text"
          name="otherDetails"
          id="otherDetails"
          className="border-b-[1px] border-b-black bg-blueSecondary-100"
        />
      </div>
    </div>
  )
}
