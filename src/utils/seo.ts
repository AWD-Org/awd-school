// SEO and metadata utilities

export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: string;
    locale?: string;
}

export const defaultSEO: SEOProps = {
    title: "Amoxtli School | Capacitación y Consultoría en Tecnología e IA",
    description:
        "Adopción responsable de tecnología e IA para optimizar flujos de trabajo en diversas industrias. Capacitación, consultoría y despliegue.",
    keywords: [
        "Amoxtli School",
        "capacitación IA",
        "consultoría tecnología",
        "automatización procesos",
        "transformación digital",
        "inteligencia artificial empresarial",
        "adopción responsable IA",
        "gobierno datos",
        "compliance IA",
        "chatbots empresariales",
        "RPA",
        "analítica datos",
        "onboarding tecnológico",
        "capacitación empresarial",
        "consultoría IA México",
        "Amoxtli",
    ],
    image: "/og-image.png",
    url: "https://school.amoxtli.tech",
    type: "website",
    locale: "es_MX",
};

export const generateMetadata = (props: SEOProps = {}) => {
    const seo = { ...defaultSEO, ...props };

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords?.join(", "),
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: seo.url,
            siteName: "Amoxtli School",
            images: [
                {
                    url: seo.image!,
                    width: 1200,
                    height: 630,
                    alt: seo.title,
                },
            ],
            locale: seo.locale,
            type: seo.type as any,
        },
        twitter: {
            card: "summary_large_image",
            title: seo.title,
            description: seo.description,
            images: [seo.image!],
            site: "@amoxtli",
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
        verification: {
            // Add your verification codes here
            // google: "your-google-verification-code",
            // bing: "your-bing-verification-code",
        },
    };
};

// JSON-LD Schema for Organization
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amoxtli School",
    description:
        "Capacitación y consultoría en tecnología e inteligencia artificial para transformar organizaciones",
    url: "https://school.amoxtli.tech",
    logo: "https://school.amoxtli.tech/logo.png",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+52-1-234-567-8900", // Update with real phone
        contactType: "customer service",
        email: "school@amoxtli.tech",
        availableLanguage: ["Spanish", "English"],
    },
    address: {
        "@type": "PostalAddress",
        addressCountry: "MX",
        addressLocality: "Mexico City", // Update with real address
        addressRegion: "CDMX",
    },
    sameAs: [
        "https://www.linkedin.com/company/amoxtli-web-developers",
        "https://www.instagram.com/amoxtli.tech/",
        "https://www.facebook.com/profile.php?id=61551487858288",
    ],
    parentOrganization: {
        "@type": "Organization",
        name: "Amoxtli Web Developers",
        url: "https://amoxtli.tech",
    },
};

// JSON-LD Schema for Services
export const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capacitación y Consultoría en IA",
    description:
        "Servicios integrales de capacitación y consultoría para adopción responsable de tecnología e IA",
    provider: {
        "@type": "Organization",
        name: "Amoxtli School",
    },
    serviceType: "Business Consulting",
    areaServed: [
        {
            "@type": "Country",
            name: "Mexico",
        },
        {
            "@type": "Place",
            name: "International",
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Transformación Digital",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Capacitación en IA Aplicada",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Automatización de Flujos",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Asistentes y Chatbots Privados",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Analítica y Tableros",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Gobernanza y Cumplimiento",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Onboarding Tecnológico",
                },
            },
        ],
    },
};

// Generate structured data script
export const generateStructuredData = (schema: any) => {
    return {
        __html: JSON.stringify(schema),
    };
};
