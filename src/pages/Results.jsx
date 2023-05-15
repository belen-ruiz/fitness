import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'
import { useDataContext } from "../context/DataProvider"
import { useSearchContext } from '../context/SearchProvider'


export const Results = () => {
  const { results } = useSearchContext()

  console.log(results)

  return (
    <div>
      <NavBar />
      <ItemListContainer results={results}/>
      <Footer />
    </div>
  )
}