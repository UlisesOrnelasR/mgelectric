import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';
import { useTranslation } from 'react-i18next';
import panels from '../assets/panels.jpg';
import { Link } from 'react-scroll';

const About = () => {
  const { t } = useTranslation('global');

  return (
    <div className='overflow-hidden lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-center gap-[50px]' id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl'>
          {t("aboutUs.title")}
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>
          {t("aboutUs.subtitle")}
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-primary'></div>
        <p className='text-white text-lg'>
          {t("aboutUs.txt")}
        </p>

        <div className='flex gap-8 mt-8'>
          <div className='text-center'>
            <h3 className='text-primary text-4xl font-bold'>500+</h3>
            <p className='text-white'>{t("aboutUs.pc")}</p>
          </div>
          <div className='text-center'>
            <h3 className='text-primary text-4xl font-bold'>25+</h3>
            <p className='text-white'>{t("aboutUs.ye")}</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <Link to="services"
            spy={true}
            offset={-100}
            smooth={true}
            className='cursor-pointer bg-primary hover:bg-hover px-6 py-2 rounded-lg text-white font-bold text-sm'
          >
            {t("aboutUs.lm")}
          </Link>
          <Link to="contact"
            spy={true}
            offset={-100}
            smooth={true}
            className='cursor-pointer bg-primary hover:bg-hover px-6 py-2 rounded-lg text-white font-bold text-sm'
          >
            {t("aboutUs.fq")}
          </Link>
        </div>
      </motion.div >

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex justify-center'
      >
        <img
          src={panels}
          alt="Panels"
          className='w-full h-auto rounded-lg shadow-lg'
        />
      </motion.div>
    </div >
  );
};

export default About;