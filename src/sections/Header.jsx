import { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import logo from '../assets/logoMG.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation('global');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { link: t('TopBar.home'), path: 'home' },
    { link: t('TopBar.about'), path: 'about' },
    { link: t('TopBar.services'), path: 'services' },
    { link: t('TopBar.projects'), path: 'projects' },
    { link: t('TopBar.contact'), path: 'contact' },
  ];

  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>

      <img
        src={logo}
        alt='Logo MG'
        className='h-12 md:h-16 w-auto'
      />

      {/* Menú de navegación */}
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-primary hover:text-white font-rubik text-[15px]'
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Botón de cambio de idioma */}
      <button
        onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
        className='bg-primary hover:bg-hover text-white px-4 py-2 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer'
      >
        {i18n.language === 'en' ? 'Español' : 'English'}
      </button>

      {/* Menú móvil */}
      <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-primary text-3xl cursor-pointer' /> : <FaBars className='text-primary text-3xl cursor-pointer' />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-primary p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white hover:bg-redtheme w-full text-center'
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;