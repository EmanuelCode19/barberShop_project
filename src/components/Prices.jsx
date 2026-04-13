const WA = '5491100000000'

const SERVICES = [
  { name: 'Corte clásico', desc: 'Corte basico, incluye mascarilla y facial', price: '25€' },
  { name: 'Fade',          desc: 'Moderno degragado completo o en las zonas laterales a cada lado de la cabeza ',         price: '30€' },
  { name: 'Barba',         desc: 'Corte de barba',   price: '15€' },
  { name: 'Corte + Barba', desc: 'Corte de cabello y barba, incluye mascarilla', price: '40€' },
]

export default function Prices() {
  return (
    <section id="servicios" style={{ background: '#fafaf8', padding: '88px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>Experiencia en servicio al cliente</p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 400, color: '#111', marginBottom: 48 }}>
          Servicios
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: '#e2e0da' }}>
          {SERVICES.map((s) => (
            <div key={s.name} style={{ background: '#fafaf8', padding: '28px 24px 24px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 400, color: '#111', marginBottom: 10 }}>{s.name}</h3>
              <p style={{ fontSize: 12, color: '#999', lineHeight: 1.65, fontWeight: 300, flexGrow: 1 }}>{s.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24, paddingTop: 16, borderTop: '1px solid #ebebeb' }}>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 400, color: '#111' }}>{s.price}</span>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola! Quiero reservar: ${s.name} (${s.price})`)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', border: '1px solid #ccc', padding: '6px 14px' }}>
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
