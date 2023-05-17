import React from 'react'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import { SignInContainer } from '../components/SignInRegister/SignInContainer'

export const Access = () => {
  return (
    <div>
        <NavBar />
        <div className='container-page'>
          <SignInContainer />
        </div>
      <Footer />
    </div>
  )
}
