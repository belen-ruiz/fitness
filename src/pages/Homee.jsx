import React from 'react'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { MainBanner } from "../components/banner/MainBanner"
import { ScrollContainer } from "../components/items/ScrollContainer"

export const Homee = () => {
  return (
    <div>
      <NavBar />
      <MainBanner />
      <ScrollContainer />
      <Footer />
    </div>
  )
}
