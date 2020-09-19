import React, { FC } from 'react'
import './Contact.css'
import ContactForm from './ContactForm'

// import { ContactProps } from './Contact.Interface'

interface ContactProps {

}

export const Contact: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-container-content">
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
