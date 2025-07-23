import { useEffect } from 'react'

function SEO({ 
  title = "3 Bugs Later - Team di Sviluppatori Web e Mobile",
  description = "Team di tre sviluppatori appassionati che crea soluzioni software innovative. Specializzati in sviluppo web, mobile e applicazioni desktop.",
  keywords = "sviluppo web, sviluppo mobile, sviluppo software, team sviluppatori, React, JavaScript",
  ogImage = "/favicon.svg",
  url = "",
  type = "website"
}) {
  useEffect(() => {
    // Aggiorna il title
    document.title = title

    // Funzione helper per aggiornare meta tag
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    // Aggiorna meta tag SEO
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    
    // Aggiorna Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:image', `${window.location.origin}${ogImage}`, true)
    updateMetaTag('og:url', `${window.location.origin}${url}`, true)
    
    // Non aggiorniamo Twitter Card tags (account non presente)

    // Aggiorna canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}${url}`)
    } else {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('href', `${window.location.origin}${url}`)
      document.head.appendChild(canonical)
    }
  }, [title, description, keywords, ogImage, url, type])

  return null // Questo componente non renderizza nulla
}

export default SEO
