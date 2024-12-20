import React from 'react'
import GoogleMapComponent from './GoogleMapComponent'
const Contactus = () => {
  return (
  
    <div className='flex flex-col md:flex-row justify-center items-center gap-12 p-12 md:p-16 lg:p-28'>
        <div className='flex flex-col gap-10'>
        <h1 className='text-3xl font-bold md:text-3xl md:font-semibold lg:text-5xl lg:font-semibold'>Contact Us</h1>
      <form className='flex flex-col gap-4'>
        <input className='w-[250px] text-base h-[40px] md:text-lg md:w-[300px] md:h-[50px] lg:w-[600px] lg:h-[60px] lg:text-xl shadow-2xl  p-2' type="text" placeholder='Name' />
        <input className='w-[250px] text-base h-[40px] md:text-lg md:w-[300px] md:h-[50px] lg:w-[600px] lg:h-[60px] lg:text-xl shadow-2xl  p-2' type="number" placeholder='Phone Number'/>
        <input className='w-[250px] text-base h-[40px] md:text-lg md:w-[300px] md:h-[50px] lg:w-[600px] lg:h-[60px] lg:text-xl shadow-2xl  p-2' type="email" placeholder='Email '/>
        <input className='w[250px] text-base h-[80px] md:text-lg md:w-[300px] md:h-[80px] lg:w-[600px] lg:h-[60px] lg:text-xl shadow-2xl  p-2' type="text" placeholder='Message'/>
        <button className='w-[120px] h-[30px] font-medium text-base md:w-[150px] md:h-[40px] lg:w-[180px] lg:h-[50px] md:text-base md:font-semibold text-white bg-blue-700 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'>
        SEND
       </button>
      </form>
        </div>
      <div className='w-full h-auto'>
        <GoogleMapComponent />
      </div>
    </div>
    
  )
}

export default Contactus
