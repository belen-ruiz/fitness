import React from 'react'
import { Login } from "./LoginLayout"
import { useModal, Modal } from "../../hooks/useModal";
import { LoginLayout } from "./LoginLayout"

export const LoginContainer = () => {
  const [isOpenModal1, closeModal1] = useModal(false);

  return (
    <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
      <LoginLayout />        
    </Modal> 
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

