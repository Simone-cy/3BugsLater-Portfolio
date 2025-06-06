import emailjs from '@emailjs/browser';
import { SERVICE_ID, USER_ID, TEMPLATE_IDS } from '../config/emailjs.config';

// Inizializzazione di EmailJS
emailjs.init(USER_ID);

/**
 * Invia l'email di contatto al team e una conferma al cliente
 * @param {Object} formData - Dati del form di contatto
 * @returns {Promise<Object>} - Oggetto con risultato dell'operazione
 */
export const sendContactEmail = async (formData) => {
  try {
    // Inviamo l'email al team 
    const teamEmailResult = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_IDS.CONTACT_TEAM,
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        project_type: formData.projectType, 
        budget: formData.budget,
        message: formData.message,
        timeline: formData.timeline, 
      }
    );    // Inviamo auto reply al cliente
    const clientEmailResult = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_IDS.CLIENT_AUTOREPLY,
      {
        name: formData.name,
        email: formData.email,
        project_type: formData.projectType,
        timeline: formData.timeline, 
        budget: formData.budget,
      }
    );
      if (teamEmailResult.status === 200 && clientEmailResult.status === 200) {
      return { 
        success: true, 
        message: "Messaggi inviati con successo."
      };
    } else {
      throw new Error("Errore nell'invio delle email");
    }
    
  } catch (error) {
    console.error("Errore nel servizio email:", error);
    return { 
      success: false, 
      message: "Si è verificato un problema nell'invio delle email. Riprova più tardi."
    };
  }
};