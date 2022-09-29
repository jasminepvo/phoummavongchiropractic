import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import Video from '../assets/video.mp4' 

export default function Hero() {
  return (
    <div className='hero'>
      <video loop muted autoPlay reload="auto" >
        <source src={Video} type="video/mp4"/> Your browser does not support the video tag.
        </video>
      <Navbar />
      <div className='hero-text'>
        <h1 className='hero--heading'>Don't wait until you experience pain. Receive preventative treatment today.</h1>
        <button className='hero--button'>Make Appointment</button>
      </div>
    </div>
  )
}