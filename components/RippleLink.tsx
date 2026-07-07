"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

type RippleLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  rippleColor?: string;
};

export default function RippleLink({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.4)",
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  onPointerCancel,
  ...props
}: RippleLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);
  const holdTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastPointRef = useRef({ x: 0, y: 0 });
  const isHoldingRef = useRef(false);

  const spawnRipple = useCallback((clientX: number, clientY: number) => {
    const el = linkRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2.2;
    const id = ++idRef.current;

    setRipples((prev) => [...prev, { id, x, y, size }]);

    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 750);
  }, []);

  const stopHold = useCallback(() => {
    isHoldingRef.current = false;
    if (holdTimerRef.current) {
      clearInterval(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => stopHold(), [stopHold]);

  const handlePointerDown = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.button !== 0) return;

    lastPointRef.current = { x: e.clientX, y: e.clientY };
    isHoldingRef.current = true;
    spawnRipple(e.clientX, e.clientY);

    holdTimerRef.current = setInterval(() => {
      if (isHoldingRef.current) {
        spawnRipple(lastPointRef.current.x, lastPointRef.current.y);
      }
    }, 480);

    onPointerDown?.(e);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLAnchorElement>) => {
    stopHold();
    onPointerUp?.(e);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    stopHold();
    onPointerLeave?.(e);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLAnchorElement>) => {
    stopHold();
    onPointerCancel?.(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (isHoldingRef.current && e.buttons === 1) {
      lastPointRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  return (
    <a
      ref={linkRef}
      className={`ripple-btn relative overflow-hidden ${className}`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerCancel}
      onPointerMove={handlePointerMove}
      {...props}
    >
      <span className="ripple-btn-inner relative z-[1] flex w-full items-center justify-center gap-2">
        {children}
      </span>
      <span className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple-wave"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              ["--ripple-color" as string]: rippleColor,
            }}
          />
        ))}
      </span>
    </a>
  );
}
