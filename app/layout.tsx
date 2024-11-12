import "./globals.css";

import { Inter, Roboto } from "next/font/google";

import type { Metadata } from "next";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Health Plus",
  description: "A website page for Health Plus, a health service provider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}  antialiased `}>
        {children}
      </body>
    </html>
  );
}
