import { useState } from "react";
import Popup from "reactjs-popup";
import { ModalImageStyle, ButtonConfig } from './style';
//import './st.css';

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
      {classButtonOpen ?
        <ButtonConfig onClick={() => setOpen(!open)}> {button}
          {/* <button type="button" onClick={() => setOpen(!open)}> {button} </button> */}
        </ButtonConfig> :
        <button className='button' type="button" onClick={() => setOpen(!open)}> {button} </button>
      }
      <Popup
        onClose={closeModal}
        open={open}
        closeOnDocumentClick
        modal
        nested
      >
        <>
          {(
            <ModalImageStyle>
              <div className="modal">
                <button className="close" onClick={closeModal}>
                  &times;
                </button>
                <div className="content">
                  <img src={image} alt="teste" className="image"></img>
                </div>
              </div>
            </ModalImageStyle>
          )}
        </>
      </Popup>
    </>
  )
};

export default ModalImage;