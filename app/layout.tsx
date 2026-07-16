import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arena-rio-verde-beach-sports.vercel.app/"),

  title: {
    default:
      "Arena Rio Verde | Beach Tennis, Futevôlei e Beach Volley em Pirassununga",
    template: "%s | Arena Rio Verde",
  },

  description:
    "Arena Rio Verde é a principal arena de esportes de areia em Pirassununga/SP. Pratique Beach Tennis, Futevôlei e Beach Volley em uma estrutura completa com quadras de areia, bar, churrasqueira e eventos esportivos.",

  keywords: [
    "beach tennis pirassununga",
    "futevôlei pirassununga",
    "beach volley pirassununga",
    "arena esportiva pirassununga",
    "quadra beach tennis pirassununga",
    "quadra de areia pirassununga",
    "esportes de areia pirassununga",
    "Arena Rio Verde",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://arena-rio-verde-beach-sports.vercel.app/",
    siteName: "Arena Rio Verde",

    title:
      "Arena Rio Verde | Beach Tennis, Futevôlei e Beach Volley em Pirassununga",

    description:
      "A principal arena de esportes de areia de Pirassununga. Beach Tennis, Futevôlei, Beach Volley, eventos, bar e muito mais.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arena Rio Verde em Pirassununga",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Arena Rio Verde | Beach Tennis, Futevôlei e Beach Volley em Pirassununga",

    description:
      "A principal arena de esportes de areia de Pirassununga.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Arena Rio Verde",
    description:
      "Arena esportiva especializada em Beach Tennis, Futevôlei e Beach Volley em Pirassununga/SP.",
    url: "https://arena-rio-verde-beach-sports.vercel.app/",
    telephone: "+55-(19)-99115-7940",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Maria Conceição Marcomini Belloni, 244",
      addressLocality: "Pirassununga",
      addressRegion: "SP",
      postalCode: "13635-189",
      addressCountry: "BR",
    }, 
    openingHours: [
  "Mo-Fr 16:00-23:00", 
  "Sa 08:00-12:00",
  "Sa 16:00-23:00",
],
    sameAs: [
      "https://www.instagram.com/arenarioverde/",
    ],
  };

  return (
    <html lang="pt-BR" className="bg-arena-bg scroll-smooth">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
