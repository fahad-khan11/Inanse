import React from 'react'
import Props from './Props'
import Carousel from './Carousel'
const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-20  gap-8 md:gap-14 pb-12 md:pb-24'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Our Services</h1>
        <div className='flex flex-col gap-4 md:flex-row justify-center items-center md:gap-2 lg:gap-8'>
            <Props 
            image='/Images/s1.png'
            heading={<h1>Maintenance</h1>}
            paragraph={<p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>} 
            />
               <Props 
            image='/Images/s2.png'
            heading={<h1>Electrical</h1>}
            paragraph={<p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>} 
            />
               <Props 
            image='/Images/s3.png'
            heading={<h1>Plumbing</h1>}
            paragraph={<p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>} 
            />
        </div>
        <div>
        <button className='w-[120px] h-[30px] font-medium text-base md:w-[180px] md:h-[50px] md:text-xl md:font-semibold text-white bg-blue-700 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'>
        VIEM MORE
       </button>
       <h1 className='text-xl font-semibold md:text-4xl md:font-bold mt-16'>WHAT OUR CLIENT SAY</h1>
        </div>
        <Carousel />
    </div>
  )
}

export default Services
