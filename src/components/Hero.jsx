import { useEffect, useState } from 'react'
import logo from '../public/image/logo_rube.jpg'
import video from '../public/video/video.mp4'

const WA = '393662533538'
const WA_MSG = encodeURIComponent('Hola, quiero reservar una cita en El Rube Barber Shop.')

const S = {
  nav: (sc) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: 70, display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '0 28px',
    background: sc ? 'rgba(255,255,255,0.95)' : 'transparent',
    borderBottom: sc ? '1px solid rgba(0,0,0,0.07)' : 'none',
    backdropFilter: sc ? 'blur(10px)' : 'none',
    transition: 'all 0.35s',
  }),
  logo: (sc) => ({
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase',
    color: sc ? '#111' : '#fff', transition: 'color 0.35s',
  }),
  link: (sc) => ({
    fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase',
    color: sc ? '#666' : 'rgba(255,255,255,0.8)',
    textDecoration: 'none', transition: 'color 0.3s',
  }),
  cta: (sc) => ({
    fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase',
    background: sc ? '#111' : 'rgba(255,255,255,0.95)',
    color: sc ? '#fff' : '#111',
    padding: '8px 16px', textDecoration: 'none', fontWeight: 500,
    transition: 'all 0.3s', 
  }),
}

export default function Hero() {
  const [sc, setSc] = useState(false)
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={S.nav(sc)}>
        <img src={logo} alt="logo rube" style={{ width:'60px',borderRadius: '17px',marginTop: '5px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {['Servicios', 'Galeria', 'Contacto'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={S.link(sc)}>{l}</a>
          ))}
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" style={S.cta(sc)}>
            Reserva Ahora
          </a>
        </div>
      </nav>

      <section style={{ position: 'relative', width: '100%', height: '100vh', background: '#0d0c0b', overflow: 'hidden' }}> 
      <video autoPlay muted loop playsInline className="hero-video" 
       style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.62 }}
      >
        <source src={video} type="video/mp4" />
      </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 56, left: 48, zIndex: 2 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
            Established &copy; {new Date().getFullYear()}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(38px,5.5vw,66px)', fontWeight: 400, color: '#fff', lineHeight: 1.08, marginBottom: 32, maxWidth: 500 }}>
            <span style={{color: '#c23616'}}>EL RUBE</span><br />Barber Shop
          </h1>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', background: '#fff', color: '#111', padding: '12px 22px', textDecoration: 'none', fontWeight: 500 }}>
              Reservar cita
            </a>
            <a href="#services"
              style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', padding: '12px 22px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
              Ver precios
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
