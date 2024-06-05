import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { banner, hero, hero1, hero2, line } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
	const sectionStyle = {
		backgroundImage: ` url(${banner})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<div
			className="mt-0 py-10 h-full flex w-full md:px-12 px-6"
			style={sectionStyle}
			id="home">
			<div className="grid lg:grid-cols-2 pt-10 mt-10 relative gap-7">
				{/* left side content*/}
				<div className="order-2 px-2 lg:px-0 md:order-1 lg:pl-10 py-auto flex flex-col justify-center md:items-left my-auto">
					<div className="flex flex-col">
						<p className=" text-[15px] font-bold font-jost leading-4 text-navy mb-4 lg:text-left  text-center  ">
							WELCOME TO OLD CARE CENTER
							<img src={line} alt="" className="lg:block hidden   " />
						</p>
					</div>

					<motion.p initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.6,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 0.6,
						}} className="  font-bold leading-[50px] md:leading-[68px] text-navy left-3 font-jost text-[48px] md:text-[64px] text-center lg:text-left mb-2  ">
						Your Trusted Partner for Senior Care in Sri Lanka
						
					</motion.p>
					<p className="  font-regular font-Kumbh text-[#67687A] left-3   text-[20px] text-center  lg:text-left ">
						Providing exceptional care and support for elders, right at home
					</p>
					<div className="flex flex-row items-center justify-center lg:justify-start ">
						<ScrollLink
							to="service"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer">
							<button class="overflow mt-4 bg-green group rounded-full relative  overflow-hidden text-[12px] text-white px-6 py-3 before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-navy before:transition-transform before:duration-500 hover:before:translate-x-full">
								<span class="relative z-10 block transition-colors font-semibold duration-300 group-hover:text-white">
									Our Services
								</span>
							</button>
						</ScrollLink>
					</div>
				</div>
				<div className=" hidden order-1 md:order-2 pl-20 h-full w-full lg:flex items-center justify-center  ">
					<div className="flex mb-0 gap-12 ">
						<img
							src={hero1}
							alt=""
							className=" h-full lg:h-[400px] rounded-[200px]  object-cover w-[40%]    mb-0  pb-0 pr-0"
						/>

						<img
							src={hero2}
							alt=""
							className=" h-full lg:h-[400px] rounded-[200px]  object-cover w-[40%]    mb-0  pb-0 pr-0"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
