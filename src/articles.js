import { useLayoutEffect, Suspense, lazy } from "react"

import { assassinscreed } from "./data/dataAssassinsCreed";
import { communitychars } from "./data/dataCommunity";
import { mcu } from "./data/dataMcu";

export const routesAssassinsCreed = assassinscreed.map(ac => ({
    path: ac.route,
    Component: lazy(() => import(`./pages/AssassinsCreed/${ac.file}.jsx`))
}));

export const routesCommunityChars = communitychars.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/Community/${char.file}.jsx`))
}));

export const routesMcu = mcu.map(mcu => ({
  path: mcu.route,
  Component: lazy(() => import(`./pages/Mcu/${mcu.file}.jsx`))
}));