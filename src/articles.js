import { useLayoutEffect, Suspense, lazy } from "react"

import { topics } from "./data";
import { assassinscreed } from "./data/dataAssassinsCreed";
import { communitychars } from "./data/dataCommunity";
import { gfCharacters, gravityFallsS1 } from "./data/dataGravityFalls";
import { gta, gtaCharacters } from "./data/dataGta";
import { mcu, mcuMeta } from "./data/dataMcu";

export const routesTopics = topics.map(topic => ({
    path: topic.route,
    Component: lazy(() => import(`./pages/${topic.folder}/${topic.file}.jsx`))
}));

export const routesAssassinsCreed = assassinscreed.map(ac => ({
    path: ac.route,
    Component: lazy(() => import(`./pages/AssassinsCreed/${ac.file}.jsx`))
}));

export const routesCommunityChars = communitychars.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/Community/Characters/${char.file}.jsx`))
}));

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

export const routesMcu = mcu.map(mcu => ({
  path: mcu.route,
  Component: lazy(() => import(`./pages/Mcu/Films/${mcu.file}.jsx`))
}));

export const routesMcuMeta = mcuMeta.map(mcumeta => ({
  path: mcumeta.route,
  Component: lazy(() => import(`./pages/Mcu/${mcumeta.file}.jsx`))
}));