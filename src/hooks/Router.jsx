import { useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/Error404'
import { Home } from '../pages/Home'



// se importa en la app

const allRoutes = () => {

    const routes = [
        {
            path:"/",
            exact: true,
            element: <Home />
        },
        {
            path:"/home",
            exact: true,
            element: <Home />
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

