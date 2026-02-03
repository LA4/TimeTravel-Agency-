import { HeroSection } from '@/components/hero-section'
import { DestinationsSection } from '@/components/destinations-section'
import { ChronosChatWidget } from '@/components/chronos-chat'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <DestinationsSection />

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/[0.1] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-serif text-2xl font-bold text-white mb-4">
                Time Travel Agency
              </h4>
              <p className="text-gray-400 text-sm">
                Des voyages temporels de luxe pour le voyageur exigeant.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Destinations</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Paris 1889
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Crétacé -65M
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Florence 1504
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Entreprise</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Conciergerie
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Légal</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Avis de non-responsabilité temporel
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.1] pt-8 flex items-center justify-between text-sm text-gray-400">
            <p>&copy; 2157 Time Travel Agency. Tous droits temporels réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chronos Chatbot Widget */}
      <ChronosChatWidget />
    </main>
  )
}
