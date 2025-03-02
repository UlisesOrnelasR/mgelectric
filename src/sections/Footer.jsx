import { FaCopyright, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const Footer = () => {
  const { t } = useTranslation('global'); // Cargar las traducciones desde el namespace 'global'

  return (
    <>
      <footer className='bg-black text-white py-12 px-6 lg:px-16'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Sección 1: Información de contacto */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-2xl font-bold text-primary'>{t('footer.contact.title')}</h3>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3'>
                <FaPhone className='text-primary' />
                <span>{t('footer.contact.phone')}</span>
              </li>
              <li className='flex items-center gap-3'>
                <FaEnvelope className='text-primary' />
                <span>{t('footer.contact.email')}</span>
              </li>
              <li className='flex items-center gap-3'>
                <FaMapMarkerAlt className='text-primary' />
                <span>{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-2xl font-bold text-primary'>{t('footer.quickLinks.title')}</h3>
            <ul className='space-y-3'>
              <li>
                <Link to='home' spy={true} smooth={true} className='hover:text-primary cursor-pointer'>
                  {t('footer.quickLinks.home')}
                </Link>
              </li>
              <li>
                <Link to='about' spy={true} smooth={true} className='hover:text-primary cursor-pointer'>
                  {t('footer.quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link to='services' spy={true} smooth={true} className='hover:text-primary cursor-pointer'>
                  {t('footer.quickLinks.services')}
                </Link>
              </li>
              <li>
                <Link to='projects' spy={true} smooth={true} className='hover:text-primary cursor-pointer'>
                  {t('footer.quickLinks.projects')}
                </Link>
              </li>
              <li>
                <Link to='contact' spy={true} smooth={true} className='hover:text-primary cursor-pointer'>
                  {t('footer.quickLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección 3: Redes sociales */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-2xl font-bold text-primary'>{t('footer.social.title')}</h3>
            <div className='flex gap-4'>
              <Link to='hero' spy={true} offset={-100} smooth={true} className='cursor-pointer text-white hover:text-primary'>
                <FaFacebook className='w-8 h-8' />
              </Link>
              <Link to='hero' spy={true} offset={-100} smooth={true} className='cursor-pointer text-white hover:text-primary'>
                <FaTwitter className='w-8 h-8' />
              </Link>
              <Link to='hero' spy={true} offset={-100} smooth={true} className='cursor-pointer text-white hover:text-primary'>
                <FaInstagram className='w-8 h-8' />
              </Link>
              <Link to='hero' spy={true} offset={-100} smooth={true} className='cursor-pointer text-white hover:text-primary'>
                <FaLinkedin className='w-8 h-8' />
              </Link>
            </div>
          </div>

          {/* Sección 4: Mapa de Google Maps */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-2xl font-bold text-primary'>{t('footer.location.title')}</h3>
            <div className='w-full h-48 rounded-lg overflow-hidden'>
              <iframe
                title='Google Maps'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.226720859666!2d-116.35171032449567!3d33.78064297326048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafcf4d1545247%3A0xa98179c941927cf3!2s75400%20Gerald%20Ford%20Dr%2C%20Palm%20Desert%2C%20CA%2092211!5e0!3m2!1ses!2sus!4v1738448207846!5m2!1ses!2sus'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
          <div className='flex justify-center items-center gap-2'>
            <FaCopyright className='text-primary' />
            <p className='text-lg'>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Botón de scroll to top */}
      <div id='icon-box' className='bg-primary text-white p-3 rounded-full hover:bg-hover hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='w-[35px] h-[35px]' />
        </Link>
      </div>
    </>
  );
};

export default Footer;