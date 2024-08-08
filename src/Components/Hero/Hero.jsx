import React from 'react'
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Growing With Data Analythics</p>
            <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl md:py-6'>Grow With Data.</h1>
            <div className='flex justify-center gap-2 md:gap-3 items-center py-4'>
                <p className='text-xl sm:text-4xl md:text-5xl font-bold'>Fast, flexible financing for</p>
                {/* <Typed strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop/> */}
                <ReactTyped className='text-xl sm:text-4xl md:text-5xl font-bold'
                strings={['BTB','BTC','SASS']} typeSpeed={120} loop/>
            </div>
            <p className='text-xl md:text-2xl font-bold text-gray-500 mt-3'>
              Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform.
            </p>
            <button className='bg-[#00df9a] rounded-md w-[200px] mx-auto py-3 my-6 font-medium text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero