import React from 'react'

const Footer = () => {
  return (
    <div className='padding w-full flex justify-between items-center max-md:flex-col gap-10'>
        <div className='flex gap-2 max-sm:flex-col sm:flex-col max-sm:gap-7 items-center'>
            <h1 className='text-2xl font-bold'>magnafico</h1>
            <p className='flex items-center text-[25px] font-semibold max-sm:text-[20px]'>@ 2023 .  All right reserved</p>
        </div>
        <div className='flex max-sm:gap-2 gap-4 text-[15px] font-bold'>
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Support</a>
            <a href="">About</a>
            <a className='max-sm:hidden' href="">Resourses</a>
            <a href="">Contact</a>
        </div>
    </div>
  )
}

export default Footer