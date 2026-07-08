import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export default function GravityBalls() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [balls, setBalls] = useState<Ball[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isInView, setIsInView] = useState(false);

  const BALL_SIZE = 64;
  const GRAVITY = 0.25;
  const BOUNCE = 0.7;
  const FRICTION = 0.98;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });

      const colors = ['#f5a1c3', '#9ab2d4', '#56ad84', '#fad062']; // pink, blue, green, yellow

      const initialBalls: Ball[] = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * (width - BALL_SIZE),
        y: -Math.random() * 800 - BALL_SIZE, // Start well above the container
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 5,
        color: colors[i % colors.length],
      }));
      setBalls(initialBalls);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView || dimensions.width === 0) return;

    let animationFrameId: number;

    const update = () => {
      setBalls((prevBalls) => {
        const nextBalls = prevBalls.map((ball) => {
          let { x, y, vx, vy } = ball;

          // Apply gravity
          vy += GRAVITY;

          // Update position
          x += vx;
          y += vy;

          // Boundary checks
          if (y + BALL_SIZE > dimensions.height) {
            y = dimensions.height - BALL_SIZE;
            vy *= -BOUNCE;
            vx *= FRICTION;
          } else if (y < 0) {
            y = 0;
            vy *= -BOUNCE;
          }

          if (x + BALL_SIZE > dimensions.width) {
            x = dimensions.width - BALL_SIZE;
            vx *= -BOUNCE;
          } else if (x < 0) {
            x = 0;
            vx *= -BOUNCE;
          }

          return { ...ball, x, y, vx, vy };
        });

        // Ball-to-ball collision
        for (let i = 0; i < nextBalls.length; i++) {
          for (let j = i + 1; j < nextBalls.length; j++) {
            const b1 = nextBalls[i];
            const b2 = nextBalls[j];

            const dx = b2.x - b1.x;
            const dy = b2.y - b1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = BALL_SIZE;

            if (distance < minDistance) {
              // Collision detected
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);

              // Resolve overlap
              const overlap = minDistance - distance;
              const moveX = (overlap / 2) * cos;
              const moveY = (overlap / 2) * sin;

              b1.x -= moveX;
              b1.y -= moveY;
              b2.x += moveX;
              b2.y += moveY;

              // Elastic collision (simplified for equal mass)
              // Rotate velocities
              const vx1 = b1.vx * cos + b1.vy * sin;
              const vy1 = b1.vy * cos - b1.vx * sin;
              const vx2 = b2.vx * cos + b2.vy * sin;
              const vy2 = b2.vy * cos - b2.vx * sin;

              // Swap x velocities
              const vx1Final = vx2;
              const vx2Final = vx1;

              // Rotate back
              b1.vx = vx1Final * cos - vy1 * sin;
              b1.vy = vy1 * cos + vx1Final * sin;
              b2.vx = vx2Final * cos - vy2 * sin;
              b2.vy = vy2 * cos + vx2Final * sin;

              // Apply some bounce/friction to the collision
              b1.vx *= BOUNCE;
              b1.vy *= BOUNCE;
              b2.vx *= BOUNCE;
              b2.vy *= BOUNCE;
            }
          }
        }

        return nextBalls;
      });
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      {balls.map((ball) => (
        <div
          key={ball.id}
          style={{
            position: 'absolute',
            left: ball.x,
            top: ball.y,
            width: BALL_SIZE,
            height: BALL_SIZE,
            backgroundColor: ball.color,
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />
      ))}
    </div>
  );
}
