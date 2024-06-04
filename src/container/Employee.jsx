import React, { useEffect, useState } from "react";
import { bg_image, Employee_img, Star, Arrow } from "../../Data";
import Form1 from "../Navbar/Form1";
import { motion } from "framer-motion";
const Employee = () => {
	const sectionStyle = {
		backgroundImage: ` url(${bg_image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	const [showForm1, setShowForm1] = useState(false);
	const toggleForm1 = () => {
		setShowForm1(!showForm1);
	};
	return (
		<div
			className="w-full px-6 md:px-24 py-24 flex flex-col relative"
			style={sectionStyle}>
			<img
				src={Star}
				alt=""
				className="w-[50px] h-[50px] absolute top-7 left-3  animate-spin animate-infinite duration-30000 animation-timing-function: ease-in-out"
			/>
			<img
				src={Star}
				alt=""
				className="w-[50px] h-[50px] absolute bottom-7 right-3 animate-spin animate-infinite duration-30000 animation-timing-function: ease-in-out "
			/>
			<div className="grid md:grid-cols-2 ">
				<div className="w-full h-full  pr-5 py-5">
					<img
						src={Employee_img}
						alt=""
						className="shadow-custom w-full h-full object-cover"
					/>
				</div>
				<div className="w-full h-full flex flex-col items-center  ">
					<motion.p
						initial={{ x: 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.6,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 0.6,
						}}
						className="font-bold leading-[24px] mt-10  md:leading-[32px] text-navy left-3 font-jost text-[20px] md:text-[24px] text-center md:text-left mb-2 ">
						Passionate about caring for others? Join our team of dedicated
						caregivers today and make a difference!
					</motion.p>
					<p className="text-center md:text-left mt-2 font-jost text-[16px] font-normal">
						If you have a passion for helping others and want to make a positive
						impact in their lives, we invite you to become part of our caring
						community. Join us today and experience the fulfilment of making a
						difference every day.
					</p>
					<div className="w-full mt-10 flex items-center justify-center md:justify-start relative">
						<button
							className="overflow bg-green group relative  font-jost overflow-hidden text-[18px] text-white px-6 py-2 rounded-full before:absolute before:top-full before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-500 hover:before:-translate-y-full"
							onClick={toggleForm1}>
							<span className="relative z-10 block transition-colors duration-300 group-hover:text-white">
								Become An Employee
							</span>
						</button>
						<img
							src={Arrow}
							alt=""
							className="hidden md:flex w-[50px] absolute -top-9 animate-bounce left-[250px]"
						/>
					</div>
				</div>
			</div>
			{showForm1 && <Form1 toggleForm={toggleForm1} />}
		</div>
	);
};

export default Employee;
