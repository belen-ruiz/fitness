import React, { useState } from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"
import { CatBanner } from "../components/banner/CatBanner"


export const Series = () => {
  const { 
    tvshows, 
    genresTv, 
    currentGenreIds,
    setCurrentGenreIds} = useDataContext()

    const [currentGenre, setCurrentGenre] = useState() 
    const [tvshowFiltered, setTvshowFiltered] = useState([]) 
    //console.log(genIds)  //todos los ids
    //console.log(tvshows)  

  return (
    <div>
        <NavBar />

        <div className='container-page'>
          <CatBanner 
            // value={currentGenre}
            genresTv={genresTv}
            currentGenreIds={currentGenreIds}
            setCurrentGenreIds={setCurrentGenreIds} 
           />
          <ItemListContainer 
            data={tvshows} 
            genresTv={genresTv}
            currentGenreIds={currentGenreIds}
          
          //tvshowFiltered={tvshowFiltered}
        />
        </div>
        
        <Footer />
    </div>
  )
}

