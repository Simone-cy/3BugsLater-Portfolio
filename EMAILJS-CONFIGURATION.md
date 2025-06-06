# 📧 Configurazione EmailJS - 3 Bugs Later

## 🎯 ID da Configurare in EmailJS

### 1. Service ID
```
Nome Service: 3BugsLater_Contact_Service
ID Consigliato: service_3bugslater
```

### 2. Template ID per il Team
```
Nome Template: Team Notification Template
ID Consigliato: template_team_notification
Descrizione: Template per notificare il team di nuove richieste
File HTML: emailjs-contact-template.html
```

### 3. Template ID per Cliente
```
Nome Template: Client Confirmation Template  
ID Consigliato: template_client_confirmation
Descrizione: Template di conferma automatica per il cliente
File HTML: emailjs-client-confirmation-template.html
```

### 4. Public Key
```
La tua Public Key: YOUR_EMAILJS_PUBLIC_KEY
(Prendi questa da Account > General > Public Key)
```

## ⚙️ Configurazione nel Codice

In `src/services/emailService.js`, aggiorna questi valori:

```javascript
const EMAIL_CONFIG = {
  serviceId: 'service_3bugslater',
  teamTemplateId: 'template_team_notification', 
  confirmationTemplateId: 'template_client_confirmation',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
}
```

## 📋 Variabili Template Utilizzate

### Variabili per entrambi i template:
- `{{name}}` - Nome del cliente
- `{{email}}` - Email del cliente
- `{{company}}` - Nome azienda
- `{{project_type}}` - Tipo di progetto
- `{{message}}` - Messaggio del cliente
- `{{submission_date}}` - Data invio
- `{{inquiry_id}}` - ID univoco richiesta
- `{{current_year}}` - Anno corrente

### Variabili specifiche template team:
- `{{budget}}` - Budget progetto
- `{{timeline}}` - Timeline desiderata
- `{{phone}}` - Telefono (se fornito)
- `{{priority_level}}` - Livello priorità
- `{{priority_color}}` - Colore priorità
- `{{project_summary}}` - Riassunto progetto

### Variabili branding (entrambi):
- `{{logo_url}}` - URL logo aziendale
- `{{company_color}}` - Colore aziendale
- `{{website_url}}` - URL sito web
- `{{github_url}}` - URL GitHub
- `{{linkedin_url}}` - URL LinkedIn
- `{{instagram_url}}` - URL Instagram

## 🧪 Test della Configurazione

Una volta configurati gli ID, puoi testare usando:

```javascript
import { testEmailConfiguration } from './services/emailService'

// Test in console browser
testEmailConfiguration().then(result => console.log(result))
```

## 📝 Checklist Configurazione

- [ ] Creato account EmailJS
- [ ] Configurato servizio email (Gmail/Outlook)
- [ ] Caricato template team con ID `template_team_notification`
- [ ] Caricato template cliente con ID `template_client_confirmation`
- [ ] Copiata Public Key
- [ ] Aggiornati ID nel file `emailService.js`
- [ ] Testata funzionalità email
- [ ] Verificata ricezione email su entrambi i template

## 🚨 Note Importanti

1. **Subject delle Email**:
   - Team: `🚀 Nuova Richiesta da {{name}} - {{company}}`
   - Cliente: `✅ Conferma Ricezione - 3 Bugs Later`

2. **Limiti EmailJS**:
   - Piano gratuito: 200 email/mese
   - Considera upgrade per volume maggiore

3. **Sicurezza**:
   - Non condividere mai la Public Key pubblicamente
   - Usa variabili ambiente in produzione

4. **Monitoraggio**:
   - Controlla dashboard EmailJS per statistiche
   - Monitora tassi di consegna e apertura

---

**✅ Una volta completata la configurazione, il sistema email sarà completamente funzionale!**
