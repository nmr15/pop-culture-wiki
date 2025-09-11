import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import AssassinsCreed from "./pages/AssassinsCreed"
import Beatles from "./pages/Beatles"
import Community from "./pages/Community/Community"
import CommunityS1E1 from "./pages/Community/CommunityS1E1"
import CommunityS1E2 from "./pages/Community/CommunityS1E2"
import Gta from "./pages/Gta"
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
        <Route path="/community/pilot" element={<CommunityS1E1 />} />
        <Route path="/community/spanish101" element={<CommunityS1E2 />} />
        <Route path='/beatles' element={<Beatles />} />
        <Route path='/spongebob' element={<Spongebob />} />
        <Route path='/himym' element={<Himym />} />
        <Route path='/gta' element={<Gta />} />
        <Route path='/assassinscreed' element={<AssassinsCreed />} />
      </Routes>
    </>
  )
}

export default App
