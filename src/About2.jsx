import React from 'react'

const About2 = () => {
  return (
    <div className='bg-[#d1e3ff] flex flex-col p-0 md:flex-row md:justify-center md:items-center w-screen lg:h-screen pb-12 md:p12  xl:p-28'>
      <div className='hidden md:block'>
        <img src="/Images/image2.png" className='w-full h-full'  alt="" />
      </div>

      <div className='flex flex-col gap-6'>
        <h1 className='text-2xl sm:w-[400px] flex flex-wrap font-bold md:text-2xl md:w-[300px] lg:text-4xl md:font-bold text-blue-600 lg:w-[600px]'>We Provide Professional Home Services.</h1>
        <p className='text-base flex flex-wrap sm:w-[400px] md:w-[400px] lg:w-[500px]'>randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly</p>
        <button className="bg-orange-400 flex flex-wrap justify-center items-center w-[200px] sm:w-[200px] md:w-[160px] h-[40px] text-white rounded-md mx-auto md:mx-0">READ MORE</button>
      </div>
     
    </div>
  )
}

export default About2
