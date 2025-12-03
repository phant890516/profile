import React, { useState, useEffect, useRef } from 'react';
import { Monitor, User, Code, Mail, ExternalLink, Github, ChevronRight, Send, Layers, Cpu, Database, Zap, ArrowRight } from 'lucide-react';
const Contact2 = () => {
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center p-4 animate-page-enter overflow-hidden relative">
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="w-full max-w-3xl relative z-10">
        <div className="bg-gray-900/90 border border-green-500/30 backdrop-blur-md shadow-[0_0_50px_rgba(0,255,0,0.1)] overflow-hidden rounded-lg">
          
          {/* Terminal Header */}
          <div className="bg-gray-800/80 border-b border-gray-700 p-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-mono text-gray-400">root@portfolio:~/contact</div>
            <div className="w-10"></div>
          </div>

          <div className="p-8 md:p-12 font-mono">
            <h2 className="text-2xl md:text-3xl text-green-500 mb-2 font-bold typing-effect">
              $ INITIATE_TRANSMISSION
            </h2>
            <p className="text-gray-500 text-sm mb-8">// Please enter your credentials to establish connection.</p>

            <form className="space-y-6">
              <div className="group">
                <label className="block text-xs text-green-400 mb-2 group-focus-within:text-white transition-colors">
                  &gt; ENTER_FULL_NAME_
                </label>
                <input type="text" className="w-full bg-black border-b border-gray-700 text-green-300 p-3 focus:outline-none focus:border-green-500 transition-colors placeholder-gray-800" placeholder="Jane Doe" />
              </div>

              <div className="group">
                <label className="block text-xs text-green-400 mb-2 group-focus-within:text-white transition-colors">
                  &gt; ENTER_EMAIL_ADDRESS_
                </label>
                <input type="email" className="w-full bg-black border-b border-gray-700 text-green-300 p-3 focus:outline-none focus:border-green-500 transition-colors placeholder-gray-800" placeholder="jane@example.com" />
              </div>

              <div className="group">
                <label className="block text-xs text-green-400 mb-2 group-focus-within:text-white transition-colors">
                  &gt; INPUT_MESSAGE_DATA_
                </label>
                <textarea rows="4" className="w-full bg-black border-b border-gray-700 text-green-300 p-3 focus:outline-none focus:border-green-500 transition-colors placeholder-gray-800" placeholder="System message..."></textarea>
              </div>

              <button type="button" className="w-full bg-green-900/20 border border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black font-bold py-4 transition-all uppercase tracking-widest flex items-center justify-center gap-2 mt-8">
                <span className="animate-pulse">_</span> EXECUTE_SEND()
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact2;