// Tipografías auto-alojadas (sin peticiones a Google Fonts en producción).
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/data/company";

export const metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: "APEX Facility Consulting LLC | Business Consulting in Addison, Illinois",
    template: "%s | APEX Facility Consulting LLC",
  },
  description:
    "Business consulting and management firm in Addison, Illinois. Strategy, process optimization, operational consulting and sustainable growth.",
  keywords: [
    "business consulting",
    "consultoría empresarial",
    "process optimization",
    "operational consulting",
    "project management",
    "Addison Illinois",
  ],
  authors: [{ name: COMPANY.legalName }],
  openGraph: {
    type: "website",
    siteName: COMPANY.legalName,
    title: "APEX Facility Consulting LLC",
    description:
      "Strategy, structure and management for companies that want to grow with a solid operation.",
    url: COMPANY.siteUrl,
    locale: "en_US",
    alternateLocale: ["es_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Facility Consulting LLC",
    description:
      "Business consulting and management firm in Addison, Illinois.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#071B46",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY.legalName,
  description:
    "Business consulting and management firm helping companies strengthen structure, optimize processes and build growth strategies.",
  url: COMPANY.siteUrl,
  telephone: "+1-571-593-2156",
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.street,
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.state,
    postalCode: COMPANY.zip,
    addressCountry: "US",
  },
  knowsLanguage: ["en", "es"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
