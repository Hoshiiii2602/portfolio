"use client";

import React, { useState, useEffect, useRef, ReactNode, HTMLAttributes } from "react";
import { useCoarsePointer, usePrefersReducedMotion } from "@/lib/hooks";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
  inactiveTransition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const coarsePointer = useCoarsePointer();
  const reducedMotion = usePrefersReducedMotion();
  const isDisabled = disabled || coarsePointer || reducedMotion;

  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pendingRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (isDisabled) {
      setPosition({ x: 0, y: 0 });
      setIsActive(false);
      return;
    }

    const flush = () => {
      rafRef.current = 0;
      setIsActive(pendingRef.current.active);
      setPosition({ x: pendingRef.current.x, y: pendingRef.current.y });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        pendingRef.current = {
          active: true,
          x: (e.clientX - centerX) / magnetStrength,
          y: (e.clientY - centerY) / magnetStrength,
        };
      } else {
        pendingRef.current = { active: false, x: 0, y: 0 };
      }

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(flush);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [padding, isDisabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: isDisabled ? undefined : `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isDisabled ? undefined : transitionStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
