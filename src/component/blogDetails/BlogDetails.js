import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import itemsimage from '../ourprojects/images/Rectangle 27.svg';
import itemsimage2 from '../ourprojects/images/Rectangle 28.svg';
import itemsimage3 from '../ourprojects/images/Rectangle 29.svg';
import itemsimage4 from '../ourprojects/images/Rectangle 30.svg';
import itemsimage5 from '../ourprojects/images/Rectangle 31.svg';
import itemsimage6 from '../ourprojects/images/Rectangle 32.svg';
import imagesItemsone from './imagess/Rectangle 38.svg';

const BlogDetails = () => {
  const gridRef = useRef(null);
  const isoRef = useRef(null);

  useEffect(() => {
    // Initialize Isotope
    isoRef.current = new Isotope(gridRef.current, {
      itemSelector: '.grid-itemname',
      layoutMode: 'fitRows',
      filter: '.Kitchen', // Apply the default filter
    });

    // Cleanup function to destroy isotope instance when the component is unmounted
    return () => {
      isoRef.current?.destroy();
    };
  }, []);

  const filterItems = (filterValue) => {
    isoRef.current.arrange({ filter: filterValue });
  };


  return (
    <div className='pb-[250px] sm:pb-[280px] md:pb-[300px] xl:pb-[328px] 2xl:pb-[348px]'>
        <div className='bgservicehero_6'>
            <h2 className='text-center pt-[178px] pb-[90px] headingtag text-[#fff] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]'>Blog Details</h2>
        </div>
        <div className="container mx-auto">
            <div className="lg:grid grid-cols-3 mt-[100px] gap-[147.07px] px-3 sm:px-0">
                <div className="grid col-span-1">
                    <from className="flex justify-center items-center bg-[#F4F0EC] py-[18px] px-[17px] md:py-[22px] md:px-[21px] lg:py-[25px] lg:px-[24px] xl:py-[34px] xl:px-[33px] w-[100%] rounded-[20px]">
                            <input className='w-full border-none outline-none bg-transparent placeholder:text-[#CDA274] text-[#CDA274] jost text-[16px] lg:text-18px xl:text-[20px] 2xl:text-[22px]' type='text' placeholder='Search'/>
                            <a href='Search Aritcle' className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] lg:w-[25px] xl:w-[27px]' viewBox="0 0 27 27" fill="none">
                                <path d="M26.5872 24.2898L20.4818 18.1691C21.9517 16.2073 22.7452 13.8195 22.7425 11.3659C22.7425 5.09879 17.6565 0 11.405 0C5.15355 0 0.0675049 5.09879 0.0675049 11.3659C0.0675049 17.633 5.15355 22.7318 11.405 22.7318C13.8524 22.7345 16.2343 21.939 18.1912 20.4654L24.2966 26.5862C24.6057 26.8631 25.0088 27.011 25.4231 26.9994C25.8375 26.9877 26.2317 26.8175 26.5249 26.5237C26.818 26.2298 26.9878 25.8346 26.9994 25.4192C27.011 25.0038 26.8635 24.5997 26.5872 24.2898ZM3.30679 11.3659C3.30679 9.76023 3.78174 8.1906 4.67159 6.85552C5.56143 5.52043 6.8262 4.47986 8.30596 3.86539C9.78571 3.25092 11.414 3.09015 12.9849 3.4034C14.5558 3.71666 15.9988 4.48987 17.1313 5.62526C18.2639 6.76066 19.0352 8.20724 19.3476 9.78208C19.6601 11.3569 19.4997 12.9893 18.8868 14.4727C18.2739 15.9562 17.2359 17.2241 15.9041 18.1162C14.5724 19.0083 13.0067 19.4844 11.405 19.4844C9.25802 19.4818 7.1997 18.6257 5.68155 17.1037C4.1634 15.5818 3.30937 13.5183 3.30679 11.3659Z" fill="#CDA274"/>
                                </svg>
                            </a>
                    </from>
                    <h4 className='headingtag tracking-[0.5px] text-[18px] md:text-[20] lg:text-[22px] xl:text-[25px] mt-[25px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px] text-[#292F36]'>Latest News</h4>
                    <ul className='flex flex-col mt-[20px] md:mt-[25px] lg:mt-[28px] xl:mt-[34px] gap-[20px] md:gap-[25px] lg:gap-[28px] xl:gap-[34px]'>
                        <li className='headingtag tracking-[0.4px] text-[16px] md:text-[17] lg:text-[18px] xl:text-[20px] text-[#292F36]'>We Focus On Comfort And Gorgeous
                            <div className='text-right border-b-[1px] border-[#CDA274] pb-[6px] pt-[5] jost text-[14px] md:text-[14px] lg:text-[16px] text-[#4D5053] font-normal leading-[150%] tracking-[0.16px]'>06/02/2023</div>
                        </li>
                        <li className='headingtag tracking-[0.4px] text-[16px] md:text-[17] lg:text-[18px] xl:text-[20px] text-[#292F36]'>We Focus On Comfort And Gorgeous
                            <div className='text-right border-b-[1px] border-[#CDA274] pb-[6px] pt-[5] jost text-[14px] md:text-[14px] lg:text-[16px] text-[#4D5053] font-normal leading-[150%] tracking-[0.16px]'>06/02/2023</div>
                        </li>
                        <li className='headingtag tracking-[0.4px] text-[16px] md:text-[17] lg:text-[18px] xl:text-[20px] text-[#292F36]'>We Focus On Comfort And Gorgeous
                            <div className='text-right border-b-[1px] border-[#CDA274] pb-[6px] pt-[5] jost text-[14px] md:text-[14px] lg:text-[16px] text-[#4D5053] font-normal leading-[150%] tracking-[0.16px]'>06/02/2023</div>
                        </li>
                    </ul>
                    <div className="py-[17px] md:py-[20px] lg:py-[25px] xl:py-[27px] px-[20px] md:px-[25px] lg:px-[27px] xl:px-[32px] my-[25px] md:my-[30px] lg:my-[40px] xl:my-[50px]">
                    <h4 className='headingtag tracking-[0.5px] text-[18px] md:text-[20] lg:text-[22px] xl:text-[25px]  text-[#292F36] mb-[6px] lg:mb-[10px]'>Categories</h4>
                    <ul>
                        <li className='text-[#4D5053] jost text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal leading-[300%] tracking-[0.22px] border-b-[1px] border-[#CDA274]'>Decoration</li>
                        <li className='text-[#4D5053] jost text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal leading-[300%] tracking-[0.22px] border-b-[1px] border-[#CDA274]'>Door Windows</li>
                        <li className='text-[#4D5053] jost text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal leading-[300%] tracking-[0.22px] border-b-[1px] border-[#CDA274]'>Home Land</li>
                        <li className='text-[#4D5053] jost text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal leading-[300%] tracking-[0.22px]'>Roof Installation</li>
                    </ul>
                    </div>
                </div>
                <div className="grid col-span-2">
                    <h2 className='headingtag text-[#292F36] text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px] 2xl:text-[50px] font-normal tracking-[1px] mb-[20px] md:mb-[30px] lg:mb-[34px] xl:mb-[41px]'>Let’s Get Solution for Building Construction Work</h2>
                    <img className='w-screen' src={imagesItemsone} alt="" />
                    <p className='mt-[40px] pragraphtag text-[#4D5053] jost font-normal'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. <br /><br />

Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                </div>
            </div>
        </div>
      <div className='container mx-auto'>
        <div className='flex justify-start flex-col items-start mt-[38px] px-[16px] sm:px-0'>
        <h3 className='headingtag text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] text-[#292F36] tracking-[0.5px] mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[24px]'>Tags</h3>
          <div className="flex sm:w-[350px] gap-[11px] flex-wrap">
            <button className='relative py-[7px] px-[26px] sm:py-[8px] sm:px-[28px] md:py-[9px] md:px-[30px] rounded-[10px] text-[#292F36] focus:text-[#fff] focus:bg-[#292F36] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden bg-[#F4F0EC]'
              onClick={() => filterItems('.Kitchen')}>
              Kitchen
              <span className='burst'></span>
            </button>
            <button className='relative py-[7px] px-[26px] sm:py-[8px] sm:px-[28px] md:py-[9px] md:px-[30px] rounded-[10px] text-[#292F36] focus:text-[#fff] focus:bg-[#292F36] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden bg-[#F4F0EC]'
              onClick={() => filterItems('.bedroom')}>
              Bedroom
              <span className='burst'></span>
            </button>
            <button className='relative py-[7px] px-[26px] sm:py-[8px] sm:px-[28px] md:py-[9px] md:px-[30px] rounded-[10px] text-[#292F36] focus:text-[#fff] focus:bg-[#292F36] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden bg-[#F4F0EC]'
              onClick={() => filterItems('.Building')}>
              Building
              <span className='burst'></span>
            </button>
            <button className='relative py-[7px] px-[26px] sm:py-[8px] sm:px-[28px] md:py-[9px] md:px-[30px] rounded-[10px] text-[#292F36] focus:text-[#fff] focus:bg-[#292F36] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden bg-[#F4F0EC]'
              onClick={() => filterItems('.Architecture')}>
              Architecture
              <span className='burst'></span>
            </button>
            <button className='relative py-[7px] px-[26px] sm:py-[8px] sm:px-[28px] md:py-[9px] md:px-[30px] rounded-[10px] text-[#292F36] focus:text-[#fff] focus:bg-[#292F36] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden bg-[#F4F0EC]'
              onClick={() => filterItems('.KitchenPlanning')}>
              Kitchen Planning
              <span className='burst'></span>
            </button>
            <button className='relative py-[7px] px-[26px] sm:py-[8px] sm:px-[28px] md:py-[9px] md:px-[30px] rounded-[10px] text-[#292F36] focus:text-[#fff] focus:bg-[#292F36] jost font-semibold leading-[125%] tracking-[0.36px] text-[14px] sm:text-[16px] md:text-[18px] duration-300 overflow-hidden bg-[#F4F0EC]'
              onClick={() => filterItems('.Bedroom1')}>
              Bedroom
              <span className='burst'></span>
            </button>
          </div>
        </div>
        <div className="grid w-full mt-[38px] " ref={gridRef}>

            <div className="grid-itemname Kitchen">
                <div className='flex lg:justify-center lg:items-center flex-col lg:flex-row gap-[50px] lg:gap-0'>
                    <div className='px-[16px] sm:px-0'>
                    <h3 className='headingtag text-[#292F36] text-[30px ] md:text-[38px] lg:text-[44px] xl:text-[50px] tracking-[1px] mb-[16px] lg:mb-[18px] xl:mb-[20px]'>Design sprints are great</h3>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053] mb-[18px] lg:mb-[20px] xl:mb-[24px]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <ul className='flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>1</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                    </ul>
                    </div>
                    <img className='w-screen lg:w-fit' src={itemsimage} alt=''/>
                </div>
            </div>

            <div className="grid-itemname  bedroom">
                <div className='flex lg:justify-center lg:items-center flex-col lg:flex-row gap-[50px] lg:gap-0'>
                    <div className=''>
                    <h3 className='headingtag text-[#292F36] text-[30px ] md:text-[38px] lg:text-[44px] xl:text-[50px] tracking-[1px] mb-[16px] lg:mb-[18px] xl:mb-[20px]'>Design sprints are great</h3>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053] mb-[18px] lg:mb-[20px] xl:mb-[24px]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <ul className='flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>1</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                    </ul>
                    </div>
                    <img className='' src={itemsimage2} alt=''/>
                </div>
            </div>
            <div className="grid-itemname Building">
                <div className='flex lg:justify-center lg:items-center flex-col lg:flex-row gap-[50px] lg:gap-0'>
                    <div className=''>
                    <h3 className='headingtag text-[#292F36] text-[30px ] md:text-[38px] lg:text-[44px] xl:text-[50px] tracking-[1px] mb-[16px] lg:mb-[18px] xl:mb-[20px]'>Design sprints are great</h3>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053] mb-[18px] lg:mb-[20px] xl:mb-[24px]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <ul className='flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>1</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                    </ul>
                    </div>
                    <img className='' src={itemsimage3} alt=''/>
                </div>
            </div>
            <div className="grid-itemname Architecture">
                <div className='flex lg:justify-center lg:items-center flex-col lg:flex-row gap-[50px] lg:gap-0'>
                    <div className=''>
                    <h3 className='headingtag text-[#292F36] text-[30px ] md:text-[38px] lg:text-[44px] xl:text-[50px] tracking-[1px] mb-[16px] lg:mb-[18px] xl:mb-[20px]'>Design sprints are great</h3>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053] mb-[18px] lg:mb-[20px] xl:mb-[24px]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <ul className='flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>1</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                    </ul>
                    </div>
                    <img className='' src={itemsimage4} alt=''/>
                </div>
            </div>
            <div className="grid-itemname KitchenPlanning">
                <div className='flex lg:justify-center lg:items-center flex-col lg:flex-row gap-[50px] lg:gap-0'>
                    <div className=''>
                    <h3 className='headingtag text-[#292F36] text-[30px ] md:text-[38px] lg:text-[44px] xl:text-[50px] tracking-[1px] mb-[16px] lg:mb-[18px] xl:mb-[20px]'>Design sprints are great</h3>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053] mb-[18px] lg:mb-[20px] xl:mb-[24px]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <ul className='flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>1</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                    </ul>
                    </div>
                    <img className='' src={itemsimage5} alt=''/>
                </div>
            </div>
            <div className="grid-itemname Bedroom1">
                <div className='flex lg:justify-center lg:items-center flex-col lg:flex-row gap-[50px] lg:gap-0'>
                    <div className=''>
                    <h3 className='headingtag text-[#292F36] text-[30px ] md:text-[38px] lg:text-[44px] xl:text-[50px] tracking-[1px] mb-[16px] lg:mb-[18px] xl:mb-[20px]'>Design sprints are great</h3>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053] mb-[18px] lg:mb-[20px] xl:mb-[24px]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <ul className='flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>1</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                        <li className='flex justify-center items-start gap-[11px] '><span className='headingtag text-[#CDA274] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]'>2</span><span className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.22px] leading-[150%] jost text-[#4D5053]'>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span></li>
                    </ul>
                    </div>
                    <img className='' src={itemsimage6} alt=''/>
                </div>
            </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mx-[20px] sm:mx-[0] md:px-[120px] lg:px-[205px] text-[95px] mt-[115px]  lg:mt-[115px] xl:mt-[131px]">
          <h3 className='headingtag text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] text-[#292F36] tracking-[0.5px] mb-[22] md:mb-[24px] lg:mb-[28px] xl:mb-[36px]'>Leave a Reply</h3>
          <form>
              <div className="flex justify-center flex-col sm:flex-row items-center w-full gap-[44px]">
                  <div className='flex flex-col gap-[50px] w-full sm:w-screen'>
                    <input className='border-b-[1px] border-[#000] outline-none pragraphtag placeholder:text-[#4D5053] jost text-[#4D5053]' type="text" placeholder='Name' id="" />
                    <input className='border-b-[1px] border-[#000] outline-none pragraphtag placeholder:text-[#4D5053] jost text-[#4D5053]' type="text" placeholder='Website' id="" />
                  </div>
                  <div className='flex flex-col gap-[50px] w-full sm:w-screen'>
                    <input className='border-b-[1px] border-[#000] outline-none pragraphtag placeholder:text-[#4D5053] jost text-[#4D5053]' type="text" placeholder='Email' id="" />
                    <input className='border-b-[1px] border-[#000] outline-none pragraphtag placeholder:text-[#4D5053] jost text-[#4D5053]' type="text" placeholder='Phone' id="" />
                  </div>
              </div>
              <h3 className='pragraphtag text-[#4D5053] jost mt-[50px]'>Hello Iam Intrested in..</h3>
              <textarea className='border-b-[1px] border-[#000] outline-none w-full resize-none pragraphtag jost text-[#4D5053]' name="" id=""></textarea>
              <div className="flex justify-start items-center gap-[10px]">
                <input type="checkbox" className='border-[2px] border-[#cda274] appearance-none h-[17px] w-[17px] rounded-[3px] checked:bg-[#cda274] checked:border-none ' />
                <span className='text-[#CDA274] text-[18px] jost font-normal leading-[-125%] tracking-[0.36px]'>Save my name, email, and website in this browser for the next time I comment.</span>
              </div>
              <button className="py-[15px] md:py-[17px] lg:py-[22px] xl:py-[26px] px-[30px] md:px-[34px] lg:px-[44px] xl:px-[54px] rounded-[10px] md:rounded-[18px] bg-[#292F36] shadow-custom-light text-[15px] md:text-[16px] lg:text-[18px] flex items-center gap-[9px] text-[#FFF] jost font-semibold leading-[125%] tracking-[0.36px] mt-[25px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] xl:mt-[63px]">Send Now
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;