# EmailJS Template Configuration Guide 📧

## 🎯 Panoramica
Questa guida ti aiuterà a configurare i template email professionali per EmailJS nel progetto "3 Bugs Later".

## 📋 Template Creati

### 1. **Template per il Team** (`emailjs-contact-template.html`)
- **Scopo**: Notifica il team quando arriva una nuova richiesta
- **Destinatario**: Team di sviluppo
- **Design**: Layout professionale con card cliente e azioni rapide

### 2. **Template di Conferma** (`emailjs-client-confirmation-template.html`)
- **Scopo**: Conferma automatica per il cliente
- **Destinatario**: Cliente che ha inviato la richiesta
- **Design**: Layout friendly con next steps e informazioni di contatto

## 🚀 Configurazione EmailJS

### Step 1: Accedi a EmailJS
1. Vai su [EmailJS](https://www.emailjs.com/)
2. Accedi al tuo account o registrati
3. Vai nella dashboard

### Step 2: Crea i Template

#### Template per il Team:
1. Clicca su **"Email Templates"**
2. Clicca **"Create New Template"**
3. **Template Name**: `team_notification_template`
4. **Subject**: `🚀 Nuova Richiesta da {{name}} - {{company}}`
5. **Content**: Copia e incolla il contenuto di `emailjs-contact-template.html`
6. Salva il template e copia il **Template ID**

#### Template di Conferma:
1. Crea un altro template
2. **Template Name**: `client_confirmation_template`
3. **Subject**: `✅ Conferma Ricezione - 3 Bugs Later`
4. **Content**: Copia e incolla il contenuto di `emailjs-client-confirmation-template.html`
5. Salva il template e copia il **Template ID**

### Step 3: Configura il Service
1. Vai su **"Email Services"**
2. Aggiungi il tuo provider email (Gmail, Outlook, etc.)
3. Copia il **Service ID**

### Step 4: Ottieni Public Key
1. Vai su **"Account"** → **"General"**
2. Copia la **Public Key**

## ⚙️ Aggiornamento Codice

### Modifica `src/services/emailService.js`:

```javascript
// Configurazione EmailJS
const EMAILJS_CONFIG = {
  serviceId: 'TUO_SERVICE_ID',
  teamTemplateId: 'TUO_TEAM_TEMPLATE_ID',
  confirmationTemplateId: 'TUO_CONFIRMATION_TEMPLATE_ID',
  publicKey: 'TUA_PUBLIC_KEY'
};
```

## 📧 Variabili Template

### Variabili Disponibili:
- `{{name}}` - Nome del cliente
- `{{email}}` - Email del cliente  
- `{{company}}` - Nome dell'azienda
- `{{project_type}}` - Tipo di progetto
- `{{message}}` - Messaggio del cliente
- `{{phone}}` - Telefono del cliente (opzionale)
- `{{submission_date}}` - Data di invio
- `{{inquiry_id}}` - ID univoco della richiesta

### Variabili Branding:
- `{{company_name}}` - 3 Bugs Later
- `{{company_email}}` - info@3bugslater.com
- `{{company_phone}}` - +39 340 123 4567
- `{{github_url}}` - https://github.com/Simone-cy/3BugsLater-Portfolio
- `{{linkedin_url}}` - https://linkedin.com/company/3bugslater
- `{{instagram_url}}` - https://www.instagram.com/threebugslater

## 🎨 Personalizzazione

### Colori Principali:
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Success**: `#10b981` (Emerald)
- **Background**: `#f8fafc` (Slate)

### Font:
- **System Font Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`

## 🧪 Test

### Test Template Team:
```javascript
// Test dati
const testData = {
  name: "Marco Rossi",
  email: "marco@example.com",
  company: "TechCorp",
  project_type: "E-commerce",
  message: "Vorrei sviluppare un negozio online...",
  submission_date: "2024-01-15"
};
```

### Test Template Conferma:
```javascript
// Gli stessi dati per il template di conferma
```

## 📱 Responsive Design

I template sono ottimizzati per:
- ✅ Desktop
- ✅ Tablet  
- ✅ Mobile
- ✅ Dark Mode
- ✅ Client Email (Gmail, Outlook, Apple Mail)

## 🔧 Troubleshooting

### Problemi Comuni:

1. **Template non si carica**:
   - Verifica che l'HTML sia valido
   - Controlla i Template ID

2. **Styling non funziona**:
   - EmailJS supporta CSS inline
   - Evita CSS moderni non supportati

3. **Variabili non sostituite**:
   - Verifica la sintastica `{{variabile}}`
   - Controlla che i dati vengano passati correttamente

## 📊 Monitoraggio

### Metriche da Tracciare:
- Tasso di consegna email
- Tasso di apertura
- Click sui bottoni CTA
- Tempo di risposta del team

## 🔄 Aggiornamenti Futuri

### Possibili Miglioramenti:
- [ ] A/B testing sui subject
- [ ] Personalizzazione per tipo di progetto
- [ ] Integrazione con CRM
- [ ] Analytics avanzate
- [ ] Template multilingua

## 📞 Supporto

Per problemi con la configurazione:
- 📧 **Email**: info@3bugslater.com
- 💬 **GitHub Issues**: Repository del progetto
- 📚 **Documentazione**: [EmailJS Docs](https://www.emailjs.com/docs/)

---

**🚀 Happy coding with 3 Bugs Later!**
