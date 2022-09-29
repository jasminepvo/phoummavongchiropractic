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
          <p>Phoummavong Chiropractic & Wellness strives to provide preventative health care measures with holistic treatments such as adjustments, myofascial release and electric stim therapy. </p>
          <p>Through chiropractic and a personalized health care plan, Dr. Phoummavong will help you reach your optimal health and wellness goals.</p>
        </div>
      </section>
      <section className="services-right">
        <div className="service">
          <img className="service-icon" src={Body} alt="body" />
          <div>
            <h4 className="service-heading">Chiropractic Adjustments</h4>
            <p className="service-description">Realign your spine using safe, non-invasive techniques: Diversified, Thompson, instruments.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Chiropractic} alt="chiropractic" />
          <div>
            <h4 className="service-heading">Rehab Therapy</h4>
            <p className="service-description">Application of rehab exercises and stretches to promote optimal function in every day life.</p>
          </div>
        </div> 
        <div className="service">
          <img className="service-icon" src={Running} alt="running" />
          <div>
            <h4 className="service-heading">Sports Injury Care</h4>
            <p className="service-description">Fine tune performance, prevent injuries, and speed up recovery times.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Acupuncture} alt="acupuncture" />
          <div>
            <h4 className="service-heading">Myofascial Release</h4>
            <p className="service-description">Reduce pain by improving mobility & relax tight fascia while improving blood and lymphatic circulation.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Stim} alt="stim" />
          <div>
            <h4 className="service-heading">Electric Stim Therapy</h4>
            <p className="service-description">Application of electrical currents to promote  proprioception and improve blood circulation.</p>
          </div>
        </div>
        <div className="service">
          <img className="service-icon" src={Stretch} alt="stretch" />
          <div>
            <h4 className="service-heading">Personalized Care Plan</h4>
            <p className="service-description">Customized care plans for each individual patients that address your goals.</p>
          </div>
        </div>
      </section>
    </div>
  )
}