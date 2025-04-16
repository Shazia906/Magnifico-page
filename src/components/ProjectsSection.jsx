import React from 'react'
import { EditIcon ,MoveRightIcon} from "lucide-react";
import { useState } from "react";
import {ChevronRight , ChevronLeft } from "lucide-react";
import Shells from "../assets/svg/shell.svg";
import Finder from "../assets/svg/smart.svg";
import Art from "../assets/svg/venue.svg";
import Waves from '../assets/svg/wave.svg';
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

const ProjectsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className='padding grid gap-5 max-sm:gap-15 lg:grid-cols-2  sm:grid-cols-1 grid-cols-1 place-content-center place-items-center'>
       <div className='flex flex-col gap-7'>
        <h1 className='lg:text-6xl text-4xl max-sm:text-4xl font-bold lg:leading-20 leading-12'>Team Projects, <br /> done well</h1>
        <p className='font-normal text-[15px] text-neutral-500'>The only platform that gives your learn all the tools needed to work <br /> togher on their awesome projects</p>
          <div className='flex gap-2 justify-center items-center'>
          <div className='px-6 max-sm:px-0  py-2 flex items-center justify-center gap-2 border border-neutral-500 rounded-[10px]'>
                <EditIcon className='max-sm:hidden'/>
                <input type="text" placeholder='Enter Your Email' className='py-2 px-5 max-sm:py-1 max-sm:px-[0px] outline-none border-none text-center'/>
            </div>
          <div>
          <button className='py-3 px-6 max-sm:py-2 max-sm:px-[3px] max-sm:text-[12px]  items-center flex gap-2 bg-blue-600 text-white rounded-[5px] font-semibold text-center'>Sign UP Free 
            <MoveRightIcon className='max-sm:w-4 w-10 font-bold'/>
            </button>
          </div>
          </div>
        <div className='flex flex-wrap justify-center items-center gap-5 px-2.5 py-4 bg-gray-300 rounded-[3px]'>
            <div className='flex gap-2 justify-center items-center'>
             <img src={Shells} alt="" />
             <p>SHELLS</p>
            </div>
            <div className='flex gap-2 justify-center items-center'>
            <img src={Finder} alt="" />
             <p>SmartFinder</p>
            </div>
            <div className='flex gap-2 justify-center items-center'>
            <img src={Art} alt="" />
             <p>ArtVenue</p>
            </div>
            <div className='flex gap-2 justify-center items-center'>
            <img src={Waves} alt="" />
             <p>WAVES</p>
            </div>
        </div>
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

export default ProjectsSection