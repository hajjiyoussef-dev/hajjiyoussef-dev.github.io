import { useEffect, useRef } from "react";

export function MatrixRain() {
  const MatrixRainBox = useRef(null);

  useEffect(() => {
    const matrixRain = MatrixRainBox.current;
    if (!matrixRain) return;

    const ctx = matrixRain.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      matrixRain.width = window.innerWidth;
      matrixRain.height = window.innerHeight;
    };

    resizeCanvas();

    const fontSize = 20;
    const columns = Math.floor(matrixRain.width / fontSize);
    const drops = Array(columns).fill(1);

    // const chars =
    //   "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";
    const chars = "0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010";
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, matrixRain.width, matrixRain.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const gradient = ctx.createLinearGradient(x, y - fontSize, x, y);
        gradient.addColorStop(0, "rgba(6, 182, 212, 0.3)");
        gradient.addColorStop(1, "rgba(168, 85, 247, 0.8)");

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        if (y > matrixRain.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={ MatrixRainBox }
      className="absolute inset-0 opacity-30 pointer-events-none"
    />
  );
}
