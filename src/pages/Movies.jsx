import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useDataContext } from "../context/DataProvider"
import { ItemListContainer } from '../components/items/ItemListContainer'

export const Movies = () => {
  const { movies } = useDataContext()

  console.log(movies)

  return (
    <div>
      <NavBar />
      <ItemListContainer movies={movies}/>
      <Footer />
    </div>
  )
}
