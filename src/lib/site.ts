/**
 * Public facts only. Do not add prices, times, addresses, names or
 * claims that are not in this file — see README, "Content boundaries".
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://maygridmusic.com"
).replace(/\/$/, "");

export const phoneDisplay = "+971 54 540 9151";
export const phoneTel = "+971545409151";

export const trialMessage =
  "Hi! I'd like to book a free trial class at MayGrid Music";

export const whatsappHref = `https://wa.me/971545409151?text=${encodeURIComponent(trialMessage)}`;

export const instagram = {
  maygrid: "https://www.instagram.com/maygridmusic/",
  jaabi: "https://www.instagram.com/jaabi_baapu/",
} as const;

export const mapHref =
  "https://www.google.com/maps/search/?api=1&query=Sharaf+DG+Metro+Station%2C+Dubai";

export const credits = [
  {
    handle: "@ashiq___photography__",
    href: "https://www.instagram.com/ashiq___photography__/",
    note: "black-and-white stage portraits",
  },
  {
    handle: "@tbn56",
    href: "https://www.instagram.com/tbn56/",
    note: "rock gig video",
  },
  {
    handle: "@anish__mohan_",
    href: "https://www.instagram.com/anish__mohan_/",
    note: "Annual Day video courtesy, as credited by MayGrid",
  },
  {
    handle: "@tripova_with_nabeel",
    href: "https://www.instagram.com/tripova_with_nabeel/",
    note: "Annual Day film and the note quoted below",
  },
  {
    handle: "@typicalmalayali",
    href: "https://www.instagram.com/typicalmalayali/",
    note: "student performance, ten months in",
  },
] as const;

export const tripovaQuote = {
  lead: "A huge appreciation to Jaabi, the driving force behind Maygrid Academy.",
  rest: "For years, he has inspired countless students in Dubai to discover their hidden talents. Many who once feared standing in front of an audience now perform confidently on stage—and that’s the true success of a teacher.",
  href: "https://www.instagram.com/reel/Dba45xkINSm/",
  handle: "@tripova_with_nabeel",
} as const;

export const studentQuote = {
  text: "This is me performing after 10 months of learning guitar. @maygridmusic and @jaabi_baapu takes all the credit",
  href: "https://www.instagram.com/reel/DbYHFSWoo04/",
  handle: "@typicalmalayali",
} as const;

export const strangersLine = {
  text: "Strangers when we started. Friends through music. Memories for a lifetime.",
  href: "https://www.instagram.com/reel/DfZVz5dJm-_/",
} as const;

export const nav = [
  { href: "#why", label: "Why" },
  { href: "#repertoire", label: "Repertoire" },
  { href: "#sundays", label: "Sundays" },
  { href: "#stage", label: "Stage" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
] as const;

export const faqs = [
  {
    q: "Who are the classes for?",
    a: "Adults, ages 18 to 40, who want a creative break from work life in Dubai. MayGrid teaches guitar and vocals.",
  },
  {
    q: "What will we play?",
    a: "Western, Bollywood and South Indian covers. Performances have included Malayalam folk rock, rock gigs and Hindi film songs.",
  },
  {
    q: "When are classes, and what do they cost?",
    a: "Every Sunday. Four classes a month, for AED 250.",
  },
  {
    q: "Can I try a class before I join?",
    a: "Yes. There is a free live trial class on Sunday, and a guitar is provided for each participant.",
  },
  {
    q: "What happens besides the Sunday class?",
    a: "Group jams, solo and duo practice, workshops, and an Annual Day concert where students receive certificates on stage.",
  },
  {
    q: "Where is the studio?",
    a: "Near Sharaf DG Metro station, Dubai. Message on WhatsApp for the exact meeting point — a street address is not published here.",
  },
  {
    q: "How do I book?",
    a: "WhatsApp +971 54 540 9151. MayGrid Music is on Instagram at @maygridmusic, and the instructor, Jaabi Baapu, is at @jaabi_baapu.",
  },
] as const;

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MusicSchool", "LocalBusiness"],
    name: "MayGrid Music",
    alternateName: "MayGrid",
    slogan: "Music beyond Grid",
    description:
      "Guitar and vocal training for adults seeking a creative break from work life in Dubai. Classes every Sunday: four a month for AED 250. Free live trial with a guitar provided.",
    url: siteUrl,
    telephone: phoneTel,
    image: `${siteUrl}/og.jpg`,
    priceRange: "AED 250",
    currenciesAccepted: "AED",
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    hasMap: mapHref,
    knowsAbout: [
      "Guitar",
      "Vocals",
      "Western covers",
      "Bollywood covers",
      "South Indian covers",
    ],
    employee: {
      "@type": "Person",
      name: "Jaabi Baapu",
      jobTitle: "Instructor",
      sameAs: instagram.jaabi,
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Monthly Sunday classes",
        price: "250",
        priceCurrency: "AED",
        description: "AED 250 per month for 4 classes, every Sunday.",
        url: whatsappHref,
      },
      {
        "@type": "Offer",
        name: "Free live trial class",
        price: "0",
        priceCurrency: "AED",
        description:
          "Free live trial class on Sunday, with a guitar provided for each participant.",
        url: whatsappHref,
      },
    ],
    sameAs: [instagram.maygrid, instagram.jaabi],
  };
}
