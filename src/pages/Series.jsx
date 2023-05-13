import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"


export const Series = () => {
  const { tvshows } = useDataContext()

  console.log(tvshows)

  return (
    <div>
      <NavBar />
      <ItemListContainer tvshows={tvshows}/>
      <Footer />
    </div>
  )
}