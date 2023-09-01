import React from 'react'
import rightArrow from '../assets/icons/arrow-right.svg'
import { shoe8 } from '../assets/images'

const ProductDescription = () => {
  return (
    <section className='flex flex-col lg:flex-row mt-24 mx-auto px-8  lg:justify-around w-full  ' id="about">
      <div className='mb-10 sm:max-w-[512px]'>
        <h2 className='max-w-[256px] md:max-w-[512px] font-palanquin text-[42px] font-bold leading-tight mb-6  md:text-[64px]'>We Provide You <span className='text-[#FF6452]'>Super Quality</span> Shoes</h2>
        <p className='text-[18px] text-[#6D6D6D] max-w-[256px] md:max-w-[550px] mb-8'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='text-[18px] text-[#6D6D6D] max-w-[256px] md:max-w-[550px] mb-8'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className=" cursor-pointer mt-12 py-4 px-3 justify-center max-w-[185px] rounded-[40px] text-white gap-4 font-semibold flex items-center bg-[#FF6452] ">
						<button className="tracking-wider">Shop Now</button>{" "}
						<img src={rightArrow} alt="" />
					</div>
      </div>


      <div>
        <img src={shoe8} alt="" />
      </div>


    </section>
  )
}

export default ProductDescription