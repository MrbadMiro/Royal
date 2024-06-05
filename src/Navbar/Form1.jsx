import React, { useRef, useState } from "react";
import { HiX } from "react-icons/hi";

const Form = ({ toggleForm }) => {
	const [successMessage, setSuccessMessage] = useState(null);
	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(
			"https://script.google.com/macros/s/AKfycbySWyOj3fJKkqpzRI_X2RLyxpEfb5HZvrOc7TEqGc2jeTITyoSlIA5CnS4WEFRu0MQw/exec",
			{
				method: "POST",
				body: new FormData(formRef.current),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSuccessMessage(data.msg || "Form submitted successfully.");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="fixed top-0 left-0 h-full w-[100vw]  bg-black bg-opacity-50 flex justify-center items-center z-30">
			<div className="bg-white p-8 rounded-lg relative max-h-[90%] overflow-y-auto ">
				<h2 className="text-lg font-bold mb-4">Employee Details Form</h2>
				<form className="flex flex-col" ref={formRef} onSubmit={handleSubmit}>
					<input type="hidden" name="formType" value="Form2" />
					<div className="grid grid-cols-2 gap-3 mt-4">
						<input
							type="text"
							name="FullName"
							className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="FullName"
							required
						/>
						<input
							type="date"
							name="dateOfBirth"
							className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="dateOfBirth"
							required
						/>
					</div>
					<div className="flex flex-col mt-2">
						<div className="grid ss:grid-cols-3 gap-3 mt-2">
							<div>
								<select
									name="gender" // Add a name attribute
									className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full">
									<option value="">Gender Select...</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Other">Other</option>
								</select>
							</div>
							<input
								type="tel"
								name="phoneNumber"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="phoneNumber"
								required
							/>
							<input
								type="email"
								name="emailAddress"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="EmailAddress"
								required
							/>
						</div>

						<div className="grid ss:grid-cols-3 gap-3 mt-2">
							<input
								type="text"
								name="streetAddress"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="StreetAddress"
								required
							/>
							<input
								type="text"
								name="city"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="city"
								required
							/>
							<input
								type="text"
								name="state"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="state"
								required
							/>
						</div>
						<input
							type="text"
							name="currentEmploymentStatus"
							className="px-2 py-2 mt-4 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="CurrentEmploymentStatus"
							required
						/>
						{/* Previous Experience in Elder Care: */}
						<div className=" py-2 mt-2 outline-none text-[14px] text-navy w-full">
							<label className="w-full">
								Previous Experience in Elder Care:
							</label>
							<div className="px-2 mt-2 flex gap-2 ">
								<div className="flex gap-1">
									<input type="checkbox" name="hasElderCareExperience" />
									<label>Yes</label>
								</div>
								<div className="flex gap-1">
									<input type="checkbox" name="hasElderCareExperience" />
									<label>No</label>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-3 ">
							<textarea
								name="yearsExperience"
								maxLength="200"
								className="px-2 py-2 mt-2	 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="yearsExperience"
								required
							/>
							<textarea
								name="typesOfCare"
								maxLength="200"
								className="px-2 py-2 mt-2	 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="TypesOfCare"
								required
							/>
						</div>

						{/* Certifications and Qualifications : */}
						<div className=" py-2 mt-2 outline-none text-[14px] text-navy   w-full">
							<label className="">Certifications and Qualifications :</label>
							<div className="grid grid-cols-2 gap-3 ">
								<textarea
									name="certifications"
									maxLength="200"
									className="px-2 py-2 mt-2	 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
									placeholder="Relevant Certifications"
									required
								/>
								<textarea
									name="training"
									maxLength="200"
									className="px-2 py-2 mt-2	 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
									placeholder="Relevant Training"
									required
								/>
							</div>
						</div>
						{/* Availability */}
						<div className="py-2 mt-2 outline-none text-[14px] text-navy w-full">
							<label className="">Availability</label>
							<div className="mt-3 px-2 grid sm:grid-cols-5 gap-3 bg-[#f2f3f5] py-2">
								<div className="flex gap-1">
									<input
										type="radio"
										id="weekdays"
										name="availability"
										value="weekdays"
									/>
									<label htmlFor="weekdays">Weekdays</label>
								</div>
								<div className="flex gap-1">
									<input
										type="radio"
										id="weekends"
										name="availability"
										value="weekends"
									/>
									<label htmlFor="weekends">Weekends</label>
								</div>
								<div className="flex gap-1">
									<input
										type="radio"
										id="full-time"
										name="availability"
										value="full-time"
									/>
									<label htmlFor="full-time">Full-time</label>
								</div>
								<div className="flex gap-1">
									<input
										type="radio"
										id="part-time"
										name="availability"
										value="part-time"
									/>
									<label htmlFor="part-time">Part-time</label>
								</div>
								<div className="flex gap-1">
									<input
										type="radio"
										id="specific-hours"
										name="availability"
										value="specific-hours"
									/>
									<label htmlFor="specific-hours">Specific hours</label>
								</div>
							</div>
						</div>

						{/* Education */}
						<div className="w-full">
							<label className=" mt-2 text-[14px] text-navy w-full">
								Educational Background
							</label>
							<div className="mt-3 grid sm:grid-cols-2 px-2 text-[14px] text-navy gap-3 bg-[#f2f3f5] py-2">
								<div className="flex gap-1">
									<input
										type="radio"
										id="highestLevel"
										name="education"
										value="Highest Level of Education Completed"
									/>
									<label htmlFor="highestLevel">
										Highest Level of Education Completed
									</label>
								</div>
								<div className="flex gap-1">
									<input
										type="radio"
										id="relevantCourses"
										name="education"
										value="Relevant Courses or Degrees"
									/>
									<label htmlFor="relevantCourses">
										Relevant Courses or Degrees
									</label>
								</div>
							</div>
						</div>

						{/* language */}
						<div className="w-full mt-2">
							<label className=" mt-2 text-[14px] text-navy w-full">
								Languages Spoken
							</label>
							<div className="mt-3 grid ss:grid-cols-3 px-2 text-[14px] text-navy gap-3 bg-[#f2f3f5] py-2">
								<div className="flex gap-1">
									<input
										type="checkbox"
										id="tamil"
										name="languagesSpoken"
										value="Tamil"
									/>
									<label htmlFor="tamil">Tamil</label>
								</div>
								<div className="flex gap-1">
									<input
										type="checkbox"
										id="english"
										name="languagesSpoken"
										value="English"
									/>
									<label htmlFor="english">English</label>
								</div>
								<div className="flex gap-1">
									<input
										type="checkbox"
										id="sinhala"
										name="languagesSpoken"
										value="Sinhala"
									/>
									<label htmlFor="sinhala">Sinhala</label>
								</div>
							</div>
						</div>

						{/* Personal References */}
						<div className="  py-2 mt-2 outline-none text-[14px] text-navy   w-full">
							<label className="">Personal References:</label>
							<div className="mt-3 grid ss:grid-cols-3  text-[14px] text-navy gap-3 w-full  py-2  ">
								<input
									type="text"
									name="PersonalReferences"
									className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
									placeholder="Name"
									required
								/>
								<input
									type="text"
									name="Relationship"
									className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
									placeholder=" Relationship"
									required
								/>
								<input
									type="tel"
									name="Contact"
									className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
									placeholder="Contact Information"
									required
								/>
							</div>
						</div>
					</div>
					<button
						type="submit"
						className="mt-4 px-4 py-2 rounded-md bg-green text-white">
						Submit
					</button>
				</form>
				{successMessage && <p className="mt-4 text-green">{successMessage}</p>}
				<HiX
					className="absolute right-4 top-6 text-2xl cursor-pointer text-navy"
					onClick={toggleForm}
				/>
			</div>
		</div>
	);
};

export default Form;
