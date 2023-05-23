import { useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/Error404'
import { Homee } from '../pages/Homee'
import { Movies } from '../pages/Movies'
import { Results } from '../pages/Results'
import { Series } from '../pages/Series'
import { ItemDetail } from '../pages/ItemDetail'
import { Login } from '../pages/Login'

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
            path:"/:id",
            exact: true,
            element: <ItemDetail />
        },
        {
            path:"/home",
            exact: true,
            element: <Homee />
        },
        {
            path:"/tvshows",
            exact: true,
            element: <Series />
        },
        {
            path:"/tvshows/:tvshow_id",
            exact: false,
            element: <ItemDetail />
        },
        {
            path:"/movies",
            exact: true,
            element: <Movies />
        },
        {
            path:"/movies/:movie_id",
            exact: false,
            element: <ItemDetail />
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
            path:"/login",
            exact: true,
            element: <Login /> 
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

