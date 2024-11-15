import React, { useEffect } from 'react';
// import Header from './component/Header/Header';
// import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import Navbar from './component/Header/Navbar';
import { useLocation } from 'react-router-dom';

const Component = () => {
    const pathname = useLocation();
    useEffect(() => {
        window.scrollTo(0,0)
    },[pathname]);
    return (
        <div>
            <Navbar/>
            {/* <Header/> */}
            {/* <Body/> */}
            <Footer/>
        </div>
    );
};

export default Component;