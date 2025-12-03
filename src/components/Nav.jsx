import { useRef, useEffect, useState } from 'react'
import { Outlet,BrowserRouter, Routes, Route, Link, useNavigate, useLocation} from "react-router-dom";
import { gsap , Expo } from "gsap";
import { HoverNav } from '../hooks/hover-nav';

const NavItems=()=>{
  return(
    <div className="menu-container pr-[20px]">
      <ul className="menu flex flex-col items-center gap-4 sm:flex-row md:gap-6 p-[20px] relative z-20;">
          <li className="nav-li-top"><Link to="/" className='hover-target'><span className='target-text'>TOPページ</span></Link></li>
          <li className="nav-li-about"><Link to="/about" className='hover-target'><span className='target-text'>プロフィール</span></Link></li>
          <li className="nav-li-works"><Link to="/works" className='hover-target'><span className='target-text'>作品</span></Link></li>
          <li className="nav-li-contact"><Link to="/contact" className='hover-target'><span className='target-text'>コンタクト</span></Link></li>
      </ul>
    </div>
  );
};
/////////////////////////////////////////////////////////////////////////Nav/////////////////////////////////////////////////////////////////////////////////////
const Nav=()=> {
  const location = useLocation();
  const isAbout = location.pathname === "/about";
  const[isOpen,setIsOpen]=useState(false);
  const toggleMenu = ()=>setIsOpen((prevIsOpen)=>!prevIsOpen);

   useEffect(() => {
        gsap.fromTo('.logo span', 
          { y: -40, autoAlpha: 0 },     // 40pxから、透明
          { y: 0,  autoAlpha: 1,        // 表示
            duration: 0.8,
            delay: 0.1,
            ease: "expo.out",
          }
        );

        gsap.fromTo('nav ul li',
            { y: -40, autoAlpha: 0 },     // 40から、透明
            { y: 0,  autoAlpha: 1,        // 表示
              duration: 1,
              delay: 0.8,
              ease: "expo.out",
              stagger: 0.4
            }
          );
     },[]);

  useEffect(() => {
    HoverNav(".hover-target");
  }, []);

  return( 
      <div className="fixed top-0 overflow-hidden w-screen z-50 h-[90px] bg-[#060606]">
          <nav className="w-full grid grid-cols-2 text-white">
              <div className="logo px-[25px]">
                  <span className="font-sans inline-block h-full text-[60px] font-[Infected] drop-shadow-[2px_2px_3px_rgba(0,0,0,0.4)]">HY</span>
              </div>
             
              <button  onClick={() => {
                    console.log("before:", isOpen);
                    toggleMenu();
                    console.log("after:", !isOpen);
                  }}  className="z-30 text-neutral-400 hover:text-white focus:outline-none sm:hidden flex absolute top-4 right-4" aria-label="Toggle menu">
                <img src={isOpen?"/assets/close.svg":"/assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
              </button>
              <nav className="sm:flex hidden justify-end pr-[20px]">
                  <NavItems />
              </nav>
              
            <div className={`nav-sidebar fixed left-0 right-0 transition-transform duration-500 ease-in-out z-20 mx-auto sm:hidden block overflow-hidden ${isOpen?'scale-y-100 origin-top' : 'scale-y-0 origin-bottom'} bg-black`}>
                <nav className="p-5 flex flex-col">
                    <NavItems />
                </nav>
            </div>

          </nav>
      </div>

      )
    };

export default Nav;