import { useLayoutEffect, Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { routesAssassinsCreed } from "./articles"
import { communitychars } from "./data/dataCommunity"
import { mcu, mcuMeta } from "./data/dataMcu"
import { gta } from "./data/dataGta"
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

const routesCommunityChars = communitychars.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/Community/${char.file}.jsx`))
}));

const routesMcuMeta = mcuMeta.map(mcumeta => ({
  path: mcumeta.route,
  Component: lazy(() => import(`./pages/Mcu/${mcumeta.file}.jsx`))
}));

const routesMcu = mcu.map(mcu => ({
  path: mcu.route,
  Component: lazy(() => import(`./pages/Mcu/${mcu.file}.jsx`))
}));

const routesGta = gta.map(gta => ({
  path: gta.route,
  Component: lazy(() => import(`./pages/Gta/${gta.file}.jsx`))
}))

function App() {

  return (
    <>
      <Navbar />
      <Wrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mcu' element={<Mcu />} />
        {routesMcuMeta.map(({ path, Component}, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        {routesMcu.map(({ path, Component}, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path='/marvelcomics' element={<MarvelComics />} />
        <Route path='/marvelcomics/spiderman' element={<Spiderman />} />
        <Route path='/starwars' element={<StarWars />} />
        <Route path='/community' element={<Community />} />
        {routesCommunityChars.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        <Route path="/community/pilot" element={<CommunityS1E1 />} />
        <Route path="/community/spanish_101" element={<CommunityS1E2 />} />
        <Route path='/beatles' element={<Beatles />} />
        <Route path='/spongebob' element={<Spongebob />} />
        <Route path='/himym' element={<Himym />} />
        <Route path='/gta' element={<Gta />} />
        {routesGta.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        <Route path='/assassinscreed' element={<AssassinsCreed />} />
        {routesAssassinsCreed.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path='/gravityfalls' element={<GravityFalls />} />
        <Route path='/adventuretime' element={<AdventureTime />} />
        <Route path='/simpsons' element={<Simpsons />} />
        <Route path='/futurama' element={<Futurama />} />
        <Route path='/pixar' element={<Pixar />} />
        <Route path='/hpbooks' element={<HarryPotterBooks />} />
        <Route path='/wizardingworld' element={<WizardingWorld />} />
        <Route path='/halo' element={<Halo />} />
        <Route path='/call_of_duty' element={<CallofDuty />} />
        <Route path='/battlefield' element={<Battlefield />} />
        <Route path='/phinease_and_ferb' element={<PhineasandFerb />} />
        <Route path='/the_amazing_world_of_gumball' element={<GumballSeries />} />
        <Route path='/rick_and_morty' element={<RickandMorty />} />
        <Route path='/bojack_horseman' element={<BojackHorsemanSeries />} />
        <Route path='/a_series_of_unfortunate_events' element={<Asoue />} />
      </Routes>
      </Wrapper>
    </>
  )
}

export default App
