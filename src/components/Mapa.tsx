import React from 'react';

const Mapa: React.FC = () => {
  return (
    <section id="mapa" className="py-12 w-full bg-white">
      {/* Encabezado */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-[#1D7BB8]">
          Resolución
        </h2>
        <p className="text-xl text-gray-700 mb-6">
          Te llevamos de la conciliación a la resolución del conflicto.
        </p>
        <a
          href="https://wa.me/51953051904" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
        >
          {/* Ícono de WhatsApp (SVG) */}
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.968 11.968 0 0012 0C5.371 0 0 5.371 0 12a11.948 11.948 0 001.762 6.213l-1.165 4.26 4.372-1.147A11.946 11.946 0 0012 24c6.629 0 12-5.371 12-12 0-3.197-1.248-6.2-3.48-8.52zM12 22.001c-1.979 0-3.885-.577-5.518-1.662l-.395-.25-2.593.68.693-2.52-.258-.408A9.952 9.952 0 012.001 12c0-5.514 4.486-9.999 9.999-9.999 2.671 0 5.182 1.042 7.071 2.929 1.888 1.889 2.93 4.4 2.93 7.07 0 5.514-4.486 10-10 10z"></path>
            <path d="M17.472 14.274c-.297-.148-1.758-.867-2.031-.967-.273-.1-.47-.148-.668.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.76-1.654-2.057-.173-.297-.018-.457.13-.605.133-.132.297-.347.446-.52.148-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.148-.668-1.609-.916-2.209-.242-.58-.49-.502-.668-.51l-.567-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.853 1.213 3.053c.148.198 2.099 3.21 5.077 4.494.709.306 1.26.489 1.69.625.71.226 1.356.194 1.87.118.57-.085 1.758-.718 2.007-1.41.25-.692.25-1.285.173-1.41-.074-.124-.272-.198-.57-.347z"></path>
          </svg>
          Contáctanos
        </a>
      </div>

      {/* Contenedor del mapa */}
      <div className="relative w-full h-[600px] mt-10">
        <iframe
          title="Mapa ACECOP"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.39610667866!2d-77.05696622565431!3d-11.999630039464294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce4ca388b2c5%3A0xc49344104b57e833!2sAv.%20Carlos%20Izaguirre%20200%2C%20Independencia%2015311%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1679362943817!5m2!1ses!2sus"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Mapa;
