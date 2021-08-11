import Modal from 'react-modal';
import React, {useState} from 'react'


Modal.setAppElement('#root');

const CharacterItem = ({item}) => {

 

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
   /*
    <div className="card-container">
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
          <div className='card-head'>
            <h2>Name: {item.name}</h2>
            <h2>Occupation: {item.occupation}</h2>
            <h2>DOB: {item.birthday}</h2>
            <h2>Status: {item.status}</h2>
          </div>
        </div>
        <div className='card-back'>
          <h1>* {item.name} *</h1>
          <hr/>
          <h2>Actor Name: {item.portrayed}</h2>
          <h2>Category: {item.category}</h2>
          <h2>Date of Birth: {item.birthday}</h2>
          <h2>Occupation: {item.occupation}</h2>
          <h2>Status: {item.status}</h2>
          <h2>Nickname: {item.nickname}</h2>
        </div>
      </div>
    </div>
    </div>
    */

    <div className="card-container">
       <div className='card'>
            <div className='card-inner'>
            <div className='card-front'>
            <img src={item.img} alt='' />
              <div className='card-head'>
                <h2>Name: {item.name}</h2>
                <h2>Occupation: {item.occupation}</h2>
                <h2>DOB: {item.birthday}</h2>
                <h2>Status: {item.status}</h2>
                <button className="open-modal" onClick={() => setModalIsOpen(true)}>Open</button>
              </div>
           </div>
            
          </div>
       </div>

       <Modal id="modal-container" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
         <div>
           <img className="display-image" src={item.img} alt='' />
           <h1 className="modal-item-name">{item.name}</h1>
         </div>
         <div className="modal-info-box">
            <h1>BREAKING BAD</h1>
            <hr/>
            <h2>Actor Name: {item.portrayed}</h2>
            <h2>Category: {item.category}</h2>
            <h2>Date of Birth: {item.birthday}</h2>
            <h2>Occupation: {item.occupation}</h2>
            <h2>Status: {item.status}</h2>
            <h2>Nickname: {item.nickname}</h2>
            <button className="close-modal" onClick={() => setModalIsOpen(false)}>Close</button>
         </div>
       </Modal>
    </div>
     
  )
}

export default CharacterItem
