/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Kumbh: '"Kumbh+Sans"',
			inter: "inter",
			jost: "Jost",
		},
		extend: {
			colors: {
				green: "#5bb286",
				navy: "#1f294c",
				Orange: "#f07d63",
				light_green: "#75b482",
				Solitude: "#e9e9ea",
			},
			
		},
		screens: {
			xxs: "320px",
			xs: "370px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
