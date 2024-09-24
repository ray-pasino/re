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
       <img src="./coverblur.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }

      {imgLoaded &&
       <img src="./coverphoto1.jpeg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }
      <div className="gradient absolute z-20"></div> 
      <Nav/>
      <Info/>
    </div>
  )
}

export default Hero
