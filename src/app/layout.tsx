import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../styles/globals.css";
import { defaultSEO, organizationSchema, servicesSchema, generateStructuredData } from "../utils/seo";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Export metadata for Next.js App Router
export const metadata: Metadata = {
  title: {
    default: defaultSEO.title || "Amoxtli School | Capacitación y Consultoría en Tecnología e IA",
    template: "%s | Amoxtli School",
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords?.join(", "),
  authors: [{ name: "Amoxtli School" }],
  creator: "Amoxtli Web Developers",
  publisher: "Amoxtli School",
  metadataBase: new URL(defaultSEO.url || "https://school.amoxtli.tech"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: defaultSEO.url,
    title: defaultSEO.title,
    description: defaultSEO.description,
    siteName: "Amoxtli School",
    images: [
      {
        url: defaultSEO.image || "/og-image.png",
        width: 1200,
        height: 630,
        alt: defaultSEO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    site: "@amoxtli",
    creator: "@amoxtli",
    images: [defaultSEO.image || "/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "education",
};

// Export viewport for Next.js App Router
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFB" },
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Plausible Analytics - Update with your domain */}
        <script
          defer
          data-domain="school.amoxtli.tech"
          src="https://plausible.io/js/script.js"
        />
        
        {/* Google Analytics - Commented out, uncomment and add your GA4 ID */}
        {/*
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        */}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateStructuredData(organizationSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateStructuredData(servicesSchema)}
        />

        {/* Additional favicon links (primary ones handled by metadata) */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
