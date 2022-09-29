import React from "react";
import './About.css'
import Headshot from '../assets/headshot.png'

export default function About() {
  return (
    <div className="about">
      <div className='about--img'>
        <img className='headshot' src={Headshot} alt="headshot" />
      </div>
      <section className="about--paragraph">
        <span>DR. PETER PHOUMMAVONG</span>
        <h2>Meet Your Doctor</h2>
        <p>Known for his expertise in sports rehabilitation and overall musculature. Dr. Phoummavong graduated with a B.S. in Kinesiology with a concentration with Clinical Exercise Physiology working with athletes as a rehab specialist, personal trainer and licensed massage therapist. Now, he implements all these techniques into his Chiropractic practice.</p>
        <p>Dr. Phoummavong specialized in recovery and performance regardless if you’re working from the athletic field or office space. He’s determined to not only alleviate your pain but understand why it started in the first place. He focuses heavily on soft tissue and incorporates these techniques into his Chiropractic care before addressing the spine.</p>
        <p>He also utilizes evidence based research to address signs and symptons such as: lower back pain, a herniated disc, sciatic nerve pain, headaches and migraines, shoulder, knee and neck pain.</p>
      </section>
    </div>
  )
}