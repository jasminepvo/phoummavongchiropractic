import React from "react";
import "./Footer.css";
import Logo from "../assets/logo-light cropped.png";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer--info">
				<img src={Logo} alt="" />
				<div className="info-content">
					<div className="info-links">
						<li>Home</li>
						<li>About</li>
						<li>Services</li>
						<li>FAQ</li>
						<li>Make Appointment</li>
					</div>
					<div className="info-hours">
						<h5>Office Hours</h5>
						<p>
							Mon-Fri: 8AM - 6PM <br />
							Saturday: 9AM - 12PM
							<br />
							Sunday: Closed
						</p>
					</div>
					<div className="info-contact">
						<h5>Contact Us</h5>
						<p>
							(469) 444 - 6758
							<br />
							14111 King Rd. Suite 220
							<br />
							Frisco, TX 75036
						</p>
					</div>
					<div className="info-directions">
						<h5>Get Directions</h5>
					</div>
				</div>
			</div>
			<div className="footer--additional">
				<p>
					Copyright 2022 © Phoummavong Chiropractic & Wellness. All rights
					reserved.
				</p>
				<div className="footer-socials">
					<i class="fab fa-google"></i>
					<i class="fab fa-yelp"></i>
					<i class="fab fa-facebook"></i>
					<i class="fab fa-instagram"></i>
				</div>
			</div>
		</div>
	);
}
