import React from 'react'
import Laptop from "../../assets/Image/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='Laptop'/>

            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum fuga officia quod tempora
                    accusamus architecto numquam consectetur deserunt, eos optio fugiat dignissimos! Rem, inventore enim
                    voluptate deleniti omnis dignissimos!
                </p>
                <button className='text-[#00df9a] rounded-md w-[200px] mx-auto py-3 my-6 font-medium bg-black md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics