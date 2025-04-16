import { ChevronLeft, ChevronRight, MoveRightIcon } from 'lucide-react'
import React, { useState } from 'react'
import video1 from "../assets/vidoes/video1.mp4" ;
import video2 from "../assets/vidoes/video2.mp4" ;
import video3 from "../assets/vidoes/video3.mp4" ;
import video4 from "../assets/vidoes/video4.mp4" ;
import video5 from "../assets/vidoes/video5.mp4" ;
import video6 from "../assets/vidoes/video6.mp4" ;
import video7 from "../assets/vidoes/video7.mp4" ;
import video8 from "../assets/vidoes/video8.mp4" ;
import video9 from "../assets/vidoes/video9.mp4" ;
import video10 from "../assets/vidoes/video10.mp4" ;

const videos = [
    video7,
    video2, video3 , video4, video5,
    video6, video1 , video8, video9, video10
  ];

const WorkFlowSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className='padding grid lg:grid-cols-2 lg:text-left text-center grid-cols-1 gap-10 place-content-center place-items-center '>
        <div className='w-full flex flex-col gap-10'>
            <h1 className='text-4xl max-sm:text-2.5xl font-bold'>Improve WorkFlow</h1>
            <div className='px-2 py-1 w-full flex font-semibold text-[20px] lg:justify-start justify-center'>
                <button className='px-10 max-sm:px-5 max-sm:py-3 max-sm:text-[13px] py-4 border border-neutral-500 rounded-l-[5px] hover:bg-neutral-400' >Research</button>
                <button className='px-10 py-4 border border-neutral-500 border-l-0 max-sm:px-5 max-sm:py-3 max-sm:text-[13px] hover:bg-neutral-400'>Plan</button>
                <button className='px-10 py-4 border border-neutral-500 rounded-r-[5px] border-l-0 max-sm:px-5 max-sm:py-3 max-sm:text-[13px] hover:bg-neutral-400'>Desighn</button>
            </div>
            <p className='text-[15px] font-semibold text-neutral-600' >Etiam condementum duis moleestie volutpat pellentesque sed. <br />Ornane suspendissue uy ac lobortis sed tincidunt. Mi tempus quis <br /> massa tellus imperdiet aenean nulla id.</p>
            <p className='text-blue-700 flex gap-2 items-center  text-[20px] font-semibold lg:text-left justify-center'>
                See all it helped <MoveRightIcon/>
            </p>
        </div>
        <div className="relative w-full gap-2 mx-auto flex flex-col border p-4 border-neutral-500 rounded-2xl">
  <div className='flex justify-between items-center text-center gap-3'>
  <div className='flex gap-1'>
            <div className='w-3 h-3 max-sm:w-1.5 max-sm:h-1.5 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 max-sm:w-1.5 max-sm:h-1.5 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 max-sm:w-1.5 max-sm:h-1.5 bg-green-500 rounded-full'></div>
        </div>
        <div>
            <input type="text" placeholder='app.magnafico.com' className='px-1 py-0.5 bg-neutral-300 outline-none border-none text-sm text-center max-sm:px-0'/>
        </div>
        <div className='flex gap-2 max-sm:gap-0.5'>
        <button
        className=" bg-black text-white p-1 max-sm:p-0.5 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft/>
      </button>
        <button
        className=" bg-black  text-white p-1 max-sm:p-0.5 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight />
      </button>
        </div>
        
  </div>
       
      <div className="overflow-hidden rounded-lg">
        <video key={videos[currentIndex]} src={videos[currentIndex]} controls className="w-full max-h-[400px] bg-cover rounded-lg"/>
      </div>
      
      <div className="flex justify-center mt-4">
      {videos.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}

      </div>
    </div>
    </div>
  )
}

export default WorkFlowSection