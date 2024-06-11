import React from "react";
import { Footer_img, hero, hero1, hero2 } from "../../Data";
import { logo2 } from "../../Data";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
	const sectionStyle = {
		backgroundImage: ` url(${Footer_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<div
			
			className="lg:px-24 px-6   mt-12 flex flex-col h-full w-full items-center justify-center relative bg-navy "
			style={sectionStyle}>
			<div className="grid rounded-md md:px-0 px-2 items-center justify-center ss:grid-cols-2 lg:grid-cols-5 w-full h-full top-0 py-4 bg-[#151E3D] text-white">
				<div className="w-full h-full">
					<img src={logo2} alt="" className="w-[167px] h-[46px]" />
				</div>
				<div className="flex flex-cols-2 gap-1 w-full h-full mt-4 lg:mt-0">
					<div>
						<IoIosCall className="text-Orange" />
					</div>
					<div>
						<p className="font-jost text-[14px]">Phone:</p>
						<p className="font-jost text-[14px]">+94 771404069</p>
					</div>
				</div>

				<div className="flex flex-cols-2 gap-1 mt-4 lg:mt-0 w-full h-full">
					<div>
						<CgMail className="text-Orange" />
					</div>
					<div>
						<p className="font-jost text-[14px]">Email:</p>
						<p className="font-jost text-[14px]">inforoyalxpose@gmail.com</p>
					</div>
				</div>
				<div className="flex flex-cols-2 gap-1 mt-4 lg:mt-0 w-full h-full ">
					<div>
						<IoLocationOutline className="text-Orange" />
					</div>
					<div>
						<p className="font-jost text-[14px]">Address:</p>
						<p className="font-jost text-[14px]">
							Perumakkadavai Road Alaveddy, South, Alaveddy Jaffna, SriLanka
						</p>
					</div>
				</div>
				<div className="flex flex-cols-2 gap-1 px-5 pb-5  lg:mt-0 w-full h-full">
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						duration={500}
						offset={-50}
						className="hover:text-Rose cursor-pointer">
						<button
							class="overflow mt-4 bg-Orange lg:block hidden group   relative  overflow-hidden text-[12px] text-white px-8 py-3 before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-green before:transition-transform before:duration-500 hover:before:translate-x-full"
							name="Name"
							type="submit">
							<span class="relative z-10 block transition-colors font-semibold duration-300 group-hover:text-white">
								Contact Us
							</span>
						</button>
					</ScrollLink>
				</div>
			</div>

			<div className="grid grid-col-1 ss:grid-cols-2 gap-5 md:gap-0 ss:items-center justify-between  md:grid-cols-10 w-full mt-10 py-4  text-white">
				<div className="flex  flex-col w-full md:col-span-6  h-full">
					<div className="flex flex-cols-2 w-full h-full gap-2">
						<div className=" h-full">
							<div className="p-4 rounded-sm bg-green">
								<FaRegClock />
							</div>
						</div>
						<div className="flex flex-col w-full h-full gap-1">
							<p className=" text-[20px] font-jost w-full h-full">
								Opening Hours
							</p>
							<p className="  text-[12px] font-jost w-full h-full">
								Mon-Sat(8.00-6.00)
							</p>
							<p className="  text-[12px] font-jost w-full h-full">
								Sunday-Closed
							</p>
						</div>
					</div>
					<div className="w-full h-full mt-4  ">
						<p className="text-[16px] font-jost">
							Perumakkadavai Road Alaveddy, South, Alaveddy Jaffna, SriLanka
						</p>
					</div>
					<div className="flex gap-2 mt-4">
						<div className="bg-[#151E3D] p-[10px] rounded-[5px]">
							<a
								href="https://www.facebook.com/profile.php?id=61558664138312&mibextid=ZbWKwL"
								target="_blank"
								rel="noopener noreferrer">
								<FaFacebookF />
							</a>
						</div>
						<div className="bg-[#151E3D] p-[10px] rounded-[5px]">
							<a
								href="https://www.instagram.com/royalxpose/ "
								target="_blank"
								rel="noopener noreferrer">
								<FaInstagram />
							</a>
						</div>
						<div className="bg-[#151E3D] p-[10px] rounded-[5px]">
							<a
								href="https://youtube.com/@royalxpose?si=wIdMXmwdW3Bv1R1R "
								target="_blank"
								rel="noopener noreferrer">
								<CiYoutube />
							</a>
						</div>
					</div>
				</div>
				<div className="flex  flex-col w-full md:col-span-2  h-full">
					<div className="flex flex-col gap-1 w-full h-full text-left">
						<p className="text-[16px] font-jost text-left font-bold">
							<a href="">Types of cares</a>
						</p>
						<ScrollLink
							to="service"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer flex flex-col gap-1">
							<p className="flex items-center text-[14px] mt-2 gap-2 text-left">
								<span className="text-[50px] leading-4 text-green">-</span>
								Senior care
							</p>
							<p className="flex items-center text-[14px] text-left gap-2">
								<span className="text-[50px] leading-4 text-green">-</span>
								Child Care{" "}
							</p>
							<p className="flex items-center text-[14px] text-left gap-2">
								<span className="text-[50px] leading-4 text-green">-</span>
								Personal Care{" "}
							</p>
							<p className="flex items-center text-[14px] text-left gap-2">
								<span className="text-[50px] leading-4 text-green">-</span>
								Residential Care{" "}
							</p>
						</ScrollLink>
					</div>
				</div>
				<div className="flex  flex-col w-full md:col-span-2 h-full">
					<div className="flex flex-col w-full h-full text-left">
						<p className="text-[16px] font-jost text-left  font-bold">
							Explore
						</p>
						<ScrollLink
							to="service"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer flex flex-col mt-2">
							<p className="flex items-center text-[14px] text-left gap-2">
								<span className="text-[50px] leading-5 text-green">-</span>Our
								Services{" "}
							</p>
						</ScrollLink>
						<ScrollLink
							to="about"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer flex flex-col mt-1">
							<p className="flex items-center text-[14px] text-left gap-2">
								<span className="text-[50px] leading-5 text-green">-</span>
								About Us{" "}
							</p>
						</ScrollLink>
						{/* <p className="flex items-center text-[16px] mt-2 gap-2 text-left">
							<span className="text-[50px] leading-5 text-green">-</span> Meet
							Our Team
						</p>
						 

						<p className="flex items-center text-[16px] text-left gap-2">
							<span className="text-[50px] leading-5 text-green">-</span>New
							Projects{" "}
						</p>
						<p className="flex items-center text-[16px] text-left gap-2">
							<span className="text-[50px] leading-5 text-green">-</span>Lates
							News{" "}
						</p>
						<p className="flex items-center text-[16px] text-left gap-2">
							<span className="text-[50px] leading-5 text-green">-</span>FAQ{" "}
						</p> */}
					</div>
				</div>
				{/* LATES NEWS DIV START */}
				<div className="hidden  flex-col w-full h-full">
					<div className="flex   w-full  text-left">
						<p className="text-[20px] font-jost text-left  font-bold">
							Lates News
						</p>
					</div>
					<div className=" flex flex-col w-full h-full mt-2 ">
						{/* LATES NEWS DIV IMG-01 */}
						<div className="flex flex-cols-2 w-full h-full gap-4">
							<div className=" h-full">
								<div>
									<div className="w-[75px] h-[75px]">
										<img src={hero1} alt="" className=" object-cover" />
									</div>
								</div>
							</div>
							<div className="w-full h-full">
								<p className="text-[12px] font-jost text-left    ">
									January 31, 2023
								</p>
								<p className="text-[12px] font-jost text-left  font-bold">
									New Caring Thoughts You Can Fundraise
								</p>
							</div>
						</div>
						{/* LATES NEWS DIV IMG-02 */}
						<div className="flex flex-cols-2 w-full h-full gap-4">
							<div className=" h-full">
								<div>
									<div className="w-[75px] h-[75px]">
										<img src={hero1} alt="" className=" object-cover" />
									</div>
								</div>
							</div>
							<div className="w-full h-full">
								<p className="text-[12px] font-jost text-left    ">
									January 31, 2023
								</p>
								<p className="text-[12px] font-jost text-left  font-bold">
									New Caring Thoughts You Can Fundraise
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* LATES NEWS DIV END */}


			</div>
			<hr className="bg-white" />
			<div className="w-full">
				<p className="text-center font-jost font-regular text-[16px] text-white">
					© 2024 Royal-xpose All Rights Reserved. Powered By{" "}
					<a href="https://tetravi.com/">Tetra VI😍.</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
