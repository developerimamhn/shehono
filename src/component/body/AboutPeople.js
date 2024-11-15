import React from 'react';
import icon1 from './image/Photo.svg';
import icon2 from './image/Photo-1.svg';
import icon3 from './image/Photo-2.svg';
import image1 from './image/Frame.svg';
import image2 from './image/Frame-1.svg';
import image3 from './image/Frame-2.svg';
import image4 from './image/Frame-3.svg';
import TextAnimation from './animationSliderbook/TextAnimation';
import TextAnimationRight from './animationSliderbook/TextAnimationRight';


const AboutPeople = () => {

    return (
        <div className='container mx-auto mt-[100px] sm:mt-[120px] md:mt-[140px] lg:mt-[160px] xl:mt-[180px] 2xl:mt-[194px]'>
            <div className='bg-[#D8A876] px-[20px] sm:px-[24px] md:px-[26px] pb-[25px] sm:pb-[35px] md:pb-[40px] lg:pb-[55px] xl:pb-[70px] 2xl:pb-[88px] rounded-[50px]'>
                <h2 className='headingtag text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[78px] xl:pt-[80px] 2xl:pt-[88px] text-center tracking-[1px] font-normal text-[#fff] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[35px] xl:pb-[36px] 2xl:pb-[38px]'>What the People Thinks <br/>
                About Us</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[10px] sm:gap-[15px] md:gap-[20px]'>
                
                    <div className='bg-[#fff] rounded-[20px] pl-[20px] sm:pl-[25px] md:pl-[30px] lg:pl-[35px] xl:pl-[36px] 2xl:pl-[38px] '>
                    <TextAnimation animationClass="visible">
                        <div className='flex justify-start items-center gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[22px] 2xl:gap-[23px] pt-[20px] sm:pt-[25px] md:pt-[30px] lg:pt-[35px] xl:pt-[40px] 2xl:pt-[53px]'>
                        <img className='rounded-[50px]' src={icon1} alt='' />
                        <div className='flex flex-col'>
                            <h4 className='headingtag tracking-[0.25px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[25px] text-[#292F36]'>Natasha </h4>
                            <h5 className='text-[#4D5053] jost font-normal leading-[150%] tracking-[0.18px] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>Moscow, Russia</h5>
                        </div>
                        </div>
                        <p className='pragraphtag text-[#4D5053] jost font-normal pt-[12px] sm:pt-[16px] md:pt-[18px] lg:pt-[21px] xl:pt-[23px] 2xl:pt-[25px] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[35px] xl:pb-[40px] 2xl:pb-[85px]'>
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been.
                        </p>
                        </TextAnimation>
                    </div>
                
                    <div className='bg-[#fff] rounded-[20px] pl-[20px] sm:pl-[25px] md:pl-[30px] lg:pl-[35px] xl:pl-[36px] 2xl:pl-[38px] '>
                        <div className='flex justify-start items-center gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[22px] 2xl:gap-[23px] pt-[20px] sm:pt-[25px] md:pt-[30px] lg:pt-[35px] xl:pt-[40px] 2xl:pt-[53px]'>
                        <img className='rounded-[50px]' src={icon2} alt='' />
                        <div className='flex flex-col'>
                            <h4 className='headingtag tracking-[0.25px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[25px] text-[#292F36]'>Raymond Galario</h4>
                            <h5 className='text-[#4D5053] jost font-normal leading-[150%] tracking-[0.18px] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>UK, London</h5>
                        </div>
                        </div>
                        <p className='pragraphtag text-[#4D5053] jost font-normal pt-[12px] sm:pt-[16px] md:pt-[18px] lg:pt-[21px] xl:pt-[23px] 2xl:pt-[25px] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[35px] xl:pb-[40px] 2xl:pb-[85px]'>
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been scrambled it 
                        to make a type book.
                        </p>
                    </div>
                    
                    <div className='bg-[#fff] rounded-[20px] pl-[20px] sm:pl-[25px] md:pl-[30px] lg:pl-[35px] xl:pl-[36px] 2xl:pl-[38px] '>
                    <TextAnimationRight animationClass="visibles">
                        <div className='flex justify-start items-center gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[22px] 2xl:gap-[23px] pt-[20px] sm:pt-[25px] md:pt-[30px] lg:pt-[35px] xl:pt-[40px] 2xl:pt-[53px]'>
                        <img className='rounded-[50px]' src={icon3} alt='' />
                        <div className='flex flex-col'>
                            <h4 className='headingtag tracking-[0.25px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[25px] text-[#292F36]'>Benny Roll</h4>
                            <h5 className='text-[#4D5053] jost font-normal leading-[150%] tracking-[0.18px] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>USA, New York</h5>
                        </div>
                        </div>
                        <p className='pragraphtag text-[#4D5053] jost font-normal pt-[12px] sm:pt-[16px] md:pt-[18px] lg:pt-[21px] xl:pt-[23px] 2xl:pt-[25px] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[35px] xl:pb-[40px] 2xl:pb-[85px]'>
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been scrambled.
                        </p>
                        </TextAnimationRight>
                    </div>
                    
                </div>
            </div>
            <TextAnimation animationClass="visible">
            <div className='mt-[90px] sm:mt-[110px] md:mt-[130px] lg:mt-[150px] xl:mt-[170px] 2xl:mt-[188px] mb-[100px] sm:mb-[120px] md:mb-[140px] lg:mb-[160px] xl:mb-[180px] 2xl:mb-[202px] overflow-hidden'>
                <div className='grid justify-items-center items-center md:grid-cols-4 grid-cols-2'>
                    
                    <img src={image1} alt=''/>
                    <img src={image2} alt=''/>
                    <img src={image3} alt=''/>
                    <img src={image4} alt=''/>
                </div>
            </div>
            </TextAnimation>
        </div>
    );
};

export default AboutPeople;