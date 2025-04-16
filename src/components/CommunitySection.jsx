import { MoveRightIcon } from 'lucide-react'
import React from 'react'

const CommunitySection = () => {
  return (
    <div className='gradient padding w-full max-h-[700px] flex flex-col items-center justify-center text-center gap-10 text-white'>
           <h1 className='text-4xl max-sm:text-2.5xl font-bold'>Join the <br /> community today</h1> <p className='text-[15px] font-semibol ' >Etiam condementum duis moleestie volutpat pellentesque sed.Ornane suspendissue uy ac lobortis sed  <br />tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p> 
         <button className='py-3 px-6 items-center flex gap-2 bg-blue-600 text-white rounded-[5px] font-semibold justify-center'>Sign UP Free 
            <MoveRightIcon className=' w-10 font-bold'/>
            </button>
    </div>
  )
}

export default CommunitySection