import { useLayoutEffect, Suspense, lazy } from "react"

import { assassinscreed } from "./data/dataAssassinsCreed";
import { communitychars } from "./data/dataCommunity";

export const routesAssassinsCreed = assassinscreed.map(ac => ({
    path: ac.route,
    Component: lazy(() => import(`./pages/AssassinsCreed/${ac.file}.jsx`))
}));

export const routesCommunityChars = communitychars.map(char => ({
  path: char.route,
  Component: lazy(() => import(`./pages/Community/${char.file}.jsx`))
}));