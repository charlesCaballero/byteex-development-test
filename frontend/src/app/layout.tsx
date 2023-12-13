import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./provider";

// const inter = Inter({ subsets: ["latin"] });
const font = localFont({
  src: "./fonts/sofiapro-light.otf",
  display: "swap",
  variable: "--font-sofia",
});

export const metadata: Metadata = {
  title: "Byteex",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
