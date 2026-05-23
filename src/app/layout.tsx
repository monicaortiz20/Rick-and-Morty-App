import type { Metadata } from "next";
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
    <html lang="en suppressHydrationWarning">
      <body
        className="bg-[var(--background)] text-[var(--test-primary)]
      antialiased
      min-h-screen
      overflow-x-hidden
      suppressHydrationWarning"
      >
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            classNames: {
              toast: "glass border border-white/10 text-white",
              success: "!border-[var(--neon-green)]",
              error: "!border-red-500",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
