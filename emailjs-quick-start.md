# 🚀 Guida Rapida EmailJS - 3 Bugs Later

## ✅ Lista di controllo per implementazione

1. [✓] File di configurazione EmailJS creato
2. [✓] Servizio email implementato
3. [✓] Componente LoadingSpinner aggiunto
4. [✓] Form di contatto aggiornato per utilizzare EmailJS
5. [✓] Template HTML delle email pronti (vedi emailjs-contact-template.html e emailjs-client-confirmation-template.html)
6. [ ] Configurazione delle credenziali EmailJS (da fare)

## 🔧 Passi per completare la configurazione

### 1. Vai su [EmailJS](https://www.emailjs.com/) e accedi al tuo account

### 2. Configura un servizio email
- Vai su "Email Services"
- Crea un nuovo servizio (es. Gmail, Outlook, ecc.)
- Segui la configurazione guidata
- Copia il **Service ID** (es. `service_3bugslater` come suggerito in EMAILJS-CONFIGURATION.md)

### 3. Crea due template email
- Vai su "Email Templates"
- Crea un template per le notifiche al team:
  - Copia il contenuto di `emailjs-contact-template.html` o `emailjs-team-template.html`
  - Salva e copia il **Template ID** (es. `template_team_notification`)
- Crea un template per la conferma al cliente:
  - Copia il contenuto di `emailjs-client-confirmation-template.html` o `emailjs-confirmation-template.html`
  - Salva e copia il **Template ID** (es. `template_client_confirmation`)

### 4. Ottieni la tua Public Key
- Vai su "Account" → "API Keys"
- Copia la tua **Public Key**

### 5. Aggiorna il file di configurazione
- Apri `src/config/emailjs.config.js`
- Sostituisci i valori placeholder con quelli ottenuti nei passi precedenti:
  ```javascript
  export const SERVICE_ID = "service_3bugslater"; // Il tuo Service ID
  export const USER_ID = "tUA_PUBLIC_KEY"; // La tua Public Key
  export const TEMPLATE_IDS = {
    CONTACT_TEAM: "template_team_notification", // Il tuo Template ID per il team
    CLIENT_CONFIRMATION: "template_client_confirmation" // Il tuo Template ID per la conferma
  };
  ```

## 🧪 Test del form di contatto

1. Avvia l'applicazione con `npm run dev`
2. Vai alla pagina Contatti
3. Compila il form con dati di test
4. Invia il form
5. Verifica che:
   - Appaia il messaggio di successo
   - Il team riceva l'email di notifica
   - Il "cliente" riceva l'email di conferma

## 🔄 Variabili disponibili nei template

### Nel template del team:
- `{{name}}` - Nome del cliente
- `{{email}}` - Email del cliente
- `{{company}}` - Nome dell'azienda
- `{{projectType}}` - Tipo di progetto
- `{{budget}}` - Budget del progetto
- `{{message}}` - Messaggio del cliente
- `{{timeline}}` - Timeline desiderata
- `{{inquiry_id}}` - ID univoco della richiesta
- `{{date}}` - Data di invio

### Nel template del cliente:
- `{{client_name}}` - Nome del cliente
- `{{client_email}}` - Email del cliente
- `{{inquiry_id}}` - ID univoco della richiesta
- `{{date}}` - Data di invio

## 📚 Documentazione aggiuntiva

Per informazioni più dettagliate, consultare:
- `EMAILJS-SETUP-GUIDE.md` - Guida completa alla configurazione
- `EMAILJS-CONFIGURATION.md` - Dettagli sugli ID consigliati
- `EMAILJS-FINAL-SUMMARY.md` - Riepilogo finale del sistema
