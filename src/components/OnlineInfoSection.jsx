import React,{useState, useEffect} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import { EffectCreative, Pagination} from 'swiper/modules';
import { assets } from '../assets/assets';


const OnlineInfoSection = () => {

    const [backgroundLoaded, setBackgroundLoaded] = useState(false)
    const [manimageLoaded, setManImageLoaded] = useState(false)



    useEffect(()=>{
        const img = new Image()
        const img2 = new Image()

        img.src = './lady.jpg';
        img2.src = './man.jpg'

        img.onload = () => {
            setBackgroundLoaded(true);
        }

        img2.onload = () => {
          setManImageLoaded(true)
        }
    },[])

  return (
    <div className='sec-2 h-screen relative' id='sec-2'>
        {
        !backgroundLoaded ?
       <img src="./ladyblur.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
            :
       <img src="./lady.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover opacity-[40%] sm:opacity-[52%]'/>
        }

        {/* display for mobile */}
        <div className="gradient-2 absolute z-20 sm:hidden"></div>
        <div className="sec-info absolute z-30 sm:hidden  text-white flex flex-col m-[34px] justify-between h-[95%]">
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
            <img src={assets.badgeIcon} alt="experience" className='h-[116px] p-4 mt-8'/>
            <p className='font-bold text-lg mt-2'>THE REGENCY EXPERIENCE</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card rounded-md flex flex-col items-center shadow-lg'>
            <img src={assets.aboutIcon} alt="about"  className='h-[116px] p-4 mt-8'/>
            <p className='font-bold text-lg mt-2'>ABOUT ADMISSIONS</p>
            </div>
        </SwiperSlide>
    
      </Swiper>
            
        </div>

          


          {/* display for larger screens */}
        
        <div className='sec-info-desktop absolute z-30 hidden sm:flex flex-col text-white h-screen justify-between bg-[#0000001A]'>

          <div className="top-banner bg-[#8C6E1A] h-14 "></div>

          {/* link icons */}
          <div className='flex items-center justify-center space-x-6 xl:space-x-40'>
            <div className="card-container card-1 border border-2 border-white flex flex-col items-center justify-center  rounded-md h-[180px] w-[180px] md:h-[230px] md:w-[230px] lg:w-[300px] lg:h-[300px] cursor-pointer">
                <img src={assets.exploreIcon} className="w-20 md:w-[116px] lg:w-[155px]" />
                <p className='font-extrabold text-sm  mt-8 md:text-lg md:mt-8 lg:text-2xl hover:underline' >Explore Programs</p>
            </div>
            <div className="card-container card-2 border border-2 border-white flex flex-col items-center justify-center  rounded-md h-[180px] w-[180px] md:h-[230px] md:w-[230px] lg:w-[300px] lg:h-[300px] cursor-pointer">
                <img src={assets.badgeIcon} className="w-20 md:w-24 lg:w-[125px]" />
                <p className='font-extrabold text-sm  mt-8 md:text-lg md:mt-10 lg:text-2xl hover:underline'>The Regency Experience</p>
            </div>
            <div className="card-container card-3 border border-2 border-white flex flex-col items-center justify-center  rounded-md h-[180px] w-[180px] md:h-[230px] md:w-[230px] lg:w-[300px] lg:h-[300px] cursor-pointer">
              <img src={assets.aboutIcon} className="w-20 md:w-24 lg:w-[125px]" />
              <p className='font-extrabold text-sm mt-8 md:text-lg  md:mt-10 lg:mt-11 lg:text-2xl hover:underline'>About Admissions</p>
            </div>
          </div>


          {/* info */}


<div className="flex flex-col sm:flex-row justify-center items-center mb-4 px-4 md:px-8 lg:px-16 space-x-4 ">
    <div className="text  w-2/5 lg:w-2/5 mb-6 md:mb-0">
        <p className='text-2xl md:text-3xl mb-4 font-extrabold text-center md:text-left'>
            Always On The Move?? So Are We
        </p>
        <p className='text-bold md:text-xl lg:text-2xl font-bold text-center md:text-left'>
            Unlike traditional universities offering online classes, we are a mobile university tailored specifically for busy adults.
            Our innovative platform allows you to complete and submit coursework directly from your smartphone. Yes, it's that convenient.
            <br />
            <a className='text-blue-600 border-b border-blue-600 hover:text-blue-800' href='#'>Learn More</a>
        </p>
    </div>

    <div className="photo-frame flex flex-col w-1/2 lg:w-1/3">
        <div className="top-bar bg-[#8C6E1A] w-[95%] h-[20px] ms-3 float-end"></div>

        <div>
            {
                !manimageLoaded ?
                <img src='./man-blur.png' alt="man studying online" className='w-full h-auto' /> :
                <div className='relative'>
                    <img src='./man.jpg' alt="man studying online" className='' />
                    <div className="gradient-3 absolute top-0 left-0 z-30"></div>
                </div>
            }
        </div>
    </div>
</div>
        </div>
    </div>
  )
}

export default OnlineInfoSection
