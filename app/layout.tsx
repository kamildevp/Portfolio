import type { Metadata } from "next";
import { Zen_Dots } from "next/font/google";
import "./globals.css";
import PageBackground from "@/components/page-background";
import ScrollTop from "@/components/scroll-top";

const zenDotsSans = Zen_Dots({
  variable: "--font-zen_dots-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body
        className={`${zenDotsSans.variable} antialiased h-full`}
      >
        <ScrollTop />
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
