import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafe-esin.com"),
  title: "Shadrach Esin - Portfolio",
  description:
    "Explore the portfolio of Shadrach Esin, showcasing creative works and projects. Discover a collection of design, development, and creative endeavors.",
  applicationName: "Shadrach Esin Portfolio",
  authors: [{ name: "Shadrach Esin", url: "https://rafe-esin.com" }],
  keywords: [
    "Shadrach Esin",
    "Rafe Esin",
    "Portfolio",
    "Projects",
    "Design",
    "Development",
    "Creative Works",
    "App Development",
    "Web Development",
    "Front End Development",
    "Back End development",
  ],
  referrer: "origin",
  openGraph: {
    type: "website",
    url: "https://rafe-esin.com",
    title: "Shadrach Esin - Portfolio",
    description:
      "Explore the portfolio of Shadrach Esin, showcasing creative works and projects.",
    siteName: "Shadrach Esin Portfolio",
    locale: "en_US",
    emails: [
      "esinshadrachrafe@gmail.com",
      "shadrachrafeesin@gmail.com",
      "rafeesin@gmail.com",
    ],
  },
  twitter: {
    site: "@rafeesin",
    creator: "@rafeesin",
    title: "Shadrach Esin - Portfolio",
    description:
      "Explore the portfolio of Shadrach Esin, showcasing creative works and projects.",
  },
  appleWebApp: {
    capable: true,
    title: "Shadrach Esin Portfolio",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "Explore the creative journey and professional accomplishments of Shadrach Esin through an impressive portfolio of design, development, and other creative projects.",
  category: "Portfolio",
  classification: "Personal Portfolio",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>{children}</body>
    </html>
  );
}
