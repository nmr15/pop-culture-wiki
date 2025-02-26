import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import Beatles from "./pages/Beatles"
import Community from "./pages/Community"
import Himym from "./pages/Himym"
import MarvelComics from "./pages/MarvelComics"
import Mcu from "./pages/Mcu"
import Spiderman from "./pages/Spiderman"
import Spongebob from "./pages/Spongebob"
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
        <Route path='/beatles' element={<Beatles />} />
        <Route path='/spongebob' element={<Spongebob />} />
        <Route path='/himym' element={<Himym />} />
      </Routes>
    </>
  )
}

export default App
