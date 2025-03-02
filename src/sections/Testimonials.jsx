import { clients } from '../export';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const Testimonials = () => {
  const { t } = useTranslation('global'); // Cargar las traducciones desde el namespace 'global'

  return (
    <div id='clients' className='w-full overflow-hidden'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl text-center'>
          {t('testimonials.title')} {/* Usar traducción para el título */}
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center'>
          {t('testimonials.subtitle')} {/* Usar traducción para el subtítulo */}
        </motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-primary'></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-[30px]'
        >
          {clients.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-center'>
              <div className='border-2 border-white hover:bg-primary pb-[100px] pt-[30px]'>
                <p className='text-white text-lg text-center hover:text-black'>
                  {t(`testimonials.clients.${index}.about`)} {/* Usar traducción para el testimonio */}
                </p>
              </div>
              <div className='flex flex-col justify-center items-center gap-[5px]'>
                <img src={item.image} alt="client image" className='mt-[-50px]' />
                <h1 className='text-white text-[27px] font-semibold uppercase'>
                  {t(`testimonials.clients.${index}.name`)} {/* Usar traducción para el nombre */}
                </h1>
                <h1 className='text-primary text-[22px]'>
                  {t(`testimonials.clients.${index}.post`)} {/* Usar traducción para el puesto */}
                </h1>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;