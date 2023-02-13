import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importing the pages
import Committees from "./Pages/Committees"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/clubs" element={<h1>Clubs</h1>} />
          <Route path="/committees" element={<Committees/>} />
          <Route path="/epf" element={<h1>EPF</h1>} />
          <Route path="/calendar" element={<h1>Calendar</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
