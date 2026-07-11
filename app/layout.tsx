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
    default:
      "المدينة الزاهرة | ALMADINA ALZAHERA | Water Infrastructure UAE",
    template: "%s | المدينة الزاهرة",
  },

  description:
    "شركة المدينة الزاهرة ALMADINA ALZAHERA متخصصة في شبكات توزيع المياه، خطوط نقل المياه، تركيب مواسير HDPE، الصيانة، الاختبارات والتشغيل في دولة الإمارات.",

  keywords: [
    "المدينة الزاهرة",
    "شركة المدينة الزاهرة",
    "المدينة الزاهرة الإمارات",
    "ALMADINA ALZAHERA",
    "Almadina Alzahera UAE",
    "water infrastructure UAE",
    "water distribution UAE",
    "HDPE pipeline installation UAE",
    "water transmission pipelines",
    "general maintenance UAE",
    "Al Ain water company",
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
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    url: siteUrl,
    siteName: "المدينة الزاهرة | ALMADINA ALZAHERA",
    title: "المدينة الزاهرة | ALMADINA ALZAHERA",
    description:
      "شركة متخصصة في شبكات المياه وخطوط النقل وتركيب HDPE والصيانة والاختبارات والتشغيل في الإمارات.",
    images: [
      {
        url: "/hero-tank.png",
        width: 1200,
        height: 630,
        alt: "شركة المدينة الزاهرة لخدمات البنية التحتية وشبكات المياه",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "المدينة الزاهرة | ALMADINA ALZAHERA",
    description:
      "خدمات شبكات المياه وخطوط النقل وتركيب HDPE والصيانة في الإمارات.",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "المدينة الزاهرة",
  alternateName: [
    "ALMADINA ALZAHERA",
    "Almadina Alzahera",
    "شركة المدينة الزاهرة",
  ],
  inLanguage: ["ar-AE", "en-AE"],
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "ALMADINA ALZAHERA",
  alternateName: [
    "المدينة الزاهرة",
    "شركة المدينة الزاهرة",
    "Almadina Alzahera",
  ],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/hero-tank.png`,
  description:
    "شركة المدينة الزاهرة متخصصة في شبكات توزيع المياه، خطوط النقل، تركيب مواسير HDPE، الصيانة، الاختبارات والتشغيل في دولة الإمارات.",
  email: "info@almadinaalzahera.com",
  telephone: "+971507605744",
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "18402",
    addressLocality: "Al Ain",
    addressRegion: "Abu Dhabi",
    addressCountry: "AE",
  },
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}