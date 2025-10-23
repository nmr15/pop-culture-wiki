import { useLayoutEffect, Suspense, lazy } from "react"

import { assassinscreed } from "./data/dataAssassinsCreed";
import { communitychars } from "./data/dataCommunity";
import { gta } from "./data/dataGta";
import { mcu, mcuMeta } from "./data/dataMcu";

export const routesAssassinsCreed = assassinscreed.map(ac => ({
    path: ac.route,
    Component: lazy(() => import(`./pages/AssassinsCreed/${ac.file}.jsx`))
}));

export const routesCommunityChars = communitychars.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/Community/${char.file}.jsx`))
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