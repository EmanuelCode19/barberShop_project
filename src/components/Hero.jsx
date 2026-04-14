import { useEffect, useState } from 'react'
import logo from '../assets/image/logo_rube.jpg'
import video from '../assets/video/video.mp4'

const WA = '393662533538'
const WA_MSG = encodeURIComponent('Hola, quiero reservar una cita en El Rube Barber Shop.')

export default function Hero() {
  const [sc, setSc] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = sc || menuOpen ? 'rgba(255,255,255,0.97)' : 'transparent'
  const navBorder = sc || menuOpen ? '1px solid rgba(0,0,0,0.07)' : 'none'
  const textColor = sc || menuOpen ? '#111' : '#fff'
  const linkColor = sc || menuOpen ? '#666' : 'rgba(255,255,255,0.8)'

  return (
    <>
      <style>{`
        @media (min-width: 641px) { .mob-menu { display: none !important; } .hamburger-btn { display: none !important; } }
        @media (max-width: 640px) { .desktop-links { display: none !important; } }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: sc || menuOpen ? 'blur(10px)' : 'none',
        background: navBg, borderBottom: navBorder, transition: 'all 0.35s',
      }}>
        <div style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
          <img src={logo} alt="logo rube" style={{ width: '52px', borderRadius: '17px', marginTop: '5px' }} />

          <div className="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {['Servicios', 'Galeria', 'Contacto'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none', transition: 'color 0.3s' }}>{l}</a>
            ))}
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', background: sc ? '#111' : 'rgba(255,255,255,0.95)', color: sc ? '#fff' : '#111', padding: '8px 16px', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s' }}>
              Reserva Ahora
            </a>
          </div>

          <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            aria-label="Menú">
            <span style={{ display: 'block', width: 22, height: 1.5, background: textColor, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: textColor, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: textColor, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
          </button>
        </div>

        {menuOpen && (
          <div className="mob-menu" style={{ background: 'rgba(255,255,255,0.97)', borderTop: '1px solid rgba(0,0,0,0.07)', padding: '20px 20px 28px' }}>
            {['Servicios', 'Galeria', 'Contacto'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#444', textDecoration: 'none', padding: '13px 0', borderBottom: '1px solid #f0f0f0' }}>{l}</a>
            ))}
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              style={{ display: 'block', marginTop: 20, textAlign: 'center', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', background: '#111', color: '#fff', padding: '13px 20px', textDecoration: 'none', fontWeight: 500 }}>
              Reserva Ahora
            </a>
          </div>
        )}
      </nav>

      <section style={{ position: 'relative', width: '100%', height: '100vh', background: '#0d0c0b', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline className="hero-video"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.62 }}>
          <source src={video} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)' }} />
        <div style={{ position: 'absolute', zIndex: 2, bottom: 'clamp(32px, 6vh, 56px)', left: 'clamp(20px, 4vw, 48px)', right: 'clamp(20px, 4vw, 48px)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
            Established &copy; {new Date().getFullYear()}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(34px,5.5vw,66px)', fontWeight: 400, color: '#fff', lineHeight: 1.08, marginBottom: 28, maxWidth: 500 }}>
            <span style={{ color: '#c23616' }}>EL RUBE</span><br />Barber Shop
          </h1>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', background: '#fff', color: '#111', padding: '12px 20px', textDecoration: 'none', fontWeight: 500 }}>
              Reservar cita
            </a>
            <a href="#servicios"
              style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', padding: '12px 20px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
              Ver precios
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
