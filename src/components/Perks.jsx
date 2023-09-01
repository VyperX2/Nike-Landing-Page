import React from "react";
import truck from "../assets/icons/truck-fast.svg";
import shield from "../assets/icons/shield-tick.svg";
import help from "../assets/icons/support.svg";

const Perks = () => {
	const cardContent = [
		{
			icon: truck,
			title: "Free Shipping",
			desc: "Enjoy seamless shopping with our complimentary shipping service.",
		},
		{
			icon: shield,
			title: "Secure Payment",
			desc: "Experience worry-free transactions with our secure payment options.",
		},
		{
			icon: help,
			title: "Love to help you",
			desc: "Our dedicated team is here to assist you every step of the way.",
		},
	];

	const Card = ({ img, title, desc , isLast }) => {
		return (
			<div className={`flex flex-col mb-8 shadow-3xl rounded-2xl px-10 lg:w-[450px]  py-16 gap-3 `}>
				<div className=" bg-[#FF6452] p-2 w-fit rounded-full">
					<img src={img} alt="icon" />
				</div>
				<h4 className=" text-[28px] font-bold font-montserrat">{title}</h4>
				<p className="text-[18px] font-montserrat text-[#6D6D6D]"> {desc} </p>
			</div>
		);
	};

	return (
		<section className="mx-auto mt-32">
			<div className="grid grid-cols-1 px-4  gap-x-6  lg:grid-cols-2 2xl:grid-cols-3 ">
				{cardContent.map((card, index) => (
					<Card
						key={index}
						img={card.icon}
						title={card.title}
						desc={card.desc}
            isLast={index === cardContent.length -1 ? true:false}
					/>
				))}
			</div>
		</section>
	);
};

export default Perks;
