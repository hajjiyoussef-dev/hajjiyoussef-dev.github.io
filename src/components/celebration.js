import confetti from "canvas-confetti";

export const celebrateVictory = () => {
  const duration = 2500;
  const animationEnd = Date.now() + duration;

  const colors = ["#A855F7", "#aa00ccff", "#06B6D4"]; // green + gold color

  const frame = () => {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
      colors: colors,
    });

    confetti({
      particleCount: 6,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };

  frame();

 
  // confetti({
  //   particleCount: 200,
  //   spread: 120,
  //   origin: { y: 0.6 },
  //   colors: colors,
  // });
};
