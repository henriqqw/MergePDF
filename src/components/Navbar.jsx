import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/how-to-use', label: 'Como Usar' },
  { to: '/about', label: 'Sobre' },
  { to: '/contact', label: 'Contato' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 100,
        padding: '0 16px',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '8px 10px 8px 14px',
          background: 'rgba(10, 10, 10, 0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 50,
          boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 8, textDecoration: 'none' }}
        >
          <Logo size={24} />
          <span style={{ color: '#fff', fontWeight: 600, fontSize: 13, letterSpacing: '-0.2px' }}>
            merge<span style={{ color: '#A3FF12' }}>pdf</span>
          </span>
        </NavLink>

        {/* Nav links */}
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            style={({ isActive }) => ({
              padding: '6px 12px',
              borderRadius: 40,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              color: isActive ? '#A3FF12' : '#A0A0A0',
              background: isActive ? 'rgba(163,255,18,0.08)' : 'transparent',
              transition: 'color 0.15s, background 0.15s',
            })}
            onMouseEnter={(e) => {
              if (!e.currentTarget.dataset.active) {
                e.currentTarget.style.color = '#fff'
              }
            }}
            onMouseLeave={(e) => {
              const isActive = e.currentTarget.style.color === 'rgb(163, 255, 18)'
              if (!isActive) e.currentTarget.style.color = '#A0A0A0'
            }}
          >
            {label}
          </NavLink>
        ))}

        {/* GitHub */}
        <a
          href="https://github.com/henriqqw/mergepdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '6px 10px',
            borderRadius: 40,
            color: '#A0A0A0',
            marginLeft: 4,
            transition: 'color 0.15s',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#A0A0A0')}
          aria-label="GitHub"
        >
          <Github size={15} strokeWidth={1.8} />
        </a>
      </nav>
    </motion.header>
  )
}
