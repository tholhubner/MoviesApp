import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { NavBar } from "../components"
import { MoviesList, MoviesInsert } from "../pages"

function App() {
  return (
    <div className="h-screen justify-top items-center flex flex-col mb-10 px-5">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/movies/list" exact element={<MoviesList />} />
          <Route path="/movies/create" exact element={<MoviesInsert />} />
          <Route path="/movies/update/:id" exact element={<MoviesInsert />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
