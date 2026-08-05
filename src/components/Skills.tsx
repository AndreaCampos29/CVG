import styles from './Skills.module.css'

interface Tech {
  name: string
  icon: string        // devicon class
  color: string       // color del badge
  bg: string          // fondo suave
}

const CATEGORIES: { title: string; desc: string; techs: Tech[] }[] = [
  {
    title: 'Frontend',
    desc: 'Experiencia en desarrollo Fullstack con Next.js y Vue.js para la construcción de interfaces modernas.',
    techs: [
      { name: 'Vue.js',      icon: 'devicon-vuejs-plain colored',        color: '#4FC08D', bg: '#E8F8F2' },
      { name: 'React',       icon: 'devicon-react-original colored',     color: '#61DAFB', bg: '#E3F8FD' },
      { name: 'Next.js',     icon: 'devicon-nextjs-plain',               color: '#555',    bg: '#F0F0F0' },
      { name: 'TypeScript',  icon: 'devicon-typescript-plain colored',   color: '#3178C6', bg: '#E5EEF9' },
      { name: 'HTML5',       icon: 'devicon-html5-plain colored',        color: '#E34F26', bg: '#FDEEE9' },
      { name: 'CSS3',        icon: 'devicon-css3-plain colored',         color: '#1572B6', bg: '#E5EFF9' },
    ],
  },
  {
    title: 'Backend',
    desc: 'FastAPI con Go y Python para la construcción de sistemas y arquitecturas backend robustas.',
    techs: [
      { name: 'Python',      icon: 'devicon-python-plain colored',       color: '#3776AB', bg: '#E5EEF9' },
      { name: 'FastAPI',     icon: 'devicon-fastapi-plain colored',      color: '#009688', bg: '#E0F5F3' },
      { name: 'Go',          icon: 'devicon-go-plain colored',           color: '#00ADD8', bg: '#E0F5FA' },
      { name: 'Node.js',     icon: 'devicon-nodejs-plain colored',       color: '#539E43', bg: '#EAF5E7' },
      { name: 'Rust',        icon: 'devicon-rust-plain',                 color: '#CE422B', bg: '#FDEEE9' },
    ],
  },
  {
    title: 'Bases de Datos',
    desc: 'Diseño de arquitecturas relacionales optimizando procesos mediante sistemas automatizados.',
    techs: [
      { name: 'MySQL',       icon: 'devicon-mysql-plain colored',        color: '#4479A1', bg: '#E5EEF9' },
      { name: 'PostgreSQL',  icon: 'devicon-postgresql-plain colored',   color: '#336791', bg: '#E5EEF9' },
    ],
  },
  {
    title: 'Herramientas',
    desc: 'Manejo de control de versiones y entornos de desarrollo para trabajo colaborativo.',
    techs: [
      { name: 'Git',         icon: 'devicon-git-plain colored',          color: '#F05032', bg: '#FDEEE9' },
      { name: 'GitHub',      icon: 'devicon-github-original',            color: '#333',    bg: '#F0F0F0' },
      { name: 'VS Code',     icon: 'devicon-vscode-plain colored',       color: '#007ACC', bg: '#E0EFF9' },
      { name: 'Bootstrap',   icon: 'devicon-bootstrap-plain colored',   color: '#7952B3', bg: '#EEE9F9' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías y herramientas que manejo</p>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.title}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.catTitle}>{cat.title}</h3>
                <p className={styles.catDesc}>{cat.desc}</p>
              </div>

              <div className={styles.chips}>
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={styles.chip}
                    style={{ '--chip-bg': tech.bg, '--chip-color': tech.color } as React.CSSProperties}
                  >
                    <i className={`${tech.icon} ${styles.chipIcon}`} aria-hidden="true" />
                    <span className={styles.chipLabel}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
