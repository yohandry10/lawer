import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from 'emailjs-com'; // Usamos emailjs-com
import { Send } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [feedback, setFeedback] = useState<string>('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_x7jhu7n', 
          'template_xiubysd', 
          formRef.current, 
          '1Brvn8PTVUzjz4J0G'
        )
        .then(
          (result) => {
            console.log(result.text);
            setFeedback('¡Mensaje enviado correctamente!');
            // Disparamos confetti
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 },
              colors: ['#1D7BB8', '#ffffff'],
            });
            // Mostramos un toast azul
            toast.success('¡Mensaje enviado correctamente!', {
              theme: 'colored',
              style: { background: '#1D7BB8', color: '#fff' },
            });
            formRef.current?.reset();
          },
          (error) => {
            console.log(error.text);
            setFeedback('Hubo un error, intenta de nuevo.');
            toast.error('Hubo un error, intenta de nuevo.', {
              theme: 'colored',
              style: { background: '#1D7BB8', color: '#fff' },
            });
          }
        );
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative section-padding overflow-hidden font-sans"
    >
      {/* Fondo con gradiente y elementos flotantes */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white to-primary-50"
        style={{ zIndex: -1 }}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl animate-float-delay-2" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda: Imagen y Mensaje */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <motion.img
              src="/grupo.webp"
              alt="Nuestro equipo"
              className="w-full max-w-md rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p
              className="text-base md:text-lg font-light text-gray-800 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Somos un equipo de profesionales especializados en conciliación y asesoría legal, comprometidos en ofrecer soluciones rápidas,
              éticas y efectivas. Nuestra misión es facilitar acuerdos que beneficien a todas las partes y brindar asesoramiento que inspire confianza
              y tranquilidad. Con años de experiencia en el ámbito legal, estamos aquí para guiarte en cada paso del proceso.
            </motion.p>
          </motion.div>

          {/* Columna derecha: Formulario de Contacto */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.5 }}
            className="testimonial-card bg-white shadow-xl rounded-xl p-8"
            whileHover={{
              y: -10,
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Envíanos un Mensaje
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Campo oculto para to_name */}
              <input type="hidden" name="to_name" value="ACECOP" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    id="email"
                    placeholder="Tu email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition placeholder-gray-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Asunto del mensaje"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Tu mensaje"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition placeholder-gray-500"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
                aria-label="Enviar Mensaje"
              >
                <Send size={18} className="inline mr-2" /> Enviar Mensaje
              </motion.button>
            </form>
            {feedback && (
              <p className="mt-4 text-center text-sm text-green-600">{feedback}</p>
            )}
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
