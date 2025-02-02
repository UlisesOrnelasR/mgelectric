import electricianImage from '../assets/electrician-hero.jpg';
import backgroundImage from '../assets/electrician-bg2.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Hero = () => {
  return (
    <div
      id='hero'
      className='relative bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Capa oscura sobre la imagen de fondo */}
      <div className='absolute inset-0 bg-black bg-opacity-60 z-0'></div>

      {/* Sección de texto */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4 relative z-10'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-secondary text-2xl'
        >
          YOUR TRUSTED ELECTRICAL PARTNERS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[50px] font-bold'
        >
          Powering Your Future with Excellence
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-secondary'></div>
        <p className='text-white text-[20px]'>
          At MG Construction & Electrical INC, we specialize in delivering
          top-quality electrical services for residential, commercial, and
          industrial projects. From installations to maintenance, we ensure
          your systems are safe, efficient, and reliable.
        </p>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={zoomInVariants}
          className='flex justify-center items-center gap-5'
        >
          <motion.button
            variants={zoomInVariants}
            className='bg-primary hover:bg-hover text-white px-10 py-3 rounded-lg  font-bold'
          >
            OUR SERVICES
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className='border-white hover:border-primary hover:text-primary border-2 px-10 py-3 rounded-lg text-white font-bold'
          >
            CONTACT US
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Sección de imagen */}
      <div className='w-[40%] flex flex-col justify-center items-center relative z-10'>
        <motion.img
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          src={electricianImage}
          alt='Electrician at work'
          className='lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] rounded-full object-cover mx-auto'
        />
      </div>
    </div>
  );
};

export default Hero;