import React from 'react'
import './Modal.css'

const Modal = props => {
  if (!props.show) {
    return null
  }
  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content'>
        <div className='modal-header'>
          <h3 className='modal-title'>Team: {props.club}</h3>
          <img src={props.logo} alt=""/>
        </div>
        <div className='modal-body'>
          
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='button'>Close</button>
        </div>

      </div>

    </div>
  )
}


export default Modal