import React, { useState } from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useDataContext } from "../context/DataProvider"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { CatBanner } from "../components/banner/CatBanner"


export const Movies = () => {
  const { movies, genresMovie } = useDataContext()

  const [currentGenreIds, setCurrentGenreIds] = useState() 

  console.log(movies)

  return (
    <div>
      <NavBar />
        <div className='container-page'>
          <CatBanner 
            genresMovie={genresMovie}
            currentGenreIds={currentGenreIds}
            setCurrentGenreIds={setCurrentGenreIds}/>
          <ItemListContainer 
            data={movies}
            genresMovie={genresMovie}
            currentGenreIds={currentGenreIds}/>
        </div>
      <Footer />
    </div>
  )
}
