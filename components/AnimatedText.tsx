"use client";

import { useEffect, useState } from "react";

type GradientTextProps = {
  children: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
};

export function NameGradient({
  children,
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag className={`name-gradient ${className}`}>
      {children}
    </Tag>
  );
}

export function GradientText({
  children,
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag className={`gradient-text animate-gradient-shift ${className}`}>
      {children}
    </Tag>
  );
}

type TypewriterProps = {
  words: string[];
  className?: string;
};

export function TypewriterText({ words, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={`typewriter-text ${className}`}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}

type ShimmerTitleProps = {
  children: string;
  className?: string;
};

export function ShimmerTitle({ children, className = "" }: ShimmerTitleProps) {
  return (
    <span className={`shimmer-title ${className}`} data-text={children}>
      {children}
    </span>
  );
}
