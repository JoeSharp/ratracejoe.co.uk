import { useEffect, useRef } from "react";

import ratHead from "../assets/rat-head.png";

const NUMBER_RATS = 50;
const RAT_SIZE = 16;

function RatsNest() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Match canvas size to parent size
    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const ratImg = new Image();
    ratImg.src = ratHead;

    const rats = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));

    function update() {
      if (canvas === null) return;

      for (const r of rats) {
        r.x += r.vx;
        r.y += r.vy;

        // bounce off edges
        if (r.x < 0 || r.x > canvas.width - 16) r.vx *= -1;
        if (r.y < 0 || r.y > canvas.height - 16) r.vy *= -1;
      }
    }

    function draw() {
      if (canvas === null) return;
      if (ctx === null) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const r of rats) {
        ctx.drawImage(
          ratImg,
          0,
          0,
          ratImg.width,
          ratImg.height,
          r.x,
          r.y,
          RAT_SIZE,
          RAT_SIZE,
        );
      }
    }

    function loop() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(loop);
    }

    ratImg.onload = () => loop();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background" />;
}

export default RatsNest;
