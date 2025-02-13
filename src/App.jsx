import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import MarvelComics from "./pages/MarvelComics"
import Spiderman from "./pages/Spiderman"
import StarWars from "./pages/StarWars"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marvelcomics' element={<MarvelComics />} />
        <Route path='/marvelcomics/spiderman' element={<Spiderman />} />
        <Route path='/starwars' element={<StarWars />} />
      </Routes>
    </>
  )
}

export default App
