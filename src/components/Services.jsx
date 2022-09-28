import React from "react";
import './Services.css'

export default function Services(){
  return (
    <div className="services">
      <section>
        <span>HOW I CAN HELP</span>
        <h1>Services Offered</h1>
        <p>Phoummavong Chiropractic & Wellness provides a full spectrum of non-surgical services to help you reach optimal health.</p>
        <p>If you are looking to naturally lower inflammation and prevent chronic diseases, you have arrived at the right place.</p>
        <p>Through chiropractic, myofascial release, and rehab therapy, Dr. Phoummavong will guide you on the path to health and wellness.</p>
      </section>
      <section>
        <div>
          {/* icon */}
          <h4>Chiropractic Adjustments</h4>
          <p>We realign your spine using traditional, drop table, and instrument techniques.</p>
        </div>
      </section>
    </div>
  )
}