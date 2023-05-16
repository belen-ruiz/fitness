import { useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/Error404'
import { Homee } from '../pages/Homee'
import { Movies } from '../pages/Movies'
import { Results } from '../pages/Results'
import { Series } from '../pages/Series'

import { useDataContext } from "../context/DataProvider"


// se importa en la app

const allRoutes = () => {
    const routes = [
        {
            path:"/",
            exact: true,
            element: <Homee />
        },
        {
            path:"/page/home",
            exact: true,
            element: <Homee />
        },
        {
            path:"/page/tvshows",
            exact: true,
            element: <Series />
        },
        {
            path:"/page/movies",
            exact: true,
            element: <Movies />
        },
        {
            path:"/:page/:genre",
            exact: true,
            element: <Series />
        },
        {
            path:"/results/:search",
            exact: true,
            element: <Results /> 
        },
        {
            path:"/*",
            exact: false,
            element: <Error404 />
        },
    ]
  return [ ...routes ]
}

export const Router = () => {
    const appRoutes = allRoutes()
    return useRoutes(appRoutes);
}

