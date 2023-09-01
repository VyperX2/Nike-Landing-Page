import React from "react";
import logo from "../assets/images/footer-logo.svg";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import copyright from "../assets/icons/copyright-sign.svg";

const Footer = () => {
	const linksOne = [
		{ name: "Air Force 1" },
		{ name: "Air Max 1" },
		{ name: "Air Jordan 1" },
		{ name: "Air Force 2" },
		{ name: "Nike Waffle Racer" },
		{ name: "Nike Cortez" },
	];

	const linksTwo = [
		{ name: "About Us" },
		{ name: "FAQs" },
		{ name: "How it works" },
		{ name: "Privacy policy" },
		{ name: "Payment policy" },
	];

	const linksThree = [{ name: "customer@nike.com" }, { name: "+92554862354" }];

	return (
		<section  id="contact"  className="flex lg:flex-row 2xl:gap-44 lg:gap-20  flex-col gap-20 bg-black pt-16 py-4 px-6 sm:px-20 relative  pb-24">
			<div className="flex flex-col gap-8">
				<img src={logo} alt="" height={150} width={150} />
				<p className="text-gray-300 max-w-[375px] text-[18px] font-montserrat">
					Get shoes ready for the new term at your nearest Nike store. Find Your
					perfect Size In Store. Get Rewards
				</p>
				<div className="flex gap-6">
					<div>
						<img src={facebook} alt="" className=" bg-white rounded-full p-3" />
					</div>
					<div>
						<img src={twitter} alt="" className=" bg-white rounded-full p-3" />
					</div>
					<div>
						<img src={insta} alt="" className=" bg-white rounded-full p-3" />
					</div>
				</div>
			</div>

			{/* Links */}
			<div className="grid lg:grid-cols-2 2xl:grid-cols-3 lg:gap-48 gap-20">
				<div>
					<h4 className=" text-white font-semibold font-montserrat text-[24px] mb-6">
						Products
					</h4>
					{linksOne.map((link, index) => (
						<p
							key={index}
							className="text-white-400 leading-10 text-[18px] hover:text-slate-gray cursor-pointer"
						>
							{link.name}
						</p>
					))}
				</div>
				<div>
					<h4 className=" text-white font-semibold font-montserrat text-[24px] mb-6">
						Help
					</h4>
					{linksTwo.map((link, index) => (
						<p
							key={index}
							className="text-white-400 leading-10 text-[18px] hover:text-slate-gray cursor-pointer"
						>
							{link.name}
						</p>
					))}
				</div>
				<div>
					<h4 className="  text-white font-semibold font-montserrat text-[24px] mb-6">
						Get in touch
					</h4>
					{linksThree.map((link, index) => (
						<p
							key={index}
							className="text-white-400 leading-10 text-[18px] hover:text-slate-gray cursor-pointer"
						>
							{link.name}
						</p>
					))}
				</div>
			</div>
			<p className=" lg:absolute lg:right-12 2xl:right-56 lg:bottom-4 2xl:mt-20 text-white-400 text-[18px] flex items-center gap-2">
				Terms & Conditions{" "}
			</p>
			<p className="lg:absolute lg:bottom-4 lg:mt-20 text-white-400 text-[18px] flex items-center gap-2">
				{" "}
				<img src={copyright} alt="" /> Copyright. All rights reserved.
			</p>
		</section>
	);
};

export default Footer;
