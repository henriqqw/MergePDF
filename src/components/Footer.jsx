import { Link } from 'react-router-dom'
import { Github, Globe, Heart } from 'lucide-react'
import Logo from './Logo.jsx'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/how-to-use', label: 'Como Usar' },
  { to: '/about', label: 'Sobre' },
  { to: '/contact', label: 'Contato' },
]

const socialLinks = [
  {
    href: 'https://github.com/henriqqw',
    label: 'GitHub',
    icon: <Github size={15} strokeWidth={1.8} />,
  },
  {
    href: 'https://github.com/henriqqw/mergepdf',
    label: 'Repositório',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    href: 'https://caosdev.vercel.app/',
    label: 'Portfolio',
    icon: <Globe size={15} strokeWidth={1.8} />,
  },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1A1A1A',
      background: '#0A0A0A',
      padding: '48px 24px 0',
    }}>
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 48,
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Logo size={24} />
            <span style={{ color: '#fff', fontWeight: 600, fontSize: 14, letterSpacing: '-0.2px' }}>
              merge<span style={{ color: '#A3FF12' }}>pdf</span>
            </span>
          </div>
          <p style={{ color: '#555', fontSize: 12, lineHeight: 1.6, maxWidth: 200 }}>
            Projeto open source — MIT License
          </p>
        </div>

        {/* Pages */}
        <div>
          <p style={{ color: '#555', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 16 }}>
            PÁGINAS
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {pages.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  style={{ color: '#A0A0A0', fontSize: 13, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A0A0A0')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <p style={{ color: '#555', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 16 }}>
            LINKS
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  border: '1px solid #2A2A2A',
                  color: '#A0A0A0',
                  background: '#111',
                  transition: 'color 0.15s, border-color 0.15s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = '#3A3A3A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A0A0A0'
                  e.currentTarget.style.borderColor = '#2A2A2A'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 960,
        margin: '32px auto 0',
        borderTop: '1px solid #1A1A1A',
        padding: '16px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <p style={{ color: '#555', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
          Feito com{' '}
          <Heart size={11} fill="#A3FF12" color="#A3FF12" style={{ margin: '0 2px' }} />
          {' '}por{' '}
          <a
            href="https://caosdev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#A3FF12', textDecoration: 'none' }}
          >
            henriqqw
          </a>
        </p>
        <p style={{ color: '#555', fontSize: 12 }}>
          Nenhum arquivo é enviado para servidores. Tudo roda no seu browser.
        </p>
      </div>
    </footer>
  )
}
