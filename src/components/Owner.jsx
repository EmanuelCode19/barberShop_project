import barbero from '../assets/image/barbero.png'

export default function Owner() {
  return (
    <section style={{ background: '#fafaf8', padding: 'clamp(48px, 8vw, 88px) clamp(20px, 4vw, 48px)' }}>
      <style>{`
        .owner-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        @media (max-width: 700px) { .owner-grid { grid-template-columns: 1fr; gap: 40px; } .owner-img { max-height: 420px; } }
      `}</style>
      <div className="owner-grid" style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 20 }}>Peluquero profesional</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 400, color: '#111', lineHeight: 1.2, marginBottom: 28 }}>
            Ruben Martin Rosario
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300, marginBottom: 14 }}>
            Nacido en Republica Dominicana, cuento con mas de 10 anos en el trabajo de peluqueria profesional, 5 años residenciendo en Italia y brindando mis servicios tanto a figuras publicas como futbolistas
          </p>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
            Estamos ubicados en el centro de la ciudad en vicenza, italia, en nuestro establecimiento encontraras una peluqueria de alta calidad
          </p>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {[['10+', 'Años'], ['3K+', 'Clientes'], ['#1', 'Calificado']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 400, color: '#111' }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src={barbero}
            alt="Ruben Martin Rosario"
            className="owner-img"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block', filter: 'grayscale(15%)' }}
          />
        </div>
      </div>
    </section>
  )
}
