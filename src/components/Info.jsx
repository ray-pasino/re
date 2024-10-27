import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { assets } from '../assets/assets';

const Info = () => {
    const [text] = useTypewriter({
        words: ["QUIPPING", "DUCATING", "MPOWERING", "LEVATING"],
        loop: {},  
      });
  return (
    <div className='info-content text-white mx-2 sm:mx-8 lg:mx-14 z-30 relative'>
      
        <h1 className="big-text font-semibold text-4xl md:text-6xl xl:text-8xl">
          E{text}
          <Cursor />
        </h1>
        <span className="flex-columns lg:flex lg:justify-between">
          <h1 className="small-text font-normal text-lg mb-4 xl:text-2xl">
            From faith to faith, from glory to glory!
          </h1>
          <div className="buttons-container flex justify-between font-semibold lg:space-x-8">
            <button className="btn btn-1 lg:text-lg">Request Info</button>
            <button className="btn btn-2 lg:text-lg">View Programs</button>
          </div>
        </span>
        <span>
            <img src={assets.caretdown} className='caret-down mt-8 cursor-pointer'/>
        </span>
      </div>


    
  )
}

export default Info
