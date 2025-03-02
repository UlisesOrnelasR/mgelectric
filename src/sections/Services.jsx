import { allservices } from '../export';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos básicos de Swiper
import { Autoplay } from 'swiper/modules'; // Importa el módulo Autoplay
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation('global');

  return (
    <div id='services' className='w-full bg-white overflow-hidden'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl'>{t(`services.title`)}</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>{t(`services.subtitle`)}</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-primary'></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full mt-[30px]'
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {allservices.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div variants={zoomInVariants} className='flex justify-center items-start gap-5 p-8'>
                  <div>
                    <img src={item.icon} alt="services icon" className='w-[140px] border-2 border-primary rounded-lg p-2' />
                  </div>
                  <div className='flex flex-col justify-center items-start gap-3'>
                    <h1 className='text-xl font-bold text-black'>{t(`services.list.${item.key}.title`)}</h1>
                    <p className='text-[18px]'>{t(`services.list.${item.key}.description`)}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;