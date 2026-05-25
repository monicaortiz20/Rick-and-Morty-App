import type { Metadata } from "next";
import { AppProvider } from "@/src/context/AppContext";
import { Toaster } from "sonner";
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
    <html lang="en suppressHydrationWarning" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <Toaster position="top-right" duration={1500} richColors />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
