import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'

export default function Hero() {
  return (
    <div className='hero'>
      <Navbar />
      <div className='hero-text'>
        <h1 className='hero--heading'>Don't wait until you experience pain. Receive preventative treatment today.</h1>
        <button className='hero--button'>Make Appointment</button>
      </div>
    </div>
  )
}