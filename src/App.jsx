import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import MarvelComics from "./pages/MarvelComics"
import Spiderman from "./pages/Spiderman"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marvelcomics' element={<MarvelComics />} />
        <Route path='/marvelcomics/spiderman' element={<Spiderman />} />
      </Routes>
    </>
  )
}

export default App
