import React, { useState } from "react";
import rightArrow from "../assets/icons/arrow-right.svg";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";

const Hero = () => {
	const [shoe, setShoe] = useState(bigShoe2);

	const shoes = [
		{
			id: 1,
			img: bigShoe1,
		},
		{
			id: 2,
			img: bigShoe2,
		},
		{
			id: 3,
			img: bigShoe3,
		},
	];

	const Stats = ({ number, title }) => {
		return (
			<div className="flex flex-col justify-center">
				<h4 className="text-[48px] font-bold">{number}+</h4>
				<h4 className="text-[#6D6D6D]">{title}</h4>
			</div>
		);
	};

	const ShoeCard = ({ image, id }) => {
		function changeShoes() {
			if (id === 1) {
				setShoe(bigShoe1);
			} else if (id === 2) {
				setShoe(bigShoe2);
			} else setShoe(bigShoe3);
		}

		return (
			<div
				className={`flex items-center justify-center cursor-pointer focus:border ${
					shoes[id - 1].img === shoe
						? "border-2 border-[#FF6452]  rounded-lg"
						: "border-none"
				}`}
				onClick={changeShoes}
			>
				<img
					src={image}
					alt=""
					className={`object-contain bg-card bg-center bg-cover p-2 2xl:p-6 rounded-lg cursor-pointer w-[127px] h-[103px] 2xl:w-[165px] 2xl:h-[120px]`}
				/>
			</div>
		);
	};

	return (
		<section className=" pb-10" id="home">
			<div className="flex-1 flex flex-col 2xl:flex-row 2xl:justify-center items-start mt-8 gap-4 2xl:pl-14">
				<div className="px-6 flex-1">
					<h2 className="text-[#FF6452] text-[20px] tracking-wide font-normal">
						Our Summer collections
					</h2>
					<h1 className="sm:text-[96px] font-bold text-[72px] leading-tight mt-10 ">
						The New Arrival
						<br className="hidden sm:block" />{" "}
						<span className="text-[#FF6452]">Nike</span> Shoes
					</h1>
					<p className="sm:max-w-[470px]  text-[#6D6D6D] tracking-wide mt-6 text-[21px] max-w-[270px] font-light">
						Discover stylish Nike arrivals, quality comfort, and innovation for
						your active life
					</p>
					<div className=" cursor-pointer mt-12 py-4 px-3 justify-center max-w-[185px] rounded-[40px] text-white gap-4 font-semibold flex items-center bg-[#FF6452] ">
						<button className="tracking-wider">Shop Now</button>{" "}
						<img src={rightArrow} alt="" />
					</div>

					{/* Stats */}
					<div className="grid sm:grid-cols-3 sm:gap-1 grid-cols-2 2xl:max-w-[60%] md:max-w-[70%] mt-12">
						<Stats number={"1k"} title={"Brands"} />
						<Stats number={"500"} title={"Stores"} />
						<Stats number={"250k"} title={"Customers"} />
					</div>
				</div>

				<div className="flex flex-1 mr-10 py-40 justify-center items-center 2xl:w-[100%] w-screen bg-hero relative bg-contain">
					<img width={610} height={500} src={shoe} alt="shoes" />

					<div className=" grid grid-cols-3 absolute z-20 2xl:gap-8 gap-3 -bottom-5 px-5 bg-contain">
						{shoes.map((shoe) => (
							<ShoeCard key={shoe.id} image={shoe.img} id={shoe.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
