import React from 'react'
import { useModal, Modal } from "../../hooks/useModal";
import { LoginLayout } from "./LoginLayout"

export const LoginModalContainer = () => {

  return (
    <>
      <LoginLayout />        
    </> 
  )
}

//onClick={openModal1}


// export const ModalsContainer = () => {

//   return (
//     <div>
//       <button onClick={openModal1}>Modal 1</button>
//       <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        
//       </Modal>    
//     </div>
//   );
// };

