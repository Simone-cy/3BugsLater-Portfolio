/* SEO Optimizations Checklist */

/* ✅ COMPLETED:
1. Meta tags ottimizzati (title, description, keywords)
2. Open Graph tags per social media (senza Twitter - non presente)
3. Schema.org structured data
4. Sitemap.xml
5. Robots.txt
6. Canonical URLs
7. Componente SEO dinamico per ogni pagina
8. Meta tags specifici per ogni pagina
9. Dominio reale configurato: 3bugslater.dev
10. GitHub repository collegato
*/

/* 🔲 TODO (da completare manualmente):
1. ✅ Sostituire "tuodominio.com" con il dominio reale - FATTO
2. ✅ Rimuovere Twitter (non presente) - FATTO
3. ✅ Configurare GitHub repository reale - FATTO
4. Installare Google Analytics/Search Console
5. Ottimizzare le immagini con alt text
6. Migliorare la performance (lazy loading, ottimizzazione bundle)
7. Implementare breadcrumbs
8. Aggiungere markup structured data per recensioni/testimonial
9. Creare pagina 404 personalizzata
10. Verificare SSL certificate su 3bugslater.dev
*/

export const SEO_CONFIG = {
  domain: '3bugslater.dev',
  defaultTitle: '3 Bugs Later - Team di Sviluppatori Web e Mobile',
  defaultDescription: 'Team di tre sviluppatori appassionati che crea soluzioni software innovative',
  defaultKeywords: 'sviluppo web, sviluppo mobile, team sviluppatori, React, Node, JavaScript',
  ogImage: '/favicon.svg', // Usando il logo esistente
  githubUrl: 'https://github.com/Simone-cy/3BugsLater-Portfolio'
}

// Funzioni utility per SEO
export const generatePageTitle = (pageTitle) => {
  return pageTitle ? `${pageTitle} - 3 Bugs Later` : SEO_CONFIG.defaultTitle
}

export const generatePageUrl = (path) => {
  return `https://${SEO_CONFIG.domain}${path}`
}
