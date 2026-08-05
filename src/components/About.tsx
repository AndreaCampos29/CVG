import { GraduationCap, Code2, Layers, MapPin, Calendar, Fingerprint } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre-mi" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title reveal">Perfil Profesional</h2>
          <p className="section-subtitle reveal">Quién soy y qué me apasiona</p>
        </div>

        <div className={styles.content}>
          {/* Tarjetas de texto animadas y estilizadas */}
          <div className={styles.textCards}>
            
            <div className={`glass-card ${styles.textCard} reveal`} style={{ '--accent-color': 'var(--celeste)' } as React.CSSProperties}>
              <div className={styles.iconWrap}>
                <GraduationCap size={24} />
              </div>
              <p className={styles.text}>
                Estudiante del <strong>8vo semestre de Ingeniería de Computación</strong> en la UJAP, enfocada en el desarrollo de software y el diseño de interfaces (UI/UX).
              </p>
            </div>

            <div className={`glass-card ${styles.textCard} reveal`} style={{ '--accent-color': 'var(--lila)', transitionDelay: '0.15s' } as React.CSSProperties}>
              <div className={styles.iconWrap}>
                <Code2 size={24} />
              </div>
              <p className={styles.text}>
                Cuento con conocimientos prácticos en lenguajes y frameworks modernos, como <strong>Rust</strong> y <strong>Vue.js</strong>, aplicados a la creación de soluciones digitales eficientes.
              </p>
            </div>

            <div className={`glass-card ${styles.textCard} reveal`} style={{ '--accent-color': 'var(--rosa)', transitionDelay: '0.3s' } as React.CSSProperties}>
              <div className={styles.iconWrap}>
                <Layers size={24} />
              </div>
              <p className={styles.text}>
                Me destaco por mi capacidad para <strong>estructurar proyectos</strong>, abarcando desde el diseño de la arquitectura y la lógica de sistemas complejos, hasta el manejo fluido de repositorios.
              </p>
            </div>
            
          </div>

          {/* Fila de información personal interactiva */}
          <div className={`${styles.infoStrip} reveal`} style={{ transitionDelay: '0.45s' }}>
            <div className={styles.infoBadge}>
              <MapPin size={16} className={styles.badgeIcon} />
              <span><strong>Universidad:</strong> UJAP — San Diego, Edo. Carabobo</span>
            </div>
            <div className={styles.infoBadge}>
              <Calendar size={16} className={styles.badgeIcon} />
              <span><strong>Semestre:</strong> 8vo · 2023–Actualidad</span>
            </div>
            <div className={styles.infoBadge}>
              <Fingerprint size={16} className={styles.badgeIcon} />
              <span><strong>C.I.:</strong> 31.856.233</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
