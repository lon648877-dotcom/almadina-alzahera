import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://almadina-alzahera.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ALMADINA ALZAHERA | Water Infrastructure & Maintenance",
    template: "%s | ALMADINA ALZAHERA",
  },

  description:
    "ALMADINA ALZAHERA provides water distribution networks, transmission pipelines, HDPE installation, maintenance, testing and commissioning services across the UAE.",

  keywords: [
    "ALMADINA ALZAHERA",
    "water distribution UAE",
    "water infrastructure UAE",
    "HDPE pipeline installation",
    "water transmission pipelines",
    "general maintenance UAE",
    "pipeline maintenance",
    "Al Ain engineering company",
  ],

  authors: [
    {
      name: "ALMADINA ALZAHERA",
    },
  ],

  creator: "ALMADINA ALZAHERA",
  publisher: "ALMADINA ALZAHERA",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "ALMADINA ALZAHERA",
    title: "ALMADINA ALZAHERA | Water Infrastructure & Maintenance",
    description:
      "Professional water infrastructure, HDPE pipeline, maintenance, testing and commissioning services across the UAE.",
    images: [
      {
        url: "/hero-tank.png",
        width: 1200,
        height: 630,
        alt: "ALMADINA ALZAHERA Water Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ALMADINA ALZAHERA",
    description:
      "Water infrastructure, pipeline and maintenance services across the UAE.",
    images: ["/hero-tank.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "g0NHz4Xeo4JCiBv6mJtH8XgmRu2BXKyHvvdu7dT-XJI",
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}