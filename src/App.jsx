import { useRef, useEffect, useState } from 'react'
import { Outlet,BrowserRouter, Routes, Route, Link, useNavigate, useLocation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import { gsap , Expo } from "gsap";
import { HoverNav } from './hooks/hover-nav';
import Nav from './components/Nav';
import Landing from './landing.jsx'
import About from './About.jsx'
import Works from './Works.jsx'
import Contact from './Contact.jsx'
import './index.css'

function AnimatedRoutes(){
  const location = useLocation();

  return(
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <PageWrapper>
            <Landing />
          </PageWrapper>} />
        <Route path='/about' element={
          <PageWrapper>
            <About />
          </PageWrapper>  
        } />
        <Route path='/works' element={
          <PageWrapper>  
            <Works />
          </PageWrapper>
        } />
        <Route path='/contact' element={
          <PageWrapper>
            <Contact />
          </PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function PageWrapper({children}){
  return(
    <motion.div
      initial={{opacity:0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={{opacity:1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
      exit={{opacity:0,clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
      transition={{duration: 1, ease: [0.87, 0, 0.13, 1]}}
    >
      {children}
    </motion.div>
  )
}
const App=()=>{
  return(
    <BrowserRouter>
    <div className="max-w-full mx-auto">  
        <Nav />
        <AnimatedRoutes />
    </div>
    </BrowserRouter>
  );
}

export default App;
