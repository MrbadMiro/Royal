import { Contact_img } from "../../Data";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
	const sectionStyle = {
		backgroundImage: `url(${Contact_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const [successMessage, setSuccessMessage] = useState(null);
	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(
			"https://script.google.com/macros/s/AKfycbw8Y48ne0-MeABtRIijUzWRh3L6MUNGUt-SlggtGAqgOhjZJTwUaKOuDd1J2JXpaQdWFA/exec",
			{
				method: "POST",
				body: new FormData(formRef.current),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSuccessMessage(data.msg || "Form submitted successfully.");
				alert(data.msg || "Form submitted successfully.");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div
			className="lg:px-24 px-6 py-12 md:py-20 my-12 md:my-24 flex flex-col h-full w-full items-center justify-center relative"
			style={sectionStyle}
			id="contact">
			<div className="grid lg:grid-cols-2 w-full h-full gap-3">
				<div className="">
					<p className="text-[14px] text-green font-jost font-bold text-left">
						Contact Now
					</p>
					<motion.p initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.6,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 0.6,
						}} className="text-[24px] lg:text-[48px] text-navy font-jost font-bold text-left">
						Get in touch with us
					</motion.p>
					<form
						className=" flex flex-col"
						ref={formRef}
						onSubmit={handleSubmit}>
						<input type="hidden" name="formType" value="Form2" />
						<div className="grid ss:grid-cols-2 gap-3 mt-4">
							<input
								type="text"
								name="Name"
								className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Your Name"
								required
							/>
							<input
								type="email"
								name="Email"
								className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Enter Email"
								required
							/>
						</div>
						<div className="grid ss:grid-cols-2 gap-3 mt-4">
							<input
								type="text"
								name="Subject"
								className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Subject"
							/>
							<input
								type="tel"
								name="Phone"
								className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Phone"
							/>
						</div>
						<div className="w-full mt-4">
							<textarea
								name="Message"
								maxLength="200"
								className="outline-none bg-[#f2f3f5] text-[14px] text-navy p-2 w-full"
								placeholder="Message"
								required
							/>
						</div>
						<div className="w-full flex fle-col mt-2">
							<button
								className="overflow mt-4 bg-green group relative overflow-hidden text-[12px] text-white px-8 py-3 before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-navy before:transition-transform before:duration-500 hover:before:translate-x-full"
								type="submit">
								<span className="relative z-10 block transition-colors font-semibold duration-300 group-hover:text-white">
									Send Message
								</span>
							</button>
						</div>
					</form>
					{successMessage && (
						<p className="mt-4 text-black text-[14px] ">{successMessage}</p>
					)}
				</div>
				<div className="flex w-full">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4047213.2839410105!2d80.70625!3d7.857684999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1716777439814!5m2!1sen!2slk"
						width="100%"
						height="100%"
						style={{ border: "0" }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
