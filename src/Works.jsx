import  { useRef, useEffect, useState } from "react";
import { gsap ,Expo } from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {AnimatePresence, motion} from "framer-motion";
import "./index.css";

gsap.registerPlugin(ScrollSmoother);

const Works = () => {
    useEffect(()=>{
        let skewSetter = gsap.quickTo("img", "skewY"), // fast
        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

        ScrollSmoother.create({
            wrapper: "#wrapper",
            content: "#content",
            smooth: 2,
        speed: 3,
            effects: true,
            onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
            onStop: () => skewSetter(0)
        });

    },[]);


  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
    <div className="">
        <h1 className="text">Work</h1>
            <h1 aria-hidden="true" className="text outline-text">Work</h1>
            <h1 aria-hidden="true" className="text filter-text">Work</h1>

            <div id="wrapper">
                <section id="content">
                    <section className="images bg-[#1e1e1e] mx-screen">
                        <a href="https://get-xml-news.onrender.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="0.8" src="images/vendorMachine.png" alt=""/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="0.9" src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt=""/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="1" src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt=""/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="1.1" src="https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80" alt=""/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="0.9" src="https://images.unsplash.com/photo-1514689832698-319d3bcac5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80" alt=""/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="1.2" src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt=""/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="0.8" src="https://images.unsplash.com/photo-1588007375246-3ee823ef4851?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" data-speed="0.8"><img data-speed="1" src="https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/></a>
                    </section>
                </section>
            </div>
    </div>
    </motion.div>
  )
};

export default Works;