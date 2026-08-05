import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#educacion', label: 'Educación' },
  { href: '#aptitudes', label: 'Aptitudes' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoA}>AC</span>
          <span className={styles.logoText}>Andrea Campos</span>
        </a>

        
        <nav className={styles.links}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.link} ${activeSection === l.href ? styles.active : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        
        <button
          className={styles.toggle}
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
          id="nav-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      
      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}