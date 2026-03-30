import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();

    const onResize = () => resizeCanvas();
    window.addEventListener('resize', onResize, { passive: true });

    const colors = [
      'rgba(0, 101, 189, 0.08)',
      'rgba(255, 215, 0, 0.08)',
      'rgba(227, 37, 37, 0.08)',
      'rgba(40, 167, 69, 0.08)',
    ];

    // Reduced from 30 to 10 particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
    }> = [];

    for (let i = 0; i < 10; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 20,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const drawLegoBrick = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      ctx.fillStyle = color;
      ctx.fillRect(-size / 2, -size / 3, size, size * 0.66);

      const studSize = size * 0.15;
      const studSpacing = size * 0.35;

      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
          const studX = -size / 2 + studSpacing + col * studSpacing;
          const studY = -size / 3 - studSize / 2;
          ctx.beginPath();
          ctx.arc(studX, studY, studSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      ctx.restore();
    };

    // Throttled to ~30 FPS
    let animationId: number;
    let lastTime = 0;

    const animate = (timestamp: number) => {
      animationId = requestAnimationFrame(animate);

      if (timestamp - lastTime < 33) return; // ~30 FPS
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        drawLegoBrick(
          particle.x,
          particle.y,
          particle.size,
          particle.rotation,
          particle.color,
          particle.opacity
        );
      });
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 0.4 }}
    />
  );
};

export default AnimatedBackground;
