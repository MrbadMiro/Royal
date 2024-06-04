import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { logo } from "../assets";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavlink";
import NavLink from "./Navlink";
import { motion } from "framer-motion";
import Form1 from "./Form1";
import Form2 from "./Form2";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState(false);
	const [showForm1, setShowForm1] = useState(false);
	const [showForm2, setShowForm2] = useState(false);

	useEffect(() => {
		const scrollActive = () => {
			setActive(window.scrollY > 20);
		};
		window.addEventListener("scroll", scrollActive);
		return () => window.removeEventListener("scroll", scrollActive);
	}, []);

	const toggleForm1 = () => {
		setShowForm1(!showForm1);
	};

	const toggleForm2 = () => {
		setShowForm2(!showForm2);
	};

	return (
		<div
			className={`fixed w-[100vw] bg-white   mt-0 left-0 right-0 z-20  ${
				active ? "shadow-lg bg-white top-0" : ""
			}`}>
			<div
				className={`  md:mx-24 mx-0  md:px-0 flex items-center justify-between   ${
					active ? "py-2 transition-all duration-1000" : "py-3"
				}`}>
				<div className="flex items-center justify-between w-full md:w-[120px] ">
					<img src={logo} alt="" className="w-[120px] h-[80px]" />
					<HiMenuAlt1
						className="text-3xl md:hidden cursor-pointer"
						onClick={() => setToggle(true)}
					/>
				</div>

				<div className="md:flex items-center hidden text-[14px]">
					{navLinks.map((navLink) => (
						<NavLink key={navLink.id} {...navLink} />
					))}
				</div>
				<div className="md:flex gap-2 items-center hidden text-[14px]">
					<button
						className="overflow bg-green group relative overflow-hidden text-[12px]  text-white px-4 py-2 before:absolute before:top-full before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-500 hover:before:-translate-y-full"
						onClick={toggleForm1}>
						<span className="relative z-10 block transition-colors duration-300 group-hover:text-white">
							Become An Employee
						</span>
					</button>
					<button
						className="overflow bg-green group relative overflow-hidden  text-[12px] text-white px-4 py-2 before:absolute before:top-full before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-500 hover:before:-translate-y-full"
						onClick={toggleForm2}>
						<span className="relative z-10 block transition-colors duration-300 group-hover:text-white">
							Hire Care Taker
						</span>
					</button>
				</div>

				{toggle && (
					<motion.div
						initial={{ x: -500, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3 }}
						className="fixed h-full w-full top-0 left-0 z-20 bg-navy text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8">
						{navLinks.map((navLink) => (
							<MobileNavLinks
								key={navLink.id}
								{...navLink}
								setToggle={setToggle}
							/>
						))}

						<div className="flex flex-col w-full items-center gap-8  justify-center text-[14px] mr-4">
							<button
								className="overflow bg-green group relative overflow-hidden text-[12px] text-white px-5 py-2 before:absolute before:top-full before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-500 hover:before:-translate-y-full"
								onClick={toggleForm1}>
								<span className="relative z-10 block transition-colors duration-300 group-hover:text-white">
									Employee Reg
								</span>
							</button>
							<button
								className="overflow bg-green group relative overflow-hidden text-[12px] text-white px-4 py-2 before:absolute before:top-full before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-500 hover:before:-translate-y-full"
								onClick={toggleForm2}>
								<span className="relative z-10 block transition-colors duration-300 group-hover:text-white">
									Hire Care Taker
								</span>
							</button>
						</div>

						<HiX
							className="absolute left-16 top-16 text-3xl cursor-pointer"
							onClick={() => setToggle(false)}
						/>
					</motion.div>
				)}
			</div>
			{showForm1 && <Form1 toggleForm={toggleForm1} />}
			{showForm2 && <Form2 toggleForm={toggleForm2} />}
		</div>
	);
};

export default Navbar;
