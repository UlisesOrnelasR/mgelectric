import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import p10 from '../assets/p10.jpg';
import p11 from '../assets/p11.jpg';
import p12 from '../assets/p12.jpg';
import p13 from '../assets/p13.jpg';
import p14 from '../assets/p14.jpg';
import p15 from '../assets/p15.jpg';
import p16 from '../assets/p16.jpg';
import p17 from '../assets/p17.jpg';
import p18 from '../assets/p18.jpg';
import p19 from '../assets/p19.jpg';
import p20 from '../assets/p20.jpg';
import p21 from '../assets/p21.jpg';
import p22 from '../assets/p22.jpg';
import p23 from '../assets/p23.jpg';
import p24 from '../assets/p24.jpg';
import p25 from '../assets/p25.jpg';
import p26 from '../assets/p26.jpg';
import p27 from '../assets/p27.jpg';
import p28 from '../assets/p28.jpg';
import p29 from '../assets/p29.jpg';
import p30 from '../assets/p30.jpg';
import p31 from '../assets/p31.jpg';
import p32 from '../assets/p32.jpg';
import p33 from '../assets/p33.jpg';
import p34 from '../assets/p34.jpg';
import p35 from '../assets/p35.jpg';
import p36 from '../assets/p36.jpg';
import p37 from '../assets/p37.jpg';
import p38 from '../assets/p38.jpg';
import p39 from '../assets/p39.jpg';
import p40 from '../assets/p40.jpg';
import p41 from '../assets/p41.jpg';

import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation('global');
  const projects = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16,
    p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
    p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41
  ];

  return (
    <div id='projects' className='w-full bg-gray-900 py-16 overflow-hidden'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        viewport={{ once: true }}
        className='lg:w-[80%] w-[90%] mx-auto mb-16 flex flex-col justify-between items-center gap-6'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-3xl font-semibold'>
          {t(`portfolio.title`)}
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-4xl lg:text-5xl font-bold text-center'>
          {t(`portfolio.subtitle`)}
        </motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-secondary'></motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        viewport={{ once: true }}
        className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 p-4 
                  h-[70vh] overflow-y-auto custom-scrollbar"
      >
        {projects.map((project, index) => (
          <Zoom key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer group"
              style={{
                aspectRatio: '1/1',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
              }}
            >
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy" // Carga diferida para mejor performance
              />
              {/* Overlay con número de proyecto */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #{index + 1}
                </span>
              </div>
            </motion.div>
          </Zoom>
        ))}
      </motion.div>

      {/* Contador de proyectos
      <div className="text-gray-400 text-center mt-6 text-sm">
        Showing {projects.length} projects
      </div> */}
    </div>
  );
};

export default Portfolio;