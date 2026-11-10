import type { Metadata, Viewport } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import { SITE_URL, profile, experience, education, skills } from "@/data/resume";
import "./globals.css";

const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

const description =
  "Ankaj Rana — Frontend Developer with 8+ years of experience in React.js, Next.js, TypeScript, Redux Toolkit and Tailwind CSS. Building AI voice agent SaaS (ItsBot) and educational platforms in Mohali, India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} — ${profile.title} | React.js & Next.js`,
  description,
  keywords: [
    "Ankaj Rana",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "UI Developer",
    "Mohali",
    "Chandigarh",
    "India",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary", title: `${profile.name} — ${profile.title}`, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#111316" },
  ],
};

// Structured data so search engines and parsers can read the profile as data.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin],
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
  knowsAbout: skills.flatMap((s) => s.items).slice(0, 30),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
