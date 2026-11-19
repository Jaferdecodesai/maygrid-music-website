import { Logo } from "@/components/Logo";
import { credits, instagram, nav, phoneDisplay, phoneTel, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-tag">Guitar and vocals in Dubai.</p>
        </div>
        <nav aria-label="On this page">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#faq">Questions</a>
            </li>
            <li>
              <a href="#book">Book</a>
            </li>
          </ul>
        </nav>
        <div>
          <p>
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </p>
          <p>
            <a href={instagram.maygrid} target="_blank" rel="noopener noreferrer">
              @maygridmusic
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
          <p>
            <a href={instagram.jaabi} target="_blank" rel="noopener noreferrer">
              @jaabi_baapu
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
      <div className="wrap footer-credits">
        <p>
          Photography and video, as credited on the source posts:{" "}
          {credits.map((credit, index) => (
            <span key={credit.handle}>
              {index > 0 ? " " : null}
              <a href={credit.href} target="_blank" rel="noopener noreferrer">
                {credit.handle}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="credit-note"> — {credit.note}.</span>
            </span>
          ))}
        </p>
        <p>
          Photographs are from public Instagram posts and are used with MayGrid
          Music&apos;s consent. People in the pictures are not named here.
        </p>
        <p className="footer-legal">© 2026 MayGrid Music. Dubai.</p>
      </div>
    </footer>
  );
}

export function StickyWhatsApp() {
  return (
    <a
      className="sticky-wa string-link"
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="string-link__strings" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} style={{ ["--i" as string]: i }} />
        ))}
      </span>
      <span>
        WhatsApp
        <span className="sr-only"> — book your free trial (opens in a new tab)</span>
      </span>
    </a>
  );
}
