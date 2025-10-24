'use client';

import Link from 'next/link';
import { Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    role: 'cxo',
    title: 'Executive Briefing',
    subtitle: 'Strategic Impact',
    path: `M-100,0 A100,100 0 0 1 100,0`,
    textOffset: '25%',
  },
  {
    role: 'hr',
    title: 'HR Professional',
    subtitle: 'Cultural & Team Fit',
    path: `M100,0 A100,100 0 0 1 -2.4492935982947065e-15,-100`,
    textOffset: '25%',
  },
  {
    role: 'hiring-manager',
    title: 'Hiring Manager',
    subtitle: 'Business Impact Focus',
    path: `M-2.4492935982947065e-15,-100 A100,100 0 0 1 -100, -4.898587196589413e-15`,
    textOffset: '25%',
  },
  {
    role: 'data-professional',
    title: 'Data Professional',
    subtitle: 'Technical Deep Dive',
    path: `M-100,-4.898587196589413e-15 A100,100 0 0 1 -7.347880794884119e-15,100`,
    textOffset: '25%',
  },
  {
    role: 'stalker',
    title: 'General Overview',
    subtitle: '',
    path: `M-7.347880794884119e-15,100 A100,100 0 0 1 100, 9.797174393178826e-15`,
    textOffset: '50%',
  },
];

const getArcPath = (startAngle: number, endAngle: number, radius: number) => {
  const start = {
    x: radius * Math.cos(startAngle),
    y: radius * Math.sin(startAngle),
  };
  const end = {
    x: radius * Math.cos(endAngle),
    y: radius * Math.sin(endAngle),
  };
  const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
};

const totalSegments = roles.length;
const segmentAngle = (2 * Math.PI) / totalSegments;
const gapAngle = 0.05; // radians

export function Sphere() {
  return (
    <div className="relative w-[550px] h-[550px] flex items-center justify-center">
      <div className="absolute w-full h-full">
        <Plane className="absolute top-1/2 left-1/2 -mt-2 -ml-2 text-primary/80 animate-orbit-outer" style={{ animationDelay: '-10s' }} />
        <Plane className="absolute top-1/2 left-1/2 -mt-2 -ml-2 text-primary/80 animate-orbit-outer" style={{ animationDelay: '-20s' }} />
        <Plane className="absolute top-1/2 left-1/2 -mt-2 -ml-2 text-primary/80 animate-orbit-outer" style={{ animationDelay: '-30s' }} />
        <Plane className="absolute top-1/2 left-1/2 -mt-2 -ml-2 text-primary/80 animate-orbit-outer" style={{ animationDelay: '-40s' }} />

        <Plane className="absolute top-1/2 left-1/2 -mt-2 -ml-2 text-primary animate-orbit-inner" style={{ animationDelay: '0s' }} />
        <Plane className="absolute top-1/2 left-1/2 -mt-2 -ml-2 text-primary animate-orbit-inner" style={{ animationDelay: '-10s' }} />
        <Plane className="absolute top-1/2 left-1/2 -mt-2 -ml-2 text-primary animate-orbit-inner" style={{ animationDelay: '-20s' }} />
      </div>

      <svg viewBox="-300 -300 600 600" className="w-full h-full">
        <defs>
          {roles.map((role, index) => {
            const startAngle = index * segmentAngle - Math.PI / 2;
            const endAngle = (index + 1) * segmentAngle - Math.PI / 2 - gapAngle;
            return (
              <path
                key={`path-${role.role}`}
                id={`path-${role.role}`}
                d={getArcPath(startAngle, endAngle, 210)}
              />
            );
          })}
        </defs>
        
        {/* Rings */}
        <circle cx="0" cy="0" r="250" fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="50" />
        <circle cx="0" cy="0" r="160" fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="80" />
        <circle cx="0" cy="0" r="80" fill="hsl(var(--primary) / 0.1)" />


        {roles.map((role, index) => {
          const startAngle = index * segmentAngle - Math.PI / 2;
          const endAngle = (index + 1) * segmentAngle - Math.PI / 2 - gapAngle;

          return (
            <Link key={role.role} href={`/portfolio?role=${role.role}`} className="group">
              <g>
                {/* Outer ring segment */}
                <path d={getArcPath(startAngle, endAngle, 225)} fill="hsl(var(--primary) / 0.2)" className="transition-all duration-300 group-hover:fill-primary/40" stroke="hsl(var(--background))" strokeWidth="5" />
                {/* Inner ring segment */}
                <path d={getArcPath(startAngle, endAngle, 120)} fill="hsl(var(--primary) / 0.8)" className="transition-all duration-300 group-hover:fill-primary" stroke="hsl(var(--background))" strokeWidth="10" />

                <text dy="-5" fill="white" className="font-bold text-base transition-all duration-300 group-hover:fill-white">
                  <textPath href={`#path-${role.role}`} startOffset={role.textOffset}>
                    {role.title}
                  </textPath>
                </text>
                 <text dy="15" fill="white" className="text-xs opacity-80 transition-all duration-300 group-hover:fill-white">
                  <textPath href={`#path-${role.role}`} startOffset={role.textOffset}>
                    {role.subtitle}
                  </textPath>
                </text>
              </g>
            </Link>
          );
        })}
      </svg>
    </div>
  );
}
