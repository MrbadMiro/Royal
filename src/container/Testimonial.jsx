import React from "react";
import { motion } from "framer-motion";
import {
	Testimonial_img,
	Testimonial_img1,
	Testimonial_img2,
	Testimonial_img3,
	Testimonial_img4,
	Star_points,
	Quatos,
} from "../../Data";
import { GiHospitalCross } from "react-icons/gi";
const Testimonial = () => {
	const sectionStyle = {
		backgroundImage: ` url(${Testimonial_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<div
			className="md:px-24 px-6 z-10 ss:pt-6 pb-[80px] md:py-24 mt-[700px] ss:my-[300px] md:my-24 flex flex-col h-full w-full items-center justify-center bg-[#f2f3f5] relative"
			id="testimonial"
			style={sectionStyle}>
			<div className="-top-[680px] ss:-top-[300px] md:-top-10 left-1/2 transform -translate-x-1/2 absolute grid md:grid-cols-4 ss:grid-cols-2 w-full px-6 lg:px-24 gap-10 md:gap-2">
				<div className="relative bg-white flex flex-col items-center justify-center px-8 py-4 border rounded-xl  ">
					<div className="-top-8 left-1/2 transform -translate-x-1/2    absolute  border-green    rounded-full">
						<img src={Testimonial_img1} alt="" className="" />
					</div>
					<p className="mt-5 text-[48px] text-navy font-jost font-semibold ">
						{" "}
						100+
					</p>
					<p className="text-[16px] font-jost text-regular ">
						Senior Citizen Care
					</p>
				</div>
				<div className="relative bg-white flex flex-col items-center justify-center px-8 py-4 border rounded-xl  ">
					<div className="-top-8 left-1/2 transform -translate-x-1/2    absolute  border-green    rounded-full">
						<img src={Testimonial_img2} alt="" className="" />
					</div>
					<p className="mt-5 text-[48px] text-navy font-jost font-semibold ">
						{" "}
						40+
					</p>
					<p className="text-[16px] font-jost text-regular ">
						Residential Care
					</p>
				</div>
				<div className="relative bg-white flex flex-col items-center justify-center px-8 py-4 border rounded-xl  ">
					<div className="-top-8 left-1/2 transform -translate-x-1/2    absolute  border-green    rounded-full">
						<img src={Testimonial_img3} alt="" className="" />
					</div>
					<p className="mt-5 text-[48px] text-navy font-jost font-semibold ">
						{" "}
						30+
					</p>
					<p className="text-[16px] font-jost text-regular ">Property Care</p>
				</div>
				<div className="relative bg-white flex flex-col items-center justify-center px-8 py-4 border rounded-xl  ">
					<div className="-top-8 left-1/2 transform -translate-x-1/2    absolute  border-green    rounded-full">
						<img src={Testimonial_img4} alt="" className="" />
					</div>
					<p className="mt-5 text-[48px] text-navy font-jost font-semibold ">
						{" "}
						18+
					</p>
					<p className="text-[16px] font-jost text-regular ">Legal Support</p>
				</div>
			</div>
			<div className="w-full flex flex-col items-center justify-center mt-24 md:mt-10 h-full">
				<p className="text-center text-[14px] text-jost  text-green font-bold ">
					Client Testimonial
				</p>
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
					className="text-center mt-2 text-navy text-[30px] font-bold">
					What people are saying about us!
				</motion.p>
			</div>
			<div className="grid lg:grid-cols-3 w-full h-full mt-10 items-center  justify-center gap-2">
				<div className="bg-white shadow-custom flex items-center flex-col rounded-md justify-center w-full h-full ">
					<div className=" flex flex-cols-2 justify-between items-center p-5 w-full ">
						<div className="flex flex-col">
							<p className="font-jost font-bold text-[20px] ">Pratheepan J</p>

							<img src={Star_points} alt="" />
						</div>
						<div>
							<img src={Quatos} alt="" />
						</div>
					</div>
					<p className="p-5 text-[18px] font-normal font-jost">
						I am extremely thankful for the kind-hearted and specialized old-age
						services offered by Royal Xpose. They have become a life wire to my
						family ensuring that my elderly parents live well in their homes.
					</p>
				</div>
				<div className="bg-white shadow-custom flex items-center flex-col rounded-md justify-center w-full  h-full">
					<div className=" flex flex-cols-2 justify-between items-center p-5  w-full ">
						<div className="flex flex-col">
							<p className="font-jost font-bold text-[20px] ">Rajkumar T</p>
							<img src={Star_points} alt="" />
						</div>
						<div>
							<img src={Quatos} alt="" />
						</div>
					</div>
					<p className="p-5 text-[18px] font-normal font-jost">
						Since I joined Royal Xpose, I have never had any problem with
						managing my estates; it’s been an easy thing to do. They handle
						everything from regular repairs to tenant issues meticulously
					</p>
				</div>
				<div className="bg-white shadow-custom flex items-center flex-col rounded-md justify-center w-full h-full">
					<div className=" flex flex-cols-2 justify-between items-center p-5 w-full ">
						<div className="flex flex-col">
							<p className="font-jost font-bold text-[20px] "> Balamurali R</p>
							<img src={Star_points} alt="" />
						</div>
						<div>
							<img src={Quatos} alt="" />
						</div>
					</div>
					<p className="p-5 text-[18px] font-normal font-jost">
						I always feel like my Hiace is new due to the exceptional services
						at Royal Xpose Vehicle Care Unit. My vehicle is dealt with by highly
						trained workers who use quality products on it. You can’t go wrong
						with them.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
