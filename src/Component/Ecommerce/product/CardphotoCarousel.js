import React, { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// const CustomDots = ({ dots, onClick }) => (
//     <ul style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', padding: 0, margin: 0, listStyle: 'none' }}>
//       {dots}
//     </ul>
//   );

const CardCarousel = ({img}) => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 2000,
      
     
    };
   

    return (
        <div className='carousel-container' >
        <Slider {...settings} className='!flex z-9 !flex-row !justify-center !items-center h-[80%] w-[19rem] z-33  p-4 ' >
        {img.map((photo,i)=>(
            <div key={i} className='!flex justify-center items-center !flex-row'>
            <img className=' h-[280px]  w-[280px]' src={photo.url} />
            

            </div>
        ))}
           
        </Slider>
        </div>
    );
};

export default CardCarousel;
