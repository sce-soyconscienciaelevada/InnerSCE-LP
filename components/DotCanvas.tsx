"use client";
import { useEffect, useRef } from "react";

export default function DotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const COLOR = "rgba(164,188,170,";
    let W = 0, H = 0;
    let dots: { baseX: number; baseY: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    const SPACING = 32, RADIUS = 1.1, MAX_DIST = 120;
    let animId: number;

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      buildDots();
    }

    function buildDots() {
      dots = [];
      const cols = Math.ceil(W / SPACING) + 1;
      const rows = Math.ceil(H / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ baseX: c * SPACING, baseY: r * SPACING });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const scrollY = window.scrollY;
      for (const d of dots) {
        const dy = d.baseY - scrollY * 0.08;
        const dx = d.baseX - mouse.x;
        const distY = dy - mouse.y;
        const dist = Math.sqrt(dx * dx + distY * distY);
        let alpha = 0.22;
        let r = RADIUS;
        if (dist < MAX_DIST) {
          const t = 1 - dist / MAX_DIST;
          alpha = 0.22 + t * 0.55;
          r = RADIUS + t * 1.8;
        }
        ctx.beginPath();
        ctx.arc(d.baseX, dy, r, 0, Math.PI * 2);
        ctx.fillStyle = COLOR + alpha + ")";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    const onResize = () => resize();
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.55,
      }}
      aria-hidden="true"
    />
  );
}
