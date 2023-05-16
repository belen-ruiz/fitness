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
    genIds,
    genNames } = useDataContext()

    const [currentGenre, setCurrentGenre] = useState() 
    const [currentGenreIds, setCurrentGenreIds] = useState("0000") 
    const [tvshowFiltered, setTvshowFiltered] = useState([]) 
    console.log(currentGenreIds) //id current  
    console.log(genIds)  //todos los ids
    console.log(tvshows)  
    
  return (
    <div>
        <NavBar />

        <div className='container-page'>
          <CatBanner 
            // value={currentGenre}
            genresTv={genresTv}
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

