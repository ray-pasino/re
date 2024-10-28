import React,{useState, useEffect} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import { EffectCreative, Pagination} from 'swiper/modules';
import { assets } from '../assets/assets';


const OnlineInfoSection = () => {

    const [backgroundLoaded, setBackgroundLoaded] = useState(false)



    useEffect(()=>{
        const img = new Image()

        img.src = './lady.jpg';

        img.onload = () => {
            setBackgroundLoaded(true);
        };
    },[])

  return (
    <div className='sec-2 h-[100vh] relative' id='sec-2'>
        {
        !backgroundLoaded ?
       <img src="./ladyblur.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
            :
       <img src="./lady.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover opacity-[40%]'/>
        }

        <div className="gradient-2 absolute z-20 sm:hidden"></div>
        <div className="sec-info absolute z-30 sm:hidden mt-[4vh] mb-[4vh] text-white flex flex-col m-[34px] justify-between h-[92vh]">
            <p className='text-[25px] font-bold'>
                <span className='w-screen mr-2'>Always On The Move??</span>
                <span className='w-screen'>So Are We.</span>
            </p>

            <p className='font-semibold text-[14px] info-p'>
            Unlike traditional universities offering online classes, we are a mobile university tailored specifically for busy adults.
             Our innovative platform allows you to complete and submit coursework directly from your smartphone. Yes, it's that convenient.<br/>
             <a className='text-blue-600 border-b border-blue-600' href='#'>Learn More</a>
            </p>
 
        
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{
            clickable: true,
          }}
        modules={[EffectCreative, Pagination]}
        className="mySwiper w-[70vw] h-[250px] mb-0 justify-center"
      >
        <SwiperSlide>
            <div className='card rounded-md flex flex-col items-center shadow-lg'>
                <img src={assets.exploreIcon} alt="explore" className='h-[116px] mb-4 p-2 mt-6'/>
                <p className='font-bold text-lg'>EXPLORE PROGRAMS</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card rounded-md flex flex-col items-center shadow-lg'>
            <img src={assets.badgeIcon} alt="experience" className='h-[116px] p-2 mt-2'/>
            <p className='font-bold text-[16px] mt-9'>THE REGENCY EXPERIENCE</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card rounded-md flex flex-col items-center shadow-lg'>
            <img src={assets.aboutIcon} alt="about"  className='h-[116px] p-2 mt-2'/>
            <p className='font-bold text-lg mt-9'>ABOUT ADMISSIONS</p>
            </div>
        </SwiperSlide>
    
      </Swiper>
            
        </div>


        
    </div>
  )
}

export default OnlineInfoSection
