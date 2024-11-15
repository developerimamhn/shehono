import React, { useState } from 'react';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Home from '../pagesnum/Home';
import Aboutus from '../aboutUs/Aboutus';
import Services from '../services22/Services';
import Servicesto from '../services0.2/Servicesto';
import Pricing from '../pricing/Pricing';
import OurProject from '../ourprojects/OurProject';
import ProjectDetails from '../projectDetails/ProjectDetails';
import ArticleNews from '../articleNews/ArticleNews';
import BlogDetails from '../blogDetails/BlogDetails';

const Navbar = () => {
    const [toggle, setToggle] =useState(true);
    return (
        <>
        <div className='container mx-auto'>
            <div className='flex justify-between  items-center py-[17px] sm:py-[20px] md:py-[25px] lg:py-[30px] xl:py-[35px] 2xl:py-[54px] bg-[#fff] container mx-auto'>
                <Link to='/' className='flex justify-center items-center text-[#292F36] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-[125%] dm-serif-display '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M10.4167 41.6667V22.6167L6.3854 25.7209L5.12915 24.0709L25 8.85425L44.8708 24.0709L43.6146 25.7084L39.5833 22.6167V41.6667H10.4167ZM16.6667 30.7709C16.2361 30.7709 15.8611 30.6112 15.5417 30.2917C15.2222 29.9723 15.0625 29.5973 15.0625 29.1667C15.0625 28.7362 15.2222 28.3612 15.5417 28.0417C15.8611 27.7223 16.2361 27.5626 16.6667 27.5626C17.0972 27.5626 17.4722 27.7223 17.7917 28.0417C18.1111 28.3612 18.2708 28.7362 18.2708 29.1667C18.2708 29.5973 18.1111 29.9723 17.7917 30.2917C17.4722 30.6112 17.0972 30.7709 16.6667 30.7709ZM25 30.7709C24.5694 30.7709 24.1944 30.6112 23.875 30.2917C23.5555 29.9723 23.3958 29.5973 23.3958 29.1667C23.3958 28.7362 23.5555 28.3612 23.875 28.0417C24.1944 27.7223 24.5694 27.5626 25 27.5626C25.4305 27.5626 25.8055 27.7223 26.125 28.0417C26.4444 28.3612 26.6042 28.7362 26.6042 29.1667C26.6042 29.5973 26.4444 29.9723 26.125 30.2917C25.8055 30.6112 25.4305 30.7709 25 30.7709ZM33.3333 30.7709C32.9028 30.7709 32.5278 30.6112 32.2083 30.2917C31.8889 29.9723 31.7292 29.5973 31.7292 29.1667C31.7292 28.7362 31.8889 28.3612 32.2083 28.0417C32.5278 27.7223 32.9028 27.5626 33.3333 27.5626C33.7639 27.5626 34.1389 27.7223 34.4583 28.0417C34.7778 28.3612 34.9375 28.7362 34.9375 29.1667C34.9375 29.5973 34.7778 29.9723 34.4583 30.2917C34.1389 30.6112 33.7639 30.7709 33.3333 30.7709Z" fill="#CDA274"/>
                    </svg>
                    SELHONO
                </Link>
                <div className='flex justify-center gap-6 items-center'>
                <NavLink className='navbarManu md:hidden block' to="/Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <g opacity="0.8">
                    <path d="M16.6842 16.6844L21.9999 22.0001M19.3755 10.1875C19.3755 15.2616 15.2622 19.375 10.188 19.375C5.11393 19.375 1.00055 15.2616 1.00055 10.1875C1.00055 5.11338 5.11393 1 10.188 1C15.2622 1 19.3755 5.11338 19.3755 10.1875Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </NavLink>
                {
                    toggle ?
                    <FaBars onClick={()=>setToggle(!toggle)} className='md:hidden text-[26px]'/>
                    :
                    <IoClose onClick={()=>setToggle(!toggle)} className='md:hidden text-[26px]'/>
                }
                </div>
                <ul className={`flex md:justify-end md:items-center gap-6 sm:gap-6 md:gap-4 lg:gap-5 xl:gap-6 flex-col md:flex-row md:relative fixed md:top-0 md:left-0 top-[100px]  md:bg-transparent bg-[#bdbdbd] md:w-auto w-3/4 md:h-auto h-screen md:p-0 p-4 rounded-tr-full duration-150 z-[999] 
                ${toggle ? 'left-[100%]' : 'left-0'}
                `}>
                    <NavLink className='navbarManu' to="/Home">Home</NavLink>
                    <NavLink className='navbarManu' to="/Pages">Pages</NavLink>
                    <NavLink className='navbarManu' to="/Services">Services</NavLink>
                    <NavLink className='navbarManu' to="/Project">Project</NavLink>
                    <NavLink className='navbarManu' to="/Blog">Blog</NavLink>
                    <NavLink className='navbarManu' to="/Contact">Contact</NavLink>
                    <NavLink className='navbarManu' to="/Pricing">Pricing</NavLink>
                    <NavLink className='navbarManu md:block hidden' to="/Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <g opacity="0.8">
                    <path d="M16.6842 16.6844L21.9999 22.0001M19.3755 10.1875C19.3755 15.2616 15.2622 19.375 10.188 19.375C5.11393 19.375 1.00055 15.2616 1.00055 10.1875C1.00055 5.11338 5.11393 1 10.188 1C15.2622 1 19.3755 5.11338 19.3755 10.1875Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </NavLink>
                </ul>
                
            </div>
        </div>
        <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path='/AboutUs' element={<Aboutus/>}></Route>
                <Route path='/Services' element={<Services/>}></Route>
                <Route path='/Services_' element={<Servicesto/>}></Route>
                <Route path='/Pricing' element={<Pricing/>}></Route>
                <Route path='/Project' element={<OurProject/>}></Route>
                <Route path='/OurProjects' element={<ProjectDetails/>}></Route>
                <Route path='/ArticlesandNews' element={<ArticleNews/>}></Route>
                <Route path='/Blog' element={<BlogDetails/>}></Route>
        </Routes>
        </>
    );
};

export default Navbar;



