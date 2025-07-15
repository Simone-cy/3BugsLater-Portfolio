import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">3 Bugs Later</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">
                Trasformiamo i bug in feature
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Siamo un team di tre sviluppatori appassionati che crea soluzioni software innovative. 
              Specializzati in sviluppo web, mobile e applicazioni desktop con le tecnologie più moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link
                to="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Vedi i nostri progetti
              </Link> */}
              <Link
                to="/contact"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cosa facciamo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creiamo soluzioni software su misura per le tue esigenze, dalle web app alle applicazioni mobile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Applicazioni web moderne e responsive utilizzando React, Tailwind e tecnologie all'avanguardia
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Tailwind</span>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Development</h3>
              <p className="text-gray-600 mb-4">
                App native e cross-platform per iOS e Android con Flutter e tecnologie native
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Kotlin</span>
                <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">Flutter</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Swift</span>
              </div>
            </div>

            {/* Backend & Database */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend & Database</h3>
              <p className="text-gray-600 mb-4">
                API robuste e database scalabili con Mysql, MongoDB, Node.js
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Mysql</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MongoDB</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/*<div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Progetti Completati</div>
            </div> */}
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Sviluppatori Esperti</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2+</div>
              <div className="text-gray-600">Anni di Esperienza</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Supporto Clienti</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto a trasformare la tua idea in realtà?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Lavoriamo insieme per creare la soluzione software perfetta per le tue esigenze
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Inizia il tuo progetto
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home