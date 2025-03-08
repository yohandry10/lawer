import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLandmark, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const servicesData = [
    {
      icon: faUsers,
      title: 'Familia',
    
      bgColor: 'bg-teal-500'
    },
    {
      icon: faLandmark,
      title: 'Contrataciones con el Estado',
  
      bgColor: 'bg-[#2F8CC5]'
    },
    {
      icon: faPuzzlePiece,
      title: 'Contrataciones en materia civil',
    
      bgColor: 'bg-teal-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-padding overflow-hidden py-16"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"
        style={{ zIndex: -1 }}
      ></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Ofrecemos soluciones efectivas para la resolución de conflictos en diversas áreas,
            siempre buscando el mejor acuerdo para todas las partes involucradas.
          </p>
        </motion.div>

        {/* Ajustamos el grid para estirar los items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {servicesData.map((service, index) => (
            <Link key={index} to="/icon-details">
              <motion.div
                variants={itemVariants}
                className={`flex flex-col items-center justify-center p-12 rounded-xl shadow-lg
                            transition-transform transform hover:-translate-y-2 hover:shadow-2xl
                            ${service.bgColor} text-white h-full`}
              >
                <FontAwesomeIcon icon={service.icon} size="5x" />
                <h3 className="text-4xl font-bold mt-6">{service.title}</h3>
                <p className="text-xl mt-4 text-center">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            ¿Necesitas ayuda con un conflicto específico? Nuestro equipo de expertos está listo para asistirte y encontrar la mejor solución.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
