import React,{useState, useEffect} from 'react'
import Nav from './nav'
import Info from './Info'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
         <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         modules={[Autoplay]}
         className="mySwiper backgroundImage absolute z-0 h-screen w-full object-cover"
       >
         <SwiperSlide>
       <img src="./coverphoto1.jpeg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
       </SwiperSlide>
         <SwiperSlide>
       <img src="./coverphoto2.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
         <SwiperSlide>
       <img src="./coverphoto3.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
         <SwiperSlide>
       <img src="./coverphoto4.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
         <SwiperSlide>
       <img src="./coverphoto5.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
       </Swiper>
      //  <img src="./coverphoto1.jpeg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }
      <div className="gradient absolute z-20"></div> 
      <Nav/>
      <Info/>
    </div>
  )
}

export default Hero
