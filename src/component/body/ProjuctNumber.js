import React from 'react';
import line from './FollowProject/Line.svg';
import AnimatedCounter from './AnimatedCounter';


const ProjuctNumber = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center px-[20px] sm:px-[32px] md:px-[48px] lg:px-[64px] mt-[100px] sm:mt-[200px] md:mt-[250px] lg:mt-[328px] mb-[100px] sm:mb-[200px] md:mb-[300px] lg:mb-[373px]'>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='headingtag text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[85px] tracking-[1.7px] text-[#CDA274]'>
                        <AnimatedCounter endValue={12} duration={2000} />
                    </h3>
                    <p className='pragraphtag jost text-[#4D5053]'>Years Of Experience</p>
                </div>
                <img src={line} alt=''/>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='headingtag text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[85px] tracking-[1.7px] text-[#CDA274]'>
                        <AnimatedCounter endValue={1074} duration={3000} />
                    </h3>
                    <p className='pragraphtag jost text-[#4D5053]'>Success Project</p>
                </div>
                <img src={line} alt=''/>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='headingtag text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[85px] tracking-[1.7px] text-[#CDA274]'>
                        <AnimatedCounter endValue={98} duration={2500} />
                    </h3>
                    <p className='pragraphtag jost text-[#4D5053]'>Active Project</p>
                </div>
                <img src={line} alt=''/>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='headingtag text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[85px] tracking-[1.7px] text-[#CDA274]'>
                        <AnimatedCounter endValue={583} duration={3000} />
                    </h3>
                    <p className='pragraphtag jost text-[#4D5053]'>Happy CUstomers</p>
                </div>
            </div>
        </div>
    );
};

export default ProjuctNumber;
