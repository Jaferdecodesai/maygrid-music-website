"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { TrialLink } from "@/components/TrialLink";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const first = navRef.current?.querySelector<HTMLAnchorElement>("a");
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" id="top">
      <div className="wrap header-bar">
        <a className="logo-link" href="#top" aria-label="MayGrid Music, back to top">
          <Logo />
        </a>
        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => {
            setOpen((value) => {
              if (value) buttonRef.current?.focus();
              return !value;
            });
          }}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          ref={navRef}
          id="site-menu"
          className={open ? "primary-nav is-open" : "primary-nav"}
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <TrialLink className="nav-trial">Book your free trial</TrialLink>
        </nav>
        <TrialLink className="header-cta">Book your free trial</TrialLink>
      </div>
    </header>
  );
}
