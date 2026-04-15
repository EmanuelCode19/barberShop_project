import { useState } from 'react'

const WA = '393662533538'
const SERVICES = ['Corte clásico', 'Fade', 'Barba', 'Corte + Barba']
const HOURS = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30']
const inp = { width:'100%', background:'transparent', border:'none', borderBottom:'1px solid #ddd', padding:'10px 0', fontSize:13, color:'#111', outline:'none', fontFamily:"'DM Sans',system-ui,sans-serif", fontWeight:300, WebkitAppearance:'none', appearance:'none' }

export default function BookingForm() {
  const [form, setForm] = useState({ name:'', service:'', date:'', hour:'' })
  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const today = new Date().toISOString().split('T')[0]

  const send = e => {
    e.preventDefault()
    if (!form.name || !form.service || !form.date || !form.hour) { alert('Completa todos los campos.'); return }
    const msg = `Hola! Quiero reservar:\n\n ${form.name}\n ${form.service}\n ${form.date}\n ${form.hour}\n\n¡Gracias!`
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section style={{ background: '#fff', padding: 'clamp(48px, 8vw, 88px) clamp(20px, 4vw, 48px)' }}>
      <style>{`
        .booking-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: start; }
        .date-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 36px; }
        @media (max-width: 720px) {
          .booking-grid { grid-template-columns: 1fr; gap: 48px; }
          .date-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 400px) { .date-grid { grid-template-columns: 1fr; gap: 0; } }
      `}</style>
      <div className="booking-grid" style={{ maxWidth: 1060, margin: '0 auto' }}>

        <div>
          <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:400, color:'#111', marginBottom:40 }}>Solicitar Cita</h2>
          <form onSubmit={send}>
            <div style={{ marginBottom:28 }}>
              <input name="name" type="text" value={form.name} onChange={set} placeholder="Nombre completo" style={inp} required />
            </div>
            <div style={{ marginBottom:28 }}>
              <select name="service" value={form.service} onChange={set} style={{ ...inp, cursor:'pointer' }} required>
                <option value="" disabled>Seleccionar servicio</option>
                {SERVICES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="date-grid">
              <input name="date" type="date" value={form.date} onChange={set} min={today} style={{ ...inp, colorScheme:'light' }} required />
              <select name="hour" value={form.hour} onChange={set} style={{ ...inp, cursor:'pointer' }} required>
                <option value="" disabled>— : —</option>
                {HOURS.map(h => <option key={h}>{h}</option>)}
              </select>
            </div>
            <button type="submit" style={{ width:'100%', background:'#111', color:'#fff', border:'none', padding:'15px 24px', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', cursor:'pointer', fontFamily:"'DM Sans',system-ui,sans-serif", fontWeight:500, display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
              Enviar por WhatsApp
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>
        </div>

        <div id="contacto">
          <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:400, color:'#111', marginBottom:16 }}>Ubicación</h2>
          <p style={{ fontSize:13, color:'#aaa', fontWeight:300, marginBottom:24 }}>Via Claudio Monteverdi, 12, 36100 Vicenza VI, Italia</p>
          <div style={{ width:'100%', height:180, overflow:'hidden', marginBottom:16 }}>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.549314359652!2d11.516394199999999!3d45.5392742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f314fc8293dab%3A0xa597a893c9881c5b!2sEl%20rube%20barbershop!5e0!3m2!1ses-419!2sdo!4v1776120716265!5m2!1ses-419!2sdo"
              width="100%" height="180" style={{ border:0, display:'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://maps.app.goo.gl/KGD6AGvrwc2xhibw7" target="_blank" rel="noopener noreferrer"
            style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', color:'#111', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, borderBottom:'1px solid #111', paddingBottom:2 }}>
            Abrir en Maps
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
