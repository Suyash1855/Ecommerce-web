import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 '/>
        <Carousel
            autoplay
            infiniteLoop
            showstatus={false}
            showIndicator={false}
            showThumbs={false}
            interval={10}
           > 
           <div><img loading="lazy" src="https://links.papareact.com/gi1" alt="" srcset="" /></div>
           <div><img loading="lazy" src="https://links.papareact.com/6ff" alt="" srcset="" /></div>
           <div><img loading="lazy" src="https://links.papareact.com/7ma" alt="" srcset="" /></div>

        </Carousel>
    </div>
  )
}

export default Banner