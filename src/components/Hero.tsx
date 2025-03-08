import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const TEXT_BLUE = '#1D7BB8';

/**
 * AnimatedText: revela el texto letra a letra con efecto 3D.
 * Se le pasa el texto, una clase CSS y un delay (en segundos) para iniciar.
 * Además, se aplica el color pasado en la propiedad "color".
 */
const AnimatedText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  color?: string;
}> = ({ text, className = '', delay = 0, color }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ color }}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/banner.1.jpg')" }}
    >
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenedor principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        {/* Título alineado a la izquierda */}
        <div className="text-left">
          {/* "ACECOP," en blanco */}
          <AnimatedText
            text="ACECOP"
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
            delay={0}
            color="#fff"
          />
          {/* "Centro de Conciliación" en azul #1D7BB8 */}
          <AnimatedText
            text="Centro de Conciliación"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-2"
            delay={0.8}
            color={TEXT_BLUE}
          />
        </div>

        {/* Descripción */}
        <motion.p
          className="mt-6 text-xl sm:text-2xl text-gray-200 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Somos un centro de conciliación con mas de 20 años de experiencia brindando
          soluciones eficaces y duraderas a conflictos de toda índole.
        </motion.p>

        {/* Botón animado que redirige a WhatsApp */}
        <motion.div
          className="mt-10 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <a
            href="https://wa.me/51953051904"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold transition-colors duration-300
                       bg-white text-[#1D7BB8] border border-[#1D7BB8]
                       hover:bg-[#1D7BB8] hover:text-white"
          >
            Solicitar Cita
          </a>
        </motion.div>

        {/* Flecha animada */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 3, duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-10 h-10 text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
