import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercury Dashboard",
  description: "The official dashboard for the mercury discord bot!",
  themeColor: "#e72e6b",
  openGraph: {
    title: "Mercury Dashboard",
    description: "Easily manage Mercury with the official Dashboard",
    url: "https://mercury-bot.vercel.app",
    siteName: 'Next.js',
    images: [
      {
        url: 'https://mercury-bot.vercel.app/mercury_logo.png', // Must be an absolute URL
        width: 200,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work.className}>{children}</body>
    </html>
  );
}
