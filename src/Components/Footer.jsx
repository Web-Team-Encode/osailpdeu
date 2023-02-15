import React from 'react'

export default function Footer() {
  return (
 
    <footer className='bg-blueSecondary-800 py-16 md:px-60 text-white'>

    <div className='flex justify-center ' >
        <p className='mx-2 md:mx-8 text-lg'>Calender</p>
        <p className='mx-2 md:mx-8 text-lg'>EPF</p>
        <p className='mx-2 md:mx-8 font-bold text-2xl'>LOGO</p>
        <p className='mx-2 md:mx-8 text-lg'>Clubs</p>
        <p className='mx-2 md:mx-8 text-lg'>About Us</p>
    </div>

    <hr className='mt-10' />
    <div className='flex mt-14 items-center justify-center'>

        <div className='h-10 w-10 mx-4 border border-red-500 rounded-full'></div>
        <div className='h-10 w-10 mx-4 border border-red-500 rounded-full'></div>
        <div className='h-10 w-10 mx-4 border border-red-500 rounded-full'></div>
        <div className='h-10 w-10 mx-4 border border-red-500 rounded-full'></div>
        <div className='h-10 w-10 mx-4 border border-red-500 rounded-full'></div>
    </div>

</footer>
  )
}
