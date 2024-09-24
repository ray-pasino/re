import React,{useState, useEffect} from 'react'
import Nav from './nav'
import Info from './Info'
import {Blurhash} from "react-blurhash"

const Hero = () => {
  
  const [imgLoaded, setImgLoaded] = useState(false)


  useEffect(()=>{
      const img = new Image()
      img.src = './coverphoto1.jpeg'; 
      img.onload = () => {
        setImgLoaded(true);
      };
  },[])

  return (
    <div className='hero h-screen'>
      {!imgLoaded && 
        // <Blurhash
        //   hash='LFIpMO1G00}a1GRj%NOr00-V.mMw'
        //   width={'100%'}
        //   height={'100%'}
        //   resolutionX={32}
        //   resolutionY={32}
        //   punch={1}
        //   className='absolute top-0 left-0 z-10'
        //   />
       <img src="./coverblur.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>

      }

      {imgLoaded &&
      <>
       <img src="./coverphoto1.jpeg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
       <div className="gradient absolute z-20"></div> 
      </>
      }
      <Nav/>
      <Info/>
    </div>
  )
}

export default Hero
