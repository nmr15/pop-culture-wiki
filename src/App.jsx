import { useLayoutEffect, Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { routesTopics, routesAssassinsCreed, routesCommunityChars, routeGfChars, routeGfS1, routesGta, routesGtaChars, routesMcu, routesMcuMeta } from "./articles"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AllArticles from "./pages/AllArticles"
import './App.css'
import BadBeginning from "./pages/Asoue/BadBeginning"
import CommunityS1E1 from "./pages/Community/Season1/CommunityS1E1"
import CommunityS1E2 from "./pages/Community/Season1/CommunityS1E2"
import CommunityS1E3 from "./pages/Community/Season1/CommunityS1E3"
import CommunityS1E4 from "./pages/Community/Season1/CommunityS1E4"
import Spiderman from "./pages/MarvelComics/Spiderman"

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
        <Route path='/all' element={<AllArticles />} />
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

        <Route path='/marvelcomics/spider_man' element={<Spiderman />} />

        {routesCommunityChars.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

        <Route path="/community/pilot" element={<CommunityS1E1 />} />
        <Route path="/community/spanish_101" element={<CommunityS1E2 />} />
        <Route path="/community/intoduction_to_film" element={<CommunityS1E3 />} />
        <Route path="/community/social_psychology" element={<CommunityS1E4 />} />

        {/* Grand Theft Auto */}

        {routesGta.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {routesGtaChars.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {routesAssassinsCreed.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* Gravity Falls */}

        {routeGfChars.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {routeGfS1.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        <Route path='/a_series_of_unfortunate_events/the_bad_beginning' element={<BadBeginning />} />
      </Routes>
      </Wrapper>
    </>
  )
}

export default App
