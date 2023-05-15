import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"


export const Results = () => {
  const { results } = useDataContext()

  console.log(results)

  return (
    <div>
      <NavBar />
      <ItemListContainer results={results}/>
      <Footer />
    </div>
  )
}