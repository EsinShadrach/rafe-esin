import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ScrollProvider } from "~/utils/scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafe-esin.vercel.app"),
  title: "Shadrach Esin - Portfolio",
  description:
    "Explore the portfolio of Shadrach Esin, showcasing creative works and projects. Discover a collection of design, development, and creative endeavors.",
  applicationName: "Shadrach Esin Portfolio",
  authors: [{ name: "Shadrach Esin", url: "https://rafe-esin.vercel.app" }],
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
    url: "https://rafe-esin.vercel.app",
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
    <html lang="en" className="bg-orange-200">
      <body className={`${GeistSans.className} overflow-x-hidden`}>
        <ScrollProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
