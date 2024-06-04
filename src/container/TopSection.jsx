import React from "react";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const TopSection = () => {
	return (
		<div className="lg:block hidden ">
			<div className="flex bg-navy w-full items-center justify-between lg:px-24 px-6 top-0 ">
				<div className="flex flex-row gap-1 text-white text-[13px]">
					<div className="flex flex-row   py-2  items-center">
						<IoIosCall className="text-Orange text-[14px]" />
						<p className="">+94 771404069</p>
					</div>
					<div className="flex flex-row px-4 py-2 gap-1 items-center">
						<CgMail className="text-Orange" />
						<p>inforoyalxpose@gmail.com</p>
					</div>
					<div className="flex flex-row px-4 py-2 gap-1 items-center">
						<FaRegClock className="text-Orange" />
						<p>Mon-Sat 8.00-6.30, Sunday-CLOSED</p>
					</div>
				</div>
				<div className="flex bg-Orange h-full ">
					<div className="px-4 py-2">
						<a
							href="https://www.facebook.com/profile.php?id=61558664138312&mibextid=ZbWKwL"
							target="_blank"
							rel="noopener noreferrer">
							<TiSocialFacebook className="text-white hover:text-navy" />
						</a>
					</div>
					<div className="px-4 py-2">
						<a
							href="https://youtube.com/@royalxpose?si=wIdMXmwdW3Bv1R1R "
							target="_blank"
							rel="noopener noreferrer">
							<CiYoutube className="text-white hover:text-navy" />
						</a>
					</div>
					<div className="px-4 py-2">
						<a href="https://www.instagram.com/royalxpose/ " target="_blank" rel="noopener noreferrer">
							<FaInstagram className="text-white hover:text-navy" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopSection;
