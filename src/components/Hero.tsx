import { Mail, Phone, ChevronDown, MapPin } from 'lucide-react'
import profileImg from '../assets/profile.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Floating blobs de fondo */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.blob3} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        
        {/* Texto principal */}
        <div className={styles.textContent}>
          <h1 className={styles.name}>
            Andrea S.<br />
            <span className={styles.lastName}>Campos A.</span>
          </h1>
          <p className={styles.role}>
            Estudiante de Ingeniería en Computación
          </p>
          
          <div className={styles.tags}>
            <span className={styles.tag} style={{ background: 'var(--celeste-light)', color: 'var(--celeste-dark)' }}>Desarrollo Web</span>
            <span className={styles.tag} style={{ background: 'var(--rosa-light)', color: '#D97895' }}>UI / UX</span>
            <span className={styles.tag} style={{ background: 'var(--lila-light)', color: 'var(--lila-dark)' }}>Fullstack</span>
          </div>

          <div className={styles.location}>
            <MapPin size={16} />
            <span>Los Guayos, Edo. Carabobo · C.I.: 31.856.233</span>
          </div>

          {/* Botones de contacto */}
          <div className={styles.cta}>
            <a
              id="hero-gmail-btn"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=andrea.c.a.808@gmail.com"
              className={`${styles.ctaBtn} ${styles.ctaMail}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar correo a Andrea"
            >
              <Mail size={18} />
              Gmail
            </a>
            <a
              id="hero-whatsapp-btn"
              href="https://wa.me/584123880437"
              className={`${styles.ctaBtn} ${styles.ctaWa}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <Phone size={18} />
              WhatsApp
            </a>
            <a
              id="hero-github-btn"
              href="https://github.com/AndreaCampos29"
              className={`${styles.ctaBtn} ${styles.ctaGh}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Imagen del Perfil */}
        <div className={styles.imageWrap}>
          <div className={styles.imageRing1} aria-hidden="true" />
          <div className={styles.imageRing2} aria-hidden="true" />
          <img 
            src={profileImg} 
            alt="Andrea S. Campos A." 
            className={styles.profileImage}
          />
        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#sobre-mi" className={styles.scrollIndicator} aria-label="Bajar a Sobre mí">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
