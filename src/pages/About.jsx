import TeamMemberCard from '../components/TeamMemberCard'

function About() {
  const teamMembers = [
    {
      name: "Simone Ruggiero",
      role: "Full Stack Developer & Team Lead",
      image: "https://i.imgur.com/ozQvqrM.jpeg",
      bio: "Team Lead esperto in React e Node.js. Appassionato di architetture scalabili e tecnologie moderne come Flutter.",
      skills: ["React", "Node.js", "Tailwind CSS", "JavsScript","C", "Flutter", "Dart", "PHP", "Mysql","Python", "PostgreSQL", "C++", "Git"],
      linkedin: "https://www.linkedin.com/in/simone-ruggiero-5911a934b/",
      github: "https://github.com/Simone-cy",
      email: "ruggierosimone05@gmail.com"
    },
    {
      name: "Diego Zambrano",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9ubmF8ZW58MHx8MHx8fDA%3D",
      bio: "Sviluppatore versatile con esperienza in linguaggi multipli. Specializzato in sviluppo mobile e backend robusti.",
      skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "Kotlin", "Swift", "PHP", "MySQL", "Python", "JavaScript", "C", "Bash", "C#", "Git"],
      linkedin: "#",
      github: "#",
      email: "diego@3bugslater.dev"
    },
    {
      name: "Leonardo Galli",
      role: "Full Stack Developer",
      image: "https://i.imgur.com/hkKA5Za.jpeg",
      bio: "Full-stack developer con esperienza in web e mobile. Cura sia backend che interfacce responsive. Attento al design, al codice e al lavoro in team.",
      skills: ["React", "Node.js", "Tailwind CSS", "PHP", "MySQL", "Python", "JavaScript", "C", "C#", "Java", "Flutter", "Dart", "Bootstrap", "Git"],
      linkedin: "#",
      github: "https://github.com/Cripsum",
      email: "galli.leonardo2005@gmail.com"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Chi Siamo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tre amici accomunati dalla passione per la tecnologia e l'innovazione
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                La Nostra Storia
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>3 Bugs Later</strong> nasce nel 2025 dall'amicizia e dalla passione condivisa per lo sviluppo software. 
                  Tre amici universitari che, dopo aver passato innumerevoli notti a debuggare codice insieme, 
                  hanno deciso di trasformare la loro passione in una realtà professionale.
                </p>
                <p>
                  Il nostro nome riflette il nostro approccio: ogni bug è un'opportunità per imparare e migliorare. 
                  Non ci arrendiamo mai di fronte alle sfide tecniche e crediamo che i problemi più complessi 
                  portino alle soluzioni più innovative.
                </p>
                <p>
                  Oggi siamo specializzati nello sviluppo di applicazioni web e mobile moderne, 
                  con un focus particolare sull'user experience e la scalabilità. 
                  Lavoriamo con startup, PMI e aziende che vogliono digitalizzare i loro processi.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">I Nostri Valori</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Qualità del Codice</h4>
                    <p className="text-blue-100">Scriviamo codice pulito, testato e mantenibile</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Collaborazione</h4>
                    <p className="text-blue-100">Lavoriamo a stretto contatto con i nostri clienti</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Innovazione</h4>
                    <p className="text-blue-100">Utilizziamo sempre le tecnologie più moderne</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Trasparenza</h4>
                    <p className="text-blue-100">Comunicazione chiara in ogni fase del progetto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Il Nostro Team
            </h2>
            <p className="text-lg text-gray-600">
              Incontra le persone che danno vita ai tuoi progetti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnologie che Utilizziamo
            </h2>
            <p className="text-lg text-gray-600">
              Le nostre competenze tecniche al tuo servizio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend & Web</h3>
              <div className="space-y-2">
                <span className="block bg-blue-100 text-blue-800 py-2 px-3 rounded">React</span>
                <span className="block bg-cyan-100 text-cyan-800 py-2 px-3 rounded">Tailwind CSS</span>
                <span className="block bg-yellow-100 text-yellow-800 py-2 px-3 rounded">JavaScript</span>
                <span className="block bg-purple-100 text-purple-800 py-2 px-3 rounded">PHP</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend & Database</h3>
              <div className="space-y-2">
                <span className="block bg-green-100 text-green-800 py-2 px-3 rounded">Node.js</span>
                <span className="block bg-red-100 text-red-800 py-2 px-3 rounded">Express.js</span>
                <span className="block bg-yellow-100 text-yellow-800 py-2 px-3 rounded">Python</span>
                <span className="block bg-orange-100 text-orange-800 py-2 px-3 rounded">MySQL</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile</h3>
              <div className="space-y-2">
                <span className="block bg-cyan-100 text-cyan-800 py-2 px-3 rounded">Flutter</span>
                <span className="block bg-blue-100 text-blue-800 py-2 px-3 rounded">Dart</span>
                <span className="block bg-green-100 text-green-800 py-2 px-3 rounded">Kotlin</span>
                <span className="block bg-gray-100 text-gray-800 py-2 px-3 rounded">Swift</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages & Tools</h3>
              <div className="space-y-2">
                <span className="block bg-purple-100 text-purple-800 py-2 px-3 rounded">C</span>
                <span className="block bg-red-100 text-red-800 py-2 px-3 rounded">C++</span>
                <span className="block bg-yellow-100 text-yellow-800 py-2 px-3 rounded">C#</span>
                <span className="block bg-gray-100 text-gray-800 py-2 px-3 rounded">Bash</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
