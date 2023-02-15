import React from 'react'

export default function card(props) {
  return (
    <div className="card overflow-hidden  rounded-2xl w-full md:w-72  h-100">
      <div className="image h-3/5  bg-black"> </div>
      <div className=" info flex flex-col justify-between p-5 text-lg bg-whitePrimary h-2/5">
          <div><p className='text-2xl'>{props.eventName}</p></div>
            <a className='' href="">See More &gt; </a>
      </div>
    </div>
  )
}
