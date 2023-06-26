import React from 'react'
import Pizzaleft from "../assets/pizzaLeft.jpg";
import "../style/Contact.css";
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
            style={{backgroundImage: `url(${Pizzaleft})`}}
        >

        </div>
        <div className='rightSide'>
            <h1>CONTACT US</h1>
            <form  id="contact-form" method='POST'>
                <label htmlFor='name'> Full Name</label>
                <input name="name" placeholder='Enter full name...' type="text"/>
                <label htmlFor='email'>Email</label>
                <input name="eamil" placeholder='Enter email...' type="email"/>
                <label htmlFor='message'>Message</label>
                <textarea
                rows="6"
                placeholder='Enter message...'
                name="message"
                required 
                ></textarea>
                <button type='submit'> Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact