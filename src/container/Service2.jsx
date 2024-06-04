import React, { useState } from "react";
import { Services } from "../../Data";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
 
const Service2 = () => {
	const [activeTab, setActiveTab] = useState(1); // Default to Tab 1

	// Filtered services based on activeTab
	const filteredServices = Services.filter(
		(service) => service.tab === activeTab
	);

	return (
		<div
			className=" pt-24 pb-20 lg:px-24 px-6 flex flex-col h-full w-full items-center bg-Solitude justify-center"
			id="service">
			<p className="text-[14px] text-green font-jost font-bold text-center">
				What We Offers
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
				className="text-[34px] md:text-[48px] mt-2 leading-10  w-full text-navy font-jost font-bold text-center">
				We're committed to delivering <br />
				the high-quality service
			</motion.p>

			<div className="w-full flex flex-col mt-10 ">
				<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 w-full text-center  p-4 text-[20px] text-white font-jost ">
					<div
						className={`tabs ${
							activeTab === 1 ? "active-tabs" : ""
						} w-full bg-green `}
						onClick={() => setActiveTab(1)}>
						Personal Care
					</div>
					<div
						className={`tabs ${
							activeTab === 2 ? "active-tabs" : ""
						} w-full bg-green`}
						onClick={() => setActiveTab(2)}>
						Home Services
					</div>
					<div
						className={`tabs ${
							activeTab === 3 ? "active-tabs" : ""
						} w-full bg-green`}
						onClick={() => setActiveTab(3)}>
						Property Maintenance
					</div>
					<div
						className={`tabs ${
							activeTab === 4 ? "active-tabs" : ""
						} w-full bg-green`}
						onClick={() => setActiveTab(4)}>
						Travel
					</div>
				</div>
				<div className="w-full flex mt-3  ">
					<div
						className={`content_${activeTab} grid md:grid-cols-3 sm:grid-cols-2 gap-4`}>
						{filteredServices.map((item, index) => (
							<div
								key={index}
								className="p-4 shadow-lg  bg-white shadow-custom1 flex flex-col relative">
								<img
									src={item.image}
									alt=""
									className="md:h-[175px] object-cover"
								/>
								<div className="mt-2 text-[20px] text-Teal text-center font-jost text-navy ">
									{item.category}
								</div>
								<div className="text-sm mt-2 font-jost font-regular text-center ">
									{item.title}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex ss:flex-row flex-col items-center border-2  border-navy rounded-md p-4 gap-2 justify-center mt-12 mx-6">
				<div className="flex ">
					<p className="text-center text-[16px] font-jost">
						Contact Royal Xpose today for a{" "}
						<span className="text-Orange text-[24px] animate-bounce ">
							free
						</span>{" "}
						consultation!
					</p>
				</div>
				<div className="flex ">
					{/* LEFT TO RIGHT */}
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						duration={500}
						offset={-50}
						className="hover:text-Rose cursor-pointer">
						<button class="overflow bg-green group  relative  overflow-hidden text-[12px] text-white px-6 py-3 before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-navy before:transition-transform before:duration-500 hover:before:translate-x-full">
							<span class="relative z-10 block transition-colors font-semibold duration-300 group-hover:text-white">
								Contact Now
							</span>
						</button>
					</ScrollLink>
				</div>
			</div>
		</div>
	);
};

export default Service2;
