import React, { useRef, useState } from "react";
import { HiX } from "react-icons/hi";

const Form = ({ toggleForm }) => {
	const [successMessage, setSuccessMessage] = useState(null);
	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(
			"https://script.google.com/macros/s/AKfycbwsxtH7yEicHiqs_H7_VxsRNjo6V0umhI1AHqMCfVfy1aMOP-fX4F6wGXAPUFJlQOthpg/exec",
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
			<div className="bg-white p-8 rounded-lg relative max-h-[90%] overflow-y-auto">
				<h2 className="text-lg font-bold mb-4">Patient Details Form</h2>
				<form className="flex flex-col" ref={formRef} onSubmit={handleSubmit}>
					<input type="hidden" name="formType" value="Form2" />
					<div className="grid grid-cols-2 gap-3 mt-4">
						<input
							type="text"
							name="Name"
							className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Patient Name"
							required
						/>
						<input
							type="text"
							name="Sex"
							className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Sex"
							required
						/>
					</div>
					<div className="flex flex-col mt-2">
						<input
							type="text"
							name="Address"
							className="px-2 py-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Address"
							required
						/>
						<div className="grid grid-cols-2 gap-3 mt-2">
							<input
								type="number"
								name="Age"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Age"
								required
							/>
							<input
								type="tel"
								name="PhoneNumber"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Phone Number"
								required
							/>
						</div>
						<div className="grid grid-cols-2 gap-3 mt-2">
							<input
								type="text"
								name="GuardianName"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Guardian Name"
								required
							/>
							<input
								type="text"
								name="Relationship"
								className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
								placeholder="Relationship"
								required
							/>
						</div>
						<input
							type="text"
							name="Address2"
							className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Address"
							required
						/>
						<input
							type="tel"
							name="PhoneNumber2"
							className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Phone Number"
							required
						/>
						<textarea
							name="PCMC"
							maxLength="200"
							className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Patient's current medical condition"
							required
						/>
						<textarea
							name="PTD"
							maxLength="200"
							className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Patient's treatment details"
							required
						/>
						<textarea
							name="DOMU"
							maxLength="200"
							className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Details of Medicine Usage"
							required
						/>
						<textarea
							name="RDD"
							maxLength="200"
							className="px-2 py-2 mt-2 outline-none text-[14px] text-navy bg-[#f2f3f5] w-full"
							placeholder="Regular Doctor’s Details"
							required
						/>
					</div>
					<button
						type="submit"
						className="mt-4 px-4 py-2 rounded-md bg-green text-white">
						Submit
					</button>
				</form>
				{successMessage && <p className="mt-4 text-black">{successMessage}</p>}
				<HiX
					className="absolute right-4 top-6 text-2xl cursor-pointer text-navy"
					onClick={toggleForm}
				/>
			</div>
		</div>
	);
};

export default Form;
