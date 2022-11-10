import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import data from "../data";

const Testimonials = () => {
	const [people] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<div className="testimonials">
			<span>WHAT CLIENTS SAY</span>
			<h2>Client Testimonials</h2>
			<section className="testimonial--section">
				{people.map((item, indexPeople) => {
					const { id, image, name, title, quote } = item;
					let position = "nextSlide";
					if (indexPeople === index) {
						position = "activeSlide";
					}
					if (
						indexPeople === index - 1 ||
						(index === 0 && indexPeople === people.length - 1)
					) {
						position = "lastSlide";
					}
					return (
						<article className={position} key={id}>
							{/* <img src={image} alt={name} className="person-img" /> */}
							<p className="text">{quote}</p>
							<h4>- {name}</h4>
							<p className="title">{title}</p>
						</article>
					);
				})}
				<button className="prev" onClick={() => setIndex(index - 1)}>
					<i className="fas fa-arrow-left" />
				</button>
				<button className="next" onClick={() => setIndex(index + 1)}>
					<i className="fas fa-arrow-right" />
				</button>
			</section>
		</div>
	);
};

export default Testimonials;
