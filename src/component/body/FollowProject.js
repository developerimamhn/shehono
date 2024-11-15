import React from 'react';
import homefollow1 from './FollowProject/Rectangle 4.svg';
import homefollow2 from './FollowProject/Rectangle 5.svg';
import homefollow3 from './FollowProject/Rectangle 6.svg';
import homefollow4 from './FollowProject/Rectangle 7.svg';
import TextAnimation from './animationSliderbook/TextAnimation';
import TextAnimationRight from './animationSliderbook/TextAnimationRight';


const FollowProject = () => {
    return (
        <div className='container mx-auto overflow-hidden'>
            <h2 className='headingtag text-[30px] sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] text-center tracking-[1.2px] mb-[8px] text-[#292F36]'>Follow Our Projects</h2>
            <p className='text-center text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] xl:text-[28px] font-normal jost leading-[150%] tracking-[0.28px] text-[#4D5053] lg:px-[15%] mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[90px] xl:mb-[100px] 2xl:mb-[114px]'>It is a long established fact that a reader will be distracted by  the of readable content of page  lookings at its layouts  points.</p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-[20px] sm:gap-[40px] md:gap-[60px] lg:gap-[80px] xl:gap-[100px] 2xl:gap-[116px]'>
            
                <div className=''>
                    <img className='w-full ' src={homefollow1} alt=''/>
                    <TextAnimation animationClass="visible">
                    <div className='flex justify-between items-center mt-[14px]'>
                        <div className=''>
                            <h4 className='headingtag text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] tracking-[0.5px] text-[#292F36]'>Modern bedroom</h4>
                            <p className='pragraphtag text-[#4D5053] jost'>Decor / Artchitecture</p>
                        </div>
                        <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                    </div>
                    </TextAnimation>
                </div>
           
                <div className=''>
                    <img className='w-full' src={homefollow2} alt=''/>
                    <TextAnimationRight animationClass="visibles">
                    <div className='flex justify-between items-center mt-[14px]'>
                        <div className=''>
                            <h4 className='headingtag text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] tracking-[0.5px] text-[#292F36]'>Modern bedroom</h4>
                            <p className='pragraphtag text-[#4D5053] jost'>Decor / Artchitecture</p>
                        </div>
                        <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                    </div>
                    </TextAnimationRight>
                </div>
            
            
                <div className=''>
                    <img className='w-full' src={homefollow3} alt=''/>
                    <TextAnimation animationClass="visible">
                    <div className='flex justify-between items-center mt-[14px]'>
                        <div className=''>
                            <h4 className='headingtag text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] tracking-[0.5px] text-[#292F36]'>Modern bedroom</h4>
                            <p className='pragraphtag text-[#4D5053] jost'>Decor / Artchitecture</p>
                        </div>
                        <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                    </div>
                    </TextAnimation>
                </div>
            
                <div className=''>
                    <img className='w-full' src={homefollow4} alt=''/>
                    <TextAnimationRight animationClass="visibles">
                    <div className='flex justify-between items-center mt-[14px]'>
                        <div className='mt-[14px]'>
                            <h4 className='headingtag text-[20px]  sm:text-[22px] md:text-[24px] lg:text-[25px] tracking-[0.5px] text-[#292F36]'>Modern bedroom</h4>
                            <p className='pragraphtag text-[#4D5053] jost'>Decor / Artchitecture</p>
                        </div>
                        <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" fill="#D8A876"/>
                        <path d="M32 44L40 35L32 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                    </div>
                    </TextAnimationRight>
                </div>
            </div>
        </div>
    );
};

export default FollowProject;