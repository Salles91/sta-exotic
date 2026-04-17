import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sta-exotic.vercel.app"),
  title: "STA Exotic, Legacy to Legal, Licensed in New York",
  description:
    "Processor OCM-PROC-24-000010. Stocked in 80+ New York and California dispensaries. 84K strong. Built by cultivators for the culture.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "STA Exotic",
    description:
      "Legacy to Legal. Licensed processor, stocked in 80+ New York and California dispensaries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-[family-name:var(--font-sans)] antialiased">
        {children}
      </body>
    </html>
  );
}
