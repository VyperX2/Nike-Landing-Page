import React from "react";
import { shoe4, shoe5, shoe6, shoe7, shoe8 } from "../assets/images";
import star from "../assets/icons/star.svg";

const Products = () => {
	const productInfo = [
		{
			Img: shoe4,
			Name: "Nike Air Jordan-01",
			Price: "200.20",
			id: 1,
		},
		{
			Img: shoe5,
			Name: "Nike Air Jordan-10",
			Price: "200.20",
			id: 2,
		},
		{
			Img: shoe6,
			Name: "Nike Air Jordan-100",
			Price: "200.20",
			id: 3,
		},
		{
			Img: shoe7,
			Name: "Nike Air Jordan-001",
			Price: "200.20",
			id: 4,
		},
	];

	const ProductCard = ({ img, name, price }) => {
		return (
			<div className="flex flex-col gap-y-2 ">
				<img src={img} alt="" width={280} height={280} />
				<div className="flex gap-2 mt-8 text-[20px]">
					<img src={star} alt=""  />
					<p className="text-[#6D6D6D]">(4.5)</p>
				</div>
				<h4 className="text-[24px] font-semibold"> {name} </h4>
				<h4 className="text-[#FF6452] font-semibold font-montserrat text-[16px]"> ${price} </h4>
			</div>
		);
	};

	return (
		<section className=" 2xl:pl-16 mt-32" id="products">
			{/* top div that contains text about the products */}
			<div className="flex flex-col px-6 w-full md:pl-16 ">
				<h2 className=" font-palanquin text-[42px] max-w-[165px] font-bold leading-tight mb-6 md:max-w-fit md:text-[64px]">
					Our <span className="text-[#FF6452]">Popular</span> Products
				</h2>
				<p className=" text-[18px] text-[#6D6D6D] max-w-[256px] md:max-w-[550px] mb-16">
					Experience top-notch quality and style with our sought-after
					selections. Discover a world of comfort, design, and value
				</p>
			</div>

			{/* bottom div(grid) which has the cards */}
			<div className="grid grid-cols-1 gap-y-10 gap-x-4 md:grid-cols-3 lg:grid-cols-4 px-12">
        { productInfo.map(product => (
          <ProductCard key={product.id} img={product.Img} name={product.Name} price={product.Price}/>
        ))}
      </div>
		</section>
	);
};

export default Products;
