import React from 'react'
import { offer } from '../assets/images'

const Offer = () => {
  return (
    <section className=' mx-auto flex flex-col 2xl:flex-row-reverse 2xl:items-center mt-20 2xl:gap-4 pl-8 gap-4 mb-52' >
      <div className='flex-1 2xl:mb-0 mb-8'>
        <h2 className='max-w-[256px] md:max-w-[512px] font-palanquin text-[42px] font-bold leading-tight mb-6  md:text-[64px]'> <span className='text-[#FF6452]'>Special</span> Offer</h2>
        <p className='text-[18px] text-[#6D6D6D] max-w-[256px] md:max-w-[550px] mb-8'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='text-[18px] text-[#6D6D6D] max-w-[256px] md:max-w-[550px] mb-8'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

        <div className='flex gap-2 flex-col md:flex-row font-montserrat text-[18px]'>
          <button className=' mr-8 bg-[#FF6452] px-6 py-3 max-w-[70%] text-white rounded-[28px]'>View Details</button>
          <button className=' px-6 py-3 rounded-[28px] max-w-[70%]  border border-[#6d6d6d] text-[#6D6D6D]'>Learn More</button>
        </div>
      </div>

      <div className='flex-1 max-h-[500px]'>
        <img src={offer} alt="" className='object-contain' />
      </div>

    </section>
  )
}

export default Offer