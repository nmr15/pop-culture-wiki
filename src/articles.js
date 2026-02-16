import { useLayoutEffect, Suspense, lazy } from "react"

import { topics } from "./data";
import { assassinscreed } from "./data/dataAssassinsCreed";
import { communitychars } from "./data/dataCommunity";
import { gfCharacters, gravityFallsS1 } from "./data/dataGravityFalls";
import { gta, gtaCharacters } from "./data/dataGta";
import { hpbooks } from "./data/dataHarryPotter"
import { mcu, mcuMeta, mcuChar } from "./data/dataMcu";
import { simpsonsChars } from "./data/dataSimpsons"
import { starwarsFilms, starwarsSeries, starwarsChars } from "./data/dataStarWars";

export const routesTopics = topics.map(topic => ({
    path: topic.route,
    Component: lazy(() => import(`./pages/${topic.folder}/${topic.file}.jsx`))
}));

// ASSASSIN'S CREED

export const routesAssassinsCreed = assassinscreed.map(ac => ({
    path: ac.route,
    Component: lazy(() => import(`./pages/AssassinsCreed/${ac.file}.jsx`))
}));

// COMMUNITY

export const routesCommunityChars = communitychars.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/Community/Characters/${char.file}.jsx`))
}));

// GRAVITY FALLS

export const routeGfChars = gfCharacters.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/GravityFalls/Characters/${char.file}.jsx`))
}));

export const routeGfS1 = gravityFallsS1.map(gfs1 => ({
  path: gfs1.route,
  Component: lazy(() => import(`./pages/GravityFalls/Season1/${gfs1.file}.jsx`)) 
}));

// GRAND THEFT AUTO
export const routesGta = gta.map(gta => ({
  path: gta.route,
  Component: lazy(() => import(`./pages/Gta/${gta.file}.jsx`))
}));

export const routesGtaChars = gtaCharacters.map(gtaChar => ({
  path: gtaChar.route,
  Component: lazy(() => import(`./pages/Gta/Characters/${gtaChar.file}.jsx`))
}));

// MARVEL CINEMATIC UNIVERSE

export const routesMcu = mcu.map(mcu => ({
  path: mcu.route,
  Component: lazy(() => import(`./pages/Mcu/Films/${mcu.file}.jsx`))
}));

export const routesMcuChars = mcuChar.map(mcuChar => ({
  path: mcuChar.route,
  Component: lazy(() => import(`./pages/Mcu/Characters/${mcuChar.file}.jsx`))
}));

export const routesMcuMeta = mcuMeta.map(mcumeta => ({
  path: mcumeta.route,
  Component: lazy(() => import(`./pages/Mcu/${mcumeta.file}.jsx`))
}));

// STAR WARS

export const routesSWFilms = starwarsFilms.map(swFilm => ({
  path: swFilm.route,
  Component: lazy(() => import(`./pages/StarWars/Films/${swFilm.file}.jsx`))
}));

export const routesSWSeries = starwarsSeries.map(swSeries => ({
  path: swSeries.route,
  Component: lazy(() => import(`./pages/StarWars/Series/${swSeries.file}.jsx`))
}));

export const routeSWCharacters = starwarsChars.map(swChars => ({
  path: swChars.route,
  Component: lazy(() => import(`./pages/StarWars/Characters/${swChars.file}.jsx`))
}));