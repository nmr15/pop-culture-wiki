import { useLayoutEffect, Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { communitychars } from "./data/dataCommunity"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import AssassinsCreed from "./pages/AssassinsCreed/AssassinsCreed"
import Beatles from "./pages/Beatles/Beatles"
import Community from "./pages/Community/Community"
import CommunityS1E1 from "./pages/Community/CommunityS1E1"
import CommunityS1E2 from "./pages/Community/CommunityS1E2"
import GravityFalls from "./pages/GravityFalls/GravityFalls"
import Gta from "./pages/Gta/Gta"
import Himym from "./pages/Himym/Himym"
import MarvelComics from "./pages/MarvelComics/MarvelComics"
import Mcu from "./pages/Mcu/Mcu"
import Spiderman from "./pages/MarvelComics/Spiderman"
import Spongebob from "./pages/Spongebob/Spongebob"
import StarWars from "./pages/StarWars/StarWars"

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname])
  return children
}

const routes = communitychars.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/Community/${char.file}.jsx`))
}));

function App() {

  return (
    <>
      <Navbar />
      <Wrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mcu' element={<Mcu />} />
        <Route path='/marvelcomics' element={<MarvelComics />} />
        <Route path='/marvelcomics/spiderman' element={<Spiderman />} />
        <Route path='/starwars' element={<StarWars />} />
        <Route path='/community' element={<Community />} />
        {routes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        <Route path="/community/pilot" element={<CommunityS1E1 />} />
        <Route path="/community/spanish_101" element={<CommunityS1E2 />} />
        <Route path='/beatles' element={<Beatles />} />
        <Route path='/spongebob' element={<Spongebob />} />
        <Route path='/himym' element={<Himym />} />
        <Route path='/gta' element={<Gta />} />
        <Route path='/assassinscreed' element={<AssassinsCreed />} />
        <Route path='/gravityfalls' element={<GravityFalls />} />
      </Routes>
      </Wrapper>
    </>
  )
}

export default App
