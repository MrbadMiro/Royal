import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { clients } from "../../Data";
const Client = () => {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="lg:px-24 px-6   my-12 flex flex-col h-full w-full items-center justify-center relative ">
			<div className="w-full h-fit ">
				<Slider {...settings} className="custom-slider">
					{clients.map((item, index) => (
						<div
							id="Slider-Boxes"
							key={index}
							className="p-4 shadow-lg min-w-[full] bg-white flex flex-col">
							<img src={item.image} alt="" className="opacity-[90%]" />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Client;
