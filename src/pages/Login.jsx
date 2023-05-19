import React from 'react'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import { LoginModalContainer } from "../components/forms/LoginModalContainer"
// export const Login = () => {
//   return (
//     <div>
//         <NavBar />
//         <div className='container-page'>
//           <LoginContainer />
//         </div>
//       <Footer />
//     </div>
//   )
// }


export const Login = () => {
  return (
    <>
          <LoginModalContainer />
    </>
  )
}