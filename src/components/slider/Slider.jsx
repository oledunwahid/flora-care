import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import carouselImage1 from '../../assets/CAROUSEL1.jpg';
import carouselImage2 from '../../assets/CAROUSEL2.jpg';

function Slider() {
  return (
    <div className='max-w-[1400px] lg:h-[100vh] w-full m-auto pt-16 pb-20 px-4'>
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showStatus={false}
            >
        <div>
            <img src={carouselImage1} alt="Flower 1" className='rounded-2xl' />
        </div>
        <div>
            <img src={carouselImage2} alt="Flower 2" className='rounded-2xl' />
        </div>
        </Carousel>
    </div>
  );
};

export default Slider;
