"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Media, type MediaId } from "@/components/Media";

type Shot = {
  id: MediaId;
  alt: string;
  caption: string;
  credit?: string;
  creditHref?: string;
  position?: string;
};

const shots: Shot[] = [
  {
    id: "ensemble",
    alt: "A group of guitarists performing together on stage under blue light",
    caption: "Annual Day, the ensemble",
    position: "center 40%",
  },
  {
    id: "electric",
    alt: "Electric guitarist on a dark stage, photographed in black and white",
    caption: "Electric, in black and white",
    credit: "@ashiq___photography__",
    creditHref: "https://www.instagram.com/ashiq___photography__/",
    position: "center 30%",
  },
  {
    id: "red",
    alt: "Musicians on a stage washed in red light",
    caption: "Red light, live set",
    position: "center 35%",
  },
  {
    id: "vocal",
    alt: "A vocalist singing into a microphone, in black and white",
    caption: "Vocals",
    credit: "@ashiq___photography__",
    creditHref: "https://www.instagram.com/ashiq___photography__/",
    position: "center 18%",
  },
  {
    id: "certificates",
    alt: "People on stage during a certificate moment at Annual Day, under purple light",
    caption: "Certificates, on stage",
    position: "center 30%",
  },
  {
    id: "vocal2",
    alt: "A vocalist holding a microphone, in black and white",
    caption: "Another voice",
    credit: "@ashiq___photography__",
    creditHref: "https://www.instagram.com/ashiq___photography__/",
    position: "center 20%",
  },
  {
    id: "jam",
    alt: "Adults seated together playing acoustic guitars in a bright room",
    caption: "The jam room",
    position: "center 45%",
  },
  {
    id: "portrait",
    alt: "A performer in sunglasses at a microphone, in black and white",
    caption: "On the mic",
    credit: "@ashiq___photography__",
    creditHref: "https://www.instagram.com/ashiq___photography__/",
    position: "center 22%",
  },
  {
    id: "duo",
    alt: "Two people playing acoustic guitars side by side",
    caption: "Duo practice",
    position: "center 40%",
  },
  {
    id: "wide",
    alt: "A wider view of adults playing acoustic guitars together",
    caption: "Group jam",
    credit: "@tbn56",
    creditHref: "https://www.instagram.com/tbn56/",
    position: "center 42%",
  },
  {
    id: "student",
    alt: "A performer in an orange cap singing and playing acoustic guitar on stage",
    caption: "Ten months in, on stage",
    credit: "@typicalmalayali",
    creditHref: "https://www.instagram.com/typicalmalayali/",
    position: "center 28%",
  },
  {
    id: "curtain",
    alt: "A guitarist playing solo on stage against a deep blue curtain",
    caption: "Solo, blue curtain",
    position: "center 32%",
  },
];

export function Gallery() {
  const scroller = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scroller });
  const scaleX = useSpring(scrollXProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  function move(direction: number) {
    const el = scroller.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * Math.max(280, el.clientWidth * 0.75),
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="wrap gallery-head">
        <div>
          <p className="kicker">05 — The room and the night</p>
          <h2 id="gallery-title">Jams, gigs, Annual Day.</h2>
        </div>
        <div className="gallery-controls">
          <button type="button" onClick={() => move(-1)}>
            Previous
          </button>
          <button type="button" onClick={() => move(1)}>
            Next
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="gallery-track"
        tabIndex={0}
        aria-label="Photographs, scroll sideways"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {shots.map((shot) => (
          <figure key={shot.id}>
            <div className="frame">
              <Media
                id={shot.id}
                alt={shot.alt}
                sizes="(min-width: 900px) 380px, 78vw"
                objectPosition={shot.position}
              />
            </div>
            <figcaption>
              <span>{shot.caption}</span>
              {shot.credit && shot.creditHref ? (
                <a href={shot.creditHref} target="_blank" rel="noopener noreferrer">
                  {shot.credit}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="wrap">
        <div className="gallery-bar" aria-hidden="true">
          <motion.span style={{ scaleX, transformOrigin: "0% 50%" }} />
        </div>
      </div>
    </section>
  );
}
