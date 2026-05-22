import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
