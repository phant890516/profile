import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin);

const Cube = () => {
  useEffect(() => {
    // === 建立 27 cubes，每個 cube 有 6 個面 ===
    const container = document.querySelector(".cubeOfCubes");
    const cubeEdge = 3 * 16; // 3em ≈ 48px
    for (let i = 0; i < 27; i++) {
      const cube = document.createElement("div");
      cube.classList.add("cube");

      // 計算每個 cube 的位置
      const x = ((i % 3) * -100) + 100;
      const y = (Math.floor((i % 9) / 3) * -100) + 100;
      const z = (Math.floor((i / 9) % 3) * -100) + 100;

      cube.style.transform = `
        translate(${x}%, ${y}%)
        rotateY(-90deg) translateX(${z}%) rotateY(90deg)
      `;

      // 建立 6 個面
      for (let f = 0; f < 6; f++) {
        const face = document.createElement("div");
        face.classList.add("cube__face");
        cube.appendChild(face);
      }

      container.appendChild(cube);
    }

    // === 繞小圓運動 ===
    const r = 10;
    gsap.to('.cubeOfCubes', {
      motionPath: {
        path: `M ${-r}, 0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0z`
      },
      duration: 10,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <div className="cubeContainer">
      <div className="cubeOfCubes"></div>
    </div>
  );
};

export default Cube;