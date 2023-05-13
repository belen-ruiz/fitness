import { useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/Error404'
import { Homee } from '../pages/Homee'
import { Movies } from '../pages/Movies'
import { Series } from '../pages/Series'

// se importa en la app

const allRoutes = () => {

    const routes = [
        {
            path:"/",
            exact: true,
            element: <Homee />
        },
        {
            path:"/inicio",
            exact: true,
            element: <Homee />
        },
        {
            path:"explore/series",
            exact: true,
            element: <Series />
        },
        {
            path:"explore/peliculas",
            exact: true,
            element: <Movies />
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

