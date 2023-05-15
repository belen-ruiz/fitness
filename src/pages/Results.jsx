import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"


export const Results = () => {
  const { result } = useDataContext()

  console.log(result)

  return (
    <div>
      <NavBar />
      <ItemListContainer result={result}/>
      <Footer />
    </div>
  )
}