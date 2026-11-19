import type { Metadata } from "next";
import { TrialLink } from "@/components/TrialLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="content" className="not-found wrap">
      <p className="kicker">404</p>
      <h1>This page is not on the site.</h1>
      <p>
        <a className="text-link" href="/">
          Back to MayGrid Music
        </a>
      </p>
      <TrialLink />
    </main>
  );
}
