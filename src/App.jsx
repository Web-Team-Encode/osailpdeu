import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importing the pages
import Committees from "./Pages/Committees"
import Clubs from "./Pages/Clubs"
import ClubInfo from "./Pages/ClubInfo"
import EPF from "./Pages/EPF"
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/clubs" element={<Clubs/>} />
          <Route path="/committees" element={<Committees/>} />
          <Route path="/epf" element={<EPF/>} />
          <Route path="/calendar" element={<h1>Calendar</h1>} />
          <Route path="/about" element={<h1>About</h1>} />

          {/* This route needs to be change little bit  */}
          {/* // ? Try to do something like this /snt/club/:clubid (refer router docs) */}
          <Route path="/snt/clubinfo" element={<ClubInfo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
