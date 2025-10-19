'use client';
import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
  opacity: number;
  color: string;
}

const colors = ['#4DB8FF', '#7DF9FF', '#FFFFFF', '#A7DFFF'];

export function ConfettiCelebration() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 200,
      vx: Math.random() * 10 - 5,
      vy: Math.random() * 5 + 2,
      rotation: Math.random() * 360,
      vr: Math.random() * 20 - 10,
      opacity: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPieces(newPieces);
  }, []);

  useEffect(() => {
    if (pieces.length === 0) return;

    const animationFrame = requestAnimationFrame(() => {
      setPieces(currentPieces =>
        currentPieces
          .map(p => {
            const newY = p.y + p.vy;
            if (newY > window.innerHeight + 20) {
              return null;
            }
            return {
              ...p,
              x: p.x + p.vx,
              y: newY,
              vx: p.vx * 0.99,
              rotation: p.rotation + p.vr,
            };
          })
          .filter((p): p is ConfettiPiece => p !== null)
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [pieces]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: '10px',
            height: '10px',
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
