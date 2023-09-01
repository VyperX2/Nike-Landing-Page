import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import Menu from "../assets/icons/hamburger.svg";

const Nav = () => {
	const links = [
		{
			id: 1,
			title: "Home",
		},
		{
			id: 2,
			title: "About Us",
		},
		{
			id: 3,
			title: "Products",
		},
		{
			id: 4,
			title: "Contact Us",
		},
	];

	return (
		<nav className="flex justify-between py-6 px-4 sm:px-8 lg:px-20 ">
			{/* nav left */}
			<div>
				<img src={headerLogo} alt="" />
			</div>

			{/* nav right */}
			<div className="">
				{/* Hamburger Menu for small devices */}
				<img src={Menu} className="sm:hidden w-6 h-6" />

				<ul className="sm:flex hidden">
					{links.map((link) => (
						<li
							key={link.id}
							className={`${
								link.id === links.length ? "mr-0" : "mr-14"
							} text-gray-400 font-semibold hover:text-[#FF6452] transition-all cursor-pointer`}
						>
							{" "}
							<a
                
								href={`#${
									link.title === "Home"
										? "home"
										: link.title === "About Us"
										? "about"
										: link.title === "Products"
										? "products"
										: "contact"
								}`}
							>
								{link.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
