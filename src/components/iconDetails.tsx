import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLandmark, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const IconDetails: React.FC = () => {
  // Datos de cada servicio
  const services = [
    {
      id: 'civil',
      icon: faPuzzlePiece,
      title: 'Contrataciones en Materia Civil',
      description: 'Nuestros servicios en materia civil incluyen las siguientes pretensiones conciliables:',
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
      title: 'Contrataciones en Materia de Familia',
      description: 'Nuestros servicios en materia de familia comprenden las siguientes pretensiones conciliables:',
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
      description: 'En el ámbito de las contrataciones con el Estado ofrecemos soluciones que incluyen:',
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enlace para volver a la página principal */}
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>

      <h1 className="text-4xl font-bold text-center mb-8">Detalle de Servicios</h1>

      {services.map((service) => (
        <section key={service.id} id={service.id} className="mb-12 border-b pb-6">
          <div className="flex items-center gap-4 mb-4">
            <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary-600" />
            <h2 className="text-3xl font-bold">{service.title}</h2>
          </div>
          <p className="text-lg mb-4">{service.description}</p>
          <ul className="list-disc ml-8 space-y-2">
            {service.items.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default IconDetails;
