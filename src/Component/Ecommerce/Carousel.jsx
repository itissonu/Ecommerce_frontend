import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cart from '../../photos/shopping-bag.png'
import wishlist from '../../photos/wishlist.png'
import menu from '../../photos/burger-bar.png'
import Shirts from '../../photos/shirt.png'
import Jeans from '../../photos/jeans.png'
import Sweaters from '../../photos/ugly-sweater.png'
import Jackets from '../../photos/denim-jacket.png'
import banner from '../../photos/tete.jpg'
import banner2 from '../../photos/Untitled-1ret.jpg'
const CustomPrevArrow = ({ onClick }) => (
    <div className=' w-max rounded-[100%] bg-[hsla(0,0%,100%,.4)] flex justify-center items-center'>
        <button onClick={onClick} className="h-[2rem] w-4 text-lg md:text-6xl md:w-16  text-gray-400  mb-[18px] rounded-full  items-center justify-center ">
            {'<'}
        </button>
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div className=' w-max rounded-[100%] bg-[hsla(0,0%,100%,.4)] flex justify-center items-center'>
        <button onClick={onClick} className=" h-[2rem] w-4 md:text-6xl md:w-16   text-gray-400  mb-[18px] rounded-full  text-lg items-center justify-center">
            {'>'}
        </button>
    </div>
);

const Carousel = () => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <Slider {...settings} className='!flex z-0 !flex-row !justify-center !items-center h-[203px] md:h-[450px] !w-full mt-[10rem] mb-4' >
            {/* <div className='!flex justify-center '>
                <img className=' h-[400px] w-[400px] mx-8' src="https://images.bewakoof.com/t640/men-s-black-mind-hunter-graphic-printed-oversized-t-shirt-628041-1701081432-1.jpg" />
                <img className=' h-[400px] w-[400px] mx-8' src='https://images.bewakoof.com/t640/men-s-blue-mind-hunter-graphic-printed-oversized-t-shirt-628033-1701081976-1.jpg' />
                <img className=' h-[400px] w-[400px] mx-8' src="https://images.bewakoof.com/t640/men-black-beast-within-graphic-printed-oversized-t-shirt-628234-1701260274-1.jpg" />
            </div> */}
            <div className='!flex h-[14rem] md:h-[30rem] justify-center'>
                <img className=' h-[100%] w-[100%] bg-cover' src={banner2} />
            </div>
            <div className='!flex h-[14rem] md:h-[30rem]  justify-center'>
                <img className=' h-[100%] w-[100%] bg-cover' src={banner} />
            </div>
            <div className='!flex justify-center  h-[14rem] md:h-[30rem]'>
                <img className=' h-full w-full bg-cover' src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_Wdh9owc.jpg?format=webp&w=1500&dpr=1.3' />
            </div>
        </Slider>
    );
};

export default Carousel;
