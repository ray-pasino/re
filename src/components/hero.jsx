import React,{useState, useEffect} from 'react'
import Nav from './nav'
import Info from './Info'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';



const Hero = () => {
  
  const [imgLoaded, setImgLoaded] = useState(false)
  const [img2Loaded, setImg2Loaded] = useState(false)
  const [img3Loaded, setImg3Loaded] = useState(false)
  const [img4Loaded, setImg4Loaded] = useState(false)
  const [img5Loaded, setImg5Loaded] = useState(false)



  useEffect(()=>{
      const img = new Image()
      const img2 = new Image()
      const img3 = new Image()
      const img4 = new Image()
      const img5 = new Image()


      img.src = './coverphoto1.jpeg';
      img2.src = './coverphoto2.jpg'; 
      img3.src = './coverphoto2.jpg'; 
      img4.src = './coverphoto2.jpg'; 
      img5.src = './coverphoto2.jpg'; 


      img.onload = () => {
        setImgLoaded(true);
      };
      img2.onload = () => {
        setImg2Loaded(true);
      };
      img3.onload = () => {
        setImg3Loaded(true);
      };
      img4.onload = () => {
        setImg4Loaded(true);
      };
      img5.onload = () => {
        setImg5Loaded(true);
      };
  },[])

  return (
    <div className='hero h-screen'>
      {!imgLoaded && 
       <img src="./coverblur.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }
         {!img2Loaded && 
       <img src="./coverblur2.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }
         {!img3Loaded && 
       <img src="./coverblur3.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }
         {!img4Loaded && 
       <img src="./coverblur4.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }
   {!img5Loaded && 
       <img src="./coverblur5.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
      }
         <Swiper
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
          }}
          effect="fade"
          modules={[Autoplay, EffectFade]}
          className="mySwiper backgroundImage absolute z-0 h-screen w-full object-cover"
          >
          {imgLoaded &&
         <SwiperSlide>
       <img src="./coverphoto1.jpeg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
       </SwiperSlide>
      }

      {img2Loaded &&
         <SwiperSlide>
       <img src="./coverphoto2.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
}
{img3Loaded &&
         <SwiperSlide>
       <img src="./coverphoto3.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
         }
         {img4Loaded &&
         <SwiperSlide>
       <img src="./coverphoto4.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
}
{img5Loaded &&
         <SwiperSlide>
       <img src="./coverphoto5.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
         </SwiperSlide>
}
       </Swiper>
      <div className="gradient absolute z-20"></div> 
      <Nav/>
      <Info/>
    </div>
  )
}

export default Hero
