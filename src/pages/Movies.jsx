import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useDataContext } from "../context/DataProvider"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { CatBanner } from "../components/banner/CatBanner"


export const Movies = () => {
  const { movies, genresMovie } = useDataContext()

  console.log(movies)

  return (
    <div>
      <NavBar />
        <div className='container-page'>
          <CatBanner 
            genresMovie={genresMovie}/>
          <ItemListContainer 
            data={movies}
            genresMovie={genresMovie}/>
        </div>
      <Footer />
    </div>
  )
}
