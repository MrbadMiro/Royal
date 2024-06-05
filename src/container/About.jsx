import React from "react";
import { About1, About2, Whatsapp, W1, W2 } from "../../Data";
import { LiaUserNurseSolid } from "react-icons/lia";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";
const About = () => {
	const phoneNumber = "94771404069";
	const message = "Hello How Can I help you?";
	const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;
	return (
		<div
			className=" md:px-24 px-6 py-6 flex flex-col h-full w-full items-center justify-center"
			id="about">
			<div className="grid  md:grid-cols-2 pt-10 mt-10 relative gap-5 h-full w-full">
				<div className=" order-1  pr-0 h-full w-full flex items-center justify-center  ">
					<div className="flex mt-0 gap-4 relative h-full w-full">
						<div className="h-full">
							<img
								src={About1}
								alt=""
								className=" lg:h-[550px] h-full object-cover md:w-[90%]  relative   mt-0   pr-0"
							/>
						</div>

						<img
							src={About2}
							alt=""
							className="hidden md:flex h-[40%]  bottom-8 right-3  absolute object-cover w-[40%]  border-2  mb-0  pb-0 pr-0"
						/>
					</div>
				</div>
				{/* left side content*/}
				<div className="order-2  flex flex-col justify-center  ss:items-left  ">
					<div className="flex flex-col mt-2 w-full">
						<p className=" text-[15px] font-bold font-jost leading-4 text-green ss:text-left mb-4   ">
							Peace of Mind for Busy Lives
						</p>
					</div>

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
						className="tracking-[-1.8px]  font-semibold md:leading-[54px] leading-[40px] text-navy  font-jost  md:text-[50px] sm:text-left text-[34px]   mb-2  ">
						Your One-Stop Solution for Home and Property Care
					</motion.p>
					<p className="  font-regular font-jost text-[#67687A] left-3   text-[16px] w-full ss:text-left mt-2 ">
						Royal Xpose simplifies your life by providing a comprehensive range
						of services to care for your home, family, and property in Sri
						Lanka. From compassionate elder care to reliable housekeeping and
						skilled maintenance services, we're here to help you achieve peace
						of mind.
					</p>
					<div className="grid ss:grid-cols-2 md:justify-between items-left justify-left  w-full">
						<div className="flex  mt-4	py-2  gap-2   w-full ">
							<div className=" w-[70px] h-[70px] bg-green flex items-center justify-center text-[50px] mr-0  text-white ">
								<LiaUserNurseSolid />
							</div>
							<div className="flex flex-col  ">
								<p className="text-[18px] font-semibold font-jost">
									Elder Care
								</p>
								<p className="text-[14px] font-regular font-jost">
									Exceptional Care <br />
									for Your Loved Ones
								</p>
							</div>
						</div>
						<div className="flex   mt-4	py-2  gap-2 w-full ">
							<div className=" w-[70px] h-[70px] bg-green flex items-center justify-center text-[50px] text-white">
								<LiaUserNurseSolid />
							</div>
							<div className="flex flex-col  ">
								<p className="text-[18px] font-semibold font-jost">
									Home Services
								</p>
								<p className="text-[14px] font-regular font-jost">
									Making Life Easier <br /> with Reliable Housekeeping
								</p>
							</div>
						</div>
						<div className="flex   mt-4	py-2  gap-2 w-full ">
							<div className=" w-[70px] h-[70px] bg-green flex items-center justify-center text-[50px] text-white">
								<LiaUserNurseSolid />
							</div>
							<div className="flex flex-col  ">
								<p className="text-[18px] font-semibold font-jost">
									Property Maintenance
								</p>
								<p className="text-[14px] font-regular font-jost">
									Keeping Your Property <br /> in Top Condition
								</p>
							</div>
						</div>
						<div className="flex   mt-4	py-2  gap-2 w-full ">
							<div className=" w-[70px] h-[70px] bg-green flex items-center justify-center text-[50px] text-white">
								<LiaUserNurseSolid />
							</div>
							<div className="flex flex-col  ">
								<p className="text-[18px] font-semibold font-jost">
									Travels
								</p>
								<p className="text-[14px] font-regular font-jost">
									Keeping Your Car <br /> Running Smoothly
								</p>
							</div>
						</div>
					</div>
					<div className="flex  flex-col gap-4  ss:flex-row mt-4 w-full h-full items-center justify-center  ">
						<div className="w-full pr-2 h-full ">
							<div>
								
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer "
									className="flex items-center gap-1 ">
									<div className="flex relative items-center justify-center">
										<img
											src={W1}
											alt="WhatsApp"
											className="w-[50px] h-[50px]  "
										/>
										<img
											src={W2}
											alt=""
											className=" absolute w-[20px] h-[20px] animate-bounce"
										/>
									</div>

									<p className="text-[14px] font-bold ">Click to chat</p>
								</a>
							</div>
						</div>
						<div className="flex pl-2    ss:py-0 flex-row gap-2 w-full h-full items-center justify-center">
							<div>
								<div className="rounded-full p-3 bg-[#f2f3f5]">
									<IoIosCall className=" animate-bounce" />
								</div>
							</div>

							<div className="flex flex-col w-full h-full items-center justify-center">
								<p className="text-[12px] w-full">Give Us A Call</p>
								<p className="text-[12px] w-full font-inter font-medium">
									+94 771404069
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
