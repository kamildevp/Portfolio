import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import PageBackground from "@/components/page-background";
import ScrollTop from "@/components/scroll-top";

const ubuntuSans = Ubuntu({
  variable: "--font-ubuntu-sans",
  weight: "300",
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
        className={`${ubuntuSans.variable} antialiased h-full`}
      >
        <ScrollTop />
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
