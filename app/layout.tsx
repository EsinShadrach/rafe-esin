import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { cn } from "~/utils/class-name";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafe - Esin",
  description: "Rafe Esin's Portfolio Shadrach's Esin Portfolio",
  authors: [{ name: "Rafe Esin" }, { name: "Shadrach Esin" }],
  creator: "Rafe Esin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-orange-200">
      <body className={cn("flex", GeistSans.className)}>
        <div className="main">
          <div className="gradient" />
        </div>
        {children}
      </body>
    </html>
  );
}
