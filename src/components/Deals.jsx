import React from "react";
import "./Deals.css";

export default function Deals() {
	return (
		<div className="deals">
			<p>
				New patients receive free x-rays on their first visit. Come in today to
				relieve your pain and get back to your life!
			</p>
			<div className="deals-buttons">
				<button className="dark-button">Make Appointment</button>
				<button>Contact Us</button>
			</div>
		</div>
	);
}
