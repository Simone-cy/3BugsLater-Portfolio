# Implementazione EmailJS in 3 Bugs Later Portfolio

## Descrizione dell'implementazione

Questa implementazione integra EmailJS nel form di contatto del portfolio per consentire l'invio di:
1. Email di notifica al team quando viene ricevuta una nuova richiesta
2. Email di conferma automatica al cliente che ha compilato il form

## File creati/modificati

### File di configurazione
- `src/config/emailjs.config.js` - Contiene le costanti di configurazione per EmailJS
- `src/config/emailjs.config.example.js` - File di esempio con valori placeholder

### Servizio di email
- `src/utils/emailService.js` - Contiene la logica per l'invio delle email

### Componenti UI
- `src/components/LoadingSpinner.jsx` - Componente per visualizzare un'icona di caricamento durante l'invio dell'email

### Form di contatto
- `src/pages/Contact.jsx` - Modificato per utilizzare il servizio EmailJS e mostrare l'icona di caricamento

### Documentazione
- `emailjs-quick-start.md` - Guida rapida per completare la configurazione di EmailJS

## Come funziona

1. L'utente compila il form di contatto
2. Quando invia il form, viene chiamata la funzione `handleSubmit` in `Contact.jsx`
3. La funzione `handleSubmit` chiama `sendContactEmail` da `emailService.js`
4. `sendContactEmail` genera un ID univoco per la richiesta e invia due email utilizzando EmailJS:
   - Una notifica al team con tutti i dettagli della richiesta
   - Una conferma al cliente
5. In base al risultato, viene mostrato un messaggio di successo o di errore all'utente

## Requisiti per il funzionamento

Per far funzionare questa implementazione, è necessario:
1. Avere un account EmailJS
2. Configurare un servizio email in EmailJS
3. Creare due template email in EmailJS (uno per il team e uno per il cliente)
4. Inserire le credenziali corrette nel file `src/config/emailjs.config.js`

## Come completare la configurazione

Seguire i passaggi descritti nel file `emailjs-quick-start.md` per completare la configurazione.

## Variabili disponibili nei template

### Template del team
- `{{name}}` - Nome del cliente
- `{{email}}` - Email del cliente
- `{{company}}` - Azienda del cliente
- `{{projectType}}` - Tipo di progetto
- `{{budget}}` - Budget del progetto
- `{{message}}` - Messaggio del cliente
- `{{timeline}}` - Timeline desiderata
- `{{inquiry_id}}` - ID univoco della richiesta
- `{{date}}` - Data di invio

### Template del cliente
- `{{client_name}}` - Nome del cliente
- `{{client_email}}` - Email del cliente
- `{{inquiry_id}}` - ID univoco della richiesta
- `{{date}}` - Data di invio
