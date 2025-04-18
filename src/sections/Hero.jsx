import electricianImage from '../assets/electrician-hero.jpg';
import backgroundImage from '../assets/electrician-bg2.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Hero = () => {
  const { t } = useTranslation('global');

  // Datos estructurados para Electrician (Local Business)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "MG Construction & Electrical INC",
    "image": electricianImage,
    "@id": "https://www.mgelectricalinc.com#electrician",
    "url": "https://www.mgelectricalinc.com",
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7229",
      "longitude": "-116.3765"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/mgelectricalinc",
      "https://www.instagram.com/mgelectricalinc"
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mgelectricalinc.com"
    }]
  };

  return (
    <>
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <header
        id='hero'
        className='relative bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-0 lg:px-[150px] px-5 flex justify-between items-center lg:flex-row flex-col gap-12 lg:gap-5 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
        itemScope
        itemType="https://schema.org/Electrician"
      >
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-60 z-0'></div>

        {/* Text content */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={slideUpVariants}
          viewport={{ once: true, margin: "-100px" }}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-6 relative z-10'
        >
          <motion.span
            variants={slideUpVariants}
            className='text-secondary text-2xl font-medium'
            itemProp="slogan"
          >
            {t("header.title")}
          </motion.span>

          <motion.h1
            variants={slideUpVariants}
            className='text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight'
          >
            <span itemProp="makesOffer">{t("header.subtitle")}</span> in{' '}
            <span className='text-primary'>Palm Desert</span> and Coachella Valley
          </motion.h1>

          <div className='w-28 h-1.5 bg-secondary'></div>

          <p className='text-white text-lg md:text-xl lg:text-[20px] leading-relaxed' itemProp="description">
            {t("header.txt")}
          </p>

          <motion.div
            initial='hidden'
            animate='visible'
            variants={zoomInVariants}
            className='flex flex-wrap justify-start items-center gap-4 mt-2'
          >
            <Link
              to="services"
              spy={true}
              offset={-100}
              smooth={true}
              className='cursor-pointer bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-300'
              aria-label={`View our ${t("header.btnServices")} in Indio, CA`}
              itemProp="hasOfferCatalog"
            >
              {t("header.btnServices")}
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-100}
              smooth={true}
              className='cursor-pointer border-2 border-white hover:border-primary hover:text-primary text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-300'
              aria-label={`${t("header.btnContact")} for 24/7 emergency electrical services in Indio`}
              itemProp="contactPoint"
            >
              {t("header.btnContact")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Image section */}
        <div className='lg:w-[40%] w-full flex justify-center items-center relative z-10'>
          <motion.figure
            initial='hidden'
            whileInView='visible'
            variants={zoomInVariants}
            viewport={{ once: true }}
            className='relative'
          >
            <img
              src={electricianImage}
              alt={`Licensed electrician from MG Construction & Electrical INC working on residential wiring in Palm Desert, CA`}
              className='lg:h-[500px] lg:w-[500px] h-[350px] w-[350px] rounded-lg object-cover shadow-xl'
              itemProp="image"
              loading="eager"
              width={500}
              height={500}
            />
            <figcaption className='sr-only'>MG Construction & Electrical technician providing professional services</figcaption>

            {/* Trust badges */}
            <div className='absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg'>
              <div className='flex items-center gap-2'>
                <div className='text-primary text-3xl font-bold'>25+</div>
                <div className='text-sm font-medium text-gray-800'>Years<br />Experience</div>
              </div>
            </div>

            <div className='absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg'>
              <div className='text-center'>
                <div className='text-primary text-xl font-bold'>Licensed</div>
                <div className='text-xs font-medium text-gray-800'>CA #1078222</div>
              </div>
            </div>
          </motion.figure>
        </div>
      </header>
    </>
  );
};

export default Hero;