import React, { useState } from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"
import { CatBanner } from "../components/banner/CatBanner"


export const Series = () => {
  const { tvshows } = useDataContext()

  const [value, setValue] = useState("") 

  return (
    <div>
        <NavBar />

        <div className='container-page'>
          <CatBanner value={value} setValue={setValue}/>
          <ItemListContainer tvshows={tvshows} 
        />
        </div>
        
        <Footer />
    </div>
  )
}

