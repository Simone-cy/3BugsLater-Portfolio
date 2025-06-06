# Template Email per EmailJS

## Template 1: Email al Team (template_contact_form)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuovo Contatto - 3 Bugs Later</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white; 
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .logo {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
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
            font-size: 14px;
        }
        .content { 
            padding: 30px;
        }
        .client-info {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e2e8f0;
        }
        .info-row:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        .label { 
            font-weight: 600;
            color: #475569;
        }
        .value { 
            color: #1e293b;
        }
        .message-box {
            background: #fefefe;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .priority-high {
            border-left: 4px solid #ef4444;
        }
        .priority-medium {
            border-left: 4px solid #f59e0b;
        }
        .priority-low {
            border-left: 4px solid #10b981;
        }
        .footer {
            background: #1e293b;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
        }
        .cta-button {
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            margin: 15px 0;
            font-weight: 500;
        }
        .stats {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            text-align: center;
        }
        .stat {
            flex: 1;
        }
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #3b82f6;
        }
        .stat-label {
            font-size: 12px;
            color: #64748b;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">
                <div class="logo-icon">3BL</div>
                <span style="font-size: 20px; font-weight: bold;">3 Bugs Later</span>
            </div>
            <h1 style="margin: 0; font-size: 24px;">🚀 Nuovo Contatto Ricevuto!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">{{submission_date}}</p>
        </div>

        <!-- Content -->
        <div class="content">
            <h2 style="color: #1e293b; margin-top: 0;">Informazioni Cliente</h2>
            
            <div class="client-info">
                <div class="info-row">
                    <span class="label">👤 Nome:</span>
                    <span class="value">{{from_name}}</span>
                </div>
                <div class="info-row">
                    <span class="label">📧 Email:</span>
                    <span class="value">{{from_email}}</span>
                </div>
                <div class="info-row">
                    <span class="label">🏢 Azienda:</span>
                    <span class="value">{{company}}</span>
                </div>
                <div class="info-row">
                    <span class="label">📋 Tipo Progetto:</span>
                    <span class="value">{{project_type}}</span>
                </div>
            </div>

            <!-- Project Summary -->
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">💰</div>
                    <div class="stat-label">{{budget}}</div>
                </div>
                <div class="stat">
                    <div class="stat-number">⏰</div>
                    <div class="stat-label">{{timeline}}</div>
                </div>
                <div class="stat">
                    <div class="stat-number">📊</div>
                    <div class="stat-label">{{project_type}}</div>
                </div>
            </div>

            <!-- Message -->
            <h3 style="color: #1e293b;">💬 Messaggio del Cliente</h3>
            <div class="message-box priority-medium">
                <p style="margin: 0; white-space: pre-line;">{{message}}</p>
            </div>

            <!-- Call to Action -->
            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:{{from_email}}" class="cta-button">
                    📧 Rispondi Subito
                </a>
                <br>
                <small style="color: #64748b;">Obiettivo risposta: entro 24 ore</small>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong>3 Bugs Later</strong> - Team di Sviluppo Software</p>
            <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                Questa email è stata generata automaticamente dal form di contatto su {{website_url}}
            </p>
        </div>
    </div>
</body>
</html>
```

## Template 2: Email di Conferma al Cliente (template_confirmation)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conferma Richiesta - 3 Bugs Later</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white; 
            padding: 40px 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .logo {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
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
            font-size: 14px;
        }
        .content { 
            padding: 40px 30px;
        }
        .highlight-box {
            background: linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%);
            border: 1px solid #c7d2fe;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            text-align: center;
        }
        .next-steps {
            background: #f8fafc;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
        }
        .step {
            display: flex;
            align-items: start;
            margin-bottom: 15px;
        }
        .step-number {
            width: 30px;
            height: 30px;
            background: #3b82f6;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            flex-shrink: 0;
        }
        .social-links {
            text-align: center;
            margin: 30px 0;
        }
        .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #3b82f6;
            text-decoration: none;
        }
        .footer {
            background: #1e293b;
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 0 0 8px 8px;
        }
        .cta-button {
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            margin: 20px 0;
            font-weight: 600;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">
                <div class="logo-icon">3BL</div>
                <span style="font-size: 24px; font-weight: bold;">3 Bugs Later</span>
            </div>
            <h1 style="margin: 0; font-size: 28px;">✅ Richiesta Ricevuta!</h1>
            <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">
                Ciao {{to_name}}, grazie per averci contattato!
            </p>
        </div>

        <!-- Content -->
        <div class="content">
            <h2 style="color: #1e293b; margin-top: 0;">La tua richiesta è nelle nostre mani 🚀</h2>
            
            <p style="font-size: 16px; color: #475569;">
                Abbiamo ricevuto la tua richiesta per un progetto di tipo <strong>{{project_type}}</strong> 
                e siamo entusiasti di lavorare con te!
            </p>

            <div class="highlight-box">
                <h3 style="margin: 0 0 10px 0; color: #3b82f6;">⏰ Tempo di Risposta</h3>
                <p style="margin: 0; font-size: 18px; font-weight: 600; color: #1e293b;">
                    Ti contatteremo entro {{expected_response_time}}
                </p>
            </div>

            <!-- Next Steps -->
            <div class="next-steps">
                <h3 style="margin: 0 0 20px 0; color: #1e293b;">📋 Prossimi Passi</h3>
                
                <div class="step">
                    <div class="step-number">1</div>
                    <div>
                        <strong>Analisi Richiesta</strong><br>
                        Il nostro team analizzerà nel dettaglio la tua richiesta e preparerà domande specifiche.
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">2</div>
                    <div>
                        <strong>Chiamata Conoscitiva</strong><br>
                        Organizzeremo una call per discutere il progetto, capire meglio le tue esigenze e rispondere alle tue domande.
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">3</div>
                    <div>
                        <strong>Proposta Personalizzata</strong><br>
                        Ti invieremo una proposta dettagliata con timeline, costi e approccio tecnico.
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div style="text-align: center;">
                <p style="color: #64748b; margin-bottom: 10px;">Nel frattempo, scopri di più su di noi:</p>
                <a href="{{website_url}}" class="cta-button">
                    🌐 Visita il Nostro Portfolio
                </a>
            </div>

            <!-- Social Links -->
            <div class="social-links">
                <p style="color: #64748b; margin-bottom: 15px;">Seguici sui social:</p>                <a href="#" class="social-link">LinkedIn</a> •
                <a href="#" class="social-link">GitHub</a> •
                <a href="#" class="social-link">Instagram</a>
            </div>

            <!-- Contact Info -->
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 30px;">
                <h4 style="margin: 0 0 10px 0; color: #1e293b;">📞 Hai domande urgenti?</h4>
                <p style="margin: 0; color: #475569;">
                    Scrivici direttamente a: <strong>threebugslater3@gmail.com</strong><br>
                    Oppure chiamaci al: <strong>+39 123 456 7890</strong>
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p style="margin: 0 0 15px 0; font-size: 18px;"><strong>{{team_name}}</strong></p>
            <p style="margin: 0 0 10px 0;">Trasformiamo i bug in feature</p>
            <p style="margin: 0; font-size: 14px; opacity: 0.8;">
                Milano, Italia • threebugslater3@gmail.com • {{website_url}}
            </p>
        </div>
    </div>
</body>
</html>
```

## Configurazione EmailJS

Per configurare EmailJS:

1. Vai su https://www.emailjs.com/
2. Crea un account gratuito
3. Crea un servizio email (Gmail, Outlook, etc.)
4. Crea i template usando l'HTML sopra
5. Sostituisci le credenziali nel file emailService.js

## Parametri da sostituire nei template:

- `{{from_name}}` - Nome del cliente
- `{{from_email}}` - Email del cliente  
- `{{company}}` - Azienda del cliente
- `{{project_type}}` - Tipo di progetto
- `{{budget}}` - Budget indicativo
- `{{timeline}}` - Timeline desiderata
- `{{message}}` - Messaggio del cliente
- `{{submission_date}}` - Data di invio
- `{{website_url}}` - URL del sito
- `{{to_name}}` - Nome destinatario
- `{{expected_response_time}}` - Tempo di risposta previsto
- `{{team_name}}` - Nome del team
