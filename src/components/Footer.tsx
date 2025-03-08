// Footer.tsx

import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

const socialMedia = [
  {
    name: 'Facebook',
    // Nuevo enlace proporcionado
    url: 'https://www.facebook.com/Acecop211?rdid=zH8wJQrMdHiT57KI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18drjaEoeG%2F#',
    icon: <Facebook className="w-8 h-8" />,
  },
  {
    name: 'TikTok',
    // Nuevo enlace proporcionado
    url: 'https://www.tiktok.com/@acecopconciliaciones?_t=ZM-8uO3Xi4nVEk&_r=1',
    icon: <SiTiktok className="w-8 h-8" />,
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/51953051904',
    icon: (
      <img
        src="/ws.svg"
        alt="WhatsApp"
        className="w-8 h-8"
        style={{ filter: 'invert(1)' }}
      />
    ),
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Aquí tu lista de servicios, si es que la mantienes.
  const serviciosOfrecidos = [
    'Incumplimiento de contrato (Civil)',
    'Indemnización (daños y perjuicios) (Civil)',
    'Pensión de alimentos (Familia)',
    'Régimen de visitas (Familia)',
    'Resolución de contrato (Estado)',
    'Liquidación de contrato (Estado)',
  ];

  return (
    <footer className="bg-[#03030f] text-gray-300">
      {/* Sección superior: Información y redes sociales */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Logo e Información */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="logo.jpeg"
                alt="ACECOP Logo"
                className="w-48 h-48 rounded-full object-contain"
              />
            </div>
            <p className="text-white/70 mb-6">
              Centro de Conciliación ACECOP, más de 20 años de experiencia resolviendo conflictos con soluciones efectivas y duraderas.
            </p>
            <div className="flex space-x-8">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="group"
                >
                  <div className="flex items-center justify-center w-16 h-16 border-2 border-[#1D7BB8] rounded-full transition duration-500 ease-out relative overflow-hidden group-hover:bg-[#1D7BB8]">
                    <span className="absolute inset-0 bg-gradient-to-t from-[#1D7BB8] to-transparent rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                    <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-500 ease-out">
                      {item.icon}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Servicios', 'Equipo', 'Testimonios', 'Contacto'].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-white/70 hover:text-[#1D7BB8] transition-colors duration-300 flex items-center cursor-pointer"
                    >
                      <ChevronRight size={16} className="mr-2" />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {serviciosOfrecidos.map((servicio, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#1D7BB8] transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {servicio}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-[#1D7BB8] mr-2 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Carlos+Izaguirre+N%C2%BA+200+oficina+211+Centro+Empresarial+San+L%C3%A1zaro+Center+Independencia+-+Lima,+Per%C3%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D7BB8] transition-colors duration-300"
                >
                  Av. Carlos Izaguirre N° 200 oficina 211<br />
                  Centro Empresarial San Lázaro Center<br />
                  Independencia - Lima, Perú
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[#1D7BB8] mr-2" />
                <a
                  href="https://wa.me/51953051904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D7BB8] transition-colors duration-300"
                >
                  +51 953 051 904
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#1D7BB8] mr-2" />
                <a
                  href="mailto:Acecop.conciliacion@gmail.com"
                  className="hover:text-[#1D7BB8] transition-colors duration-300"
                >
                  Acecop.conciliacion@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-[#1D7BB8] mr-2 mt-1" />
                <span>
                  Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                  Sábados: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección inferior: Créditos y enlaces */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Centro de Conciliación ACECOP. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-[#1D7BB8] transition-colors duration-300">
              Términos y Condiciones
            </a>
            <a href="#" className="text-white/70 hover:text-[#1D7BB8] transition-colors duration-300">
              Política de Privacidad
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="mt-2 text-sm text-[#1D7BB8]">
            by{' '}
            <a href="mailto:andydev.1@outlook.com" className="hover:underline">
              Yohandry Chirinos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
