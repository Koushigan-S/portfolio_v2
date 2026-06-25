import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova | Systems & Software Engineering Portfolio",
  description: "Explore the engineering portfolio of Nova. Specialized in software systems, cloud computing, system design, and product innovation.",
  keywords: [
    "Nova",
    "Software Engineer",
    "System Design",
    "Cloud Computing",
    "Rust",
    "Go",
    "Next.js",
    "Developer Portfolio",
    "B.Tech Computer Science"
  ],
  authors: [{ name: "Nova" }],
  openGraph: {
    title: "Nova | Systems & Software Engineering Portfolio",
    description: "Explore the engineering portfolio of Nova. Specialized in software systems, cloud computing, system design, and product innovation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova | Systems & Software Engineering Portfolio",
    description: "Explore the engineering portfolio of Nova. Specialized in software systems, cloud computing, system design, and product innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
