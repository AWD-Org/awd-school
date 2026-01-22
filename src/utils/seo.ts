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
    title: "Amoxtli School | Mentoría tecnológica y orientación profesional",
    description:
        "Mentoría estratégica para empresas que integran tecnología e IA con criterio, y orientación profesional para talento digital en México.",
    keywords: [
        "Amoxtli School",
        "mentoría tecnológica",
        "orientación profesional",
        "orientación vocacional tech",
        "ruta de aprendizaje",
        "carrera en tecnología",
        "decisiones tecnológicas",
        "IA práctica",
        "optimización de procesos",
        "criterio tecnológico",
        "implementación consciente",
        "consultoría tecnológica CDMX",
        "consultoría tecnológica México",
        "inteligencia artificial para negocios",
        "mentoría para developers",
        "formación tecnológica",
        "adopción de IA con criterio",
        "analítica para decisiones",
        "acompañamiento tecnológico",
        "Amoxtli",
    ],
    image: "/og-image.svg",
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
        "Mentoría tecnológica para empresas y orientación profesional para talento digital en México",
    url: "https://school.amoxtli.tech",
    logo: "https://school.amoxtli.tech/assets/main.svg",
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "legal@amoxtli.tech",
        availableLanguage: ["Spanish", "English"],
    },
    areaServed: {
        "@type": "Country",
        name: "Mexico",
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
    name: "Mentoría tecnológica y orientación profesional",
    description:
        "Acompañamiento estratégico para empresas y guía profesional para talento digital",
    provider: {
        "@type": "Organization",
        name: "Amoxtli School",
    },
    serviceType: "Business Consulting, Career Guidance",
    areaServed: [
        {
            "@type": "Country",
            name: "Mexico",
        },
        {
            "@type": "Place",
            name: "Mexico City",
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Mentoría y Orientación",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Decisiones tecnológicas con criterio",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Optimización de procesos",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Integración consciente de IA",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Analítica para decisiones",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Criterio y acompañamiento estratégico",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Prioridad y ejecución consciente",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Orientación vocacional y de carrera en tecnología",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Ruta de aprendizaje y empleabilidad",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Visión de negocio para proyectos digitales",
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
