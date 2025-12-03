import  { useRef, useEffect, useState } from "react";
// import UnicornScene from "unicornstudio-react";
import MagneticEffect from "./components/MagneticEffect";
import Unicorn from "./Unicorn";
function Landing() {
  return (
    <div className="wrapper relative w-full h-screen bg-[#060606]">
       {/* <UnicornScene projectId="D9hxjY733zGoMgMi4faC"/> */}
       {/* <MagneticEffect /> */}
      {/* <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] font-sans">
          <div className="content-text text-white glitch-text" data-text="LINHENG" id="title">LINHENG</div>
      </div> */}
      <Unicorn/>
    </div>
  );
}

export default Landing;