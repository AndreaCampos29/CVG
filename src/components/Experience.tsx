import { Briefcase, Calendar } from 'lucide-react'
import styles from './Experience.module.css'

const EXPERIENCES = [
  {
    id: 'exp-arquidiocesis',
    role: 'Pasante de Servicio Comunitario',
    company: 'Arquidiócesis de Valencia',
    period: 'Oct. 2025 – Feb. 2026',
    color: 'var(--celeste)',
    achievements: [
      'Desarrollo de un sistema de gestión y archivo digital para documentos legales y eclesiásticos.',
      'Reconstrucción completa del software mediante arquitectura Full-Stack con TypeScript y Next.js.',
      'Implementación de control de acceso por roles y filtros de búsqueda avanzados para optimizar la organización y consulta de documentos.',
    ],
    stack: ['TypeScript', 'Next.js', 'Full-Stack', 'Control de roles'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className={`section ${styles.experience}`}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Experiencia Laboral</h2>
          <p className="section-subtitle">Aplicando el conocimiento en proyectos reales</p>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.id} id={exp.id} className={`${styles.item} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Dot & line */}
              <div className={styles.dotCol}>
                <div className={styles.dot} style={{ background: exp.color }}>
                  <Briefcase size={16} />
                </div>
                <div className={styles.line} />
              </div>

              {/* Card */}
              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.period}>
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>

                <ul className={styles.list}>
                  {exp.achievements.map((a, j) => (
                    <li key={j} className={styles.listItem}>
                      <span className={styles.bullet} style={{ background: exp.color }} />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className={styles.stack}>
                  {exp.stack.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
