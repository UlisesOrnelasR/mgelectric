import { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import logo from '../assets/logoMG.png'

const Header = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [

    {
      link: 'Home', path: 'home'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Projects', path: 'projects'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]

  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
      <div className='flex items-center'>
        <img
          src={logo}
          alt='Prime Structures Logo'
          className='h-12 md:h-16 w-auto' // Ajusta el tamaño según sea necesario
        />
      </div>
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path} className=' text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-primary  hover:text-white font-rubik text-[15px]' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      <button className=' bg-primary hover:bg-hover text-white  px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>BOOK NOW</button>

      {/* mobile menu starts */}
      <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className=' text-primary text-3xl cursor-pointer' /> : <FaBars className='text-primary text-3xl cursor-pointer' />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-primary p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white hover:bg-redtheme w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header