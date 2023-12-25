import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
import { RxCrossCircled } from "react-icons/rx";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";


const Header = () => {
   const [isMobile, setIsMobile] = useState(false)
  return (
    <div className="header">
      <header className="container header__container">
         <div className="header__logo">
             <img src={logo} alt="logo" className="header__logo-sp"/>
         </div>
         <div className={isMobile ? "header__nav" : "nav_isMobile"}
              onClick={() => setIsMobile(false)}
           >
            <div className="header__nav__closeMenu"
                onClick={() => setIsMobile(false)}
              >
               <RxCrossCircled />
            </div>
            <div className="header__item">
               <NavLink to='/home' className="header__link">
                    <span className="header__link-sp">Home</span>
               </NavLink>
            </div>
            <div className="header__item">
               <NavLink to='/about' className="header__link">
                    <span className="header__link-sp">About</span>
               </NavLink>
            </div>
            <div className="header__item">
               <NavLink to='skills' className="header__link">
                    <span className="header__link-sp">Skills</span>
               </NavLink>
            </div>
            <div className="header__item">
               <NavLink to='blogs' className="header__link">
                    <span className="header__link-sp">Blogs</span>
               </NavLink>
            </div>
            <div className="header__item">
               <NavLink target="_blank"  to='intellect' className="header__link">
                    <span className="header__link-sp">Intellect</span>
               </NavLink>
            </div>
            <div className="header__item">
               <NavLink to='announce' className="header__link">
                    <span className="header__link-sp">Announce</span>
               </NavLink>
            </div>
            <div className="header__item">
               <NavLink to='contact' className="header__link">
                    <span className="header__link-sp">Contact</span>
               </NavLink>
            </div>
            <div className="header__item">
               <NavLink to='or' className="header__link">
                    <span className="header__link-sp">card</span>
               </NavLink>
            </div>
         </div>
         <div className="header__menu" onClick={() => setIsMobile(!isMobile)}>
           {isMobile ?  '' :  <CgMenuGridO />}
         </div>
      </header>
    </div>
  )
}

export default Header