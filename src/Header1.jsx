import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

const Header1 = () => {
  return (
    <div className='w-full h-[60px] p-1 lg:w-full lg:h-[60px] bg-[#000000] lg:p-4 flex justify-between'>
        <div className='flex flex-row justify-center items-center gap-2'>
        <IoIosCall className='text-orange-500 text-lg md:text-xl' />
        <p className='text-lg md:text-xl text-white'> Call : +01 123455678990</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-2'>
        <FaMessage className='text-orange-500 text-lg md:text-xl' />
        <p className='text-base md:text-xl text-white'>Email : demo@gmail.com</p>
        </div>
    </div>
  )
}

export default Header1
