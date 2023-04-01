import React, { useState } from "react";

import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  textLoad:string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, textLoad, width }) => {
  // --------inicio estados--------
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  if (!isOpen) return null;


  // --------fin estados--------

  // --------hooks--------

  // --------Fin hooks--------

  //Inicio de método
 
  //Fin de metodo

  // ----retorno de componente
  return (
    <div className="containerModal">
      <div className="modal" style={{width: width || '100%'}}>
        <div className="modal-content">
          <div className="containerImg">
          <img className="imgLoad" src={require('../../../assets/images/loading.png').default} alt="Loading" />
          </div>
          <div className="containerP">
            <p className="pModal">{textLoad}</p>
          </div>
    </div>

    <div className="containerExit">
      <div className="containerButton">
      {
    onClose &&
    <button className="exitButton" onClick={() =>{
        onClose()
      }} >x</button>
      }
      </div>

</div>
      </div>
    </div>
  );
};

export default Modal;


