import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Calculator from './components/Calculator'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Calculator />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App