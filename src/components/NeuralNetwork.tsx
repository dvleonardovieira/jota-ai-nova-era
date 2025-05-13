
import React, { useEffect, useRef } from 'react';

interface ParticleProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface EdgeProps {
  start: number;
  end: number;
  alpha: number;
}

const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: ParticleProps[] = [];
    let edges: EdgeProps[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      edges = [];
      
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 1
        });
      }
      
      // Create edges
      for (let i = 0; i < particles.length; i++) {
        const edgeCount = Math.floor(Math.random() * 2) + 1;
        
        for (let j = 0; j < edgeCount; j++) {
          const target = Math.floor(Math.random() * particles.length);
          
          if (i !== target) {
            edges.push({
              start: i,
              end: target,
              alpha: Math.random() * 0.5 + 0.1
            });
          }
        }
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw edges
      edges.forEach(edge => {
        const startParticle = particles[edge.start];
        const endParticle = particles[edge.end];
        
        const dx = endParticle.x - startParticle.x;
        const dy = endParticle.y - startParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const opacity = edge.alpha * (1 - distance / 200);
          
          ctx.beginPath();
          ctx.moveTo(startParticle.x, startParticle.y);
          ctx.lineTo(endParticle.x, endParticle.y);
          ctx.strokeStyle = `rgba(30, 174, 219, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#1EAEDB';
        ctx.fill();
      });
    };
    
    const updateParticles = () => {
      const mouse = mouseRef.current;
      
      particles.forEach(particle => {
        // Avoid mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          
          particle.vx -= Math.cos(angle) * force * 0.5;
          particle.vy -= Math.sin(angle) * force * 0.5;
        }
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy;
        }
        
        // Dampen velocity
        particle.vx *= 0.99;
        particle.vy *= 0.99;
      });
    };
    
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default NeuralNetwork;
