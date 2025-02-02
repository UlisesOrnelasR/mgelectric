import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';

import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import Zoom from 'react-medium-image-zoom'; // Importa el componente Zoom
import 'react-medium-image-zoom/dist/styles.css'; // Importa los estilos de la librería

const Portfolio = () => {
  const projects = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project7,
    project8,
    project7,
    project8,
    project7,
    project8,
    project8,
    project7,
    project8,
    project7,
    project8,
    project8,
    project8,
    project7,
    project8,
    project7,
    project8,
  ];

  return (
    <div id='projects' className='w-full bg-gray-900 py-12'>
      {/* Sección de título */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto mb-12 flex flex-col justify-between items-center gap-6'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-3xl font-semibold'>
          PORTFOLIO
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-4xl lg:text-5xl font-bold text-center'>
          OUR BEST PROJECTS
        </motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-secondary'></motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full m-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 p-4 
             h-[500px] sm:h-[500px] overflow-y-auto scrollbar-hide"
      >
        {projects.map((project, index) => (
          <Zoom key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={project}
                alt={`project ${index + 1}`}
                className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </Zoom>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;