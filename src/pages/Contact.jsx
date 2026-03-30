import { motion } from 'framer-motion'
import { Github, Globe, ExternalLink } from 'lucide-react'

const links = [
  {
    icon: <Github size={18} strokeWidth={1.5} />,
    label: '@henriqqw',
    sublabel: 'GitHub',
    href: 'https://github.com/henriqqw',
  },
  {
    icon: <Globe size={18} strokeWidth={1.5} />,
    label: 'caosdev.vercel.app',
    sublabel: 'Portfolio',
    href: 'https://caosdev.vercel.app/',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    label: 'henriqqw/mergepdf',
    sublabel: 'Repositório do projeto',
    href: 'https://github.com/henriqqw/mergepdf',
  },
]

export default function Contact() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '120px 24px 80px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p style={{ color: '#A3FF12', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 12 }}>
            CONTATO
          </p>
          <h1 style={{
            fontSize: 32,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.8px',
            marginBottom: 12,
          }}>
            Me encontra aqui
          </h1>
          <p style={{ color: '#A0A0A0', fontSize: 14, lineHeight: 1.65, marginBottom: 48 }}>
            Se quiser conversar sobre o projeto, reportar um problema ou só dar um oi — esses são os melhores caminhos.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 20px',
                  borderRadius: 12,
                  border: '1px solid #1A1A1A',
                  background: '#111',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s, background 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2A2A2A'
                  e.currentTarget.style.background = '#161616'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1A1A1A'
                  e.currentTarget.style.background = '#111'
                }}
              >
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: '1px solid #2A2A2A',
                  background: '#1A1A1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A3FF12',
                  flexShrink: 0,
                }}>
                  {link.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>{link.label}</p>
                  <p style={{ color: '#555', fontSize: 12, marginTop: 2 }}>{link.sublabel}</p>
                </div>

                <ExternalLink size={14} color="#555" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
