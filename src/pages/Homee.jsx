import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { Banner } from "../components/banner/Banner"
import { ContainerList } from '../components/listings/ContainerList'

export const Homee = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <ContainerList />
      <Footer />
    </div>
  )
}
