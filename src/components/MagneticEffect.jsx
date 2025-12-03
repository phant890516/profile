import React, { useEffect, useRef } from "react";
import "./MagneticEffect.css"; 
const MagneticEffect = () => {
  const cursorRef = useRef(null);
  const gridOverlayRef = useRef(null);
  const canvasRef = useRef(null);
  const originalImageDataRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const gridOverlay = gridOverlayRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let mouseX = 0;
    let mouseY = 0;

    // --- 創建 Grid ---
    function createGrid() {
      const cols = 40;
      const rows = 20;

      for (let i = 0; i < cols * rows; i++) {
        const cell = document.createElement("div");
        cell.className = "grid-cell";

        const col = i % cols;
        const row = Math.floor(i / cols);

        const bgPosX = -col * (100 / (cols - 1));
        const bgPosY = -row * (100 / (rows - 1));

        cell.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
        gridOverlay.appendChild(cell);
      }
    }

    // --- Canvas 圖片初始化 ---
    function createCanvasImage() {
      const img = new Image();
      img.src = "../../public/images/profile_landing2_img.png";
      img.onload = () => {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 800, 400);
        ctx.drawImage(img, 0, 0, 800, 400);
        originalImageDataRef.current = ctx.getImageData(0, 0, 800, 400);
      };
    }

    // --- CSS Grid 磁性效果 ---
    function applyGridMagneticEffect() {
      const cells = gridOverlay.querySelectorAll(".grid-cell");
      const gridMethod = gridOverlay.parentElement;

      function onMouseMove(e) {
        const rect = gridMethod.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        cells.forEach((cell, index) => {
          const cols = 40;
          const rows = 20;
          const col = index % cols;
          const row = Math.floor(index / cols);

          const cellX = (col + 0.5) * (800 / cols);
          const cellY = (row + 0.5) * (400 / rows);

          const deltaX = mouseX - cellX;
          const deltaY = mouseY - cellY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const moveX = (deltaX / distance) * force * 25;
            const moveY = (deltaY / distance) * force * 25;
            const scale = 1 + force * 0.3;

            cell.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
            cell.style.filter = `brightness(${1 + force * 0.5}) contrast(${
              1 + force * 0.3
            })`;
          } else {
            cell.style.transform = "translate(0px, 0px) scale(1)";
            cell.style.filter = "brightness(1) contrast(1)";
          }
        });

        cursor.style.transform = `translate(-50%, -50%) scale(1.2)`;
        cursor.style.borderColor = "rgba(255, 255, 255, 1)";
        cursor.style.boxShadow =
          "0 0 30px rgba(255, 255, 255, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.2)";
      }

      function onMouseLeave() {
        cells.forEach((cell) => {
          cell.style.transform = "translate(0px, 0px) scale(1)";
          cell.style.filter = "brightness(1) contrast(1)";
        });

        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.borderColor = "rgba(255, 255, 255, 0.6)";
        cursor.style.boxShadow =
          "0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)";
      }

      gridMethod.addEventListener("mousemove", onMouseMove);
      gridMethod.addEventListener("mouseleave", onMouseLeave);
    }

    // --- Canvas 磁性效果 ---
    function applyCanvasMagneticEffect() {
      const canvasMethod = canvas.parentElement;

      function distortImage(centerX, centerY) {
        if (!originalImageDataRef.current) return;

        const imageData = ctx.createImageData(originalImageDataRef.current);
        const data = imageData.data;
        const originalData = originalImageDataRef.current.data;

        const radius = 120;
        const strength = 40;

        for (let y = 0; y < 400; y++) {
          for (let x = 0; x < 800; x++) {
            const dx = x - centerX;
            const dy = y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            let sourceX = x;
            let sourceY = y;

            if (distance < radius) {
              const force = (radius - distance) / radius;
              const angle = Math.atan2(dy, dx);

              sourceX = x + Math.cos(angle) * force * strength;
              sourceY = y + Math.sin(angle) * force * strength;

              sourceX = Math.max(0, Math.min(799, sourceX));
              sourceY = Math.max(0, Math.min(399, sourceY));
            }

            const sourceIndex = (Math.floor(sourceY) * 800 + Math.floor(sourceX)) * 4;
            const targetIndex = (y * 800 + x) * 4;

            data[targetIndex] = originalData[sourceIndex];
            data[targetIndex + 1] = originalData[sourceIndex + 1];
            data[targetIndex + 2] = originalData[sourceIndex + 2];
            data[targetIndex + 3] = originalData[sourceIndex + 3];
          }
        }

        ctx.putImageData(imageData, 0, 0);
      }

      function onMouseMove(e) {
        if (!originalImageDataRef.current) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * (800 / rect.width);
        const mouseY = (e.clientY - rect.top) * (400 / rect.height);

        distortImage(mouseX, mouseY);

        cursor.style.transform = `translate(-50%, -50%) scale(1.2)`;
      }

      function onMouseLeave() {
        if (originalImageDataRef.current) {
          ctx.putImageData(originalImageDataRef.current, 0, 0);
        }
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      }

      canvasMethod.addEventListener("mousemove", onMouseMove);
      canvasMethod.addEventListener("mouseleave", onMouseLeave);
    }

    // --- 全局光標 ---
    function onDocumentMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    }

    document.addEventListener("mousemove", onDocumentMouseMove);

    // --- 初始化 ---
    createGrid();
    createCanvasImage();
    applyGridMagneticEffect();
    applyCanvasMagneticEffect();

    // cleanup
    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-[200px] left-[460px]">
      <div className="cursor" ref={cursorRef}></div>
      <div className="container">
        <div className="image-text-container" id="gridMethod">
          <div className="method-title"></div>
          <div className="grid-overlay" ref={gridOverlayRef}></div>
        </div>

        <div className="canvas-container" id="canvasMethod">
          <div className="method-title"></div>
          <canvas ref={canvasRef} width="800" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default MagneticEffect;
