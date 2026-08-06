import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import styles from './Contact.module.css'

const CONTACTS = [
  {
    id: 'contact-gmail',
    icon: <Mail size={26} />,
    label: 'Correo Electrónico',
    desc: 'Envíame un mensaje por Gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=andrea.c.a.808@gmail.com',
    accentColor: 'var(--accent-cyan)',
    glowColor: 'rgba(0, 240, 255, 0.15)',
    borderColor: 'var(--accent-cyan)',
  },
  {
    id: 'contact-whatsapp',
    icon: <Phone size={26} />,
    label: 'WhatsApp Principal',
    desc: 'Escríbeme un mensaje directo',
    href: 'https://wa.me/584123880437',
    accentColor: '#00FF9D',
    glowColor: 'rgba(0, 255, 157, 0.15)',
    borderColor: '#00FF9D',
  },
  {
    id: 'contact-whatsapp2',
    icon: <Phone size={26} />,
    label: 'WhatsApp Alternativo',
    desc: 'Número de contacto secundario',
    href: 'https://wa.me/584127550945',
    accentColor: 'var(--accent-purple)',
    glowColor: 'rgba(157, 78, 221, 0.15)',
    borderColor: 'var(--accent-purple)',
  },
  {
    id: 'contact-github',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    desc: 'Ver mis repositorios y proyectos',
    href: 'https://github.com/AndreaCampos29',
    accentColor: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.15)',
    borderColor: '#A78BFA',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className={`section ${styles.contact}`}>
      <div className={`container ${styles.inner}`}>
        <div className="reveal">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            Disponible para pasantías, proyectos académicos y colaboraciones.
          </p>
        </div>

        <div className={styles.grid}>
          {CONTACTS.map((c, i) => (
            <a
              key={c.id}
              id={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} reveal`}
              style={{
                '--accent': c.accentColor,
                '--glow': c.glowColor,
                '--border': c.borderColor,
                transitionDelay: `${i * 0.1}s`,
              } as React.CSSProperties}
              aria-label={c.label}
            >
              <div className={styles.iconWrap}>
                {c.icon}
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardLabel}>{c.label}</p>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>

              <ExternalLink size={16} className={styles.arrow} />
            </a>
          ))}
        </div>

        <div className={`${styles.location} reveal`}>
          <MapPin size={16} />
          <span>Los Guayos, Edo. Carabobo, Venezuela</span>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerLine}>
            &copy; {new Date().getFullYear()} &bull; ANDREA S. CAMPOS A. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </footer>
      </div>
    </section>
  )
}