import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextSolution UG",
  description: "The platform where EVERY Ugandan idea gets a REAL chance to turn into a digital solution",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head className="text-orange-400">
        {/* SVG favicon (modern browsers) */}
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />

        {/* Fallback PNG/ICO for older browsers */}
        <link rel="alternate icon" href="/favicon/favicon.ico" />

        {/* Apple touch icon (iOS) */}
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        {/* Optional: different sizes */}
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
