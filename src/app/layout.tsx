import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Voor Matthijs",
  description: "Dashboard voor Matthijs met allemaal informatie over hoe hij niet/wel zijn BSA/studie gaat halen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains_mono.variable} bg-neutral-800`}>{children}</body>
    </html>
  );
}
