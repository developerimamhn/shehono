import React from 'react';
import sectimage1 from './slider/Rectangle 18.svg';
import sectimage2 from './slider/Rectangle 19.svg';
import icon1 from '../body/image/Photo.svg';
import icon2 from '../body/image/Photo-1.svg';
import icon3 from '../body/image/Photo-2.svg';
import Slider from './Slider';
import TextAnimation from '../body/animationSliderbook/TextAnimation';
import TextAnimationRight from '../body/animationSliderbook/TextAnimationRight';

const Aboutus = () => {
  
  return (
    <div className='container mx-auto'>
    <Slider/>
    <TextAnimation animationClass="visible">
        <div className=' sm:px-[15%] md:px-[15%] lg:px-[15%] xl:px-[25%] '>
          <div className='liner'>
          <p className='text-[25px] lg:text-[30px] xl:text-[35px] font-normal leading-[125%] tracking-[0.7px] dm-serif-display text-center text-[#292F36]'>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</p>
          <p className='text-[#4D5053] text-center text-[20px] lg:text-[22px] xl:text-[25px] font-normal leading-[150%] tracking-[0.25px] mt-[22px] md:mt-[25px] lg:mt-[28px] xl:mt-[34px]'>BUNNY WILLIAMS</p>
          </div>
        </div>
    </TextAnimation>
        {/* section 2 */}

        <div className='flex justify-center items-center md:flex-row flex-col gap-[40px] container mx-auto mt-[50px] sm:mt-[55px] md:mt-[70px] lg:mt-[85px] xl:mt-[105px] 2xl:mt-[133.75px]'>
        
          <div className='flex-1 md:block flex flex-col justify-center items-center'>
          <TextAnimation animationClass="visible">
              <h2 className='headingtag text-[30px] lg:text-[35px] xl:text-[50px] mb-[18px] xl:mb-[23px]'>What We Do</h2>
              <p className='text-center md:text-left pragraphtag text-[#4D5053] mb-[22px] md:mb-[25px] lg:mb-[33px] xl:mb-[41px]'>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
              that it has a more-or-less normal.</p>
              <button className='simpleButton bg-[#292F36] px-[25px] sm:px-[29px] md:px-[33px] lg:px-[37px] xl:px-[41px] flex justify-center items-center gap-[13px]'>Our Concept <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
              <path d="M1.5 8.4353L15.2232 8.29845M10.1182 1.91125L16.6412 8.43424L9.98677 15.0886" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg></button>
            </TextAnimation>
          </div>
          
          <div className='flex-1'>
            <img src={sectimage1} alt=''/>
          </div>
        </div>
        <div className='flex justify-center items-center md:flex-row flex-col gap-[40px] container mx-auto mt-[100px] sm:mt-[125px] md:mt-[130px] lg:mt-[155px] xl:mt-[165px] 2xl:mt-[180px]'>
        <div className='flex-1'>
            <img src={sectimage2} alt=''/>
          </div>
          <div className='flex-1 md:block flex flex-col justify-center items-center'>
          <TextAnimation animationClass="visible">
              <h2 className='headingtag text-[30px] lg:text-[35px] xl:text-[50px] mb-[18px] xl:mb-[23px]'>The End Result</h2>
              <p className='text-center md:text-left pragraphtag text-[#4D5053] mb-[22px] md:mb-[25px] lg:mb-[33px] xl:mb-[41px]'>It is a long established fact that a reader will be distracted by the of readable content of a page 
              when lookings at its layouts the points of using 
              that it has a more-or-less normal.</p>
              <button className='simpleButton bg-[#292F36] px-[25px] sm:px-[29px] md:px-[33px] lg:px-[37px] xl:px-[41px] flex justify-center items-center gap-[13px]'>Our Portfolio <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
              <path d="M1.5 8.4353L15.2232 8.29845M10.1182 1.91125L16.6412 8.43424L9.98677 15.0886" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
              </svg></button>
              </TextAnimation>
          </div>
        </div>

          {/* section 4 */}

        <div className='container mx-auto mt-[100px] sm:mt-[120px] md:mt-[140px] lg:mt-[160px] xl:mt-[185px] 2xl:mt-[206px]'>
          <div className='bg-[#D8A876] px-[20px] sm:px-[24px] md:px-[26px] pb-[25px] sm:pb-[35px] md:pb-[40px] lg:pb-[55px] xl:pb-[70px] 2xl:pb-[88px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] xl:rounded-[50px]'>
                <h2 className='headingtag text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[78px] xl:pt-[80px] 2xl:pt-[88px] text-center tracking-[1px] font-normal text-[#fff] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[35px] xl:pb-[36px] 2xl:pb-[38px]'>What the People Thinks <br/>
                About Us</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[10px] sm:gap-[15px] md:gap-[20px]'>
                    <div className='bg-[#fff] rounded-[20px] pl-[20px] sm:pl-[25px] md:pl-[30px] lg:pl-[35px] xl:pl-[36px] 2xl:pl-[38px] '>
                      <TextAnimation animationClass='visible'>
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
                      <TextAnimationRight animationClass='visibles'>
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
        </div>


        <div className='container mx-auto mt-[180px] md:mt-[205px] lg:mt-[255px] xl:mt-[275px] 2xl:mt-[295px] '>
          <h2 className='headingtag text-[28px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] tracking-[1px] text-center sm:px-[15%] md:px-[25%] mb-[45px] sm:mb-[50px] md:mb-[65px] lg:mb-[80px] xl:mb-[98px]'>Creative project? Let's have
          a productive talk.</h2>
          <form className='sm:px-0 px-3'>
            <div className='flex gap-[15%] xl:gap-[235.99px] 2xl:gap-[265.99px] mb-[155px] md:mb-[165px] lg:mb-[185px] xl:mb-[205px] 2xl:mb-[235px] '>
              <input className='w-screen border-b-[1px] border-[#000] outline-none pb-[11px] placeholder:text-[20px] placeholder:lg:text-[25px] placeholder:xl:text-[30px] placeholder:text-[#4D5053] jost leading-[150%] tracking-[0.3px] pt-[5px]' type='name' placeholder='Name'/> 
              <input className='w-screen border-b-[1px] border-[#000] outline-none pb-[11px] placeholder:text-[20px] placeholder:lg:text-[25px] placeholder:xl:text-[30px] placeholder:text-[#4D5053] jost leading-[150%] tracking-[0.3px] pt-[5px]' type='Email' placeholder='Email'/>
            </div>
            <input className='w-full border-b-[1px] border-[#000] outline-none pb-[11px] placeholder:text-[20px] placeholder:lg:text-[25px] placeholder:xl:text-[30px] placeholder:text-[#4D5053] jost leading-[150%] tracking-[0.3px] pt-[5px]' type='text' placeholder='Message'/>

            <div className='flex justify-center items-center mb-[100px] sm:mb-[150px] md:mb-[200px] lg:mb-[280px] xl:mb-[380px]'>
            <button className='flex justify-center items-center gap-[9px] simpleButton bg-[#292F36] px-[38px] md:px-[40px] lg:px-[45px] xl:px-[54px] mt-[34px] lg:mt-[41px] xl:mt-[51px]'>Send Now <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M1 8.43535L14.7232 8.2985M9.61818 1.91131L16.1412 8.4343L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg></button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Aboutus;
