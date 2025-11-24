import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn, Figtree } from "next/font/google";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

import { Providers } from "./providers";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

const vazirmatn = Vazirmatn({
  display: "swap",
  subsets: ["latin", "arabic"],
  variable: "--font-vazirmatn",
  weight: ["100", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "ToDo App",
  description: "Modern ToDo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${vazirmatn.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`min-h-screen max-h-screen grid grid-rows-[80px_1fr_auto] ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
