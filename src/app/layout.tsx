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
    images: "/public/mercury_logo.png",
    description: "Easily manage Mercury with the official Dashboard",
    url: "https://mercury-bot.vercel.app"
  }
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
