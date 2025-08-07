import React from 'react'
import Modal from './Modal'
import Authentication from './Authentication'
import { useState } from 'react'

export default function Layout(props) {
    const {children} = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const header = (
        <header>
            <div>
                <h1 className='text-gradient'>CAFFIEND</h1>
                <p>For coffee Insaiates</p>
            </div>
            <button onClick={()=>setIsModalOpen(true)}>
                <p>Sign up Free</p>
                <i className="fa-solid fa-mug-hot"></i>

            </button>
        </header>

    )
    const footer = (
        <footer>
            <p><span className='text-gradient'>Caffiend</span> was made by 
            <a href='https://github.com/Shederator'  target='_blank'>Shederator</a> using the <a href = 'https://www.fantacss.smoljames.com' 
            target='_blank'>FantaCSS</a> design Library
            </p>
        </footer>
    )
  return (
     <>
     {isModalOpen && (
        <Modal handleClose={()=>setIsModalOpen(false)}>
            <Authentication />
        </Modal>
     )}
        {header}
        <main>
            {children}
        </main>
        {footer}
     </>
  )
}
