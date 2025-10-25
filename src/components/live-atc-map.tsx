'use client';

import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { WorldMap } from './world-map';
import { useMemo, useState, useEffect } from 'react';

const flightPaths = [
  {
    path: 'M20,60 C100,20 250,150 400,60', // North America to Europe
    duration: 15,
    delay: 0,
  },
  {
    path: 'M150,150 C250,250 400,100 550,180', // South America to Africa
    duration: 18,
    delay: 2,
  },
  {
    path: 'M450,50 C550,100 700,20 800,80', // Europe to Asia
    duration: 12,
    delay: 4,
  },
  {
    path: 'M750,150 C800,200 850,100 900,120', // Southeast Asia to Australia
    duration: 10,
    delay: 6,
  },
  {
    path: 'M100,180 C200,280 400,250 600,190', // Trans-Pacific
    duration: 22,
    delay: 8,
  },
  {
    path: 'M300,100 C400,0 600,200 700,50', // Intra-continental
    duration: 14,
    delay: 1,
  },
];

const FlightPath = ({ d, duration, delay }: { d: string; duration: number; delay: number }) => {
  return (
    <>
      <motion.path
        fill="none"
        strokeWidth="1"
        stroke="hsl(var(--primary) / 0.3)"
        strokeDasharray="4 4"
        d={d}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay, ease: 'easeInOut' }}
      />
      <motion.div
        className="plane-container"
        style={{ offsetPath: `path("${d}")` }}
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{ duration, delay, ease: 'linear', repeat: Infinity }}
      >
        <Plane
          className="text-primary -rotate-90"
          width={16}
          height={16}
          strokeWidth={1.5}
        />
      </motion.div>
    </>
  );
};


export function LiveATCMap() {
    const [shuffledPaths, setShuffledPaths] = useState<(typeof flightPaths)>([]);

    useEffect(() => {
        // Shuffle only on the client side to avoid hydration mismatch
        const sortedPaths = [...flightPaths].sort(() => Math.random() - 0.5);
        setShuffledPaths(sortedPaths);
    }, []);


  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.2}}
            animate={{ opacity: 0.3, scale: 1}}
            transition={{duration: 2}}
        >
          <WorldMap />
        </motion.div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        {shuffledPaths.map((flight, index) => (
          <FlightPath key={index} d={flight.path} duration={flight.duration} delay={flight.delay} />
        ))}
      </svg>
    </div>
  );
}
