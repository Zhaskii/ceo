import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#0154A5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    "Rajul Shrestha | Entrepreneur, Business Leader & Conglomerate Visionary",
  description:
    "Official personal executive portfolio of Rajul Shrestha — UK distinction graduate, Chief Executive Officer of Arksh Group, and Executive Member of the Nepal Chamber of Commerce.",
  keywords: [
    "Rajul Shrestha",
    "Executive Portfolio",
    "Entrepreneur Nepal",
    "Business Leader",
    "Arksh Group CEO",
    "Nepal Chamber of Commerce",
    "Nepal Singapore Chamber",
    "Conglomerate Leadership",
  ],
  authors: [{ name: "Rajul Shrestha" }],
  openGraph: {
    title: "Rajul Shrestha | Official Executive Portfolio",
    description:
      "Explore the leadership journey, vision, keynotes, and diversified enterprise portfolio of Rajul Shrestha.",
    url: "https://rajulshrestha.com",
    siteName: "Rajul Shrestha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajul Shrestha | Official Executive Portfolio",
    description:
      "Explore the leadership journey, vision, keynotes, and diversified enterprise portfolio of Rajul Shrestha.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <Header />
      <body>
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
