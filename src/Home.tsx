import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Importa tus componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Mapa from './components/Mapa';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  useEffect(() => {
    // Registrar el plugin de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Configurar ScrollTrigger para cada sección
    const sections = ['#hero', '#about', '#services', '#team', '#testimonials', '#contact'];
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleClass: { targets: section, className: 'active' },
      });
    });

    // Limpieza al desmontar
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Animación de opacidad al cargar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-hidden"
      >
        {/* Tus secciones */}
        <Hero />
        <About />
        <Services />
        <Team />
        <Mapa />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
