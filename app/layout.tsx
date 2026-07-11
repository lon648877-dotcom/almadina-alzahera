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
    default: "ALMADINA ALZAHERA | المدينة الزاهرة",
    template: "%s | ALMADINA ALZAHERA",
  },

  applicationName: "ALMADINA ALZAHERA",

  description:
    "ALMADINA ALZAHERA (شركة المدينة الزاهرة) is a UAE engineering company specialized in water distribution networks, transmission pipelines, HDPE installation, maintenance, testing and commissioning.",

  keywords: [
    "ALMADINA ALZAHERA",
    "المدينة الزاهرة",
    "شركة المدينة الزاهرة",
    "Water Infrastructure UAE",
    "HDPE Pipeline",
    "Water Distribution",
    "Transmission Pipeline",
    "General Maintenance UAE",
    "Al Ain",
    "Abu Dhabi",
  ],

  authors: [
    {
      name: "ALMADINA ALZAHERA",
      url: siteUrl,
    },
  ],

  creator: "ALMADINA ALZAHERA",
  publisher: "ALMADINA ALZAHERA",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ALMADINA ALZAHERA",
    title: "ALMADINA ALZAHERA | المدينة الزاهرة",
    description:
      "Professional Water Infrastructure, HDPE Pipeline Installation, Maintenance, Testing and Commissioning across the UAE.",
    images: [
      {
        url: "/hero-tank.png",
        width: 1200,
        height: 630,
        alt: "ALMADINA ALZAHERA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ALMADINA ALZAHERA",
    description:
      "Professional Water Infrastructure Services across the UAE.",
    images: ["/hero-tank.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "g0NHz4Xeo4JCiBv6mJtH8XgmRu2BXKyHvvdu7dT-XJI",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "ALMADINA ALZAHERA",
  alternateName: [
    "المدينة الزاهرة",
    "شركة المدينة الزاهرة",
    "Almadina Alzahera",
  ],
  inLanguage: ["en-AE", "ar-AE"],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "ALMADINA ALZAHERA",
  alternateName: [
    "المدينة الزاهرة",
    "شركة المدينة الزاهرة",
  ],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/hero-tank.png`,
  email: "info@almadinaalzahera.com",
  telephone: "+971507605744",
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "18402",
    addressLocality: "Al Ain",
    addressRegion: "Abu Dhabi",
    addressCountry: "AE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}