import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const BASE_URL = "https://www.mgelectricalinc.com";

const toAbsolute = (url) => {
    try {
        // si ya es absoluta, la devuelve; si es relativa, la resuelve contra BASE_URL
        return new URL(url, BASE_URL).toString();
    } catch {
        return url;
    }
};

const Seo = ({
    title = "MG C&E Inc | Electricistas en Palm Desert 24/7",
    description = "Instalaciones y mantenimiento eléctrico profesional en Palm Desert. Emergencias 24/7 y presupuestos sin costo.",
    path = "/",
    image = `${BASE_URL}/assets/og-cover.jpg`,
    locale = "es_US",
    noindex = false,
    additionalMeta = [],
    additionalLinks = [],
    jsonLd = null
}) => {
    const canonical = `${BASE_URL}${path}`.replace(/\/+$/, path === "/" ? "/" : "");
    const ogImage = toAbsolute(image);

    const robots = noindex
        ? "noindex,nofollow"
        : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

    return (
        <Helmet>
            {/* Básico */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            <meta name="robots" content={robots} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="MG C&E Inc" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content={locale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Extra meta tags (name/content o property/content) */}
            {additionalMeta.map((m, i) => (
                <meta key={`m-${i}`} {...m} />
            ))}

            {/* Extra links (hreflang, preload, preconnect, etc.) */}
            {additionalLinks.map((l, i) => (
                <link key={`l-${i}`} {...l} />
            ))}

            {/* JSON-LD */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
    image: PropTypes.string,
    locale: PropTypes.string,
    noindex: PropTypes.bool,
    additionalMeta: PropTypes.arrayOf(PropTypes.object),
    additionalLinks: PropTypes.arrayOf(PropTypes.object),
    jsonLd: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Seo;
