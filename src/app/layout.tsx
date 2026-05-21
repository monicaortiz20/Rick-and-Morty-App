import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/Header";

export const metadata: Metadata = {
  title: "Rick & Morty App",
  description: "Rick & Morty App built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
