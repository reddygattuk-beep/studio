"use client";

import { useEffect, useRef } from "react";

export default function SkillsBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    // Resize to section size @ devicePixelRatio
    const section = canvas.parentElement as HTMLElement;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const resize = () => {
      const rect = section.getBoundingClientRect();
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(section);
    resize();

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    // Wave params (subtle, readable)
    const waves = [
      { color: "rgba(34, 211, 238, 0.12)", amp: 0.06, period: 260, speedSec: 30, y: 0.33 }, // cyan
      { color: "rgba(56, 189, 248, 0.12)", amp: 0.05, period: 320, speedSec: 27, y: 0.55 }, // light-cyan
      { color: "rgba(20, 184, 166, 0.10)", amp: 0.04, period: 380, speedSec: 35, y: 0.75 }, // teal
    ];

    const drawFrame = (tSec: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      waves.forEach((wv, idx) => {
        const amp = h * wv.amp;                     // modest amplitude
        const freq = (2 * Math.PI) / wv.period;     // pixels per cycle
        const phase = (2 * Math.PI * tSec) / wv.speedSec * (idx % 2 ? 1 : -1);

        ctx.beginPath();
        const yCenter = h * wv.y;
        for (let x = 0; x <= w; x += 2) {
          const y = yCenter + Math.sin(x * freq + phase + idx * 0.6) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wv.color;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = wv.color.replace("0.12", "0.25").replace("0.10", "0.20");
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    if (reduceMotion) {
      drawFrame(0);
      return () => ro.disconnect();
    }

    const start = performance.now();
    const loop = (now: number) => {
      const tSec = (now - start) / 1000;
      drawFrame(tSec);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
