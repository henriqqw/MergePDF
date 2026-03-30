import { motion } from 'framer-motion'
import { Upload, GripVertical, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    icon: <Upload size={20} strokeWidth={1.5} color="#A3FF12" />,
    title: 'Adicione os PDFs',
    description:
      'Arraste os arquivos para a área ou clique para abrir o seletor. Você pode adicionar vários de uma vez. Enquanto carregam, já aparece um preview da primeira página de cada um.',
  },
  {
    number: '02',
    icon: <GripVertical size={20} strokeWidth={1.5} color="#A3FF12" />,
    title: 'Defina a ordem',
    description:
      'Arraste os cards para colocar na sequência que você quer. O número no canto esquerdo mostra a posição final de cada arquivo. O que estiver no topo vira a primeira página do resultado.',
  },
  {
    number: '03',
    icon: <Download size={20} strokeWidth={1.5} color="#A3FF12" />,
    title: 'Baixe o resultado',
    description:
      'Clique em "Unir PDFs". O processamento acontece direto no browser e o arquivo aparece no seu computador em segundos. Sem compressão, sem perda de qualidade — as páginas são copiadas exatamente como estão.',
  },
]

export default function HowToUse() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '120px 24px 80px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ width: '100%', maxWidth: 560 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p style={{ color: '#A3FF12', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 12 }}>
            GUIA
          </p>
          <h1 style={{
            fontSize: 32,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.8px',
            marginBottom: 12,
          }}>
            Como usar
          </h1>
          <p style={{ color: '#A0A0A0', fontSize: 14, lineHeight: 1.65, marginBottom: 56 }}>
            São três passos. Não tem segredo.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.07 }}
                style={{
                  display: 'flex',
                  gap: 20,
                  padding: '24px 0',
                  borderBottom: i < steps.length - 1 ? '1px solid #1A1A1A' : 'none',
                }}
              >
                {/* Step number */}
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <span style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: '#111',
                    border: '1px solid #2A2A2A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {step.icon}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#555', fontSize: 11, fontWeight: 600 }}>{step.number}</span>
                    <h2 style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{step.title}</h2>
                  </div>
                  <p style={{ color: '#A0A0A0', fontSize: 13, lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 48,
            padding: 24,
            borderRadius: 12,
            border: '1px solid #1A1A1A',
            background: '#111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}>
            <p style={{ color: '#A0A0A0', fontSize: 13 }}>Pronto pra testar?</p>
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
              Ir para a ferramenta
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
