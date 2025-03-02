import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { planning } from '../export';

const Working = () => {
  const { t } = useTranslation('global');

  const processImages = [
    '/stepone.jpg',
    '/steptwo.jpg',
    '/stepthree.jpg',
    '/stepfour.jpg',
  ];

  return (
    <div className='w-full bg-white'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl'>
          {t('working.title')}
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>
          {t('working.subtitle')}
        </motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-primary'></motion.div>

        {/* Sección de los pasos con íconos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'
        >
          {planning.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-center gap-5 border-2 border-primary rounded-md p-6'>
              <div>
                <item.icon className='size-[80px] bg-primary fill-white p-4 rounded-full' />
              </div>
              <h1 className='text-2xl font-bold uppercase'>{t(`working.steps.${item.title.toLowerCase()}.title`)}</h1>
              <p className='text-[20px] text-center text-gray-600'>{t(`working.steps.${item.title.toLowerCase()}.description`)}</p>
            </div>
          ))}
        </motion.div>

        {/* Sección de imágenes del proceso con flechas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='w-full flex flex-col lg:flex-row justify-center items-center gap-[20px] mt-[60px]'
        >
          {processImages.map((image, index) => (
            <div key={index} className='flex flex-col lg:flex-row items-center gap-[20px]'>
              <motion.img
                src={image}
                alt={`Process step ${index + 1}`}
                className='w-[200px] h-[200px] object-cover rounded-lg  lg:block'
                variants={zoomInVariants}
              />
              {index < processImages.length - 1 && (
                <FaArrowRight className='text-primary text-3xl hidden lg:block' />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;