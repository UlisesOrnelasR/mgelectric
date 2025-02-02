import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';
import ReactPlayer from 'react-player';
import videoFile from '../assets/ejemplo.mp4';

const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl'>
          ABOUT US
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>
          Powering Your Future
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-primary'></div>
        <p className='text-white text-lg'>
          At MG Construction & Electrical INC., we specialize in delivering top-quality electrical services for residential, commercial, and industrial projects. With over 25 years of experience, we ensure your systems are safe, efficient, and reliable.
        </p>

        <div className='flex gap-8 mt-8'>
          <div className='text-center'>
            <h3 className='text-primary text-4xl font-bold'>500+</h3>
            <p className='text-white'>Projects Completed</p>
          </div>
          <div className='text-center'>
            <h3 className='text-primary text-4xl font-bold'>25+</h3>
            <p className='text-white'>Years of Experience</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <motion.button
            variants={slideUpVariants}
            className='bg-primary hover:bg-hover h px-10 py-3 rounded-lg text-white font-bold'
          >
            LEARN MORE
          </motion.button>
          <motion.button
            variants={slideUpVariants}
            className='border-primary hover:bg-hover  border-2 px-10 py-3 rounded-lg text-white font-bold'
          >
            GET A FREE QUOTE
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex justify-center'
      >
        <ReactPlayer
          url={videoFile}
          controls
          width="100%"
          height="300px"
        />
      </motion.div>
    </div>
  );
};

export default About;
