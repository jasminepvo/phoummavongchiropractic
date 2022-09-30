import React from "react";
import './WhatToExpect.css';
import Eval from '../assets/icons/eval.png'
import Comfy from '../assets/icons/comfy.png'
import Knowledge from '../assets/icons/knowledge.png'
import Treatment from '../assets/icons/treatment.png'

export default function WhatToExpect() {
  return (
    <div className="whatToExpect">
      <section className="whatToExpect--content">
        <span>IMPROVE YOUR OVERALL HEALTH</span>
        <h2>What You Can Expect</h2>
        <div className="whatToExpect--icons">

          <div className="whatToExpect--icon">
            <img className="content-icon" src={Eval} alt="evaluation icon" />
            <p>An in-depth evaluation of your pain, discomfort and any other concerns</p>
          </div>
          <div className="whatToExpect--icon">
            <img className="content-icon" src={Comfy} alt="comfy icon" />
            <p>A comfortable, stress-free environment that you’ll want to come back to</p>
          </div>
          <div className="whatToExpect--icon">
            <img className="content-icon" src={Knowledge} alt="knowledge icon" />
            <p>Knowledge on ergonomics, functional movements and how to prevent injury</p>
          </div>
          <div className="whatToExpect--icon">
            <img className="content-icon" src={Treatment} alt="treatment icon" />
            <p>A personalized care plan built specifically for you with stretches & exercises</p>
          </div>
          
        </div>
      </section>
      <div className="whatToExpect--img">
        <img src="#" alt="" />
      </div>
    </div>
  )
}