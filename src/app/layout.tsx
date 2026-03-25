import type { Metadata } from "next";
import {
  Hedvig_Letters_Sans,
  Host_Grotesk,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  weight: ["400", "500", "600", "700"],
});

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  variable: "--font-hedvig-letters-sans",
  weight: ["400"],
  adjustFontFallback: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Clawnesia Build — Komunitas Builder AI Agents #1 di Indonesia",
  description: "Deploy AI Agents. Bangun Bisnis. Temukan Komunitasmu. Komunitas builder Indonesia untuk deploy AI agents yang bekerja 24/7.",
  metadataBase: new URL("https://clawnesia.id"),
  openGraph: {
    title: "Clawnesia Build",
    description: "Komunitas Builder AI Agents #1 di Indonesia 🇮🇩",
    url: "https://clawnesia.id",
    siteName: "Clawnesia Build",
    images: [
      {
        url: "/og-image.jpg",
        width: 1792,
        height: 1024,
        alt: "Clawnesia Build — Komunitas Builder AI Agents #1 di Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawnesia Build",
    description: "Komunitas Builder AI Agents #1 di Indonesia 🇮🇩",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${hostGrotesk.variable} ${hedvigLettersSans.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
