import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const BASE_URL = "https://www.mgelectricalinc.com";

const Seo = ({
    title = "MG C&E Inc | Electricistas en Palm Desert 24/7",
    description = "Instalaciones y mantenimiento eléctrico profesional en Palm Desert. Emergencias 24/7 y presupuestos sin costo.",
    path = "/",
    image = `${BASE_URL}/assets/og-cover.jpg`,
    locale = "es_US",
    noindex = false,
    additionalMeta = [],
    jsonLd = null
}) => {
    const url = `${BASE_URL}${path}`.replace(/\/+$/, path === "/" ? "/" : "");
    const robots = noindex
        ? "noindex,nofollow"
        : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

    return (
        <Helmet>
            {/* Básico */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta name="robots" content={robots} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="MG C&E Inc" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={locale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Metas adicionales */}
            {additionalMeta.map((m, i) => (
                <meta key={i} {...m} />
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
    jsonLd: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

export default Seo;
