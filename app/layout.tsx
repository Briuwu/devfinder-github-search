import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "devfinder",
  description: "Find developers on GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased min-h-screen bg-lightMode-light-grey dark:bg-darkMode-black text-lightMode-dark-blue dark:text-darkMode-white max-w-[730px] mx-auto`}
      >
        <Nav />
        <main className="container mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
