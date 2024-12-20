import React from 'react'

const Props = ({image,heading,paragraph}) => {
  return (
    <div className='flex flex-col justify-center items-center border border-white shadow-2xl gap-4 md:gap-2 md:p-4 lg:gap-8 lg:p-5 p-6 group transition-colors duration-500 ease-in-out hover:bg-orange-400 hover:text-white'>
      <img src={image} alt="" className=' w-[50px] h-[50px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px] transition-colors duration-500 ease-in-out group-hover:opacity-white' />
      <h1 className=' text-xl md:text-lg lg:text-2xl font-bold  transition-colors duration-500 ease-in-out group-hover:text-white'>{heading}</h1>
      <p className='w-[250px]  md:w-[250px] md:text-lg lg:text-xl lg:w-[350px]  transition-colors duration-500 ease-in-out group-hover:text-white'>{paragraph}</p>
    </div>
  )
}

export default Props
