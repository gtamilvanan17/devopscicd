import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

const NetworkLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points: Point[] = useRef<Point[]>([]).current;
  const mouse: Point = useRef<Point>({ x: 0, y: 0 }).current;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize points
    function initPoints() {
      points.length = 0;
      const density = Math.min(Math.floor(window.innerWidth / 100), 20);
      
      for (let i = 0; i < density; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        });
      }
    }
    
    // Animation loop
    let animationId: number;
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      for (let i = 0; i < points.length; i++) {
        // Move points
        points[i].x += Math.sin(i * 0.5 + Date.now() * 0.001) * 0.5;
        points[i].y += Math.cos(i * 0.5 + Date.now() * 0.001) * 0.5;
        
        // Keep points within bounds
        if (points[i].x < 0) points[i].x = canvas.width;
        if (points[i].x > canvas.width) points[i].x = 0;
        if (points[i].y < 0) points[i].y = canvas.height;
        if (points[i].y > canvas.height) points[i].y = 0;
        
        // Draw connections
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width * 0.15) {
            const opacity = 1 - (distance / (canvas.width * 0.15));
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        const dx = points[i].x - mouse.x;
        const dy = points[i].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < canvas.width * 0.1) {
          const opacity = 1 - (distance / (canvas.width * 0.1));
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
        
        // Draw point
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 150, 255, 0.6)';
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default NetworkLines;
