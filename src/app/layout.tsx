import type { Metadata } from "next";
import { Chelsea_Market, Libertinus_Serif } from "next/font/google";
import "./globals.css";

const libertinusSerif = Libertinus_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const chelseaMarket = Chelsea_Market({
  variable: "--font-chelsea-market",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Cameron Huang",
  description: "Cameron Huang Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libertinusSerif.variable} ${chelseaMarket.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
