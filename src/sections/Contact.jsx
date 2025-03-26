import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { useTranslation } from 'react-i18next';
import { contactSchema } from '../schemas/contactSchema';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation('global');
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          reply_to: data.email,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(t('contactForm.form.successMessage'), {
        description: t('contactForm.form.successDescription'),
      });
      reset();
    } catch (error) {
      console.error('Error detallado:', error.response?.data || error.message);
      toast.error(t('contactForm.form.errorMessage'), {
        description: t('contactForm.form.errorDescription'),
      });
    }
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