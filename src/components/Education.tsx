import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import styles from './Education.module.css'

const EDUCATION = [
  {
    id: 'edu-ujap',
    degree: 'Ingeniería en Computación',
    institution: 'Universidad José Antonio Páez (UJAP)',
    location: 'San Diego, Edo. Carabobo',
    period: '2023 – Actualidad',
    status: 'En curso',
  },
  {
    id: 'edu-bachiller',
    degree: 'Bachiller en Ciencias',
    institution: 'U.E. "Santa Sofía"',
    location: 'Los Guayos, Edo. Carabobo',
    period: '2018 – 2023',
    status: 'Graduada',
  },
  {
    id: 'edu-primaria',
    degree: 'Educación Primaria',
    institution: 'U.E. "Santa Sofía"',
    location: 'Los Guayos, Edo. Carabobo',
    period: '2012 – 2018',
    status: 'Graduada',
  },
]

export default function Education() {
  return (
    <section id="educacion" className={`section ${styles.education}`}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Educación</h2>
          <p className="section-subtitle">Formación académica y trayectoria</p>
        </div>

        <div className={styles.timeline}>
          
          <div className={styles.centerLine} />

          {EDUCATION.map((edu, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={edu.id}
                id={edu.id}
                className={`${styles.item} ${isLeft ? styles.left : styles.right} reveal`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                
                <div className={`glass-card ${styles.card}`}>
                  
                  <div className={styles.dateRow}>
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>

                  <div className={styles.statusRow}>
                    <span
                      className={styles.status}
                      style={{
                        background: edu.status === 'En curso'
                          ? 'rgba(0, 255, 157, 0.1)'
                          : 'rgba(157, 78, 221, 0.1)',
                        color: edu.status === 'En curso'
                          ? 'var(--accent-green)'
                          : 'var(--accent-purple)',
                        border: `1px solid ${edu.status === 'En curso'
                          ? 'rgba(0, 255, 157, 0.3)'
                          : 'rgba(157, 78, 221, 0.3)'}`,
                      }}
                    >
                      {edu.status === 'En curso' && <span className={styles.activeDot} />}
                      {edu.status}
                    </span>
                  </div>

                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.location}>
                    <MapPin size={13} />
                    {edu.location}
                  </p>
                </div>

                
                <div className={styles.dotWrap}>
                  <div className={styles.dot}>
                    <GraduationCap size={16} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}