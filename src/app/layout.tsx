import type { Metadata } from "next";
import { Fraunces, Oswald, Outfit } from "next/font/google";
import { jsonLd, siteUrl } from "@/lib/site";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display-next",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-next",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body-next",
  display: "swap",
});

const title = "MayGrid Music — Guitar & vocal classes in Dubai";
const description =
  "Guitar and vocal training for adults in Dubai. Sundays, four classes a month for AED 250. Free live trial with a guitar provided, near Sharaf DG Metro.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · MayGrid Music",
  },
  description,
  applicationName: "MayGrid Music",
  authors: [{ name: "MayGrid Music", url: "https://www.instagram.com/maygridmusic/" }],
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/`,
    siteName: "MayGrid Music",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "MayGrid Music — guitar and vocal training in Dubai. Music beyond Grid.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${body.variable}`}
    >
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </body>
    </html>
  );
}
