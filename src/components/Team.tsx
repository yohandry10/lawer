import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María Rodríguez',
      position: 'Cliente',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      quote:
        'Gracias al Centro de Conciliación ACECOP pude resolver un conflicto familiar que llevaba años sin solución. El proceso fue rápido, profesional y el resultado fue muy satisfactorio para todas las partes.',
    },
    {
      name: 'Juan Pérez',
      position: 'Empresario',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      quote:
        'Teníamos un conflicto comercial complejo con un proveedor y gracias a la mediación de ACECOP logramos un acuerdo que benefició a ambas empresas. Altamente recomendable.',
    },
    {
      name: 'Ana Torres',
      position: 'Propietaria',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      quote:
        'Resolví un problema de arrendamiento que parecía no tener solución. El equipo de ACECOP fue muy profesional y me ayudó a llegar a un acuerdo justo y equilibrado.',
    },
    {
      name: 'Carlos Mendoza',
      position: 'Cliente',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      quote:
        'El proceso de conciliación fue mucho más rápido y económico que ir a juicio. Los conciliadores de ACECOP son verdaderos expertos y nos guiaron hacia una solución satisfactoria.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white to-primary-50"
        style={{ zIndex: -1 }}
      ></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl animate-float-delay-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Testimonios</span> de Clientes
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Conoce las experiencias de quienes han confiado en nosotros para resolver sus conflictos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="testimonial-card"
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-primary-500 mb-4">
                  <Quote size={32} />
                </div>
                <p className="text-secondary-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-primary-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card"
            >
              <div className="text-primary-500 mb-4">
                <Quote size={32} />
              </div>
              <p className="text-secondary-700 mb-6 italic">"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-secondary-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary-500 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary-100 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-100 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
            Nos enorgullece haber ayudado a miles de personas y empresas a resolver sus conflictos de manera efectiva y satisfactoria.
          </p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;