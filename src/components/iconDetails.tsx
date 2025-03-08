import React, { useLayoutEffect, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLandmark, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const IconDetails: React.FC = () => {
  const location = useLocation();

  // Al montar el componente, se posiciona al inicio
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Efecto para realizar el scroll según el hash de la URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Espera breve para que el layout se haya renderizado
        setTimeout(() => {
          let scrollTarget = 0;
          if (id === 'civil') {
            // Materia Civil: alinear la parte superior de la sección con el top de la ventana
            scrollTarget = element.offsetTop;
          } else if (id === 'family') {
            // Materia de Familia: centrar la sección en la ventana
            scrollTarget = element.offsetTop - (window.innerHeight - element.offsetHeight) / 2;
          } else if (id === 'estado') {
            // Contrataciones con el Estado: forzamos que sea el final de la página
            scrollTarget = document.body.scrollHeight - window.innerHeight;
          }
          window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [location]);

  // Datos de cada servicio
  const services = [
    {
      id: 'civil',
      icon: faPuzzlePiece,
      title: 'Materia Civil',
      description:
        'Nuestros servicios en materia civil incluyen las siguientes pretensiones conciliables:',
      items: [
        'Incumplimiento de contrato',
        'Resolución de contrato',
        'Otorgamiento de escritura pública',
        'Rectificación de áreas y linderos',
        'Ofrecimiento de pago',
        'División',
        'División y partición',
        'Indemnización (daños y perjuicios)',
        'Retracto',
        'Petición de herencia',
        'Petición de retener y recobrar',
        'Obligación de dar suma de dinero',
        'Obligación de dar',
        'Obligación de no hacer',
        'Obligación de hacer',
        'Reivindicación',
      ],
    },
    {
      id: 'family',
      icon: faUsers,
      title: 'Materia de Familia',
      description:
        'Nuestros servicios en materia de familia comprenden las siguientes pretensiones conciliables:',
      items: [
        'Pensión de alimentos para ascendientes',
        'Pensión de alimentos para hermanos',
        'Pensión de alimentos para hijos no reconocidos',
        'Reducción o aumento de pensión de alimentos',
        'Variación de la forma de prestar alimentos',
        'Exoneración de alimentos (para hijo mayor de edad)',
        'Régimen de visitas',
        'Variación de régimen de visitas',
        'Variación de la tenencia (exclusiva y compartida)',
        'Gastos de embarazo, de parto, alimentos, tenencia, régimen de visitas (para padres menores de edad, mayores de 14 años)',
        'Liquidación de sociedad de gananciales',
        'Liquidación de sociedad de bienes durante la unión de hecho',
      ],
    },
    {
      id: 'estado',
      icon: faLandmark,
      title: 'Contrataciones con el Estado',
      description:
        'En el ámbito de las contrataciones con el Estado ofrecemos soluciones que incluyen:',
      items: [
        'Resolución de contrato',
        'Ampliación del plazo contractual',
        'Recepción y conformidad',
        'Valoración y metrados',
        'Liquidación de contrato',
        'Obligaciones posteriores al pago',
        'Daños y perjuicios',
        'Resarcimiento por daños y perjuicios',
        'Indemnización en Contrataciones con el Estado',
        'Vicios ocultos',
      ],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enlace para volver a la página principal */}
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="text-4xl font-bold text-center mb-8"
      >
        Detalle de Servicios
      </motion.h1>

      {services.map((service) => (
        <motion.section
          key={service.id}
          id={service.id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 border-b pb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <FontAwesomeIcon
              icon={service.icon}
              size="3x"
              className="text-primary-600"
            />
            <h2 className="text-3xl font-bold">{service.title}</h2>
          </div>
          <p className="text-lg mb-4">{service.description}</p>
          <ul className="list-disc ml-8 space-y-2">
            {service.items.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
};

export default IconDetails;
