import React, { useState } from 'react';

// Import your slider images
import sliderimage1 from './slider/Rectangle 11.svg';
import sliderimage2 from './slider/Rectangle 12.svg';
import sliderimage3 from './slider/Rectangle 13.svg';
import sliderimage4 from './slider/Rectangle 14.svg';
import sliderimage5 from './slider/Rectangle 15.svg';
import sliderimage6 from './slider/Rectangle 16.svg';
import sliderimage7 from './slider/Rectangle 17.svg';

const Slider = () => {
  const slides = [
    sliderimage1,
    sliderimage2,
    sliderimage3,
    sliderimage4,
    sliderimage5,
    sliderimage6,
    sliderimage7,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='overflow-hidden mb-[50px] sm:md-[55px] md:mb-[66px] lg:mb-[80px] xl:mb-[103px] 2xl:mb-[133px]'>
      <div className="relative container w-full h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <h3 className='absolute headingtag text-[#fff] bottom-20 left-[50%] transform -translate-x-[50%] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]'>
                About Us
              </h3>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[30px] md:w-[35px] lg:w-[38px] xl:w-[42px]'  viewBox="0 0 42 74" fill="none">
            <path
              d="M1.46447 33.4645C-0.488155 35.4171 -0.488155 38.5829 1.46447 40.5355L33.2843 72.3553C35.2369 74.308 38.4027 74.308 40.3553 72.3553C42.308 70.4027 42.308 67.2369 40.3553 65.2843L12.0711 37L40.3553 8.71573C42.308 6.76311 42.308 3.59728 40.3553 1.64466C38.4027 -0.307961 35.2369 -0.307961 33.2843 1.64466L1.46447 33.4645ZM6 32H5L5 42H6L6 32Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[30px] md:w-[35px] lg:w-[38px] xl:w-[42px]' viewBox="0 0 42 74" fill="none">
            <path
              d="M40.5355 40.5355C42.4882 38.5829 42.4882 35.4171 40.5355 33.4645L8.71573 1.64466C6.76311 -0.307961 3.59728 -0.307961 1.64466 1.64466C-0.307961 3.59728 -0.307961 6.76311 1.64466 8.71573L29.9289 37L1.64466 65.2843C-0.307961 67.2369 -0.307961 70.4027 1.64466 72.3553C3.59728 74.308 6.76311 74.308 8.71573 72.3553L40.5355 40.5355ZM36 42H37V32H36V42Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-[#4D5053]' : 'bg-white'}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
