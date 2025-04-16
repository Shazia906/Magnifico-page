import React from 'react'
import Image from '../assets/images/shoot.png';
// import  Image  from '../assets/images/Container.png';
import { MoveRightIcon } from 'lucide-react';


const WorkFlowSection = () => {
  return (
    <div style={{backgroundImage:`url(${Image})`
    }} className='padding px-2.5 w-full bg-center relative bg-cover h-[700px] flex  items-center md:rounded-[40px] lg:lrounded-[40px]'>
        {/* <img src={Image} className=' rounded-2xl bg-cover bg-center w-full h-[600px] max-sm:h-[500px]' alt="" /> */}
        <div className='flex flex-col flex-wrap items-end  gap-3 max-sm:gap-10 w-full text-white absolute right-15 text-center '>
            <h1 className='lg:text-5xl  text-4xl font-bold leading-15 max-sm:leading-9 max-sm:text-[25px]'>Problems come  and <br /> Get solved with ease</h1>
            <p className='text-[15px] max-sm:text-[10px] text-center font-semibold pl-2' >  Etiam condementum duis moleestie volutpat  pellentesque  <br />sed.Ornane suspendissue uy ac  lobortis sed <br />tincidunt. Mi tempus quis  massa tellus imperdiet.</p>
            <p className='flex gap-2 items-center text-left text-[20px] font-semibold mr-6 '>
                See all it helped <MoveRightIcon/>
            </p>
        </div>
    </div>
    // <div>
    // //   <img src={Image} alt="" />
    // // </div>
  )
}

export default WorkFlowSection;