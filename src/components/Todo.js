import react, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [ showModal, setShowModal ] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);

  };

  const closeModal = () => {
    setShowModal(false);
  }
  return(

    <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'> 
        <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        { showModal && <Modal /> }
        { showModal && <Backdrop onClick={closeModal}/>}
      </div>
    
  );
}

export default Todo;