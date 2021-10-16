import react, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [ showModal, setShowModal ] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);

  };
  return(

    <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'> 
        <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        { showModal ? <Modal /> : null }
        { showModal ? <Backdrop /> : null}
      </div>
    
  );
}

export default Todo;