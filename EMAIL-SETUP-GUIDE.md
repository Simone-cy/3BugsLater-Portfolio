# 📧 Guida Completa alla Configurazione Email

## 🚀 Setup EmailJS per 3 Bugs Later

### Passo 1: Registrazione su EmailJS

1. Vai su [EmailJS.com](https://www.emailjs.com/)
2. Clicca su "Sign Up" e crea un account
3. Verifica la tua email
4. Accedi alla dashboard

### Passo 2: Configurazione del Servizio

1. **Nella dashboard, clicca su "Email Services"**
2. **Clicca su "Add New Service"**
3. **Scegli il tuo provider email preferito:**
   - **Gmail** (consigliato per sviluppo)
   - **Outlook/Hotmail**
   - **Yahoo Mail**
   - **SendGrid** (per produzione)
   - **Mailgun** (per produzione)

4. **Per Gmail:**
   - Inserisci la tua email Gmail
   - Inserisci la password dell'app (non la password normale!)
   - Nome del servizio: `3bugslater_gmail`

#### 🔐 Come ottenere la password dell'app Gmail:
1. Vai su [myaccount.google.com](https://myaccount.google.com)
2. Sicurezza → Verifica in due passaggi (attivala se non è già attiva)
3. Password per le app → Seleziona "Posta" e "Altro"
4. Inserisci "EmailJS 3BugsLater"
5. Usa la password generata (16 caratteri) in EmailJS

### Passo 3: Creazione dei Template

#### Template 1: Notifica al Team (`template_contact_form`)

1. **Vai su "Email Templates"**
2. **Clicca "Create New Template"**
3. **Configurazione:**
   - **Template Name:** `Contact Form - Team Notification`
   - **Template ID:** `template_contact_form`
   - **Subject:** `🚀 Nuova Richiesta Progetto da {{from_name}} - [{{priority_level}}]`
   - **To Email:** `team@3bugslater.com` (o la tua email del team)

4. **Copia e incolla il codice HTML** dal file `advanced-email-templates.md` (Template 1)

#### Template 2: Conferma al Cliente (`template_confirmation`)

1. **Crea un secondo template**
2. **Configurazione:**
   - **Template Name:** `Contact Form - Client Confirmation`
   - **Template ID:** `template_confirmation`
   - **Subject:** `✅ Richiesta Ricevuta - 3 Bugs Later [ID: {{inquiry_id}}]`
   - **To Email:** `{{to_email}}`

3. **Copia e incolla il codice HTML** dal file `advanced-email-templates.md` (Template 2)

### Passo 4: Configurazione delle Credenziali

1. **Prendi nota di:**
   - **Service ID:** (dalla sezione "Email Services")
   - **Template IDs:** `template_contact_form` e `template_confirmation`
   - **Public Key:** (dalla sezione "Account" → "General")

2. **Aggiorna il file `src/services/emailService.js`:**

```javascript
const EMAIL_CONFIG = {
  serviceId: 'TUO_SERVICE_ID_QUI',           // es: service_abc123
  templateId: 'template_contact_form',        // ID del template team
  confirmationTemplateId: 'template_confirmation', // ID del template cliente
  publicKey: 'TUA_PUBLIC_KEY_QUI'            // es: user_abc123xyz
}

const BRANDING_CONFIG = {
  logoUrl: 'URL_DEL_TUO_LOGO',               // Carica logo su imgur.com o simile
  companyColor: '#3b82f6',                   // Il tuo colore aziendale
  websiteUrl: 'https://tuosito.com',         // URL del tuo sito  socialMedia: {
    github: 'https://github.com/Simone-cy/3BugsLater-Portfolio',
    linkedin: 'https://linkedin.com/company/tuazienda',
    instagram: 'https://www.instagram.com/threebugslater'
  }
}
```

### Passo 5: Test della Configurazione

1. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

2. **Vai su:** `http://localhost:5173/email-test`

3. **Clicca "Testa Configurazione Email"**

4. **Se tutto funziona**, dovresti ricevere un'email di test

### Passo 6: Test del Form di Contatto

1. **Vai su:** `http://localhost:5173/contact`
2. **Compila il form** con dati di test
3. **Invia il form**
4. **Controlla:**
   - Email ricevuta dal team
   - Email di conferma inviata al cliente

## 🎨 Personalizzazione Avanzata

### Logo Aziendale

1. **Carica il tuo logo** su un servizio di hosting immagini:
   - [Imgur](https://imgur.com) (gratuito)
   - [Cloudinary](https://cloudinary.com) (più professionale)
   - Il tuo hosting web

2. **Ottieni l'URL diretto** dell'immagine

3. **Aggiorna `logoUrl`** nel file `emailService.js`

### Colori Personalizzati

Modifica `companyColor` con il tuo colore aziendale:
- `#3b82f6` - Blu (default)
- `#10b981` - Verde
- `#f59e0b` - Arancione
- `#ef4444` - Rosso
- `#8b5cf6` - Viola

### Social Media

Aggiorna tutti i link dei social media nel `BRANDING_CONFIG`.

## 🔧 Risoluzione Problemi

### Errore: "Invalid API Key"
- Verifica che la Public Key sia corretta
- Controlla che il servizio sia attivo su EmailJS

### Errore: "Template not found"
- Verifica che i Template ID siano esatti
- Controlla che i template siano pubblicati su EmailJS

### Errore: "Service unavailable"
- Verifica che il Service ID sia corretto
- Controlla la configurazione del provider email

### Email non arrivano
- Controlla la cartella spam
- Verifica che l'email del servizio sia corretta
- Testa con un'email diversa

### Errore di autenticazione Gmail
- Assicurati di usare la password dell'app, non quella normale
- Verifica che la verifica in due passaggi sia attiva

## 📊 Monitoraggio

### Dashboard EmailJS
- Monitora il numero di email inviate
- Controlla i log degli errori
- Gestisci i limiti di invio

### Limite Gratuito
- **200 email/mese** nel piano gratuito
- Considera l'upgrade per progetti in produzione

## 🚀 Deploy in Produzione

### Variabili di Ambiente
Per la produzione, considera di usare variabili di ambiente:

```javascript
const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  confirmationTemplateId: import.meta.env.VITE_EMAILJS_CONFIRMATION_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
}
```

### File `.env`
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_contact_form
VITE_EMAILJS_CONFIRMATION_ID=template_confirmation
VITE_EMAILJS_PUBLIC_KEY=user_xyz789
```

## 📋 Checklist Finale

- [ ] Account EmailJS creato e verificato
- [ ] Servizio email configurato
- [ ] Template HTML caricati e testati
- [ ] Credenziali aggiornate nel codice
- [ ] Logo aziendale caricato
- [ ] Colori personalizzati
- [ ] Social media links aggiornati
- [ ] Test email funzionante
- [ ] Form di contatto testato
- [ ] Email di conferma funzionante
- [ ] Pronto per la produzione

## 🆘 Supporto

Se hai problemi con la configurazione:

1. **Controlla la console** del browser per errori
2. **Verifica i log** su EmailJS dashboard
3. **Testa passo per passo** ogni configurazione
4. **Consulta la documentazione** EmailJS ufficiale

**Link Utili:**
- [Documentazione EmailJS](https://www.emailjs.com/docs/)
- [Dashboard EmailJS](https://dashboard.emailjs.com/)
- [Supporto EmailJS](https://www.emailjs.com/docs/support/)

---

**🎉 Una volta completata la configurazione, avrai un sistema email professionale completamente funzionante per il tuo portfolio!**
