import barbero from '../public/image/barbero.png'
export default function Owner() {
  return (
    <section style={{ background: '#fafaf8', padding: '88px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 20 }}>Peluquero profesional</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 400, color: '#111', lineHeight: 1.2, marginBottom: 28 }}>
            Ruben Martin Rosario<br />
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300, marginBottom: 14 }}>
            Nacido en Republica Dominicana, cuento con mas de 10 anos en el trabajo de peluqueria profesional, 5 años residenciendo en Italia y brindando mis servicios tanto a figuras publicas como futbolistas
          </p>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
           Estamos ubicados en el centro de la ciudad en vicenza, italia, en nuestro establecimiento encontraras una peluqueria de alta calidad
          </p>
          <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
            {[['10+','Años'],['3K+','Clientes'],['#1','Calificado']].map(([n,l]) => (
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
            alt="Julian Rossi"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block', filter: 'grayscale(15%)' }}
          />
          {/* <div style={{ position: 'absolute', bottom: -14, right: -14, width: '100%', height: '100%', border: '1px solid rgba(0,0,0,0.1)', pointerEvents: 'none' }} /> */}
        </div>
      </div>
    </section>
  )
}
