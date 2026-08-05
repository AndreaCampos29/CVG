import { CheckCircle2, Languages } from 'lucide-react'
import { useEffect, useRef } from 'react'
import styles from './Aptitudes.module.css'

const APTITUDES = [
  'Capacidad de aprendizaje autodidacta',
  'Trabajo en equipo y comunicación asertiva',
  'Enfoque en soluciones funcionales',
  'Pensamiento analítico y estructurado',
  'Gestión de proyectos técnicos',
  'Adaptabilidad ante nuevas tecnologías',
]

const LANGUAGES = [
  { lang: 'Español', level: 'Nativa', pct: 100, color: 'var(--accent-cyan)' },
  { lang: 'Inglés', level: 'Nivel Básico', pct: 35, color: 'var(--accent-purple)' },
]

export default function Aptitudes() {
  const fillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const fills = fillRefs.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement
            const pct = el.getAttribute('data-pct')
            const color = el.getAttribute('data-color')
            el.style.width = `${pct}%`
            if (color) el.style.background = color
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    fills.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="aptitudes" className={`section ${styles.aptitudes}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Aptitudes */}
          <div>
            <div className="reveal">
              <h2 className="section-title">Aptitudes</h2>
              <p className="section-subtitle">Competencias personales y profesionales</p>
            </div>
            <ul className={styles.list}>
              {APTITUDES.map((a, i) => (
                <li
                  key={i}
                  className={`${styles.aptItem} reveal`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <CheckCircle2 size={20} className={styles.check} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Idiomas */}
          <div>
            <div className="reveal">
              <h2 className="section-title">
                <Languages size={22} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.4rem' }} />
                Idiomas
              </h2>
              <p className="section-subtitle">Nivel de comunicación</p>
            </div>

            <div className={styles.langList}>
              {LANGUAGES.map((l, i) => (
                <div key={l.lang} className={`${styles.langCard} glass-card reveal`}>
                  <div className={styles.langHeader}>
                    <p className={styles.langName}>{l.lang}</p>
                    <span className={styles.langLevel} style={{ color: l.color }}>{l.level}</span>
                  </div>
                  <div className={styles.langTrack}>
                    <div
                      ref={(el) => { fillRefs.current[i] = el }}
                      className={styles.langFill}
                      data-pct={l.pct}
                      data-color={l.color}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
