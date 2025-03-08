import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { Link as ScrollLink } from 'react-scroll';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      gsap.from('.text-block', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding overflow-hidden py-16"
    >
      {/* Fondo parallax / overlay */}
      <div
        className="absolute inset-0 parallax-bg bg-about-pattern opacity-10"
        style={{ zIndex: -1 }}
      />
      <div className="absolute inset-0 bg-white/90" style={{ zIndex: -1 }} />

      {/* Elementos flotantes */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-float-delay-1" />
      </div>

      {/* Contenedor principal */}
      <div className="container max-w-6xl mx-auto px-4">
        {/* Título centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Nosotros</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-secondary-700 max-w-3xl mx-auto">
            Somos un centro de conciliación con mas de 20 años de experiencia líder en la prestación de servicios
            efectivos de solución de conflictos, comprometidos con la cultura de
            paz y la negociación.
          </p>
        </motion.div>

        {/* Contenedor del grid con ajuste responsivo */}
        <div className="md:relative md:left-[-70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            {/* Imagen (izquierda) y nombre debajo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center md:justify-start items-center"
            >
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/perfil.jpeg"
                  alt="Directora Conciliadora"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-center text-lg font-medium text-secondary-700">
                Directora Sandra Pillaca V.
              </p>
            </motion.div>

            {/* Texto (derecha) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-block"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-900">
                Centro de Conciliación ACECOP
              </h3>
              <p className="text-lg md:text-xl text-secondary-700 mb-4">
                <strong>ACECOP</strong> es una asociación sin fines de lucro,
                destinada a promover una cultura de paz y cuyo objetivo
                fundamental es la de prestar servicios en el área de medios alternativos de solución de conflictos...
              </p>
              <p className="text-lg md:text-xl text-secondary-700 mb-4">
                Somos un Centro de Conciliación líder e innovador atendido por Abogados Conciliadores, quienes garantizamos acuerdos{' '}
                <em>exigibles</em>, ejecutables ante el Poder Judicial...
              </p>
              <p className="text-lg md:text-xl text-secondary-700 mb-6">
                Nuestras oficinas cuentan con una moderna infraestructura.
              </p>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="btn-outline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    Ver más
                  </button>
                </motion.div>
              </ScrollLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
