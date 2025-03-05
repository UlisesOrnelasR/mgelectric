import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { slideUpVariants, zoomInVariants } from './animation';
import { useTranslation } from 'react-i18next';
import { contactSchema } from '../schemas/contactSchema';

const Contact = () => {
  const { t } = useTranslation('global');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id='contact' className='bg-white w-full overflow-hidden'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl'>
            {t('contact.title')}
          </motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold'>
            {t('contact.subtitle')}
          </motion.h1>
          <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-primary'></motion.div>
          <motion.p variants={slideUpVariants} className='text-3xl italic text-gray-700 mt-[60px]'>
            {t('contact.description')}
          </motion.p>
        </motion.div>
        <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col justify-center items-start gap-4 w-full'
          >
            <input
              type="text"
              placeholder={t('contact.form.name')}
              {...register('name')}
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <input
              type="email"
              placeholder={t('contact.form.email')}
              {...register('email')}
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <textarea
              placeholder={t('contact.form.message')}
              rows="4"
              {...register('message')}
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}

            <motion.button
              variants={zoomInVariants}
              type='submit'
              className='bg-primary hover:bg-hover text-white px-10 py-4 text-black font-bold rounded-lg w-full'
            >
              {t('contact.form.submit')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;