import { useLayoutEffect, Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { routesTopics, routesAssassinsCreed, routesCommunityChars, routesGta, routesMcu, routesMcuMeta } from "./articles"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import AdventureTime from "./pages/AdventureTime/AdventureTime"
import Asoue from "./pages/Asoue/Asoue"
import AssassinsCreed from "./pages/AssassinsCreed/AssassinsCreed"
import Battlefield from "./pages/Battlefield/Battlefield"
import Beatles from "./pages/Beatles/Beatles"
import BojackHorsemanSeries from "./pages/BojackHorseman/BojackHorsemanSeries"
import CallofDuty from "./pages/CallofDuty/CallofDuty"
import Community from "./pages/Community/Community"
import CommunityS1E1 from "./pages/Community/CommunityS1E1"
import CommunityS1E2 from "./pages/Community/CommunityS1E2"
import Futurama from "./pages/Futurama/Futurama"
import GravityFalls from "./pages/GravityFalls/GravityFalls"
import Gta from "./pages/Gta/Gta"
import GumballSeries from "./pages/Gumball/GumballSeries"
import Halo from "./pages/Halo/Halo"
import HarryPotterBooks from "./pages/HarryPotter/HarryPotterBooks"
import Himym from "./pages/Himym/Himym"
import MarvelComics from "./pages/MarvelComics/MarvelComics"
import Mcu from "./pages/Mcu/Mcu"
import Pixar from "./pages/Pixar/Pixar"
import PhineasandFerb from "./pages/PhineasandFerb/PhineasandFerb"
import Simpsons from "./pages/Simpsons/Simpsons"
import Spiderman from "./pages/MarvelComics/Spiderman"
import Spongebob from "./pages/Spongebob/Spongebob"
import StarWars from "./pages/StarWars/StarWars"
import RickandMorty from "./pages/RickandMorty/RickandMorty"
import WizardingWorld from "./pages/HarryPotter/WizardngWorld"

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname])
  return children
}

function App() {

  return (
    <>
      <Navbar />
      <Wrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Routes for main topics */}
        {routesTopics.map(({ path, Component}, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* Routes for MCU */}
        {routesMcuMeta.map(({ path, Component}, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {routesMcu.map(({ path, Component}, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        <Route path='/marvelcomics/spiderman' element={<Spiderman />} />

        {routesCommunityChars.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

        <Route path="/community/pilot" element={<CommunityS1E1 />} />
        <Route path="/community/spanish_101" element={<CommunityS1E2 />} />

        {routesGta.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        {routesAssassinsCreed.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

      </Routes>
      </Wrapper>
    </>
  )
}

export default App
