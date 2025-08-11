import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../styles/globals.css";
import { generateMetadata as generateSEOMetadata, organizationSchema, servicesSchema, generateStructuredData } from "../utils/seo";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
