import { useState } from 'react';
import Modal_37 from '../components/Modal_37';
import Backdrop_37 from '../components/Backdrop_37';


function Todo_37(props) {
  const [showModal, setshowModal] = useState();

  function showModalHandler(){
    setshowModal(true);
  }

  function closeModalHandler(){
    setshowModal(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler} >Delete</button>
        </div>
      </div>
      {showModal && <Backdrop_37 onClose={closeModalHandler} />} 
      {showModal && <Modal_37 text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo_37;
