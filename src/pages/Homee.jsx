import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { Banner } from "../components/banner/Banner"
import { ScrollContainer } from '../components/listings/ScrollContainer'

export const Homee = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <ScrollContainer />
      <Footer />
    </div>
  )
}
