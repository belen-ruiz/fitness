import { useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/Error404'
import { Homee } from '../pages/Homee'

// se importa en la app

const allRoutes = () => {

    const routes = [
        {
            path:"/",
            exact: true,
            element: <Homee />
        },
        {
            path:"/home",
            exact: true,
            element: <Homee />
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

