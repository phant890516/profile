import React, { useState, useEffect, useRef } from 'react';
import { Monitor, User, Code, Mail, ExternalLink, Github, ChevronRight, Send, Layers, Cpu, Database, Zap, ArrowRight } from 'lucide-react';

const Works2 = () => {
  const works = [
    { 
      id: 1, 
      title: 'News App', 
      cat: 'javascript api', 
      img: 'images/vendorMachine.png',
      pos: 'lg:top-20 lg:left-0',
      url:"https://get-xml-news.onrender.com" 
    },
    { 
      id: 2, 
      title: 'Wolf Hunter', 
      cat: 'Next.Js', 
      img: 'images/wolf_hunter_page.png',
      pos: 'lg:top-40 lg:right-0',
      url:"https://wolfhunter2023.onrender.com/" 
    },
    { 
      id: 3, 
      title: 'Subkari EC site', 
      cat: 'WEB DESIGN', 
      img: 'images/Subkari.png',
      pos: 'lg:top-[500px] lg:left-20',
      url:"https://subkari.onrender.com" 
    },
    { 
      id: 4, 
      title: 'Galaxy', 
      cat: '3D SIMULATION', 
      img: 'images/galaxy.png',
      pos: 'lg:top-[450px] lg:right-20',
      url:"https://galaxy-simulator-sigma.vercel.app/" 
    },
    { 
      id: 5, 
      title: 'Budgeting App', 
      cat: 'FIREBASE', 
      img: 'images/budgeting16-9.png',
      pos: 'lg:top-[800px] lg:left-60',
      url:"https://studio--studio-1553764776-f6733.us-central1.hosted.app/" 
    },
    { 
      id: 6, 
      title: 'Water Simulation', 
      cat: 'Three.Js', 
      img: 'images/water.png',
      pos: 'lg:top-[1000px] lg:right-20',
      url:"" 
    },

  ];

  return (
    <section className="min-h-screen w-full bg-[#080808] pt-32 pb-20 px-4 animate-page-enter">
      <div className="max-w-6xl mx-auto relative min-h-[1500px]">
        
        {/* Page Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-900 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            WORK
          </h2>
          <p className="text-gray-500 font-mono mt-2 tracking-widest">PROJECTS IN 2025</p>
        </div>

        {/* Scattered Grid */}
        <div className="relative flex flex-col lg:block gap-12 lg:gap-0">
          {works.map((work) => (
            <a href={work.url} target='_blank' rel="noopener noreferrer">
            <div 
              key={work.id} 
              className={`
                lg:absolute ${work.pos} w-full lg:w-[450px] group cursor-pointer
                transition-all duration-500 hover:z-20
              `}
            >
              <div className="relative bg-gray-900 border border-gray-800 p-2 transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 shadow-2xl">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-purple-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
                </div>

                {/* Caption */}
                <div className="mt-4 flex justify-between items-end px-2 pb-2">
                  <div>
                    <p className="text-xs text-purple-400 font-mono mb-1">{work.cat}</p>
                    <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-purple-300 transition-colors">{work.title}</h3>
                  </div>
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                    <ArrowRight size={16} className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Works2;