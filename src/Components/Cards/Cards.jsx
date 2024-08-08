import React from 'react'
import Single from "../../assets/Image/single.png"
import Double from "../../assets/Image/double.png"
import Triple from "../../assets/Image/triple.png"

const Cards = () => {
  return (
    <div className='bg-white px-4 py-[10rem] w-full'>
        <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-3'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Single} alt='Single-person' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='border-b mx-8 py-2 mt-8'>500 GB Storage</p>
                    <p className='border-b mx-8 py-2'>1 Granted User</p>
                    <p className='border-b mx-8 py-2'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 bg-gray-100 rounded-lg hover:scale-105 duration-300 md:m-0'>
                <img src={Double} alt='Single-person' className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='border-b mx-8 py-2 mt-8'>1 TB Storage</p>
                    <p className='border-b mx-8 py-2'>3 Users Allowed</p>
                    <p className='border-b mx-8 py-2'>Send up to 10 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Triple} alt='Single-person' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='border-b mx-8 py-2 mt-8'>5 TB Storage</p>
                    <p className='border-b mx-8 py-2'>10 Users Allowed</p>
                    <p className='border-b mx-8 py-2'>Send up to 20 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards