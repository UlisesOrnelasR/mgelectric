// src/App.jsx
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";

// Secciones
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Working from "./sections/Working";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Seo from "./componets/Seo";
import { Toaster } from "sonner";

const BASE_URL = "https://www.mgelectricalinc.com";

/** JSON-LD global: negocio local */
const electricianLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${BASE_URL}/#electrician`,
  "name": "MG C&E Inc",
  "url": `${BASE_URL}/`,
  "image": `${BASE_URL}/assets/og-cover.jpg`,
  "telephone": "+1-760-770-5696",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "75400 Gerald Ford Dr. Suite 124",
    "addressLocality": "Palm Desert",
    "addressRegion": "CA",
    "postalCode": "92211",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 33.7725, "longitude": -116.3450 },
  "areaServed": [
    { "@type": "City", "name": "Palm Desert" },
    { "@type": "City", "name": "Palm Springs" },
    { "@type": "City", "name": "Indio" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-760-770-5696",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["es", "en"]
  }
};

/** JSON-LD global: buscador interno  */
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": `${BASE_URL}/`,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/buscar?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export default function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        {/* SEO de la landing: se declara una sola vez */}
        <Seo
          path="/"
          title="MG C&E Inc | Electricistas en Palm Desert 24/7"
          description="Electricistas en Palm Desert: instalaciones, mantenimiento y emergencias 24/7. Presupuestos sin costo."
          jsonLd={[electricianLd, websiteLd]}

        />
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Working />
        <Testimonials />
        <Contact />
        <Footer />
      </I18nextProvider>
      <Toaster />
    </>
  );
}
