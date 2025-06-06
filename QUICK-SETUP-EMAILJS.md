# 🚀 Setup Rapido EmailJS - 3 Bugs Later

## ⚡ Configurazione in 5 minuti

### 1. Crea Account EmailJS
1. Vai su [emailjs.com](https://www.emailjs.com)
2. Registrati gratuitamente
3. Accedi alla dashboard

### 2. Configura Servizio Email
1. Clicca **"Email Services"** → **"Add New Service"**
2. Scegli il tuo provider (Gmail, Outlook, etc.)
3. Autorizza l'accesso
4. **Copia il Service ID** → es: `service_abc123`

### 3. Carica i Template Email

#### Template per il Team:
1. Vai su **"Email Templates"** → **"Create New Template"**
2. **Template Name**: `Team Notification Template`
3. **Template ID**: `template_team_notification` (importante!)
4. **Subject**: `🚀 Nuova Richiesta da {{name}} - {{company}}`
5. **Content**: Copia tutto il contenuto di `emailjs-contact-template.html`
6. **Salva**

#### Template di Conferma:
1. Crea nuovo template
2. **Template Name**: `Client Confirmation Template`
3. **Template ID**: `template_client_confirmation` (importante!)
4. **Subject**: `✅ Conferma Ricezione - 3 Bugs Later`
5. **Content**: Copia tutto il contenuto di `emailjs-client-confirmation-template.html`
6. **Salva**

### 4. Ottieni Public Key
1. Vai su **"Account"** → **"General"**
2. **Copia la Public Key** → es: `user_abc123xyz`

### 5. Aggiorna il Codice
Apri `src/config/emailjs.config.js` e sostituisci:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'il_tuo_service_id_qui',           // ⬅️ Service ID da step 2
  teamTemplateId: 'template_team_notification', // ✅ Mantieni questo
  confirmationTemplateId: 'template_client_confirmation', // ✅ Mantieni questo  
  publicKey: 'la_tua_public_key_qui'           // ⬅️ Public Key da step 4
}
```

### 6. Testa la Configurazione
1. Vai alla pagina **Contact** del sito
2. Scroll in basso e clicca **"🧪 Test Configurazione Email"**
3. Se tutto è verde, clicca **"📧 Invia Email di Test"**
4. Controlla la tua email per verificare la ricezione

## ✅ Configurazione Completata!

Una volta fatto questo setup:
- ✅ Le email del form di contatto funzioneranno automaticamente
- ✅ Il team riceverà notifiche professionali
- ✅ I clienti riceveranno conferme automatiche
- ✅ Tracking delle richieste con ID univoci

## 🔧 Troubleshooting

### "Template not found" 
- Verifica che i Template ID siano esattamente `template_team_notification` e `template_client_confirmation`

### "Service not found"
- Controlla che il Service ID sia corretto
- Verifica che il servizio sia attivato

### "Public key invalid"
- Copia/incolla la Public Key direttamente da EmailJS
- Assicurati di non avere spazi extra

### Template non si carica correttamente
- Verifica che l'HTML sia valido
- Controlla che tutte le variabili `{{name}}` siano nella sintassi corretta

## 📊 Limiti Piano Gratuito
- **200 email/mese** (più che sufficienti per iniziare)
- Upgrade disponibile per volumi maggiori

---

**🎯 Dopo la configurazione, il tuo sistema email sarà professionale e completamente automatizzato!**
