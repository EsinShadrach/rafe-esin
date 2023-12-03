import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { cn } from "~/utils/class-name";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafe-esin.vercel.app"),
  title: "Shadrach Esin - Portfolio",
  description:
    "Welcome to the portfolio of Shadrach Esin, showcasing creative works and projects. Explore my skills, experience, and accomplishments.",
  applicationName: "Shadrach Esin Portfolio",
  authors: [{ name: "Shadrach Esin", url: "https://rafe-esin.vercel.app" }],
  keywords: [
    "Shadrach Esin",
    "Portfolio",
    "Projects",
    "Design",
    "Development",
    "Creative Works",
  ],
  referrer: "origin",
  themeColor: "#3498db",
  openGraph: {
    type: "website",
    url: "https://rafe-esin.vercel.app",
    title: "Shadrach Esin - Portfolio",
    description:
      "Welcome to the portfolio of Shadrach Esin, showcasing creative works and projects.",
    siteName: "Shadrach Esin Portfolio",
    images: [
      {
        url: "https://rafe-esin.vercel.app/og-image.png",
        alt: "Shadrach Esin Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    site: "@rafeesin",
    creator: "@rafeesin",
    title: "Shadrach Esin - Portfolio",
    description:
      "Welcome to the portfolio of Shadrach Esin, showcasing creative works and projects.",
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
  other: {
    industry: ["Web Development", "App Development"],
    audience: "Clients, Employers, Collaborators",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-orange-200">
      <body className={`${GeistSans.className} flex`}>
        <div className="main">
          <div className="gradient" />
        </div>
        {children}
      </body>
    </html>
  );
}
