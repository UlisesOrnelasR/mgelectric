import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const Contact = () => {
  const { t } = useTranslation('global'); // Cargar las traducciones desde el namespace 'global'

  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl'>
            {t('contact.title')} {/* Título traducido */}
          </motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold'>
            {t('contact.subtitle')} {/* Subtítulo traducido */}
          </motion.h1>
          <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-primary'></motion.div>
          <motion.p variants={slideUpVariants} className='text-3xl italic text-gray-700 mt-[60px]'>
            {t('contact.description')} {/* Descripción traducida */}
          </motion.p>
        </motion.div>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            action=""
            className='flex flex-col justify-center items-start gap-4 w-full'
          >
            <input
              type="text"
              placeholder={t('contact.form.name')}
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            <input
              type="email"
              placeholder={t('contact.form.email')}
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            <input
              type="number"
              placeholder={t('contact.form.phone')}
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            <textarea
              name=""
              id=""
              placeholder={t('contact.form.message')}
              rows="4"
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            ></textarea>
            <motion.button
              variants={zoomInVariants}
              type='submit'
              className='bg-primary hover:bg-hover text-white px-10 py-4 text-black font-bold rounded-lg w-full'
            >
              {t('contact.form.submit')} {/* Texto del botón traducido */}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;