import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '120px 24px 80px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ width: '100%', maxWidth: 520 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p style={{ color: '#A3FF12', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 12 }}>
            SOBRE
          </p>
          <h1 style={{
            fontSize: 32,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.8px',
            marginBottom: 36,
          }}>
            Por que isso existe
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ color: '#A0A0A0', fontSize: 14, lineHeight: 1.75 }}>
              Eu precisava unir catálogos em PDF com frequência. Toda ferramenta que eu encontrava fazia uma coisa: comprimia os arquivos, pedia cadastro, ou mandava tudo pra um servidor de terceiros.
            </p>
            <p style={{ color: '#A0A0A0', fontSize: 14, lineHeight: 1.75 }}>
              Então criei o mergepdf. Ele faz uma coisa só, faz direito, e não toca nos seus arquivos.
            </p>

            <div style={{
              margin: '8px 0',
              padding: '20px 24px',
              borderRadius: 10,
              border: '1px solid #1A1A1A',
              background: '#111',
            }}>
              <p style={{ color: '#555', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 12 }}>
                COMO FUNCIONA POR BAIXO
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['pdf-lib', 'Faz o merge das páginas sem recomprimir o conteúdo'],
                  ['PDF.js', 'Renderiza o preview de cada arquivo no canvas do browser'],
                  ['@hello-pangea/dnd', 'Controla o drag-and-drop da lista'],
                ].map(([lib, desc]) => (
                  <div key={lib} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{
                      flexShrink: 0,
                      fontFamily: 'monospace',
                      fontSize: 11,
                      color: '#A3FF12',
                      background: 'rgba(163,255,18,0.08)',
                      padding: '2px 7px',
                      borderRadius: 4,
                      marginTop: 1,
                    }}>
                      {lib}
                    </span>
                    <span style={{ color: '#A0A0A0', fontSize: 13, lineHeight: 1.5 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ color: '#A0A0A0', fontSize: 14, lineHeight: 1.75 }}>
              Nenhum byte vai para a internet. O processamento é 100% local — o que significa que funciona offline também, depois que a página carregou.
            </p>

            <p style={{ color: '#A0A0A0', fontSize: 14, lineHeight: 1.75 }}>
              O código é open source e está no{' '}
              <a
                href="https://github.com/henriqqw/mergepdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#A3FF12', textDecoration: 'none' }}
              >
                GitHub
              </a>
              . Se quiser contribuir ou reportar algum problema, fique à vontade.
            </p>
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 12 }}>
            <Link
              to="/"
              style={{
                padding: '9px 18px',
                borderRadius: 8,
                border: '1px solid #A3FF12',
                color: '#A3FF12',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(163,255,18,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Usar a ferramenta
            </Link>
            <Link
              to="/how-to-use"
              style={{
                padding: '9px 18px',
                borderRadius: 8,
                border: '1px solid #2A2A2A',
                color: '#A0A0A0',
                fontSize: 13,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.15s, border-color 0.15s',
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
              Como usar
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
