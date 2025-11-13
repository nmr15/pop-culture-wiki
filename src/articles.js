import { useLayoutEffect, Suspense, lazy } from "react"

import { topics } from "./data";
import { assassinscreed } from "./data/dataAssassinsCreed";
import { communitychars } from "./data/dataCommunity";
import { gfCharacters } from "./data/dataGravityFalls";
import { gta } from "./data/dataGta";
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



export const routesGta = gta.map(gta => ({
  path: gta.route,
  Component: lazy(() => import(`./pages/Gta/${gta.file}.jsx`))
}))

export const routesMcu = mcu.map(mcu => ({
  path: mcu.route,
  Component: lazy(() => import(`./pages/Mcu/${mcu.file}.jsx`))
}));

export const routesMcuMeta = mcuMeta.map(mcumeta => ({
  path: mcumeta.route,
  Component: lazy(() => import(`./pages/Mcu/${mcumeta.file}.jsx`))
}));