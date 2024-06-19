import {
	Navbar,
	Home,
	About,
	Support,
	Contact,
	Footer,
	Testimonial,
	TopSection,
	Service2,
	Employee,
} from "./index";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);
	return (
		<div className="bg-white font-inter w-[100vw] overflow-x-hidden">
			<TopSection />
			<Navbar />
			<Home />
			<About />
			<Service2 />
			<Employee />
			<Support />
			<Testimonial />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
