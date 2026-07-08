import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.khubaibpp.online";
const siteTitle = "Khubaib PP | Cybersecurity Portfolio | SOC Analyst | Penetration Tester";
const siteDescription =
  "Dedicated and motivated aspiring cybersecurity professional with a Bachelor's degree in Computer Applications (BCA), an add-on specialization in Ethical Hacking and Cybersecurity, and the EC-Council Certified SOC Analyst (CSA) certification. Passionate about SOC Operations, Penetration Testing, Threat Detection, SIEM, and Security Automation.";
const socialTitle = "Khubaib PP | Cybersecurity Portfolio";
const socialDescription =
  "Certified SOC Analyst and aspiring Cybersecurity Professional specializing in SOC Operations, Penetration Testing, Threat Detection, SIEM, and Security Automation.";
const profileImage = `${siteUrl}/profile.png`;
const socialImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Cybersecurity",
    "SOC Analyst",
    "EC-Council CSA",
    "Penetration Testing",
    "Threat Detection",
    "SIEM",
    "Splunk",
    "Microsoft Sentinel",
    "Wazuh",
    "Cloud Security",
    "Ethical Hacking",
    "Digital Forensics",
    "Network Security",
    "Python",
    "Security Researcher",
    "Portfolio",
    "Khubaib PP",
    "Cybersecurity Portfolio"
  ],
  authors: [{ name: "Khubaib PP" }],
  creator: "Khubaib PP",
  publisher: "Khubaib PP",
  applicationName: "Khubaib PP Portfolio",
  category: "Cybersecurity Portfolio",
  alternates: {
    canonical: siteUrl
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    type: "website",
    url: siteUrl,
    siteName: "Khubaib PP Portfolio",
    locale: "en_IN",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Khubaib PP Cybersecurity Portfolio social preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: "EC-Council Certified SOC Analyst - Aspiring Cybersecurity Professional - Penetration Tester - Security Researcher",
    images: [socialImage],
    creator: "@q_ubaibpp"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" }
  ]
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khubaib PP",
  jobTitle: "Aspiring Cybersecurity Professional",
  description: siteDescription,
  url: siteUrl,
  email: "mailto:khubaibvpp@gmail.com",
  image: profileImage,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thaliparamba",
    addressRegion: "Kannur, Kerala",
    addressCountry: "IN"
  },
  sameAs: [
    "https://github.com/khub000",
    "https://www.linkedin.com/in/khubaib-pp-5b34153a7",
    "https://tryhackme.com/p/khubaibpp3",
    "https://x.com/q_ubaibpp",
    "https://www.instagram.com/q_ubaibpp"
  ],
  knowsAbout: [
    "SOC Operations",
    "Penetration Testing",
    "Threat Detection",
    "SIEM",
    "Security Automation",
    "Digital Forensics",
    "Cloud Security",
    "Python"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Khubaib PP Portfolio",
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@type": "Person",
    name: "Khubaib PP",
    url: siteUrl
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
        />
        {children}
      </body>
    </html>
  );
}
