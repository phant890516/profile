import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Code, Layers, Zap, Terminal, Globe, Cpu, Atom, Gauge, PencilRuler, Timer, Server,Image, Video, Dices, MessageSquare, Send, X, Sparkles, Loader2 } from 'lucide-react';
import './About.css'

const CyberPortfolio = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [chatOpen, setChatOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const skillsSectionRef = useRef(null);
  // マウス位置によるパララックス効果
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  //skill boardの表示動画
  useEffect(()=>{
    const handleScroll = () =>{
      if(!skillsSectionRef.current) return;
      const element = skillsSectionRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      //進捗確認
      const distanceToStart = windowHeight - elementTop;
      const progress = Math.max(0,Math.min(1,distanceToStart/(elementHeight*0.6)));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[]);

  // グリッチトリガー
  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 300);
  };
  //Github event
  const handleGithubClick = () => {
    // _blank 
    // noopener,noreferrer 
    window.open("https://github.com/phant890516", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#00f3ff] selection:text-black overflow-x-hidden relative">

      {/* --- Background Elements --- */}
      <div className="fixed inset-0 z-0 cyber-grid pointer-events-none"></div>
      <div className="fixed inset-0 z-50 scanlines pointer-events-none opacity-20"></div>
      
      {/* Decorative Glow Spots */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#00f3ff] rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#006B99] rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>


      {/* --- Header --- */}
      <header className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-sm border-b border-[#00f3ff]/30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-cyber font-bold tracking-widest text-[#00f3ff] group cursor-pointer" onClick={triggerGlitch}>
            <span className={`glitch-text ${glitchActive ? 'glitch-active' : ''}`} data-text="LIN.DEV">LIN.DEV</span>
          </div>
          <nav className="hidden md:flex space-x-8 font-mono-cyber text-sm">
            {['TOP PAGE', 'SKILLS', 'WORKS', 'CONTACT'].map((item) => (
              <a key={item} href="#" className="relative group text-gray-400 hover:text-[#00f3ff] transition-colors duration-300">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#006B99]">&gt;</span>
                {item}
                <span className="block h-[1px] w-0 group-hover:w-full bg-[#00f3ff] transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>


      {/* --- Main Content --- */}
      <main className="relative z-10 pt-24 pb-20 px-4">
        
        {/* Title Section */}
        <section className="min-h-[50vh] flex flex-col justify-center items-center text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
             <span className="text-[20vw] font-cyber font-bold stroke-text text-transparent border-stroke">SYS.ADMIN</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-cyber font-black text-white mb-4 relative group hover:scale-105 transition-transform duration-500">
            <span className="absolute -inset-1 blur opacity-30 bg-gradient-to-r from-[#00f3ff] to-[#006B99] group-hover:opacity-60 transition-opacity duration-300"></span>
            <span className="relative z-10 glitch-text" data-text="ABOUT ME">ABOUT ME</span>
          </h1>
          <p className="font-mono-cyber text-[#00f3ff] tracking-[0.3em] text-lg animate-pulse">
            // SYSTEM STATUS: ONLINE //
          </p>
        </section>


        {/* Profile Details Grid */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40 items-center">
          
          {/* Left Column: Image with Cyber Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#00f3ff] to-[#0A0E27] opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-500 rounded-sm"></div>
            <div className="relative border border-[#00f3ff]/50 bg-black p-1">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#00f3ff]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#66E6FF]"></div>
              
              <div className="relative overflow-hidden h-[500px] w-full bg-gray-900">
                {/* Image Placeholder / Effect */}
                <img 
                  src="images/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 font-mono-cyber text-xs text-[#00f3ff] bg-black/70 px-2 py-1 border border-[#00f3ff]/30">
                  ID: LIN-2000<br/>
                  LOC: OSAKA, JPN
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-l-2 border-[#0099CC] pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#66E6FF] shadow-[0_0_10px_#ff00ff] rotate-45"></div>
              <h2 className="text-2xl font-cyber text-white mb-4">
                INTRODUCTION
              </h2>
              <p className="text-gray-300 leading-relaxed font-mono-cyber text-lg">
                このサイトは、Reactを用いて制作した<span className="text-[#00f3ff]">LIN HENGYOU</span>のポートフォリオです。
                これまでの制作物や習得したスキルをまとめています。
              </p>
            </div>

            <div className="bg-[#0a0a0a] border border-[#333] p-6 relative overflow-hidden group hover:border-[#00f3ff] transition-colors duration-300">
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity text-[#00f3ff]">
                <Terminal size={24} />
              </div>
              <div className="font-mono-cyber text-gray-400 mb-6 leading-7">
                <div className='inline-block'><span className="text-[#4DCCFF] mr-2">&gt;</span><span>2000年生まれの台湾出身。現在は大阪市に在住し、フルスタックエンドエンジニアを目指してHAL大阪Web科に在学中。</span></div><br/><br/>
                <div className='inline-block'><span className="text-[#4DCCFF] mr-2">&gt;</span><span>以前はMayaやBlenderなどの3Dツールを使ったプロジェクト開発経験がありましたが、現在はその知識を活かしてWebデザインを中心に活動しています。</span></div><br/><br/>
                <div className='inline-block'><span className="text-[#4DCCFF] mr-2">&gt;</span><span>日々の学習ではReactをメインに、時々Flaskを学んでいます。最近はWebGLやShaderの知識も学習しています。</span></div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <a href="mailto:phant890516@gmail.com?subject=Feedback&body=Message"><button className="relative px-6 py-2 bg-transparent text-[#00f3ff] border border-[#00f3ff] font-cyber tracking-wider hover:bg-[#00f3ff] hover:text-black transition-all duration-300 group overflow-hidden" id="gmailButton">
                  <span className="relative z-10 flex items-center gap-2"><Mail size={16}/> EMAIL</span>
                  <div className="absolute inset-0 bg-[#00f3ff] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300"></div>
                </button></a>
                <button onClick={handleGithubClick} className="relative px-6 py-2 bg-transparent text-[#0ba4e6] border border-[#0ba4e6] font-cyber tracking-wider hover:bg-[#0ba4e6] hover:text-black transition-all duration-300 group overflow-hidden" id="gitButton">
                  <span className="relative z-10 flex items-center gap-2"><Github size={16}/> GITHUB</span>
                  <div className="absolute inset-0 bg-[#0ba4e6] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>

        </section>


        {/* Skills Section */}
        <section ref={skillsSectionRef} className="max-w-7xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-12 border-b border-[#333] pb-4">
            <h2 className="text-4xl md:text-5xl font-cyber text-white">
              <span className="text-[#00f3ff]">Skill Board</span>
            </h2>
            <div className="hidden md:block font-mono-cyber text-xs text-gray-500 text-right">
              LOADING MODULES...<br/>
              COMPLETED: 100%
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Program */}
            <SkillCard 
              title="HTML" 
              exp="1年半" 
              icon={<Globe size={48} className="text-[#e34c26]" />} 
              color="#e34c26"
              level={90}
              delay={0}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="CSS" 
              exp="1年半" 
              icon={<Layers size={48} className="text-[#264de4]" />} 
              color="#264de4"
              level={85}
              delay={0.1}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="JAVASCRIPT" 
              exp="1年半" 
              icon={<Zap size={48} className="text-[#f7df1e]" />} 
              color="#f7df1e"
              level={80}
              delay={0.2}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="PYTHON" 
              exp="1年半" 
              icon={<Cpu size={48} className="text-[#3776ab]" />} 
              color="#3776ab"
              level={75}
              delay={0.3}
              scrollProgress={scrollProgress}
            />
            {/* Framework */}
            <SkillCard 
              title="REACT" 
              exp="半年" 
              icon={<Atom size={48} className="text-[#61DAFB]" />} 
              color="#61DAFB"
              level={70}
              delay={0.4}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="TAILWIND" 
              exp="半年" 
              icon={<Gauge size={48} className="text-[#06B6D4]" />} 
              color="#06B6D4"
              level={70}
              delay={0.5}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="GSAP" 
              exp="半年" 
              icon={<Timer size={48} className="text-[#88CE02]" />} 
              color="#88CE02"
              level={70}
              delay={0.6}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="Flask" 
              exp="1年" 
              icon={<Server size={48} className="text-[#FFF]" />} 
              color="#FFF"
              level={85}
              delay={0.7}
              scrollProgress={scrollProgress}
            />
            {/* Tool */}
            <SkillCard 
              title="FIGMA" 
              exp="1年半" 
              icon={<PencilRuler size={48} className="text-[#A259FF]" />} 
              color="#A259FF"
              level={85}
              delay={0.8}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="PHOTOSHOP" 
              exp="2年" 
              icon={<Image size={48} className="text-[#31A8FF]" />} 
              color="#31A8FF"
              level={90}
              delay={0.9}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="PREMIERE" 
              exp="2年" 
              icon={<Video size={48} className="text-[#9999FF]" />} 
              color="#9999FF"
              level={95}
              delay={1.0}
              scrollProgress={scrollProgress}
            />
            <SkillCard 
              title="MAYA" 
              exp="3年" 
              icon={<Dices size={48} className="text-[#00C2E4]" />} 
              color="#00C2E4"
              level={85}
              delay={1.1}
              scrollProgress={scrollProgress}
            />

          </div>
        </section>

      </main>

      <footer className="bg-[#020202] border-t border-[#00f3ff]/20 py-8 text-center font-mono-cyber text-gray-600 text-sm">
        <p>© 2025 LIN HENGYOU PORTFOLIO. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
};

// --- Sub-component: Skill Card with AI Mission Generator ---
const SkillCard = ({ title, exp, icon, color, level, delay, scrollProgress}) => {
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateMission = async () => {
    setLoading(true);
    setMission(null);
    const systemPrompt = `You are a strict Cyberpunk Drill Sergeant. Suggest a short, intense coding mission (project idea) using ${title}. Keep it under 20 words. Use formatting like "MISSION: ..." and Tech jargon.`;
    const prompt = `Give me a ${title} project idea for a cyberpunk portfolio.`;
    
    const result = await callGemini(prompt, systemPrompt);
    setMission(result);
    setLoading(false);
  };

   // skill board delay effect
  const cardProgress = Math.max(0, Math.min(1, scrollProgress * 1.5 - delay * 1));

  return (
    <div className="group relative bg-[#0a0a0a] border border-[#333] hover:border-[#00f3ff] transition-all duration-300 p-6 flex flex-col items-center hover:-translate-y-2"
      style={{
        opacity: cardProgress,
        transform: `translateY(${30 * (1 - cardProgress)}px)`,
        transition: 'opacity 0.4s ease-out, transform 0.8s ease-out, border-color 0.3s'
      }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00f3ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Corner Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-500 group-hover:border-[#00f3ff]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-500 group-hover:border-[#00f3ff]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-500 group-hover:border-[#00f3ff]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-500 group-hover:border-[#00f3ff]"></div>

      <div className="mb-4 p-4 bg-black rounded-full border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-shadow duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-cyber font-bold mb-1 text-white group-hover:text-[#00f3ff] transition-colors">{title}</h3>
      <p className="font-mono-cyber text-gray-400 text-sm mb-4">学習履歴: {exp}</p>

      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-gradient-to-r from-[#00f3ff] to-[#0A0E27]" style={{ width: `${level}%` }}></div>
      </div>

    </div>
  );
};

export default CyberPortfolio;