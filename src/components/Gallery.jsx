import { useState } from 'react'
import photo1 from '../assets/image/Imagen-galeria-1.png'
import photo2 from '../assets/image/Imagen-galeria-2.png'
import photo3 from '../assets/image/Imagen-galeria-3.png'
import photo4 from '../assets/image/Imagen-galeria-4.png'
import photo5 from '../assets/image/Imagen-galeria-5.png'

const PHOTOS = [
  { id: 1, src: photo1, alt: 'Corte trasero' },
  { id: 2, src: photo2, alt: 'Afeitado barba' },
  { id: 3, src: photo3, alt: 'Herramientas' },
  { id: 4, src: photo4, alt: 'Barbero' },
  { id: 5, src: photo5, alt: 'Barbero' },
]

const imgStyle = { width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="galeria" style={{ background: '#fff', padding: 'clamp(48px, 8vw, 88px) clamp(20px, 4vw, 48px)' }}>
      <style>{`
        .gallery-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; grid-template-rows: 240px 240px; gap: 6px; }
        .gallery-cell-tall { grid-row: 1 / 3; }
        .gallery-cell-wide { grid-column: 2 / 4; }
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 180px 180px 180px; }
          .gallery-cell-tall { grid-row: 1 / 3; }
          .gallery-cell-wide { grid-column: 2 / 3; grid-row: 1 / 2; }
          .gallery-cell-4 { grid-column: 2 / 3; grid-row: 2 / 3; }
          .gallery-cell-3 { grid-row: 3 / 4; grid-column: 1 / 2; }
        }
      `}</style>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 400, color: '#111', textAlign: 'center', marginBottom: 48 }}>
          Galeria
        </h2>
        <div className="gallery-grid">
          <div className="gallery-cell-tall" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setActive(PHOTOS[0])}>
            <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} style={imgStyle}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          </div>
          <div className="gallery-cell-wide" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setActive(PHOTOS[1])}>
            <img src={PHOTOS[1].src} alt={PHOTOS[1].alt} style={imgStyle}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          </div>
          <div className="gallery-cell-3" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setActive(PHOTOS[2])}>
            <img src={PHOTOS[2].src} alt={PHOTOS[2].alt} style={imgStyle}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          </div>
          <div className="gallery-cell-4" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setActive(PHOTOS[3])}>
            <img src={PHOTOS[3].src} alt={PHOTOS[3].alt} style={imgStyle}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          </div>
        </div>
      </div>

      {active && (
        <div onClick={() => setActive(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, cursor: 'pointer' }}>
          <button onClick={() => setActive(null)}
            style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.6)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '7px 14px', cursor: 'pointer' }}>
            Close
          </button>
          <img src={active.src} alt={active.alt} onClick={e => e.stopPropagation()}
            style={{ maxHeight: '88vh', maxWidth: '100%', objectFit: 'contain', display: 'block', cursor: 'default' }} />
        </div>
      )}
    </section>
  )
}
