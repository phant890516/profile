import React, { useState, useEffect, useRef } from 'react';
import { Monitor, User, Code, Mail, ExternalLink, Github, ChevronRight, Send, Layers, Cpu, Database, Zap, ArrowRight } from 'lucide-react';

const About3 = () => {
  const skills = [
    { name: 'HTML', exp: '1.5 YEARS', icon: <Layers className="text-orange-500" />, color: 'border-orange-500' },
    { name: 'CSS', exp: '1.5 YEARS', icon: <Monitor className="text-blue-500" />, color: 'border-blue-500' },
    { name: 'JAVASCRIPT', exp: '1.5 YEARS', icon: <Zap className="text-yellow-400" />, color: 'border-yellow-400' },
    { name: 'PYTHON', exp: '1.5 YEARS', icon: <Code className="text-blue-300" />, color: 'border-blue-300' },
  ];

  return (
    <section className="min-h-screen w-full bg-black pt-24 pb-20 px-6 md:px-12 animate-page-enter relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-7xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 relative z-10">
            ABOUT ME
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-black font-orbitron text-cyan-500/10 blur-sm scale-110 select-none">
            PROFILE
          </div>
          <p className="mt-4 text-cyan-400 tracking-[0.2em] text-sm font-mono border-y border-cyan-900/50 py-1 inline-block px-4">
            // SYSTEM STATUS: ONLINE //
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Cyberpunk Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md aspect-[4/5]">
               {/* Neon Border Effect */}
               <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-pink-500 opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
               
               <div className="relative h-full bg-gray-900 clip-corner-tl-br p-1 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop" 
                    alt="Profile"
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Overlay UI Elements */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border-l-2 border-cyan-500 pl-3 py-1">
                    <p className="text-xs text-cyan-400 font-mono">ID: LIN_HENGYOU</p>
                    <p className="text-[10px] text-gray-400">ROLE: DEVELOPER</p>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <div className="flex gap-1">
                      {[1,2,3].map(i => (
                        <div key={i} className={`w-1 h-4 ${i===3 ? 'bg-pink-500 animate-pulse' : 'bg-gray-600'}`}></div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="space-y-8 relative">
                {/* Decorative Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-50"></div>
                
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ff0055]"></span>
                    INTRODUCTION v2.0
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    這個網站是使用 React 製作的個人作品集。這裡彙整了我過去的創作與習得的技能。
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono bg-gray-900/50 p-6 border-l-4 border-gray-700">
                    2000年生於台灣，現居大阪。<br/>
                    目標：全端工程師 (Full-Stack Developer)<br/><br/>
                    <span className="text-cyan-400"># Current Focus:</span> React, Web Design, UI/UX<br/>
                    <span className="text-purple-400"># Background:</span> Maya, Blender 3D<br/>
                    <span className="text-green-400"># Learning:</span> WebGL, Shaders, Node.js
                  </p>
                </div>

                <div className="pl-8 flex gap-4 pt-4">
                  <button className="group px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all clip-corner-br font-bold flex items-center gap-2">
                    <Mail size={18} /> EMAIL
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button className="group px-6 py-3 bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition-all clip-corner-br font-bold flex items-center gap-2">
                    <Github size={18} /> GITHUB
                    <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
                  </button>
                </div>
             </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-gray-700 flex-1"></div>
             <h3 className="text-2xl font-orbitron text-white"><span className="text-cyan-400">My Skill</span> - LANGUAGE</h3>
             <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="relative group bg-gray-900/40 border border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300 clip-corner-br overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                   <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                   </div>
                </div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`p-4 rounded-full border ${skill.color} bg-black/50 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-1 tracking-wider">{skill.name}</h4>
                  <p className="text-xs text-gray-500 mb-4">{skill.exp}</p>
                  
                  {/* Progress Bar Style Decoration */}
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 w-[75%] relative">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-xs text-cyan-400 font-mono border-t border-gray-700 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                    <Database size={12} /> GENERATE MISSION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;