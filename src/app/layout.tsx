import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajarshi Nandi • Portfolio",
  description: "Portfolio built with Next.js, Tailwind, shadcn/ui & Framer Motion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
