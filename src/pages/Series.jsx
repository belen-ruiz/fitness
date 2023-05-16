import React, { useState } from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"
import { CatBanner } from "../components/banner/CatBanner"


export const Series = () => {
  const { tvshows, genresTv } = useDataContext()

  const [currentGenre, setCurrentGenre] = useState("") 

  console.log(currentGenre)
  console.log(genresTv)

  const [ genres, ...rest] = genresTv
  const {name: genreName} = genreName
  const {id: genreId} = genreId

  const datos = genresTv.map((objeto) => {
    const {name} = objeto;
    const {id} = id;
    return name, id
  })
  console.log( id)

  datos()


  
  return (
    <div>
        <NavBar />

        <div className='container-page'>
          <CatBanner 
            value={currentGenre}
           setCurrentGenre={setCurrentGenre} 
           genresTv={genresTv}/>
          <ItemListContainer 
          currentGenre={currentGenre} 
          genresTv={genresTv}
          tvshows={tvshows} 
        />
        </div>
        
        <Footer />
    </div>
  )
}

