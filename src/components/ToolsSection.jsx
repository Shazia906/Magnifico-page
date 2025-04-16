import React from 'react'
import Image from "../assets/images/tools.png";
import { MoveRightIcon } from 'lucide-react';

const ToolsSection = () => {
  return (
    <div className='padding grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-15 place-content-center place-items-center max-md:text-center'> 
        <div className='flex flex-col gap-3 w-full'>
            <h1 className='lg:text-5xl max-sm:text-3xl text-4xl font-bold leading-15 max-sm:leading-9'>Get all the tools your   <br /> team needs</h1>
            <p className='text-[15px] font-semibold text-neutral-600 ' >Etiam condementum duis moleestie volutpat pellentesque sed. <br />Ornane suspendissue uy ac lobortis sed tincidunt. Mi tempus quis <br /> massa tellus imperdiet aenean nulla id.</p>
            <p className='text-blue-700 flex gap-2 items-center   text-[20px] font-semibold max-md:justify-center'>
                See all it helped <MoveRightIcon/>
            </p>
        </div>
        <div className=' flex w-full justify-center'>
         <img src={Image} alt="" />
        </div>
    </div>
  )
}

export default ToolsSection