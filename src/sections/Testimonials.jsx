import { clients } from '../export';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation('global');

  return (
    <div id='clients' className='w-full overflow-hidden bg-gray-900 py-16'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-between items-center gap-8'
      >
        <motion.h1 variants={slideUpVariants} className='text-primary text-2xl text-center font-medium'>
          {t('testimonials.title')}
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-4xl md:text-5xl font-bold text-center'>
          {t('testimonials.subtitle')}
        </motion.h1>
        <motion.div variants={slideUpVariants} className='w-32 h-1 bg-primary rounded-full'></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12'
        >
          {clients.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className='flex flex-col bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-primary/20 transition-all duration-300'
            >
              {/* Contenido principal del testimonio */}
              <div className='flex-grow mb-6'>
                <div className='mb-4 flex justify-center'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-100 text-lg leading-relaxed italic mb-6'>
                  "{t(`testimonials.clients.${index}.about`)}"
                </p>
              </div>

              {/* Información de la persona (más discreta) */}
              <div className='mt-auto border-t border-gray-700 pt-4'>
                <h3 className='text-white text-md font-medium text-center'>
                  {t(`testimonials.clients.${index}.name`)}
                </h3>
                <p className='text-primary text-sm text-center'>
                  {t(`testimonials.clients.${index}.post`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;