import Hero from './components/Hero.jsx'
import Prices from './components/Prices.jsx'
import Gallery from './components/Gallery.jsx'
import Owner from './components/Owner.jsx'
import BookingForm from './components/BookingForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <main style={{ background: '#fafaf8', color: '#111' }}>
      <Hero />
      <Prices />
      <Gallery />
      <Owner />
      <BookingForm />
      <Footer />
    </main>
  )
}
