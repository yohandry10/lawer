// useEmailService.ts
import emailjs from 'emailjs-com';

/**
 * Envía el formulario a EmailJS usando sendForm.
 * @param form - La referencia al formulario HTML.
 * @param serviceId - El Service ID de EmailJS (ej: "service_hctq6er").
 * @param templateId - El Template ID de EmailJS (ej: "template_vnn0f4m").
 * @param publicKey - Tu Public Key de EmailJS (ej: "WFZ0gBKA4dv1GiJIb").
 */
export const sendSolicitudEmail = (
  form: HTMLFormElement,
  serviceId: string,
  templateId: string,
  publicKey: string
) => {
  // Retornamos la promesa que produce emailjs, así podemos manejar .then() y .catch() en el componente
  return emailjs.sendForm(serviceId, templateId, form, publicKey);
};
