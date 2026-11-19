import { Footer, StickyWhatsApp } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { HeroMedia } from "@/components/HeroMedia";
import { Marquee } from "@/components/Marquee";
import { Media } from "@/components/Media";
import {
  Faq,
  FinalCta,
  Repertoire,
  Stage,
  Sundays,
  Visit,
  Voices,
  Why,
} from "@/components/Sections";
import { TrialLink } from "@/components/TrialLink";
import { phoneDisplay, phoneTel } from "@/lib/site";

export default function Page() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker">Dubai · Ages 18–40</p>
              <h1 id="hero-title" className="hero-title">
                <span className="line">
                  <span>Music</span>
                </span>
                <span className="line">
                  <span className="serif">beyond</span>
                </span>
                <span className="line">
                  <span>Grid</span>
                </span>
              </h1>
              <p className="lede">
                Guitar and vocal training for adults who want a creative break
                from work life in Dubai. Learn, unwind, and express through
                music.
              </p>
              <div className="hero-actions">
                <TrialLink />
                <p className="hero-meta">
                  <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
                  <span>Sundays · 4 classes · AED 250 a month</span>
                </p>
              </div>
            </div>
            <div className="hero-media">
              <HeroMedia />
              <figure className="hero-still">
                <div className="frame">
                  <Media
                    id="electric"
                    alt="Electric guitarist on a dark stage, photographed in black and white"
                    sizes="(min-width: 900px) 26vw, 1px"
                    onlyAbove={900}
                    objectPosition="center 28%"
                  />
                </div>
                <figcaption>
                  Photo{" "}
                  <a
                    href="https://www.instagram.com/ashiq___photography__/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ashiq___photography__
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <Marquee />
        <Why />
        <Repertoire />
        <Sundays />
        <Stage />
        <Gallery />
        <Voices />
        <Visit />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
