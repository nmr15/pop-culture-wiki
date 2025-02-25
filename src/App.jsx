import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import Mcu from "./pages/Mcu"
import Community from "./pages/Community"
import MarvelComics from "./pages/MarvelComics"
import Spiderman from "./pages/Spiderman"
import StarWars from "./pages/StarWars"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mcu' element={<Mcu />} />
        <Route path='/marvelcomics' element={<MarvelComics />} />
        <Route path='/marvelcomics/spiderman' element={<Spiderman />} />
        <Route path='/starwars' element={<StarWars />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </>
  )
}

export default App
