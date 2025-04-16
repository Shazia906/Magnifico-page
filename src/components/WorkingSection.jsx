import React from 'react'
import Image1 from "../assets/images/work1.png";
import Image2 from "../assets/images/work2.png";
import Image3 from "../assets/images/work3.png";
import { MoveRightIcon } from 'lucide-react';

const WorkingSection = () => {
  return (
    <div className='padding grid gap-15 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-center place-items-center max-md:flex-col-reverse max-md:text-center'> 
        <div className='flex gap-2 w-[full] max-md:order-2'>
            <div className='relative top-3'>
                <img src={Image3} alt="" />
            </div>
            <div>
                <img src={Image2} alt="" />
            </div>
            <div className='top-6 relative'>
                <img src={Image1} alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-3 w-full max-md:order-1'>
            <h1 className='lg:text-5xl max-sm:text-3xl text-4xl font-bold leading-15 max-sm:leading-9'>Enjoy your time <br /> working</h1>
            <p className='text-[15px] font-semibold text-neutral-600 ' >Etiam condementum duis moleestie volutpat pellentesque sed. <br />Ornane suspendissue uy ac lobortis sed tincidunt. Mi tempus quis <br /> massa tellus imperdiet aenean nulla id.</p>
            <p className='text-blue-700 flex gap-2 items-center  text-[20px] font-semibold max-md:justify-center'>
                See all it helped <MoveRightIcon/>
            </p>
        </div>
    </div>
  )
}

export default WorkingSection