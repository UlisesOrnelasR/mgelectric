import React from 'react';
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
    project8, project8,
    project7,
    project8,
    project7,
    project8,
    project8, project8,
    project7,
    project8,
    project7,
    project8,
  ];

  return (
    <div id='projects' className='w-full'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-secondary text-2xl'>
          PORTFOLIO
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center'>
          OUR BEST PROJECTS
        </motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-secondary'></motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full m-auto grid lg:grid-cols-4 grid-cols-2 gap-4 p-4 
             h-[500px] sm:h-[600px] overflow-y-auto"
      >
        {projects.map((project, index) => (
          <Zoom key={index}>
            <img
              src={project}
              alt={`project ${index + 1}`}
              className="h-full w-full object-cover rounded-lg cursor-pointer"
            />
          </Zoom>
        ))}
      </motion.div>

    </div>
  );
};

export default Portfolio;