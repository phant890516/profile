import  { useRef, useEffect, useState} from "react";
import { gsap ,Expo} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/all";
import AOS from "aos";
import "aos/dist/aos.css";
import Cube from "./components/cube";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

const About=()=> {
  const aboutRef = useRef(null);
  const meRef = useRef(null);

  ///////////////////////////////////////////////////////////// AboutMe Animation /////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
  let ctx = gsap.context(() => {
    // About animation
    gsap.set(aboutRef.current.querySelectorAll(".about-stroke"), {
      visibility: "visible",
    });

    gsap.from(aboutRef.current.querySelectorAll(".about-stroke"), {
      duration: 3,
      drawSVG: 0,
      ease: "power1.inOut",
      onComplete: () => {
      gsap.to(aboutRef.current.querySelectorAll(".about-stroke"), { fill: "white", duration: 1 }); // text fill white
    }
    });
    

    // Me animation
    gsap.set(meRef.current.querySelectorAll(".me-stroke"), {
      visibility: "visible",
    });

    gsap.from(meRef.current.querySelectorAll(".me-stroke"), {
      duration: 3,
      drawSVG: 0,
      ease: "power1.inOut",
      onComplete:()=>{
        gsap.to(meRef.current.querySelectorAll(".me-stroke"),{fill:"white",duration:1}); //text fill white
      }
    });
  }, [aboutRef, meRef]);

  return () => ctx.revert(); // 清理
}, []);

//////////////////////////////////////////////////////////////////article effect///////////////////////////////////////////////////////////////////////
  const panelsSectionRef = useRef(null);
  const panelsContainerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const panelsContainer = panelsContainerRef.current;
    const panels = gsap.utils.toArray("#panels-container .panel");

    // 建立水平滾動動畫
    tweenRef.current = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 0.3,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 }
        },
        end: () => "+=" + (panelsContainer.offsetWidth - window.innerWidth)
      }
    });

    // 清理函數
    return () => {
      if (tweenRef.current && tweenRef.current.scrollTrigger) {
        tweenRef.current.scrollTrigger.kill();
      }
      tweenRef.current = null;
    };
  }, []);

// use AOS 
  useEffect(() => {
    AOS.init(); 
  }, []);

  return(
    <div className="relative w-full ">
      <div className="flex justify-center items-center bg-[#060606] p-4 w-full h-[800px] z-10" id="aboutme">
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xmlSpace="preserve"
        width="800"
        height="100"
        viewBox="0 0 800 100"
        id="svg"
      >
        <g id="About" ref={aboutRef}>
          <path
            className="about-stroke"
            d="M14.0909 95H2.27273L36.4545 1.90909H48.0909L82.2727 95H70.4545L42.6364 16.6364H41.9091L14.0909 95ZM18.4545 58.6364H66.0909V68.6364H18.4545V58.6364Z"

            transform="translate(0,0)"
          />
          <path
            className="about-stroke"
            d="M1.27273 95V1.90909H33.8182C40.303 1.90909 45.6515 3.0303 49.8636 5.27273C54.0758 7.48485 57.2121 10.4697 59.2727 14.2273C61.3333 17.9545 62.3636 22.0909 62.3636 26.6364C62.3636 30.6364 61.6515 33.9394 60.2273 36.5455C58.8333 39.1515 56.9849 41.2121 54.6818 42.7273C52.4091 44.2424 49.9394 45.3636 47.2727 46.0909V47C50.1212 47.1818 52.9849 48.1818 55.8636 50C58.7424 51.8182 61.1515 54.4242 63.0909 57.8182C65.0303 61.2121 66 65.3636 66 70.2727C66 74.9394 64.9394 79.1364 62.8182 82.8636C60.697 86.5909 57.3485 89.5455 52.7727 91.7273C48.197 93.9091 42.2424 95 34.9091 95H1.27273ZM12.5455 85H34.9091C42.2727 85 47.5 83.5758 50.5909 80.7273C53.7121 77.8485 55.2727 74.3636 55.2727 70.2727C55.2727 67.1212 54.4697 64.2121 52.8636 61.5455C51.2576 58.8485 48.9697 56.697 46 55.0909C43.0303 53.4545 39.5152 52.6364 35.4545 52.6364H12.5455V85ZM12.5455 42.8182H33.4545C36.8485 42.8182 39.9091 42.1515 42.6364 40.8182C45.3939 39.4848 47.5758 37.6061 49.1818 35.1818C50.8182 32.7576 51.6364 29.9091 51.6364 26.6364C51.6364 22.5455 50.2121 19.0758 47.3636 16.2273C44.5152 13.3485 40 11.9091 33.8182 11.9091H12.5455V42.8182Z"

            transform="translate(100,0)"
          />
          <path
            className="about-stroke"
            d="M83.8182 49.4545C83.8182 59.2727 82.0455 67.7576 78.5 74.9091C74.9545 82.0606 70.0909 87.5758 63.9091 91.4545C57.7273 95.3333 50.6667 97.2727 42.7273 97.2727C34.7879 97.2727 27.7273 95.3333 21.5455 91.4545C15.3636 87.5758 10.5 82.0606 6.95455 74.9091C3.40909 67.7576 1.63636 59.2727 1.63636 49.4545C1.63636 39.6364 3.40909 31.1515 6.95455 24C10.5 16.8485 15.3636 11.3333 21.5455 7.45454C27.7273 3.57575 34.7879 1.63636 42.7273 1.63636C50.6667 1.63636 57.7273 3.57575 63.9091 7.45454C70.0909 11.3333 74.9545 16.8485 78.5 24C82.0455 31.1515 83.8182 39.6364 83.8182 49.4545ZM72.9091 49.4545C72.9091 41.3939 71.5606 34.5909 68.8636 29.0455C66.197 23.5 62.5758 19.303 58 16.4545C53.4545 13.6061 48.3636 12.1818 42.7273 12.1818C37.0909 12.1818 31.9848 13.6061 27.4091 16.4545C22.8636 19.303 19.2424 23.5 16.5455 29.0455C13.8788 34.5909 12.5455 41.3939 12.5455 49.4545C12.5455 57.5151 13.8788 64.3182 16.5455 69.8636C19.2424 75.4091 22.8636 79.6061 27.4091 82.4545C31.9848 85.303 37.0909 86.7273 42.7273 86.7273C48.3636 86.7273 53.4545 85.303 58 82.4545C62.5758 79.6061 66.197 75.4091 68.8636 69.8636C71.5606 64.3182 72.9091 57.5151 72.9091 49.4545Z"
            transform="translate(175,0)"
          />
          <path
            className="about-stroke"
            d="M62.3636 1.90909H73.6364V63.5455C73.6364 69.9091 72.1364 75.5909 69.1364 80.5909C66.1667 85.5606 61.9697 89.4848 56.5455 92.3636C51.1212 95.2121 44.7576 96.6364 37.4545 96.6364C30.1515 96.6364 23.7879 95.2121 18.3636 92.3636C12.9394 89.4848 8.72727 85.5606 5.72727 80.5909C2.75758 75.5909 1.27273 69.9091 1.27273 63.5455V1.90909H12.5455V62.6364C12.5455 67.1818 13.5455 71.2273 15.5455 74.7727C17.5455 78.2879 20.3939 81.0606 24.0909 83.0909C27.8182 85.0909 32.2727 86.0909 37.4545 86.0909C42.6364 86.0909 47.0909 85.0909 50.8182 83.0909C54.5455 81.0606 57.3939 78.2879 59.3636 74.7727C61.3636 71.2273 62.3636 67.1818 62.3636 62.6364V1.90909Z"
            transform="translate(270,0)"
          />
          <path
            className="about-stroke"
            d="M1.18182 11.9091V1.90909H71V11.9091H41.7273V95H30.4545V11.9091H1.18182Z"
            transform="translate(360,0)"
          />
        </g>

        <g id="Me" ref={meRef}>
          <path
            className="me-stroke"
            d="M1.27273 1.90909H14.7273L46.3636 79.1818H47.4545L79.0909 1.90909H92.5455V95H82V24.2727H81.0909L52 95H41.8182L12.7273 24.2727H11.8182V95H1.27273V1.90909Z"
            transform="translate(500,0)"
          />
          <path
            className="me-stroke"
            d="M1.27273 95V1.90909H57.4545V11.9091H12.5455V43.3636H54.5455V53.3636H12.5455V85H58.1818V95H1.27273Z"
            transform="translate(610,0)"
          />
        </g>
      </svg>
      </div>

      <section id="panels" ref={panelsSectionRef} className="overflow-hidden">
        <div className="w-[600vw] flex flex-row" id="panels-container" ref={panelsContainerRef}>
          <article id="panel-1" className="panel w-screen h-[100vh] flex items-center justify-center ">
            <div className="flex justify-center items-center bg-black p-4 w-full h-[800px] bg-white container">
              <p className="text-2xl leading-normal text-[#1e1e1e] text-center">こんにちは！LinHengYouです。<br />このサイトは、Reactを用いて制作したポートフォリオです。<br />これまでの制作物や習得したスキルをまとめています。</p>
            </div>
          </article>
          <article id="panel-2" className="panel w-screen h-[100vh] flex items-center justify-center ">
            <div className="content bg-white w-[1030px] mx-auto flex flex-row gap-[40px]">      
              <div className="img-container w-[550px] overflow-hidden ">
                <img src="./images/aboutme_picture.jpg"></img>
              </div>
              <div className="max-w-[500px] flex justify-center items-center" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <p className="text-[20px] text-black">2000年生まれの台湾出身で、現在は大阪市に在住し、フルスタックエンドエンジニアを目指しているHAL大阪Web科の学生です。</p>
              </div>
            </div>
          </article>
          <article id="panel-3" className="panel w-screen h-[100vh] flex items-center justify-center ">
            <div className="content bg-black w-screen mx-auto relative">
              <div className="h-[100vh]">
              <div className="cube">
                <Cube />
              </div>
              </div>
              <div className="max-w-[500px] absolute top-[40%] right-[30%]" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                  <p className="text-[20px] text-white">
                  以前はMayaとBlenderを使ったプロジェクト開発経験がありましたが、現在はWebデザインを中心に活動しています。<br />
                  日々の勉強ではReactをメインに、時々Node.jsとFlaskを学んでいます。最近はWebGLやShaderの知識も学習しています。<br />
                  </p>
            </div>
            </div>
          </article>
          <article id="panel-4" className="panel w-screen h-[100vh] flex items-center justify-center  bg-[#0c0c15]">
            {/* <div>
            <div className="skill-page flex flex-row mx-auto gap-[133px]">

              <div className="pt-[100px]">
                <p className="text-[#1e1e1e] text-6xl">my skill</p>
              </div>

              <div className="flex flex-row gap-[152px]">
                <div className="flex flex-col items-start justify-start gap-[14px]">
                  <p className="text-[#1e1e1e] text-2xl font-bold">LANGUAGE</p>
                  <p className="text-[#1e1e1e] text-2xl leading-[1.5]">
                    HTML<br />
                    CSS<br />
                    JAVASCRIPT<br />
                    WEBGL<br />
                    PYTHON<br />
                    MYSQL<br />
                  </p>
                </div>
                  <div className="flex flex-col items-start justify-start gap-[14px]">
                  <p className="text-[#1e1e1e] text-2xl font-bold">FRAMEWORK</p>
                  <p className="text-[#1e1e1e] text-2xl leading-[1.5]">
                    REACT<br />
                    NEXTJS<br />
                    TAILWIND<br />
                    GSAP<br />
                    THREEJS<br />
                    FLASK<br />
                  </p>
                </div>
                  <div className="flex flex-col items-start justify-start gap-[14px]">
                  <p className="text-[#1e1e1e] text-2xl font-bold">TOOL</p>
                  <p className="text-[#1e1e1e] text-2xl leading-[1.5]">
                    PHOTOSHOP<br />
                    PREMIERE<br />
                    AFTER EFFECT<br />
                    FIGMA<br />
                    MAYA<br />
                    BLENDER<br />
                    GITHUB<br />
                  </p>
                </div>
              </div>
            
            </div>
              <div className=" flex flex-row gap-2 justify-end items-end">
                  <button className="border border-solid border-black hover:bg-gray-300 w-[200px] h-[46px] flex flex-row"><img src="./images/envelope.png"></img><span className="text-white text-stroke pl-[10px] pt-[10px]">Email</span></button>
                  <button className="border border-solid border-black hover:bg-gray-300 w-[200px] h-[46px] flex flex-row"><img src="./images/logo.png"></img><span className="text-white text-stroke pl-[10px] pt-[10px]">Github</span></button>
              </div>
            </div> */}
              <div className="my-skill">
                <div className="text-center mb-[96px]">
                  <h1 className="inline-block text-6xl text-white">My Skill -</h1>
                  <h1 className="inline-block text-6xl text-[#B787F5]"> LANGUAGE</h1>
                </div>
                <div className="flex flex-row gap-[74px]">

                  <div className="card">
                    <img src="images/html100.png"></img>
                    <p>HTML</p>
                    <p className="mb-[50px]">学習履歴　1年半</p>
                  </div>
              
                
                  <div className="card">
                    <img src="images/css100.png"></img>
                    <p>CSS</p>
                    <p>学習履歴　1年半</p>
                  </div>
                
              
                  <div className="card">
                    <img src="images/javascript100.png"></img>
                    <p>JAVASCRIPT</p>
                    <p>学習履歴　1年半</p>
                  </div>
                  
                
                  <div className="card">
                    <img src="images/python100.png"></img>
                    <p>PYTHON</p>
                    <p>学習履歴　1年半</p>
                  </div>

                </div>
              </div>

              
            </article>

            <article id="panel-5" className="panel w-screen h-[100vh] flex items-center justify-center  bg-[#0c0c15]">
              <div className="my-skill">
                <div className="text-center mb-[96px]">
                  <h1 className="inline-block text-6xl text-white">My Skill - </h1>
                  <h1 className="inline-block text-6xl text-[#70A3F4]"> FRAMEWORK</h1>
                </div>
                <div className="flex flex-row gap-[74px]">

                  <div className="card">
                    <img src="images/react100.png"></img>
                    <p>REACT</p>
                    <p className="mb-[50px]">学習履歴　半年</p>
                  </div>
              
                
                  <div className="card">
                    <img src="images/tailwind100.png"></img>
                    <p>TAILWIND</p>
                    <p>学習履歴　半年</p>
                  </div>
                
              
                  <div className="card">
                    <img src="images/gsap100.png"></img>
                    <p>GSAP</p>
                    <p>学習履歴　半年</p>
                  </div>
                  
                
                  <div className="card">
                    <img src="images/flask100.png"></img>
                    <p>FLASK</p>
                    <p>学習履歴　1年半</p>
                  </div>

                </div>
              </div>

            </article>
            <article id="panel-6" className="panel w-screen h-[100vh] flex items-center justify-center  bg-[#0c0c15]">
                 <div className="my-skill">
                <div className="text-center mb-[96px]">
                  <h1 className="inline-block text-6xl text-white">My Skill - </h1>
                  <h1 className="inline-block text-6xl text-[#9AEF9E]"> TOOL</h1>
                </div>
                <div className="flex flex-row gap-[74px]">

                  <div className="card">
                    <img src="images/figma100.png"></img>
                    <p>FIGMA</p>
                    <p className="mb-[50px]">学習履歴　1年半</p>
                  </div>
              
                
                  <div className="card">
                    <img src="images/photoshop100.png"></img>
                    <p>PHOTOSHOP</p>
                    <p>学習履歴　1年半</p>
                  </div>
                
              
                  <div className="card">
                    <img src="images/premiere100.png"></img>
                    <p>PREMIERE</p>
                    <p>学習履歴　1年半</p>
                  </div>
                  
                
                  <div className="card">
                    <img src="images/maya100.png"></img>
                    <p>MAYA</p>
                    <p>学習履歴　2年半</p>
                  </div>

                </div>
              </div>

            </article>
            </div>
            
      </section>
    </div>
    
  )
};

export default About;