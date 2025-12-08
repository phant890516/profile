import  { useRef, useEffect, useState } from "react";
import Unicorn from "./Unicorn";
function Landing() {
  return (
    <div className="wrapper relative w-full h-screen bg-[#060606]">
      <Unicorn/>
    </div>
  );
}

export default Landing;