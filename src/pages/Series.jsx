import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemListContainer } from '../components/items/ItemListContainer'

export const Series = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
  )
}