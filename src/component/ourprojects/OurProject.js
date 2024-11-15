import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import itemsimage from './images/Rectangle 27.svg';
import itemsimage2 from './images/Rectangle 28.svg';
import itemsimage3 from './images/Rectangle 29.svg';
import itemsimage4 from './images/Rectangle 30.svg';
import itemsimage5 from './images/Rectangle 31.svg';
import itemsimage6 from './images/Rectangle 32.svg';

const OurProject = () => {
  const gridRef = useRef(null);
  let iso = null;

  useEffect(() => {
    iso = new Isotope(gridRef.current, {
      itemSelector: '.grid-itemname',
      layoutMode: 'fitRows',
    });

    return () => {
      if (iso) {
        iso.destroy();
      }
    };
  }, []);

  const filterItems = (filter) => {
    if (iso) {
      iso.arrange({ filter });
    }
  };

  return (
    <div>
      <div className='bgservicehero_3'>
        <h2 className='text-center pt-[178px] pb-[90px] headingtag text-[#fff] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]'>Our Project</h2>
      </div>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center mt-[38px]'>
          <div className="rounded-[18px] border-[1px] border-[#CDA274] flex flex-wrap gap-4">
            <button className='btton-btn relative py-[16px] px-[32px] sm:py-[20px] sm:px-[40px] md:py-[26px] md:px-[66px] rounded-[18px] text-[#292F36] focus:text-[#fff] focus:bg-[#CDA274] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden'
              onClick={() => filterItems('.Bathroom')}>
              Bathroom
              <span className='burst'></span>
            </button>
            <button className='btton-btn relative py-[16px] px-[32px] sm:py-[20px] sm:px-[40px] md:py-[26px] md:px-[66px] rounded-[18px] text-[#292F36] focus:text-[#fff] focus:bg-[#CDA274] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden'
              onClick={() => filterItems('.bedroom')}>
              Bedroom
              <span className='btton-btn burst'></span>
            </button>
            <button className='btton-btn relative py-[16px] px-[32px] sm:py-[20px] sm:px-[40px] md:py-[26px] md:px-[66px] rounded-[18px] text-[#292F36] focus:text-[#fff] focus:bg-[#CDA274] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden'
              onClick={() => filterItems('.kitchen')}>
              Kitchen
              <span className='burst'></span>
            </button>
            <button className='btton-btn relative py-[16px] px-[32px] sm:py-[20px] sm:px-[40px] md:py-[26px] md:px-[66px] rounded-[18px] text-[#292F36] focus:text-[#fff] focus:bg-[#CDA274] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden'
              onClick={() => filterItems('.LivingArea')}>
              Living Area
              <span className='burst'></span>
            </button>
          </div>
        </div>
        <div className="grid flex-wrap w-full mt-[38px]" ref={gridRef}>
          <div className="grid-itemname bedroom bedroom LivingArea sm:w-[50%]"><img className='w-[100%] sm:pl-[50px]' src={itemsimage} alt=''/>
          <div className='flex justify-between items-center pl-[50px] py-[42px]'>
                <div className=''>
                    <h3 className='headingtag tracking-[0.5px] text-[#292F36] text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px]'>Minimal Bedroom</h3>
                    <h4 className='pragraphtag text-[#4D5053] font-normal jost mt-[4px]'>Decor / Artchitecture</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div></div>
          <div className="grid-itemname kitchen kitchen bedroom sm:w-[50%]"><img className='w-[100%] sm:pl-[50px]' src={itemsimage2} alt=''/>
          <div className='flex justify-between items-center pl-[50px] py-[42px]'>
                <div className=''>
                    <h3 className='headingtag tracking-[0.5px] text-[#292F36] text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px]'>Minimal Bedroom</h3>
                    <h4 className='pragraphtag text-[#4D5053] font-normal jost mt-[4px]'>Decor / Artchitecture</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div></div>
          <div className="grid-itemname bedroom bedroom sm:w-[50%]"><img className='w-[100%] sm:pl-[50px]' src={itemsimage3} alt=''/>
          <div className='flex justify-between items-center pl-[50px] py-[42px]'>
                <div className=''>
                    <h3 className='headingtag tracking-[0.5px] text-[#292F36] text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px]'>Minimal Bedroom</h3>
                    <h4 className='pragraphtag text-[#4D5053] font-normal jost mt-[4px]'>Decor / Artchitecture</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </div>
          <div className="grid-itemname kitchen living-room LivingArea sm:w-[50%]"><img className='w-[100%] sm:pl-[50px]' src={itemsimage4} alt=''/>
          <div className='flex justify-between items-center pl-[50px] py-[42px]'>
                <div className=''>
                    <h3 className='headingtag tracking-[0.5px] text-[#292F36] text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px]'>Minimal Bedroom</h3>
                    <h4 className='pragraphtag text-[#4D5053] font-normal jost mt-[4px]'>Decor / Artchitecture</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div></div>
          <div className="grid-itemname LivingArea kitchen Bathroom sm:w-[50%]"><img className='w-[100%] sm:pl-[50px]' src={itemsimage5} alt=''/>
          <div className='flex justify-between items-center pl-[50px] py-[42px]'>
                <div className=''>
                    <h3 className='headingtag tracking-[0.5px] text-[#292F36] text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px]'>Minimal Bedroom</h3>
                    <h4 className='pragraphtag text-[#4D5053] font-normal jost mt-[4px]'>Decor / Artchitecture</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          </div>
          <div className="grid-itemname LivingArea Bathroom sm:w-[50%]"><img className='w-[100%] sm:pl-[50px]' src={itemsimage6} alt=''/>
            <div className='flex justify-between items-center pl-[50px] py-[42px]'>
                <div className=''>
                    <h3 className='headingtag tracking-[0.5px] text-[#292F36] text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px]'>Minimal Bedroom</h3>
                    <h4 className='pragraphtag text-[#4D5053] font-normal jost mt-[4px]'>Decor / Artchitecture</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[20px] mt-[70px] mb-[235px]'>
        <a href='#ff' aria-current="page" className='w-[52px] h-[52px] border-[1px] rounded-full border-[#CDA274] flex justify-center items-center text-[16px] focus:border-none focus:bg-[#F4F0EC] text-[#292F36] jost font-medium leading-[150%] capitalize duration-300'>
        01
        </a>
        <a href='#ff' aria-current="page" className='w-[52px] h-[52px] border-[1px] rounded-full border-[#CDA274] flex justify-center items-center text-[16px] focus:border-none focus:bg-[#F4F0EC] text-[#292F36] jost font-medium leading-[150%] capitalize duration-300'>
        02
        </a>
        <a href='#ff' aria-current="page" className='w-[52px] h-[52px] border-[1px] rounded-full border-[#CDA274] flex justify-center items-center text-[16px] focus:border-none focus:bg-[#F4F0EC] text-[#292F36] jost font-medium leading-[150%] capitalize duration-300'>
        03
        </a>
        <a href='#ff' aria-current="page" className='w-[52px] h-[52px] border-[1px] rounded-full border-[#CDA274] flex justify-center items-center text-[16px] focus:border-none focus:bg-[#F4F0EC] text-[#292F36] jost font-medium leading-[150%] capitalize duration-300'>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M23.0571 32L29 25.3143L23.0571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
      </div>
    </div>
  );
};

export default OurProject;
