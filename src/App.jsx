import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-yellow focus:text-bg focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
