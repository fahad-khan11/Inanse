import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col pt-[450px] md:flex-row justify-center items-center md:p-0 md:mt-28 gap-6 lg:mt-28 lg:mb-28'>
  <div className='flex flex-col gap-4 text-center md:text-left'>
    <h1 className='text-4xl font-bold'>ABOUT US</h1>
    <p className='text-base w-[300px] md:w-[400px] lg:w-[400px]'>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
    </p>
    <button className='w-[180px] h-[50px] text-xl font-semibold text-white bg-blue-700 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'>
      READ MORE
    </button>
  </div>
  <div className='flex-shrink-0'>
    <img src='/Images/about-img.jpg' className='w-full h-auto md:w-[300px] lg:w-[600px] md:h-auto object-cover' alt="" />
  </div>
</div>

  )
}

export default AboutUs
