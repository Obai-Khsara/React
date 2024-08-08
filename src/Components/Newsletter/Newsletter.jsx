import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white py-16 w-full px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black focus:outline-none' type='email' placeholder='Enter Email'/>
                    <button className='bg-[#00df9a] rounded-md w-[200px] ml-4 py-3 my-6 font-medium text-black'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>privacy policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter