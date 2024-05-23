import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import InfoSelfRegister from '../assets/selfRegister/InfoSelfRegister.png';
import './style.css';

interface IModalInterface {
  image: any,
  button?: any,
  classButtonOpen?: string
}

const ModalImage = ({ image, button, classButtonOpen }: IModalInterface) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <button className={classButtonOpen ? classButtonOpen : 'button'} type="button" onClick={() => setOpen(!open)}> {button} </button>
      <Popup
        onClose={closeModal}
        open={open}
        closeOnDocumentClick
        modal
        nested
      >
        <>
          {(
            <div className="modal">
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <div className="content">
                <img src={image} alt="teste"></img>
              </div>
            </div>
          )}
        </>
      </Popup>
    </>
  )
};

export default ModalImage;