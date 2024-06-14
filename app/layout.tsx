import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RumiGrow",
  description:
    "RumiGrow is a platform for growing your business. Coming soon!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="default">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.GOOGLE_MEASUREMENT_ID || ""} />
    </html>
  );
}
