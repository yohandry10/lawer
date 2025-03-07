import React, { useRef } from 'react';
import { sendSolicitudEmail } from '../useEmailService'; // Asegúrate de la ruta correcta
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';

const RegistroSolicitud: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      sendSolicitudEmail(
        formRef.current,
        'service_hctq6er',    // Service ID
        'template_vnn0f4m',   // Template ID
        'WFZ0gBKA4dv1GiJIb'   // Public Key
      )
        .then(() => {
          // Muestra confetti
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          toast.success('Solicitud enviada con éxito', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        })
        .catch((error) => {
          console.error('Error al enviar:', error);
          toast.error('Ocurrió un error al enviar la solicitud', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Toast container para notificaciones */}
      <ToastContainer />

      <h1 className="text-3xl font-bold mb-6">Registro de solicitud</h1>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-5xl">
        {/* SERVICIOS (2 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Columna 1: Tipo de servicio */}
          <div>
            <label htmlFor="tipoServicio" className="block font-semibold mb-1">
              Tipo de servicio
            </label>
            <select
              id="tipoServicio"
              name="tipoServicio"
              className="border rounded w-full px-3 py-2"
              defaultValue=""
            >
              <option value="" disabled>
                -- Seleccione el tipo de servicio --
              </option>
              <option value="Conciliacion">Conciliación</option>
              <option value="ConciliacionMYPE">
                Conciliación en contratación con el Estado
              </option>
              <option value="ConciliacionEmpresarial">Conciliación familiar</option>
              <option value="ConciliacionSocial">Conciliación para divorcio</option>
              <option value="ConciliacionSocial">Conciliación para persona natural</option>
            </select>
          </div>

          {/* Columna 2: Servicio a solicitar */}
          <div>
            <label htmlFor="servicio" className="block font-semibold mb-1">
              Servicio a solicitar
            </label>
            <select
              id="servicio"
              name="servicio"
              className="border rounded w-full px-3 py-2"
              defaultValue=""
            >
              <option value="" disabled>
                -- Seleccione un servicio --
              </option>
              <option value="Conciliacion">Conciliación</option>
              <option value="Arbitraje">Arbitraje</option>
            </select>
          </div>
        </div>

        {/* DATOS DE SOLICITANTE */}
        <fieldset className="border border-gray-300 rounded">
          <legend className="bg-[#1D7BB8] text-white px-3 py-2 rounded-t">
            Datos de Solicitante
          </legend>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombreSolicitante" className="block mb-1 font-semibold">
                Nombre, denominación o razón social del (los) solicitante(s)
              </label>
              <input
                id="nombreSolicitante"
                name="nombreSolicitante"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. Juan Pérez / Empresa ABC"
              />
            </div>
            <div>
              <label htmlFor="domicilioSolicitante" className="block mb-1 font-semibold">
                Domicilio real del (los) solicitantes
              </label>
              <input
                id="domicilioSolicitante"
                name="domicilioSolicitante"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. Av. Principal #123"
              />
            </div>
            <div>
              <label htmlFor="docSolicitante" className="block mb-1 font-semibold">
                Documento de Identidad (DNI) o RUC de los solicitantes
              </label>
              <input
                id="docSolicitante"
                name="docSolicitante"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. DNI 12345678 / RUC 20123456789"
              />
            </div>
            <div>
              <label htmlFor="telSolicitante" className="block mb-1 font-semibold">
                Número de telefónico celular o fijo del solicitante
              </label>
              <input
                id="telSolicitante"
                name="telSolicitante"
                type="tel"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. +51 987654321"
              />
            </div>
            <div>
              <label htmlFor="emailSolicitante" className="block mb-1 font-semibold">
                Email del solicitante u otro medio electrónico
              </label>
              <input
                id="emailSolicitante"
                name="emailSolicitante"
                type="email"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. correo@ejemplo.com"
              />
            </div>
          </div>
        </fieldset>

        {/* DATOS DE REPRESENTANTE (OPCIONAL) */}
        <fieldset className="border border-gray-300 rounded">
          <legend className="bg-[#1D7BB8] text-white px-3 py-2 rounded-t">
            Datos de Representante (Opcional)
          </legend>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombreRepresentante" className="block mb-1 font-semibold">
                Nombre del apoderado o representante del solicitante
              </label>
              <input
                id="nombreRepresentante"
                name="nombreRepresentante"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. Ana Gómez"
              />
            </div>
            <div>
              <label htmlFor="domicilioRepresentante" className="block mb-1 font-semibold">
                Domicilio real del apoderado o representante del solicitante
              </label>
              <input
                id="domicilioRepresentante"
                name="domicilioRepresentante"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. Calle Secundaria #456"
              />
            </div>
            <div>
              <label htmlFor="docRepresentante" className="block mb-1 font-semibold">
                Documento de Identidad (DNI) o RUC del representante
              </label>
              <input
                id="docRepresentante"
                name="docRepresentante"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. DNI 87654321 / RUC 10123456789"
              />
            </div>
            <div>
              <label htmlFor="telRepresentante" className="block mb-1 font-semibold">
                Número de telefónico celular o fijo del representante
              </label>
              <input
                id="telRepresentante"
                name="telRepresentante"
                type="tel"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. +51 912345678"
              />
            </div>
            <div>
              <label htmlFor="emailRepresentante" className="block mb-1 font-semibold">
                Email del representante u otro medio electrónico
              </label>
              <input
                id="emailRepresentante"
                name="emailRepresentante"
                type="email"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. representante@ejemplo.com"
              />
            </div>
          </div>
        </fieldset>

        {/* DATOS DEL INVITADO */}
        <fieldset className="border border-gray-300 rounded">
          <legend className="bg-[#1D7BB8] text-white px-3 py-2 rounded-t">
            Datos del Invitado
          </legend>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombreInvitado" className="block mb-1 font-semibold">
                Nombre o Razón Social del Invitado
              </label>
              <input
                id="nombreInvitado"
                name="nombreInvitado"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. Carlos Ruiz / Empresa XYZ"
              />
            </div>
            <div>
              <label htmlFor="domicilioInvitado" className="block mb-1 font-semibold">
                Domicilio real del (los) Invitado
              </label>
              <input
                id="domicilioInvitado"
                name="domicilioInvitado"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. Av. Industrial #789"
              />
            </div>
            <div>
              <label htmlFor="docInvitado" className="block mb-1 font-semibold">
                Documento de Identidad (DNI) o RUC del invitado
              </label>
              <input
                id="docInvitado"
                name="docInvitado"
                type="text"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. DNI 44556677 / RUC 10445566779"
              />
            </div>
            <div>
              <label htmlFor="telInvitado" className="block mb-1 font-semibold">
                Número de telefónico celular o fijo del invitado
              </label>
              <input
                id="telInvitado"
                name="telInvitado"
                type="tel"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. +51 923456789"
              />
            </div>
            <div>
              <label htmlFor="emailInvitado" className="block mb-1 font-semibold">
                Email del invitado u otro medio electrónico
              </label>
              <input
                id="emailInvitado"
                name="emailInvitado"
                type="email"
                className="border rounded w-full px-3 py-2"
                placeholder="Ej. invitado@ejemplo.com"
              />
            </div>
          </div>
        </fieldset>

        {/* HECHOS QUE DIERON LUGAR AL CONFLICTO */}
        <fieldset className="border border-gray-300 rounded">
          <legend className="bg-[#1D7BB8] text-white px-3 py-2 rounded-t">
            Hechos que dieron lugar al conflicto
          </legend>
          <div className="p-4">
            <textarea
              id="hechos"
              name="hechos"
              className="border rounded w-full px-3 py-2"
              rows={4}
              placeholder="Describa brevemente los hechos que dieron lugar al conflicto..."
            />
          </div>
        </fieldset>

        {/* OTRAS PERSONAS CON DERECHO (OPCIONAL) */}
        <fieldset className="border border-gray-300 rounded">
          <legend className="bg-[#1D7BB8] text-white px-3 py-2 rounded-t">
            Otras personas con derecho (Opcional)
          </legend>
          <div className="p-4">
            <textarea
              id="otrosDerechos"
              name="otrosDerechos"
              className="border rounded w-full px-3 py-2"
              rows={2}
              placeholder="Si aplica, ingrese los datos de otras personas con derecho..."
            />
          </div>
        </fieldset>

        {/* PRETENSIÓN */}
        <fieldset className="border border-gray-300 rounded">
          <legend className="bg-[#1D7BB8] text-white px-3 py-2 rounded-t">
            Pretensión
          </legend>
          <div className="p-4">
            <textarea
              id="pretension"
              name="pretension"
              className="border rounded w-full px-3 py-2"
              rows={3}
              placeholder="Describa la pretensión que realiza..."
            />
          </div>
        </fieldset>

        {/* DECLARACIÓN BAJO JURAMENTO */}
        <div className="flex items-start space-x-2 border border-gray-300 rounded p-4">
          <input
            id="declaracion"
            name="declaracion"
            type="checkbox"
            className="mt-1 h-4 w-4"
          />
          <label htmlFor="declaracion" className="text-sm">
            Declaro bajo juramento que la información proporcionada es verdadera, conforme
            a lo dispuesto por el inciso 10 del artículo 12 del Decreto Supremo N°008-2021-JUS,
            que modifica el Reglamento de la Ley N° 26872, Ley de Conciliación.
          </label>
        </div>

        {/* BOTONES */}
        <div className="flex items-center space-x-4 pt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
          >
            Enviar solicitud
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = '/')}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded font-semibold hover:bg-gray-400"
          >
            Regresar al home
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroSolicitud;
