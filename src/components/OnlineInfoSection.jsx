import React,{useState, useEffect} from 'react'

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
    <div className='sec-2 h-screen relative' id='sec-2'>
        {
        !backgroundLoaded ?
       <img src="./ladyblur.png" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
            :
       <img src="./lady.jpg" className='backgroundImage absolute z-0 h-screen w-full object-cover'/>
        }

        <div className="gradient-2 absolute z-20 sm:hidden"></div>
        <div className="sec-info absolute z-30 sm:hidden">
            <p>
                <span>Always On The Move?</span>
                <span>So Are We.</span>
            </p>

            <p>
            Unlike traditional universities offering online classes, we are a mobile university tailored specifically for busy adults.
             Our innovative platform allows you to complete and submit coursework directly from your smartphone. Yes, it's that convenient.
            </p>
        </div>
    </div>
  )
}

export default OnlineInfoSection
