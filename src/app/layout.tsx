import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartage - Modern React Framework",
  description: "Build amazing React applications with TypeScript, Next.js, Tailwind CSS, and Framer Motion. The modern framework with best practices built-in.",
  keywords: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Modern Framework"],
  authors: [{ name: "Cartage Team" }],
  creator: "Cartage",
  metadataBase: new URL("https://cartage.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cartage.dev",
    title: "Cartage - Modern React Framework",
    description: "Build amazing React applications with TypeScript, Next.js, Tailwind CSS, and Framer Motion.",
    siteName: "Cartage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cartage - Modern React Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartage - Modern React Framework",
    description: "Build amazing React applications with TypeScript, Next.js, Tailwind CSS, and Framer Motion.",
    images: ["/og-image.jpg"],
    creator: "@cartage_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
