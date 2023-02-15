import React from 'react'
import EventCard from '../Components/Home/EventCard'
import Footer from '../Components/Home/Footer'

export default function Home() {
    return (
       <>


            <main className='h-screen flex-col px-4 full-center  bg-whitePrimary' >
                <h1 className='text-6xl'>OSAIL</h1>
                <p className='md:w-1/5 mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='bg-redTertiary mt-5 text-white p-3 px-12 rounded-xl'>More about us</button>
            </main>

            <section className='bg-blueSecondary-100  px-4 py-16 '>
                <div className="flex flex-col  items-center">

                    <h2 className='text-4xl text-white'>Upcomming Events</h2>
                    <p className='text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                    <div className='cards-container flex w-full px-12 md:p-16 mt-5 flex flex-wrap justify-center gap-7'>

                        <EventCard eventName={'Event 1'}></EventCard>
                        <EventCard eventName={'Event 2'}></EventCard>
                        <EventCard eventName={'Event 3'}></EventCard>
                        <EventCard eventName={'Event 4'}></EventCard>
                    </div>
                </div>
            </section>

            <Footer></Footer>



        </>



    )
}
