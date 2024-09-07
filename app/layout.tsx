import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MranDvX",
  description: "Francisco Mancuello Vazquez - Frontend Developer",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mrandvx.com",
    title: "MranDvX",
    description: "Francisco Mancuello Vazquez - Frontend Developer",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  authors: {
    name: "Francisco Mancuello",
  },
  keywords:
    "frontend, developer, frontend developer, portfolio, mrandvx, francisco mancuello, francisco mancuello vazquez, sideproject, side project, side projects, indie hacker, software engineer, software developer, web developer, react, nextjs, ia, astro, tailwindcss, typescript, bento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
