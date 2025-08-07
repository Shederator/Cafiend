import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal (
    <div className='modal-container'>
      <button onClick={handleClose} className='modal-underlay'/>
      <div className='modal-content'>
        {children}
      </div>
    </div>,document.getElementById('portal')
  )
}
