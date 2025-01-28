import React from 'react'
import './ContactMe.css'

export const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>


      <div className='contact-info'>
        
        <div className='contact-details-card'>
        <div className='icon'>
            <img src=""/>
        </div>
        <p>kuradekaran2001@gmail.com</p>
        </div>


            <div className='contact-form-content'>
                <form>
                  <div className='name-container'>
                    <input type='text' name='firstname' placeholder='First Name'/>
                    <input type='text' name='lastname' placeholder='Last Name'/>
                  </div>

                  <input type='email' name='email' placeholder='enter your email'/>
                  <textarea type='text' name='message' placeholder='enter message' />
                  <button>Send</button>
                </form>
            </div>
            </div>
    </section>
  )
}
