import React from 'react';
import { NavLink} from 'react-router-dom';

const Footer = () => {
    return (
            <footer className="mt-[31px] container mx-auto">
              <div className="pl-6 sm grid grid-cols-2 sm:grid-cols-2 sm:justify-items-center lg:flex lg:justify-around gap-[20px] sm:gap-[25px] md:gap-[60px] lg:gap-[50px] xl:gap-[101px]">
                {/* Column 1: About Us */}
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M10.4167 41.6667V22.6167L6.3854 25.7209L5.12915 24.0709L25 8.85425L44.8708 24.0709L43.6146 25.7084L39.5833 22.6167V41.6667H10.4167ZM16.6667 30.7709C16.2361 30.7709 15.8611 30.6112 15.5417 30.2917C15.2222 29.9723 15.0625 29.5973 15.0625 29.1667C15.0625 28.7362 15.2222 28.3612 15.5417 28.0417C15.8611 27.7223 16.2361 27.5626 16.6667 27.5626C17.0972 27.5626 17.4722 27.7223 17.7917 28.0417C18.1111 28.3612 18.2708 28.7362 18.2708 29.1667C18.2708 29.5973 18.1111 29.9723 17.7917 30.2917C17.4722 30.6112 17.0972 30.7709 16.6667 30.7709ZM25 30.7709C24.5694 30.7709 24.1944 30.6112 23.875 30.2917C23.5555 29.9723 23.3958 29.5973 23.3958 29.1667C23.3958 28.7362 23.5555 28.3612 23.875 28.0417C24.1944 27.7223 24.5694 27.5626 25 27.5626C25.4305 27.5626 25.8055 27.7223 26.125 28.0417C26.4444 28.3612 26.6042 28.7362 26.6042 29.1667C26.6042 29.5973 26.4444 29.9723 26.125 30.2917C25.8055 30.6112 25.4305 30.7709 25 30.7709ZM33.3333 30.7709C32.9028 30.7709 32.5278 30.6112 32.2083 30.2917C31.8889 29.9723 31.7292 29.5973 31.7292 29.1667C31.7292 28.7362 31.8889 28.3612 32.2083 28.0417C32.5278 27.7223 32.9028 27.5626 33.3333 27.5626C33.7639 27.5626 34.1389 27.7223 34.4583 28.0417C34.7778 28.3612 34.9375 28.7362 34.9375 29.1667C34.9375 29.5973 34.7778 29.9723 34.4583 30.2917C34.1389 30.6112 33.7639 30.7709 33.3333 30.7709Z" fill="#CDA274"/>
</svg></span>
                    <h2 className="text-[#292F36] dm-serif-display text-[24px] leading-[30px] sm:text-[30px] sm:leading-[38px] md:text-[35px] md:leading-[44px] lg:text-[40px] lg:leading-[50px] font-normal">SELHONO</h2>
                  </div>
                  <p className="text-[#292F36] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] lg:leading-[33px] tracking-[0.22px] mt-[18px] md:w-[393px] xl:w-[493px]">
                    It is a long established fact that a reader will be distracted lookings.
                  </p>
                  <div className="flex gap-[25px] sm:gap-[30px] md:gap-[40px] xl:gap-[54px] mt-[21px] lg:mt-[31px]">
                    <a href="#"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1367 4.09375C16.8398 3.56641 17.4727 2.93359 17.9648 2.19531C17.332 2.47656 16.5938 2.6875 15.8555 2.75781C16.6289 2.30078 17.1914 1.59766 17.4727 0.71875C16.7695 1.14062 15.9609 1.45703 15.1523 1.63281C14.4492 0.894531 13.5 0.472656 12.4453 0.472656C10.4062 0.472656 8.75391 2.125 8.75391 4.16406C8.75391 4.44531 8.78906 4.72656 8.85938 5.00781C5.80078 4.83203 3.05859 3.35547 1.23047 1.14062C0.914062 1.66797 0.738281 2.30078 0.738281 3.00391C0.738281 4.26953 1.37109 5.39453 2.39062 6.0625C1.79297 6.02734 1.19531 5.88672 0.703125 5.60547V5.64062C0.703125 7.43359 1.96875 8.91016 3.65625 9.26172C3.375 9.33203 3.02344 9.40234 2.70703 9.40234C2.46094 9.40234 2.25 9.36719 2.00391 9.33203C2.46094 10.8086 3.83203 11.8633 5.44922 11.8984C4.18359 12.8828 2.60156 13.4805 0.878906 13.4805C0.5625 13.4805 0.28125 13.4453 0 13.4102C1.61719 14.4648 3.55078 15.0625 5.66016 15.0625C12.4453 15.0625 16.1367 9.47266 16.1367 4.58594C16.1367 4.41016 16.1367 4.26953 16.1367 4.09375Z" fill="#292F36"/>
</svg>
</a>
                    <a href="#"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1367 4.09375C16.8398 3.56641 17.4727 2.93359 17.9648 2.19531C17.332 2.47656 16.5938 2.6875 15.8555 2.75781C16.6289 2.30078 17.1914 1.59766 17.4727 0.71875C16.7695 1.14062 15.9609 1.45703 15.1523 1.63281C14.4492 0.894531 13.5 0.472656 12.4453 0.472656C10.4062 0.472656 8.75391 2.125 8.75391 4.16406C8.75391 4.44531 8.78906 4.72656 8.85938 5.00781C5.80078 4.83203 3.05859 3.35547 1.23047 1.14062C0.914062 1.66797 0.738281 2.30078 0.738281 3.00391C0.738281 4.26953 1.37109 5.39453 2.39062 6.0625C1.79297 6.02734 1.19531 5.88672 0.703125 5.60547V5.64062C0.703125 7.43359 1.96875 8.91016 3.65625 9.26172C3.375 9.33203 3.02344 9.40234 2.70703 9.40234C2.46094 9.40234 2.25 9.36719 2.00391 9.33203C2.46094 10.8086 3.83203 11.8633 5.44922 11.8984C4.18359 12.8828 2.60156 13.4805 0.878906 13.4805C0.5625 13.4805 0.28125 13.4453 0 13.4102C1.61719 14.4648 3.55078 15.0625 5.66016 15.0625C12.4453 15.0625 16.1367 9.47266 16.1367 4.58594C16.1367 4.41016 16.1367 4.26953 16.1367 4.09375Z" fill="#292F36"/>
</svg>
</a>
                    <a href="#"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.64062 16.5V5.98828H0.371094V16.5H3.64062ZM1.98828 4.58203C3.04297 4.58203 3.88672 3.70312 3.88672 2.64844C3.88672 1.62891 3.04297 0.785156 1.98828 0.785156C0.96875 0.785156 0.125 1.62891 0.125 2.64844C0.125 3.70312 0.96875 4.58203 1.98828 4.58203ZM15.8398 16.5H15.875V10.7344C15.875 7.92188 15.2422 5.74219 11.9375 5.74219C10.3555 5.74219 9.30078 6.62109 8.84375 7.42969H8.80859V5.98828H5.67969V16.5H8.94922V11.2969C8.94922 9.92578 9.19531 8.625 10.8828 8.625C12.5703 8.625 12.6055 10.1719 12.6055 11.4023V16.5H15.8398Z" fill="#292F36"/>
</svg>
</a>
                    <a href="#"><svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.18359 10.875L9.67578 7.64062H6.54688V5.53125C6.54688 4.61719 6.96875 3.77344 8.375 3.77344H9.81641V0.996094C9.81641 0.996094 8.51562 0.75 7.28516 0.75C4.71875 0.75 3.03125 2.33203 3.03125 5.14453V7.64062H0.148438V10.875H3.03125V18.75H6.54688V10.875H9.18359Z" fill="#292F36"/>
</svg>
</a>
                  </div>
                </div>
        
                {/* Column 2: Navigation */}
                <div className="flex flex-col gap-[9px]">
                  <h3 className="text-[#292F36] dm-serif-display text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] md:text-[25px] md:leading-[31.25px] font-normal">Pages</h3>
                  <ul className=" text-[#4D5053] jost text-[16px] leading-[150%] tracking-[0.2px] sm:text-[22px] sm:leading-[200%] sm:tracking-[0.22px] md:text-[22px] md:leading-[300%] md:tracking-[0.22px] font-normal flex-col">
                    <li><NavLink to="/AboutUs" className="hover:text-[#C76904] footermanu">About Us</NavLink></li>
                    <li><NavLink to="/OurProjects" className="hover:text-[#C76904] footermanu">Our Projects</NavLink></li>
                    <li><NavLink to="/OurTeam" className="hover:text-[#C76904] footermanu">Our Team</NavLink></li>
                    <li><NavLink to="/Contact Us" className="hover:text-[#C76904] footermanu">Contact Us</NavLink></li>
                    <li><NavLink to="/Services_" className="hover:text-[#C76904] footermanu">Single Services</NavLink></li>
                    
                  </ul>
                </div>
        
                {/* Column 3: Services and Contact */}
                <div className="flex flex-col  gap-[9px]">
                    <h3 className="text-[#292F36] dm-serif-display text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] md:text-[25px] md:leading-[31.25px] font-normal">Services</h3>
                    <ul className="text-[#4D5053] jost text-[16px] leading-[150%] tracking-[0.2px] sm:text-[22px] sm:leading-[200%] sm:tracking-[0.22px] md:text-[22px] md:leading-[300%] md:tracking-[0.22px] font-normal">
                      <li><a href="Kitchen" className="hover:text-[#C76904] footermanu">Kitchen</a></li>
                      <li><a href="Living Area" className="hover:text-[#C76904] footermanu">Living Area</a></li>
                      <li><a href="Bathroom" className="hover:text-[#C76904] footermanu">Bathroom</a></li>
                      <li><a href="Dining Hall" className="hover:text-[#C76904] footermanu">Dining Hall</a></li>
                      <li><a href="Bedroom" className="hover:text-[#C76904] footermanu">Bedroom</a></li>
                      <li><NavLink to="ArticlesandNews" className="hover:text-[#C76904] footermanu">Articles& News</NavLink></li>
                    </ul>
                </div>

                <div className="flex flex-col  gap-[9px]">
                    <h3 className="text-[#292F36] dm-serif-display text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] md:text-[25px] md:leading-[31.25px] font-normal">Contact</h3>
                    <address className="text-[#4D5053] jost text-[16px] leading-[150%] tracking-[0.2px] sm:text-[22px] sm:leading-[200%] sm:tracking-[0.22px] md:text-[22px] md:leading-[300%] md:tracking-[0.22px] font-normal">
                      55 East Birchwood Ave.<br />
                      Brooklyn, New York 11201<br />
                      contact@selhono.com<br />
                      (123) 456 - 7890
                    </address>
                </div>
              </div>
              <div className="text-center pragraphtag jost text-[#4D5053] mt-[48px] sm:mt-[50px] md:mt-[68px]  lg:mt-[80px] xl:mt-[108px] 2xl:mt-[138px] mb-[12px] md:mb-[15px]">
                Copyright © SELHONO
              </div>
            </footer>
    );
};

export default Footer;