import { useState } from 'react'
import ProjectCards from '../components/ProjectCards'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Piattaforma e-commerce completa con gestione inventario, pagamenti e analytics in tempo reale.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "Web Development",
      status: "Completato",
      clientType: "Startup",
      duration: "3 mesi",
      features: [
        "Sistema di pagamenti integrato",
        "Dashboard amministrativa",
        "Analytics avanzata",
        "Responsive design",
        "Sistema di recensioni"
      ]
    },
    {
      id: 2,
      title: "App Fitness Tracker",
      description: "Applicazione mobile per il tracking degli allenamenti con social features e gamification.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile Development",
      status: "In Sviluppo",
      clientType: "PMI",
      duration: "4 mesi",
      features: [
        "Tracking GPS degli allenamenti",
        "Social network integrato",
        "Sistema di sfide e badge",
        "Sincronizzazione wearables",
        "Coach AI personalizzato"
      ]
    },
    {
      id: 3,
      title: "Dashboard Gestionale",
      description: "Sistema di gestione aziendale con CRM, fatturazione e reportistica avanzata.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      category: "Web Development",
      status: "In sviluppo",
      clientType: "Enterprise",
      duration: "6 mesi",
      features: [
        "CRM completo",
        "Sistema di fatturazione",
        "Reportistica personalizzabile",
        "API RESTful",
        "Multi-tenancy"
      ]
    },
    {
      id: 4,
      title: "Bot Trading Crypto",
      description: "Bot automatizzato per trading di criptovalute con algoritmi di machine learning.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Redis", "WebSocket", "Docker"],
      category: "Backend Development",
      status: "In Sviluppo",
      clientType: "Personale",
      duration: "2 mesi",
      features: [
        "Trading automatizzato",
        "Machine learning per previsioni",
        "Dashboard real-time",
        "Gestione del rischio",
        "Backtesting avanzato"
      ]
    },
    {
      id: 5,
      title: "App Food Delivery",
      description: "Piattaforma completa per delivery con app per clienti, ristoranti e rider.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps"],
      category: "Mobile Development",
      status: "In Pianificazione",
      clientType: "Startup",
      duration: "5 mesi",
      features: [
        "Tre app dedicate (clienti, ristoranti, rider)",
        "Tracking ordini in tempo reale",
        "Sistema di pagamenti",
        "Gestione menu dinamici",
        "Sistema di rating e recensioni"
      ]
    },
    {
      id: 6,
      title: "Portfolio Digitale",
      description: "Piattaforma per artisti e creativi per showcasing del proprio lavoro con e-commerce integrato.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe", "Cloudinary"],
      category: "Web Development",
      status: "In Sviluppo",
      clientType: "Freelancer",
      duration: "2 mesi",
      features: [
        "Gallery responsive",
        "E-commerce integrato",
        "Blog personalizzabile",
        "SEO ottimizzato",
        "Gestione clienti"
      ]
    }
  ]

  const categories = ["Tutti", "Web Development", "Mobile Development", "Backend Development"]
  const [selectedCategory, setSelectedCategory] = useState("Tutti")

  const filteredProjects = selectedCategory === "Tutti" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            I Nostri Progetti
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri alcuni dei progetti che abbiamo realizzato per i nostri clienti
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600 text-sm">Progetti Completati</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Clienti Soddisfatti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Tecnologie Utilizzate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2+</div>
              <div className="text-gray-600 text-sm">Anni di Esperienza</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCards key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Il Nostro Processo
            </h2>
            <p className="text-lg text-gray-600">
              Come lavoriamo per trasformare le tue idee in realtà
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analisi</h3>
              <p className="text-gray-600">
                Comprendiamo le tue esigenze e definiamo insieme gli obiettivi del progetto
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Progettiamo l'architettura e il design dell'interfaccia utente
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sviluppo</h3>
              <p className="text-gray-600">
                Implementiamo la soluzione con le migliori tecnologie disponibili
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600">
                Testiamo, deployamo e forniamo supporto continuo post-lancio
              </p>
            </div>
          </div>
        </div>
      </section>    </div>
  )
}

export default Projects