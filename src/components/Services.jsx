import React from "react";
import './Services.css';
import Body from '../assets/icons/body.png'
import Chiropractic from '../assets/icons/chiropractic.png'
import Stretch from '../assets/icons/stretch.png'
import Running from '../assets/icons/Running.png'
import Stim from '../assets/icons/stim.png'
import Acupuncture from '../assets/icons/acupuncture.png'


export default function Services(){
  return (
    <div className="services">
      <section className="services-left">
        <span>HOW I CAN HELP</span>
        <h2>Services Offered</h2>
        <div className="services-paragraph">
          <p>Phoummavong Chiropractic & Wellness provides a full spectrum of non-surgical services to help you reach optimal health.</p>
          <p>If you are looking to naturally lower inflammation and prevent chronic diseases, you have arrived at the right place.</p>
          <p>Through chiropractic, myofascial release, and rehab therapy, Dr. Phoummavong will guide you on the path to health and wellness.</p>
        </div>
      </section>
      <section className="services-right">
        <div className="service">
          <img className="service-icon" src={Body} alt="body" />
          <div>
            <h4 className="service-heading">Chiropractic Adjustments</h4>
            <p className="service-description">We realign your spine using traditional, drop table, and instrument techniques.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Chiropractic} alt="chiropractic" />
          <div>
            <h4 className="service-heading">Rehab Therapy</h4>
            <p className="service-description">Know exactly what’s going on under the hood and how to fix it with our tried and tested rehab exercises.</p>
          </div>
        </div> 
        <div className="service">
          <img className="service-icon" src={Running} alt="running" />
          <div>
            <h4 className="service-heading">Sports Injury Care</h4>
            <p className="service-description">Enhance performance, prevent injuries, and apeed up recovery times.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Acupuncture} alt="acupuncture" />
          <div>
            <h4 className="service-heading">Myofascial Release</h4>
            <p className="service-description">We reduce pain by easting the tension and tightness in your myofascial tissues.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Stim} alt="stim" />
          <div>
            <h4 className="service-heading">Electric Stim Therapy</h4>
            <p className="service-description">Apply electrical current to help strengthen muscles, block pain signals and improve blood circulation.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Stretch} alt="stretch" />
          <div>
            <h4 className="service-heading">Custom Care Plan</h4>
            <p className="service-description">Walk away with prescribed stretches and exercises to keep your adjustments.</p>
          </div>
        </div>
      </section>
    </div>
  )
}