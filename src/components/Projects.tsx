import { ExternalLink, ShoppingCart, Truck } from 'lucide-react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    id: 'proj-ecommerce',
    icon: <ShoppingCart size={28} />,
    title: 'Plataforma de E-Commerce',
    subtitle: 'Distribuidora de Mariscos',
    description:
      'Plataforma web con catálogo interactivo, gestión de pagos integrados y panel administrativo dinámico utilizando Vue 3, Node.js y MySQL.',
    stack: ['Vue 3', 'Node.js', 'MySQL'],
    color: 'var(--celeste)',
    colorLight: 'var(--celeste-light)',
  },
  {
    id: 'proj-delivery',
    icon: <Truck size={28} />,
    title: 'Sistema de Delivery',
    subtitle: 'Control de Inventario para Restaurante',
    description:
      'Sistema de servicio de delivery y control de inventario para restaurante mediante arquitectura Node.js, MySQL y Bootstrap, enfocado en la optimización de procesos operativos y experiencia del usuario.',
    stack: ['Node.js', 'MySQL', 'Bootstrap'],
    color: 'var(--lila)',
    colorLight: 'var(--lila-light)',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className={`section section-alt ${styles.projects}`}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Proyectos Académicos</h2>
          <p className="section-subtitle">Soluciones reales desarrolladas durante la carrera</p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className={`${styles.card} reveal`}
              style={
                {
                  '--card-color': p.color,
                  '--card-light': p.colorLight,
                  animationDelay: `${i * 0.15}s`,
                } as React.CSSProperties
              }
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{p.icon}</div>
                <ExternalLink size={16} className={styles.extIcon} />
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardSub}>{p.subtitle}</p>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
              </div>

              <div className={styles.cardFooter}>
                {p.stack.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              
              <div className={styles.deco} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}