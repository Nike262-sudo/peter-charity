import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rev. Peter Olaleye Charity Foundation",
  description: "Serving the community of Ogbomoso through scholarships, healthcare, and empowerment",
  icons: {
    icon: "https://res.cloudinary.com/dkuda0je5/image/upload/v1776513848/icon_light_eftrch.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${GeistSans.variable}`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
