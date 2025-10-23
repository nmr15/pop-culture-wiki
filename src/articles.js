import { useLayoutEffect, Suspense, lazy } from "react"

import { assassinscreed } from "./data/dataAssassinsCreed";

export const routesAssassinsCreed = assassinscreed.map(ac => ({
    path: ac.route,
    Component: lazy(() => import(`./pages/AssassinsCreed/${ac.file}.jsx`))
}));