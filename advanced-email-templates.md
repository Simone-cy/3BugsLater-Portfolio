# Template Email Avanzati per EmailJS - 3 Bugs Later

## Setup su EmailJS

### 1. Template per Team (template_contact_form)

**Variabili da configurare su EmailJS:**
- `{{from_name}}` - Nome del cliente
- `{{from_email}}` - Email del cliente  
- `{{company}}` - Azienda del cliente
- `{{project_type}}` - Tipo di progetto
- `{{budget}}` - Budget progetto
- `{{timeline}}` - Timeline progetto
- `{{message}}` - Messaggio del cliente
- `{{submission_date}}` - Data di invio
- `{{project_summary}}` - Riassunto formattato
- `{{priority_level}}` - Livello priorità
- `{{priority_color}}` - Colore priorità
- `{{inquiry_id}}` - ID unico richiesta
- `{{logo_url}}` - URL logo aziendale
- `{{website_url}}` - URL sito web
- `{{github_url}}`, `{{linkedin_url}}`, `{{instagram_url}}` - Social media

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuova Richiesta di Progetto - 3 Bugs Later</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background: #f8fafc;
        }
        
        .email-container {
            max-width: 650px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, {{company_color}} 0%, #8b5cf6 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
        }
        
        .logo-container {
            position: relative;
            z-index: 2;
            margin-bottom: 15px;
        }
        
        .logo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: rgba(255, 255, 255, 0.15);
            padding: 12px 20px;
            border-radius: 50px;
            backdrop-filter: blur(10px);
        }
        
        .logo-icon {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
        }
        
        .logo-text {
            font-size: 18px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header-title {
            position: relative;
            z-index: 2;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        
        .header-subtitle {
            position: relative;
            z-index: 2;
            opacity: 0.9;
            font-size: 16px;
        }
        
        .priority-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: {{priority_color}};
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .client-card {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }
        
        .client-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: {{priority_color}};
        }
        
        .client-info-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #cbd5e1;
        }
        
        .client-avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, {{company_color}} 0%, #8b5cf6 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 18px;
        }
        
        .client-details h3 {
            margin: 0;
            font-size: 18px;
            color: #1e293b;
        }
        
        .client-details p {
            margin: 2px 0 0 0;
            color: #64748b;
            font-size: 14px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #f1f5f9;
        }
        
        .info-item:last-child {
            border-bottom: none;
        }
        
        .info-label {
            font-weight: 600;
            color: #475569;
            font-size: 14px;
        }
        
        .info-value {
            color: #1e293b;
            font-weight: 500;
            text-align: right;
            font-size: 14px;
        }
        
        .project-summary {
            background: #fefefe;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
            font-weight: 500;
            color: #475569;
        }
        
        .message-section {
            margin: 30px 0;
        }
        
        .message-title {
            font-size: 18px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .message-content {
            background: #fefefe;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            font-style: italic;
            color: #475569;
            line-height: 1.7;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            margin: 30px 0;
            flex-wrap: wrap;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
        }
        
        .btn-primary {
            background: {{company_color}};
            color: white;
        }
        
        .btn-secondary {
            background: #f1f5f9;
            color: #475569;
            border: 1px solid #cbd5e1;
        }
        
        .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .footer {
            background: #1e293b;
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .footer-content {
            margin-bottom: 20px;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
        }
        
        .social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: white;
            text-decoration: none;
            transition: all 0.2s;
        }
        
        .social-link:hover {
            background: {{company_color}};
            transform: translateY(-2px);
        }
        
        .footer-text {
            font-size: 12px;
            opacity: 0.7;
            margin-top: 15px;
        }
        
        .inquiry-id {
            background: #f1f5f9;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 8px 12px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            color: #475569;
            display: inline-block;
            margin-top: 10px;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .info-grid {
                grid-template-columns: 1fr;
            }
            
            .action-buttons {
                flex-direction: column;
            }
            
            .btn {
                text-align: center;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="priority-badge">{{priority_level}}</div>
            
            <div class="logo-container">
                <div class="logo">
                    <div class="logo-icon">3BL</div>
                    <div class="logo-text">3 Bugs Later</div>
                </div>
            </div>
            
            <h1 class="header-title">🚀 Nuova Richiesta di Progetto</h1>
            <p class="header-subtitle">Una nuova opportunità ti aspetta!</p>
        </div>
        
        <div class="content">
            <div class="client-card">
                <div class="client-info-header">
                    <div class="client-avatar">{{from_name.0}}</div>
                    <div class="client-details">
                        <h3>{{from_name}}</h3>
                        <p>{{from_email}} • {{company}}</p>
                    </div>
                </div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">📅 Data Richiesta</span>
                        <span class="info-value">{{submission_date}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">💼 Tipo Progetto</span>
                        <span class="info-value">{{project_type}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">💰 Budget</span>
                        <span class="info-value">{{budget}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">⏰ Timeline</span>
                        <span class="info-value">{{timeline}}</span>
                    </div>
                </div>
            </div>
            
            <div class="project-summary">
                <strong>📋 Riassunto: </strong>{{project_summary}}
            </div>
            
            <div class="message-section">
                <h3 class="message-title">
                    💬 Messaggio del Cliente
                </h3>
                <div class="message-content">
                    "{{message}}"
                </div>
            </div>
            
            <div class="action-buttons">
                <a href="mailto:{{from_email}}?subject=Re: Richiesta Progetto [ID: {{inquiry_id}}]" class="btn btn-primary">
                    ✉️ Rispondi al Cliente
                </a>
                <a href="{{website_url}}/admin/inquiries/{{inquiry_id}}" class="btn btn-secondary">
                    📊 Vedi Dettagli
                </a>
            </div>
            
            <div style="text-align: center;">
                <strong>ID Richiesta:</strong>
                <div class="inquiry-id">{{inquiry_id}}</div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-content">
                <div class="logo">
                    <div class="logo-icon">3BL</div>
                    <div class="logo-text">3 Bugs Later</div>
                </div>
                
                <div class="social-links">
                    <a href="{{github_url}}" class="social-link">📱</a>
                    <a href="{{linkedin_url}}" class="social-link">💼</a>
                    <a href="{{instagram_url}}" class="social-link">📷</a>
                </div>
                
                <p>Trasformiamo idee in soluzioni digitali innovative</p>
                <p class="footer-text">
                    Questa email è stata generata automaticamente dal sistema di contatti di 
                    <a href="{{website_url}}" style="color: {{company_color}};">3bugslater.com</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 2. Template Conferma Cliente (template_confirmation)

**Variabili da configurare su EmailJS:**
- `{{to_name}}` - Nome del cliente
- `{{to_email}}` - Email del cliente
- `{{project_type}}` - Tipo di progetto
- `{{project_summary}}` - Riassunto progetto
- `{{inquiry_id}}` - ID richiesta
- `{{expected_response_time}}` - Tempo di risposta atteso
- Tutte le variabili di branding come sopra

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conferma Richiesta - 3 Bugs Later</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background: #f8fafc;
        }
        
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, {{company_color}} 0%, #10b981 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        
        .success-icon {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            margin: 0 auto 20px;
        }
        
        .logo {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            background: rgba(255, 255, 255, 0.15);
            padding: 10px 20px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
        }
        
        .logo-icon {
            width: 32px;
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 12px;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 15px;
        }
        
        .confirmation-message {
            font-size: 16px;
            color: #475569;
            margin-bottom: 30px;
            line-height: 1.7;
        }
        
        .project-card {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            border-left: 4px solid {{company_color}};
        }
        
        .project-title {
            font-size: 18px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 10px;
        }
        
        .project-details {
            color: #64748b;
            font-size: 14px;
        }
        
        .timeline-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
        }
        
        .timeline-icon {
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .what-happens-next {
            margin: 30px 0;
        }
        
        .steps-list {
            list-style: none;
            padding: 0;
        }
        
        .step-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 20px;
            padding: 15px;
            background: #fefefe;
            border-radius: 8px;
            border: 1px solid #f1f5f9;
        }
        
        .step-number {
            width: 30px;
            height: 30px;
            background: {{company_color}};
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            flex-shrink: 0;
        }
        
        .step-content h4 {
            margin: 0 0 5px 0;
            color: #1e293b;
            font-size: 16px;
        }
        
        .step-content p {
            margin: 0;
            color: #64748b;
            font-size: 14px;
        }
        
        .contact-card {
            background: #1e293b;
            color: white;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }
        
        .contact-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .contact-info {
            opacity: 0.9;
            margin-bottom: 20px;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: {{company_color}};
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.2s;
        }
        
        .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .social-proof {
            margin: 30px 0;
            text-align: center;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
        }
        
        .stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 24px;
            font-weight: 700;
            color: {{company_color}};
        }
        
        .stat-label {
            font-size: 12px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .footer {
            background: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        
        .inquiry-id {
            background: #e2e8f0;
            padding: 8px 12px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            color: #475569;
            display: inline-block;
            margin: 10px 0;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .stats {
                flex-direction: column;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="success-icon">✅</div>
            
            <div class="logo">
                <div class="logo-icon">3BL</div>
                <div>3 Bugs Later</div>
            </div>
            
            <h1>Richiesta Ricevuta con Successo!</h1>
            <p>Ti risponderemo entro {{expected_response_time}}</p>
        </div>
        
        <div class="content">
            <h2 class="greeting">Ciao {{to_name}}! 👋</h2>
            
            <p class="confirmation-message">
                Grazie per aver scelto <strong>3 Bugs Later</strong> per il tuo progetto. 
                Abbiamo ricevuto la tua richiesta e il nostro team la sta già esaminando attentamente.
            </p>
            
            <div class="project-card">
                <h3 class="project-title">📋 Il Tuo Progetto: {{project_type}}</h3>
                <p class="project-details">{{project_summary}}</p>
            </div>
            
            <div class="timeline-info">
                <div class="timeline-icon">⏰</div>
                <h3>Tempi di Risposta</h3>
                <p>Ti contatteremo entro <strong>{{expected_response_time}}</strong> con una proposta dettagliata e personalizzata.</p>
            </div>
            
            <div class="what-happens-next">
                <h3>🚀 Cosa Succede Ora?</h3>
                
                <ol class="steps-list">
                    <li class="step-item">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Analisi Dettagliata</h4>
                            <p>Il nostro team analizzerà i tuoi requisiti e preparerà una strategia su misura.</p>
                        </div>
                    </li>
                    
                    <li class="step-item">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Proposta Personalizzata</h4>
                            <p>Ti invieremo una proposta dettagliata con tempistiche, costi e metodologia.</p>
                        </div>
                    </li>
                    
                    <li class="step-item">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Chiamata di Discussione</h4>
                            <p>Organizzeremo una call per discutere il progetto e rispondere alle tue domande.</p>
                        </div>
                    </li>
                </ol>
            </div>
            
            <div class="social-proof">
                <h3>💯 Perché Scegliere 3 Bugs Later</h3>
                <div class="stats">
                    <div class="stat-item">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Progetti Completati</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Clienti Soddisfatti</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">24h</div>
                        <div class="stat-label">Tempo di Risposta</div>
                    </div>
                </div>
            </div>
            
            <div class="contact-card">
                <h3 class="contact-title">Hai Domande?</h3>
                <p class="contact-info">
                    Il nostro team è sempre disponibile per chiarimenti o informazioni aggiuntive.
                </p>
                <a href="mailto:team@3bugslater.com?subject=Domanda su Progetto [ID: {{inquiry_id}}]" class="btn">
                    💬 Contattaci Ora
                </a>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <p><strong>ID Richiesta per Riferimento:</strong></p>
                <div class="inquiry-id">{{inquiry_id}}</div>
                <p style="font-size: 12px; color: #64748b; margin-top: 10px;">
                    Conserva questo ID per future comunicazioni
                </p>
            </div>
        </div>
        
        <div class="footer">
            <div class="logo" style="background: transparent; color: #1e293b;">
                <div class="logo-icon" style="background: {{company_color}}; color: white;">3BL</div>
                <div>3 Bugs Later</div>
            </div>
            
            <p style="margin: 15px 0; color: #64748b;">
                Trasformiamo le tue idee in soluzioni digitali innovative
            </p>
            
            <p style="font-size: 12px; color: #94a3b8;">
                Visita il nostro sito: <a href="{{website_url}}" style="color: {{company_color}};">{{website_url}}</a><br>
                © {{current_year}} 3 Bugs Later. Tutti i diritti riservati.
            </p>
        </div>
    </div>
</body>
</html>
```

---

## 3. Configurazione su EmailJS

### Passaggi per configurare i template:

1. **Accedi al tuo account EmailJS**
2. **Crea i template:**
   - Template 1: `template_contact_form` (per il team)
   - Template 2: `template_confirmation` (per il cliente)
3. **Copia il codice HTML** di ogni template nell'editor EmailJS
4. **Configura le variabili** secondo l'elenco fornito sopra
5. **Testa i template** con dati di esempio
6. **Aggiorna le credenziali** nel file `emailService.js`:
   - `serviceId`: Il tuo Service ID
   - `publicKey`: La tua Public Key
   - `logoUrl`: URL del tuo logo aziendale

### Note Importanti:

- I template utilizzano **CSS inline** per massima compatibilità email
- **Responsive design** per mobile e desktop
- **Icone emoji** per compatibilità universale (sostituibili con immagini)
- **Colori personalizzabili** tramite variabili CSS
- **ID univoci** per tracking delle richieste
- **Social media links** configurabili
- **Call-to-action** chiari e visibili

### Personalizzazioni Aggiuntive:

1. **Logo personalizzato**: Carica il tuo logo su un servizio di hosting immagini
2. **Colori aziendali**: Modifica `{{company_color}}` con il tuo brand color
3. **Link social**: Aggiorna i link dei social media
4. **Statistiche**: Personalizza i numeri nella sezione social proof
5. **Contenuti**: Adatta i testi al tuo tone of voice
