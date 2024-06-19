import React from "react";
import { Background, hero1,hero2, Star, Arrow } from "../../Data";
import { LuArrowRightCircle } from "react-icons/lu";
import { motion } from "framer-motion";
const Support = () => {
	const sectionStyle = {
		backgroundImage: ` url(${Background})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<div
			className="lg:px-24 px-6 py-24 flex flex-col h-full w-full items-centerv my-4 md:mt-12 md:mb-24 justify-center"
			style={sectionStyle}>
			<div className="grid md:grid-cols-2 items-center justify-center">
				<div className="order-1 flex flex-col w-full h-full">
					<p  data-aos="fade-up" className="text-left text-[14px] mt-2 font-bold font-jost text-green ">
						We Always Care Eldery
					</p>
					< p
					    data-aos="fade-up"
						className="text-left md:text-[48px] text-[34px] mt-2 font-jost text-navy leading-[50px] font-extrabold     ">
						Why most of the people prefer our oldkare
					</ p>
					<div data-aos="fade-up" className="w-full h-full flex flex-col ">
						<div className="w-full h-full flex flex-col pt-8 gap-2">
							<div className="w-full h-full flex flex-cols-2  md:justify-left  gap-2  border-b-2 py-2">
								<div className="mt-1 ml-0">
									<LuArrowRightCircle className="" />
								</div>
								<div className="flex flex-col gap-2 ">
									<p className="text-left top-0 font-jost text-[20px] text-navy font-bold">
										Dedicated Caregivers
									</p>
									<p className=" text-left top-0 font-jost text-[14px] font-normal">
										We understand the importance of personalized support. You'll
										be paired with a dedicated caregiver who takes the time to
										understand your family's unique needs and goals.
									</p>
								</div>
							</div>
							<div className="w-full h-full flex flex-cols-2  justify-left gap-2 border-b-2 py-2">
								<div className="mt-1 ml-0">
									<LuArrowRightCircle className="" />
								</div>
								<div className="flex flex-col gap-2">
									<p className="text-left top-0 font-jost text-[20px] text-navy font-bold">
										{" "}
										Personalized Service:
									</p>
									<p className=" text-left top-0 font-jost text-[14px] font-normal">
										Our team takes the time to assess your specific requirements
										and preferences. We then tailor our services to achieve the
										best possible outcome for your family, ensuring everyone
										receives the care they deserve.
									</p>
								</div>
							</div>
							<div className="w-full h-full flex flex-cols-2  justify-left gap-2 py-2">
								<div className="mt-1 ml-0">
									<LuArrowRightCircle className="" />
								</div>
								<div className="flex flex-col gap-2">
									<p className="text-left top-0 font-jost text-[20px] text-navy font-bold">
										{" "}
										Seamless Support System:
									</p>
									<p className=" text-left top-0 font-jost text-[14px] font-normal">
										Royal Xpose handles the logistics, from paperwork to
										coordinating with service providers. This allows you to
										relax and know that everything is taken care of.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div data-aos="zoom-in" className="order-2 items-left justify-left w-full h-full  relative p-5">
					<img
						src={hero1}
						alt=""
						className="border-10 w-full md:h-[70%]  h-[100%]  border  border-gray-300 p-5 object-cover"
					/>
					<img
						src={Arrow}
						alt=""
						className="top-10 absolute animate-bounce -right-4"
					/>
					<div className="hidden absolute md:flex flex-cols-2 -left-[1px]  -right-[20px] bottom-[10%]  items-center w-full justify-between">
						<div className="flex flex-col gap-2">
							<div className="left-0 top-0 bg-[#F07C63] opacity-[90%]  p-8 text-[18px] text-white rounded-xl  text-center">
								<p>We Take Care Helping Seniors Learn New Hobbies</p>
							</div>
							<div className="flex items-center justify-center">
								<img
									src={Star}
									alt=""
									className="h-[40px] w-[40px]  animate-spin animate-infinite duration-30000 animation-timing-function: ease-in-out"
								/>
							</div>
						</div>

						<div className="w-full p-5 ">
							<img
								src={hero2}
								alt=""
								className="boder w-[40%] h-full mr-0  object-cover rounded-xl  border-4  border-White  absolute top-0 right-0 "
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support;
