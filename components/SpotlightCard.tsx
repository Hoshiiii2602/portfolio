"use client";

import React, { useRef, useState } from "react";
import { useCoarsePointer, usePrefersReducedMotion } from "@/lib/hooks";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.2)",
}) => {
  const coarsePointer = useCoarsePointer();
  const reducedMotion = usePrefersReducedMotion();
  const spotlightEnabled = !coarsePointer && !reducedMotion;

  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const rafRef = useRef(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!spotlightEnabled || !divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x, y });
    });
  };

  const handleMouseEnter = () => {
    if (spotlightEnabled) setOpacity(0.5);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {spotlightEnabled && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
          style={{
            opacity,
            background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default SpotlightCard;
