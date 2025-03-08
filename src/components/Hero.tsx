import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faLandmark,
  faPuzzlePiece,
  faVideo,
  faBolt,         // Para "Rapidez"
  faUserFriends,  // Para "Atención Personalizada"
  faLock,         // Para "Confidencialidad"
  faDollarSign,   // Para "Tarifas Competitivas"
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const navigate = useNavigate();

  const servicesData = [
    {
      icon: faUsers,
      title: 'Familia',
      bgColor: 'bg-teal-500',
      description: 'Servicios para asuntos de familia',
    },
    {
      icon: faLandmark,
      title: 'Contrataciones con el Estado',
      bgColor: 'bg-[#2F8CC5]',
      description: 'Soluciones en contrataciones públicas',
    },
    {
      icon: faPuzzlePiece,
      title: 'Materia civil',
      bgColor: 'bg-teal-500',
      description: 'Asesoría en materias civiles',
    },
    {
      icon: faVideo,
      title: 'CONCILIACIONES VIRTUALES',
      bgColor: 'bg-[#2F8CC5]',
      description: 'Aplicable a todas las materias',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleServiceClick = () => {
    window.scrollTo(0, 0);
    navigate('/icon-details'); // Ajusta la ruta de navegación según tu proyecto
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-padding overflow-hidden py-16"
    >
      {/* Fondo degradado detrás */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"
        style={{ zIndex: -1 }}
      ></div>

      <div className="container mx-auto px-4">
        {/* Encabezado principal */}
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

        {/* Tarjetas de servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {servicesData.map((service, index) => (
            <div key={index} onClick={handleServiceClick}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                variants={itemVariants}
                className={`cursor-pointer flex flex-col items-center justify-center p-12 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl ${service.bgColor} text-white h-full`}
              >
                <FontAwesomeIcon icon={service.icon} size="5x" />
                <h3 className="text-4xl font-bold mt-6">{service.title}</h3>
                <p className="text-xl mt-4 text-center">{service.description}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Texto de invitación final */}
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

        {/* SECCIÓN "¿Por qué elegirnos?" */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 py-12 px-4 bg-[#2F8CC5] text-white rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            ¿Por qué elegirnos?
          </h2>

          {/* Cuatro columnas con íconos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* 1. Rapidez */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faBolt} size="3x" className="mb-4" />
              <h3 className="text-xl font-semibold">Rapidez</h3>
            </div>

            {/* 2. Atención Personalizada */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faUserFriends} size="3x" className="mb-4" />
              <h3 className="text-xl font-semibold">Atención Personalizada</h3>
            </div>

            {/* 3. Confidencialidad */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLock} size="3x" className="mb-4" />
              <h3 className="text-xl font-semibold">Confidencialidad</h3>
            </div>

            {/* 4. Tarifas Competitivas */}
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faDollarSign} size="3x" className="mb-4" />
              <h3 className="text-xl font-semibold">Tarifas Competitivas</h3>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Services;
