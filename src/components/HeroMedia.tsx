"use client";

import { useEffect, useState } from "react";
import { Media } from "@/components/Media";

const POSTER = "/media/poster-720.webp";

export function HeroMedia() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const data = window.matchMedia("(prefers-reduced-data: reduce)");
    const enable = () => setPlay(!motion.matches && !data.matches);
    enable();
    motion.addEventListener("change", enable);
    data.addEventListener("change", enable);
    return () => {
      motion.removeEventListener("change", enable);
      data.removeEventListener("change", enable);
    };
  }, []);

  return (
    <div className="hero-video">
      <Media
        id="poster"
        alt="A singer with a guitar on stage at a MayGrid Annual Day concert"
        sizes="(min-width: 900px) 38vw, 92vw"
        priority
        objectPosition="center 48%"
      />
      {play ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
          aria-hidden="true"
          tabIndex={-1}
          preload="metadata"
        >
          <source src="/video/hero-loop.mp4" type="video/mp4" />
        </video>
      ) : null}
      <p className="live-tag">Annual Day</p>
    </div>
  );
}
