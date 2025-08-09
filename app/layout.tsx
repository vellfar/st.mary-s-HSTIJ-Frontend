import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "St. Mary’s Health Science Training Institute | Juba, South Sudan",
  description: "Empowering future healthcare professionals in South Sudan through high-quality training in Nursing, Midwifery, Clinical Health, and Public Health. 100% national exam pass rate. Apply now.",
  keywords: ["Nursing school Juba, Midwifery training South Sudan, Health Institute Juba, Public Health Diploma, Clinical Health courses, St. Mary’s Institute, Juba medical school"],
  authors: [{ name: "Vellfar Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'vellfar'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
