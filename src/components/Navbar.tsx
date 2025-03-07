import React, { useState, useEffect } from 'react';
// Ojo: renombramos la import de react-scroll a ScrollLink
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces internos con react-scroll
  const navLinks = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Nosotros', to: 'about' },
    { name: 'Servicios', to: 'services' },

    { name: 'Testimonios', to: 'testimonials' },
    { name: 'Contacto', to: 'contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Clases dinámicas según scroll
  const linkClasses = scrolled
    ? 'text-primary-500 hover:text-primary-700'
    : 'text-white hover:text-gray-300';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo que lleva a #hero */}
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <img
              src="logo.jpeg"
              alt="Logo"
              style={{ width: '160px', height: 'auto' }}
              className="rounded-full object-contain"
            />
          </ScrollLink>

          {/* Navegación en escritorio */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-primary-500 font-semibold"
                className={`transition-colors duration-300 cursor-pointer relative group ${linkClasses}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            ))}

            {/* Enlace NUEVO para la ruta /registro-solicitud */}
            <RouterLink
              to="/registro-solicitud"
              className={`transition-colors duration-300 ${linkClasses} relative group`}
            >
              Registro de Solicitud
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
          </div>

          {/* Botón hamburguesa (móvil) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${linkClasses}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú de navegación móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav"
          >
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-primary-500 font-semibold"
                    className={`block transition-colors duration-300 cursor-pointer ${linkClasses}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </motion.div>
              ))}

              {/* Enlace móvil para Registro de Solicitud */}
              <motion.div variants={itemVariants}>
                <RouterLink
                  to="/registro-solicitud"
                  className={`block transition-colors duration-300 ${linkClasses}`}
                  onClick={() => setIsOpen(false)}
                >
                  Registro de Solicitud
                </RouterLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
