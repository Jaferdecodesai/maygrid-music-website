import { Media } from "@/components/Media";
import { Parallax } from "@/components/Parallax";
import { TrialLink } from "@/components/TrialLink";
import {
  faqs,
  instagram,
  mapHref,
  phoneDisplay,
  phoneTel,
  strangersLine,
  studentQuote,
  tripovaQuote,
} from "@/lib/site";

export function Why() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="wrap why-grid">
        <figure className="why-photo">
          <Parallax>
            <Media
              id="jam"
              alt="Adults seated together playing acoustic guitars in a bright room"
              sizes="(min-width: 900px) 52vw, 92vw"
              objectPosition="center 42%"
            />
          </Parallax>
          <figcaption>Group jam.</figcaption>
        </figure>
        <div className="why-copy">
          <p className="kicker">01 — Why MayGrid</p>
          <h2 id="why-title">A creative break from the working week.</h2>
          <p className="lede">
            Guitar and vocal training for adults, ages 18 to 40, who want a
            creative break from work life in Dubai. Learn, unwind, and express
            through music with Jaabi Baapu.
          </p>
          <dl className="triad">
            <div>
              <dt>Learn</dt>
              <dd>Guitar and vocals, in the same room.</dd>
            </div>
            <div>
              <dt>Unwind</dt>
              <dd>A Sunday kept for playing.</dd>
            </div>
            <div>
              <dt>Express</dt>
              <dd>Jams, workshops, and a stage when the song is ready.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Repertoire() {
  return (
    <section id="repertoire" className="section section-tight" aria-labelledby="repertoire-title">
      <div className="wrap">
        <p className="kicker">02 — What you&apos;ll play</p>
          <h2 id="repertoire-title" className="sr-only">
            Western, Bollywood and South Indian covers
          </h2>
        <ol className="rep-list">
          <li>
            <span>01</span>
            <h3>Western covers</h3>
          </li>
          <li>
            <span>02</span>
            <h3>Bollywood covers</h3>
          </li>
          <li>
            <span>03</span>
            <h3>South Indian covers</h3>
          </li>
        </ol>
        <p className="lede rep-note">
          On stage, that has meant Malayalam folk rock, rock gigs, and Hindi
          film songs — among them, Teri Deewani.
        </p>
      </div>
      <figure className="band">
        <div className="frame">
          <Media
            id="curtain"
            alt="A guitarist playing solo on stage against a deep blue curtain"
            sizes="100vw"
            objectPosition="center 34%"
          />
        </div>
        <figcaption className="wrap">Solo guitar, from the stage.</figcaption>
      </figure>
    </section>
  );
}

export function Sundays() {
  return (
    <section id="sundays" className="section sundays" aria-labelledby="sundays-title">
      <div className="wrap sundays-grid">
        <div>
          <p className="kicker">03 — How it works</p>
          <h2 id="sundays-title">Four Sundays. One fee.</h2>
          <p className="price" aria-label="250 dirhams per month">
            <span className="price-currency">AED</span>
            <span className="price-num">250</span>
            <span className="price-unit">per month</span>
          </p>
        </div>
        <ol className="facts">
          <li>
            <span>01</span>
            <h3>Every Sunday</h3>
            <p>Classes meet once a week, on Sunday.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Four classes</h3>
            <p>A month at MayGrid is four classes.</p>
          </li>
          <li>
            <span>03</span>
            <h3>A guitar, provided</h3>
            <p>
              The first class is a free live trial. A guitar is provided for
              each participant.
            </p>
          </li>
        </ol>
        <TrialLink>Book your free trial</TrialLink>
      </div>
    </section>
  );
}

export function Stage() {
  return (
    <section id="stage" className="section" aria-labelledby="stage-title">
      <div className="wrap stage-top">
        <div>
          <p className="kicker">04 — From practice to performance</p>
          <h2 id="stage-title">The stage is part of the teaching.</h2>
          <p className="lede">
            Group jams, solo and duo practice, and workshops lead to MayGrid
            Annual Day — a concert where students perform, including
            first-time performers, and receive certificates on stage.
          </p>
          <blockquote className="strangers" cite={strangersLine.href}>
            <p>{strangersLine.text}</p>
            <footer>
              <a href={strangersLine.href} target="_blank" rel="noopener noreferrer">
                MayGrid Music
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </footer>
          </blockquote>
        </div>
        <figure className="stage-photo">
          <Parallax>
            <Media
              id="certificates"
              alt="People on stage during a certificate moment at Annual Day, under purple light"
              sizes="(min-width: 900px) 48vw, 92vw"
              objectPosition="center 28%"
            />
          </Parallax>
          <figcaption>Annual Day. Certificates, on the stage.</figcaption>
        </figure>
      </div>
      <div className="wrap student-row">
        <figure>
          <div className="frame frame-portrait">
            <Media
              id="student"
              alt="A performer in an orange cap singing and playing acoustic guitar on stage"
              sizes="(min-width: 800px) 32vw, 92vw"
              objectPosition="center 24%"
            />
          </div>
          <figcaption>A performance still from {studentQuote.handle}.</figcaption>
        </figure>
        <blockquote cite={studentQuote.href}>
          <p>{studentQuote.text}</p>
          <footer>
            <a href={studentQuote.href} target="_blank" rel="noopener noreferrer">
              {studentQuote.handle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span>After 10 months of learning guitar</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

export function Voices() {
  return (
    <section id="voices" className="section voices on-paper" aria-labelledby="voices-title">
      <div className="wrap voices-grid">
        <p className="kicker">06 — In their words</p>
        <h2 id="voices-title" className="sr-only">
          A note from Annual Day
        </h2>
        <blockquote cite={tripovaQuote.href}>
          <p className="voices-lead">{tripovaQuote.lead}</p>
          <p>{tripovaQuote.rest}</p>
          <footer>
            <a href={tripovaQuote.href} target="_blank" rel="noopener noreferrer">
              {tripovaQuote.handle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span>On MayGrid Annual Day</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="section" aria-labelledby="visit-title">
      <div className="wrap visit-grid">
        <div>
          <p className="kicker">07 — Find the studio</p>
          <h2 id="visit-title">Near Sharaf DG Metro.</h2>
          <p className="lede">
            The studio is near Sharaf DG Metro station, Dubai. WhatsApp for the
            exact meeting point, and to hold a Sunday trial.
          </p>
          <p className="phone-line">
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </p>
          <ul className="social-list">
            <li>
              <a href={instagram.maygrid} target="_blank" rel="noopener noreferrer">
                Instagram @maygridmusic
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={instagram.jaabi} target="_blank" rel="noopener noreferrer">
                Instructor @jaabi_baapu
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
        <a className="metro" href={mapHref} target="_blank" rel="noopener noreferrer">
          <span className="metro-bar" aria-hidden="true" />
          <span className="metro-body">
            <span className="kicker">Map</span>
            <span className="metro-name">Sharaf DG</span>
            <span className="metro-place">Metro station, Dubai</span>
            <span className="metro-go">
              Open in Google Maps
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div>
          <p className="kicker">08 — Before you write</p>
          <h2 id="faq-title">The facts, plainly.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p className="faq-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="book" className="final" aria-labelledby="book-title">
      <div className="final-photo">
        <Media
          id="ensemble"
          alt="A group of guitarists performing together on stage under blue light at Annual Day"
          sizes="(min-width: 900px) 50vw, 100vw"
          objectPosition="center 40%"
        />
      </div>
      <div className="final-copy">
        <p className="kicker">Sunday is open</p>
        <h2 id="book-title">The trial is free. The guitar is provided.</h2>
        <p className="lede">
          A live class on Sunday, near Sharaf DG Metro. After that, four
          classes a month are AED 250.
        </p>
        <TrialLink>Book your free trial</TrialLink>
        <p className="phone-line">
          <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
        </p>
      </div>
    </section>
  );
}
