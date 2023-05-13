import { useModal } from "./useModal";
import { Modal } from "./Modal";
import { ModalContent } from "./ModalContent";
import { SignUpMaterial } from "../Forms/Form/SignUpMaterial";
import { Formularios } from "../Forms/FormValidated/Formularios";
import { NavLink } from 'react-router-dom';
import { User } from '../Usuarios/User';
import { Axios } from "../API/AXIOS/Axios";


export const ModalsContainer = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);  
  const [isOpenModalSingUp, openModalSingUp, closeModalSingUp] = useModal(false);  
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);  


  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <ModalContent />
      </Modal>      
      <button onClick={openModalSingUp}>Sing Up</button>
      <Modal isOpen={isOpenModalSingUp} closeModal={closeModalSingUp}>
        <SignUpMaterial />
      </Modal>
      <button onClick={openModal4}>Formularios</button>
      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <Formularios />
      </Modal>
      <NavLink to="/usuario/belenruiz">
          PERFIL BELEN RUIZ
      </NavLink>
      <NavLink to="/productos">
          Pagination
      </NavLink>
      <button>
        <Axios />
      </button>
     
    </div>
  );
};

