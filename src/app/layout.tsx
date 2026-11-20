import type { Metadata, Viewport } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

const BASE = process.env.PAGES_BASE ?? "";
const SITE = BASE
  ? `https://maxbush.github.io${BASE}`
  : "https://www.bevalex.by";
const TITLE = "Bevalex — системный интегратор в Беларуси: ЦОД, защита информации, AI";
const DESCRIPTION =
  "Системный интегратор с 1996 года. 1210+ проектов для Нацбанка, Белтелекома, Аппарата Совмина, Беларуськалия. ЦОД «Поток» SLA 99.9%, защита информации (лицензия ОАЦ), собственное производство серверов.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: `${BASE}/favicon.ico` },
  openGraph: {
    type: "website",
    locale: "ru_BY",
    url: SITE,
    siteName: "Bevalex",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${BASE}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${onest.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
