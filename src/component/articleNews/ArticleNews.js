import React from 'react';
import imagesone from './images/Rectangle 34.svg';
import imagetwo from './images/Rectangle 35.svg';
import imagethree from './images/Rectangle 36.svg';
import imagefore from './images/Rectangle 37.svg';

const ArticleNews = () => {
    return (
        <div>
            <div className='bgservicehero_5'>
                <h2 className='text-center pt-[178px] pb-[90px] headingtag text-[#fff] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]'>Articles& News</h2>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-center items-center my-[54px]">
                    <from className="flex justify-center items-center bg-[#F4F0EC] py-[18px] px-[17px] md:py-[22px] md:px-[21px] lg:py-[25px] lg:px-[24px] xl:py-[34px] xl:px-[33px] w-[70%] rounded-[20px]">
                        <input className='w-full border-none outline-none bg-transparent placeholder:text-[#CDA274] text-[#CDA274] jost text-[16px] lg:text-18px xl:text-[20px] 2xl:text-[22px]' type='text' placeholder='Search'/>
                        <a href='Search Aritcle' className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] lg:w-[25px] xl:w-[27px]' viewBox="0 0 27 27" fill="none">
                            <path d="M26.5872 24.2898L20.4818 18.1691C21.9517 16.2073 22.7452 13.8195 22.7425 11.3659C22.7425 5.09879 17.6565 0 11.405 0C5.15355 0 0.0675049 5.09879 0.0675049 11.3659C0.0675049 17.633 5.15355 22.7318 11.405 22.7318C13.8524 22.7345 16.2343 21.939 18.1912 20.4654L24.2966 26.5862C24.6057 26.8631 25.0088 27.011 25.4231 26.9994C25.8375 26.9877 26.2317 26.8175 26.5249 26.5237C26.818 26.2298 26.9878 25.8346 26.9994 25.4192C27.011 25.0038 26.8635 24.5997 26.5872 24.2898ZM3.30679 11.3659C3.30679 9.76023 3.78174 8.1906 4.67159 6.85552C5.56143 5.52043 6.8262 4.47986 8.30596 3.86539C9.78571 3.25092 11.414 3.09015 12.9849 3.4034C14.5558 3.71666 15.9988 4.48987 17.1313 5.62526C18.2639 6.76066 19.0352 8.20724 19.3476 9.78208C19.6601 11.3569 19.4997 12.9893 18.8868 14.4727C18.2739 15.9562 17.2359 17.2241 15.9041 18.1162C14.5724 19.0083 13.0067 19.4844 11.405 19.4844C9.25802 19.4818 7.1997 18.6257 5.68155 17.1037C4.1634 15.5818 3.30937 13.5183 3.30679 11.3659Z" fill="#CDA274"/>
                            </svg>
                        </a>
                    </from>
                </div>
                <div className="">
                    <h2 className='headingtag leading-[1px] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-[#292F36]'>Latest Post</h2>
                    <div className='flex justify-center flex-col lg:flex-row gap-[60px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] 2xl:gap-[71px] mt-[26px] lg:mt-[32px] xl:mt-[42px] 2xl:mt-[52px]'>
                        <img src={imagesone} alt=''/>
                        <div className=''>
                            <h3 className='headingtag text-[20px] lg:text-[23px] xl:text-[25px] leading-[125%] tracking-[0.5px] text-[#292F36] mb-[20] lg:mb-[22px]'>Low Cost Latest Invented Interior Designing Ideas</h3>
                            <p className='pragraphtag jost font-normal text-[#4D5053] mb-[20px] md:mb-[26px] lg:mb-[31px] xl:mb-[41px]'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br /> <br />

                            Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                            </p>
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] sm:text-[15px] lg:text-[16px] jost text-[#4D5053] leading-[150%] tracking-[0.16px] capitalize'>26 December,2022 </h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-10 lg:w-12 xl:w-[52px]" viewBox="0 0 52 52" fill="none">
                                <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 32.6855L29.7139 25.9998L23.771 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-[120px] md:mb-[140px] lg:mb-[162px] xl:mb-[190px]">
                    <h2 className='headingtag leading-[1px] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-[#292F36] mt-[100px] md:mt-[125px] lg:mt-[140px] xl:mt-[159px]'>Articles & News</h2>
                    <div className='flex justify-center flex-col md:flex-row gap-[60px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] 2xl:gap-[71px] mt-[40px] lg:mt-[52px] xl:mt-[62px] 2xl:mt-[77px]'>
                        <div className="flex justify-start flex-col">
                            <img src={imagethree} alt="" />
                            <h3 className='headingtag text-[20px] lg:text-[23px] xl:text-[25px] leading-[125%] tracking-[0.5px] text-[#292F36] mb-[18] lg:mb-[20px] mt-[15px]'>Let’s Get Solution For Building Construction Work</h3>
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] sm:text-[15px] lg:text-[16px] jost text-[#4D5053] leading-[150%] tracking-[0.16px] capitalize'>26 December,2022 </h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-10 lg:w-12 xl:w-[52px]" viewBox="0 0 52 52" fill="none">
                                <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 32.6855L29.7139 25.9998L23.771 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start flex-col">
                            <img src={imagetwo} alt="" />
                            <h3 className='headingtag text-[20px] lg:text-[23px] xl:text-[25px] leading-[125%] tracking-[0.5px] text-[#292F36] mb-[18] lg:mb-[20px] mt-[15px]'>Let’s Get Solution For Building Construction Work</h3>
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] sm:text-[15px] lg:text-[16px] jost text-[#4D5053] leading-[150%] tracking-[0.16px] capitalize'>26 December,2022 </h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-10 lg:w-12 xl:w-[52px]" viewBox="0 0 52 52" fill="none">
                                <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 32.6855L29.7139 25.9998L23.771 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start flex-col">
                            <img src={imagefore} alt="" />
                            <h3 className='headingtag text-[20px] lg:text-[23px] xl:text-[25px] leading-[125%] tracking-[0.5px] text-[#292F36] mb-[18] lg:mb-[20px] mt-[15px]'>Let’s Get Solution For Building Construction Work</h3>
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] sm:text-[15px] lg:text-[16px] jost text-[#4D5053] leading-[150%] tracking-[0.16px] capitalize'>26 December,2022 </h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-10 lg:w-12 xl:w-[52px]" viewBox="0 0 52 52" fill="none">
                                <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 32.6855L29.7139 25.9998L23.771 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleNews;