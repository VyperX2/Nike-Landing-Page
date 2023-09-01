import React from 'react'

const NewsLetter = () => {
  return (
    <section className='flex flex-col justify-center lg:flex-row mt-20 lg:justify-around lg:items-center py-12'>
      <div className=''>
        <h2 className=' text-center font-palanquin text-[40px] font-bold leading-tight mb-6  md:text-[42px]'>Sign Up for <span className='text-[#FF6452]'>Updates</span></h2>
      </div>

      <div className=' flex py-4 mx-6 px-6 rounded-3xl border border-[#6D6D6D] lg:rounded-[40px] lg:w-[35%]  justify-between'>
        <input type="text" placeholder='subscribe@nike.com' />
        <button className='cursor-pointer  lg:py-3 lg:px-8 justify-center py-2 px-4 rounded-3xl lg:rounded-[40px] text-white gap-4 font-semibold flex items-center bg-[#FF6452]'>Sign Up</button>
      </div>

    </section>
  )
}

export default NewsLetter