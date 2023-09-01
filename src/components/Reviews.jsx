import React from "react";
import { customer1, customer2 } from "../assets/images";
import star from "../assets/icons/star.svg";

const Reviews = () => {
	const customers = [
		{
			pfp: customer1,
			review:
				"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
			name: "Morich Brown",
		},
		{
			pfp: customer2,
			review:
				"The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
			name: "Lota Mongeskar",
		},
	];

	const Card = ({ pfp, review, name }) => {
		return (
			<div className="flex flex-col items-center gap-4">
				<div>
					<img
						src={pfp}
						alt=""
						width={120}
						height={120}
						className="rounded-full"
					/>
				</div>
				<p className="text-[18px] text-[#6D6D6D] max-w-[256px] md:max-w-[380px] text-center">
					{" "}
					{review}{" "}
				</p>
				<div className="flex gap-2">
					<img src={star} alt="" />
					<p className="text-[20px] text-[#6D6D6D] max-w-[256px]">(4.5)</p>
				</div>
				<h4 className=" font-bold text-[28px]"> {name} </h4>
			</div>
		);
	};

	return (
		<section className="flex flex-col items-center bg-[#F5F6FF] py-20">
			<div className="flex flex-col items-center">
				<h2 className=" text-center font-palanquin text-[40px] font-bold leading-tight mb-6  md:text-[42px]">
					What Our <span className="text-[#FF6452]">Customers</span> Say?
				</h2>
				<p className="text-[18px] text-[#6D6D6D] max-w-[256px] md:max-w-[550px] mb-8 text-center">
					Hear genuine stories from our satisfied customers about their
					exceptional experiences with us.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-96 lg:gap-28 gap-y-20 mt-12">
				{customers.map((customer, index) => (
					<Card
						key={index}
						pfp={customer.pfp}
						review={customer.review}
						name={customer.name}
					/>
				))}
			</div>
		</section>
	);
};

export default Reviews;
