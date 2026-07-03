import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khubaib PP | Cybersecurity Portfolio",
  description:
    "Cybersecurity Professional, EC-Council Certified SOC Analyst, Security Researcher, and Python Developer portfolio focused on SOC operations, ethical hacking, vulnerability assessment, and security automation.",
  keywords: [
    "Khubaib PP",
    "Cybersecurity Professional",
    "SOC Analyst",
    "Penetration Tester",
    "Security Researcher",
    "Python Developer",
    "Kerala Cybersecurity",
    "Vulnerability Assessment"
  ],
  authors: [{ name: "Khubaib PP" }],
  creator: "Khubaib PP",
  openGraph: {
    title: "Khubaib PP | Cybersecurity Portfolio",
    description:
      "Recruiter-focused portfolio for a cybersecurity professional specializing in SOC operations, ethical hacking, SIEM, cloud security, and Python security tooling.",
    type: "website",
    locale: "en_IN"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
