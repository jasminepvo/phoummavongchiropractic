import "./App.css";
import Hero from "./components/Hero";
import "./components/Hero.css";
import Services from "./components/Services";
import About from "./components/About";
import WhatToExpect from "./components/WhatToExpect";
import Testimonials from "./components/Testimonials";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Hero />
			<Services />
			<About />
			<WhatToExpect />
			<Testimonials />
			<Deals />
			<Footer />
		</div>
	);
}

export default App;
