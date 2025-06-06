# 3 Bugs Later - Portfolio Team

Sito portfolio ufficiale del team di sviluppo **3 Bugs Later**.

## 🚀 Tecnologie Utilizzate

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM
- **Deployment**: Vercel/Netlify ready

## 🎯 Caratteristiche

- ✅ Design responsive e moderno
- ✅ Navigazione fluida tra sezioni
- ✅ Portfolio progetti interattivo
- ✅ Form di contatto funzionale
- ✅ Pagina team con informazioni dettagliate
- ✅ Ottimizzato per SEO
- ✅ Performance elevate

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer con link e info
│   ├── TeamMemberCard.jsx    # Card membro team
│   └── ProjectCards.jsx      # Card progetto
├── pages/              # Pagine principali
│   ├── Home.jsx        # Homepage con hero e overview
│   ├── About.jsx       # Chi siamo e team
│   ├── Projects.jsx    # Portfolio progetti
│   └── Contact.jsx     # Contatti e form
├── App.jsx            # Router principale
└── main.jsx           # Entry point
```

## 🛠️ Installazione e Sviluppo

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview build di produzione
npm run preview
```

## 🎨 Personalizzazione

Il sito è completamente personalizzabile:

1. **Colori e tema**: Modifica le classi Tailwind in base al tuo brand
2. **Contenuti team**: Aggiorna le informazioni in `src/pages/About.jsx`
3. **Progetti**: Aggiungi i tuoi progetti in `src/pages/Projects.jsx`
4. **Contatti**: Personalizza form e info in `src/pages/Contact.jsx`

## 📧 Contatti

- **Email**: threebugslater3@gmail.com
- **Website**: [3bugslater.dev](https://3bugslater.dev)

---

Sviluppato con ❤️ da **3 Bugs Later**

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
