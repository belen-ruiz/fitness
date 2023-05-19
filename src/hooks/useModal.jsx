import { useState } from "react";
import ReactDOM from "react-dom";

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  
  return ReactDOM.createPortal(
    <article className="article" onClick={closeModal} active={isOpen}>
      <div className="modalContainer" onClick={handleModalContainerClick}>
        <button className="btnClose" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
    );
  };
  
  //children en modalsContiner
  
  
  export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => setIsOpen(true);
  
    const closeModal = () => setIsOpen(false);
  
    return [isOpen, openModal, closeModal];
  };