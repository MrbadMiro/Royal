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

function App() {
	return (
		<div className="bg-white font-inter">
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
