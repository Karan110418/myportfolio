import React from 'react'
import myimage from '../../Assets/image.png'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero-container' id='home1'>
        <div className='hero-content'>
            <span>Hello,</span>
            <h2>I am Karan</h2>
            <p>Aspiring MERN Stack & Java Developer | Eager to Apply Technical Skills in Real-World Industry Projects
</p>
        </div>

        <div className='hero-img'>
            <div>
                <img src={myimage} alt='' />
            </div>
        </div>
    </section>
  )
}
