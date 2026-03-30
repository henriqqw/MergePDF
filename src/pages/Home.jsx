import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { usePdfFiles } from '../hooks/usePdfFiles.js'
import { mergePdfs, downloadPdf } from '../utils/mergePdfs.js'
import DropZone from '../components/DropZone.jsx'
import PdfList from '../components/PdfList.jsx'
import MergeButton from '../components/MergeButton.jsx'

export default function Home() {
  const { files, isProcessing, setIsProcessing, addFiles, removeFile, reorderFiles } = usePdfFiles()
  const toolRef = useRef(null)

  async function handleMerge() {
    if (files.length < 2 || isProcessing) return
    setIsProcessing(true)
    try {
      const buffers = files.map((f) => f.arrayBuffer)
      const merged = await mergePdfs(buffers)
      downloadPdf(merged, 'merged.pdf')
    } catch (err) {
      console.error('Merge falhou:', err)
      alert('Não foi possível unir os PDFs. Um dos arquivos pode estar corrompido ou protegido por senha.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(163,255,18,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ position: 'relative', maxWidth: 580 }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '5px 12px',
            borderRadius: 40,
            border: '1px solid rgba(163,255,18,0.2)',
            background: 'rgba(163,255,18,0.05)',
            marginBottom: 28,
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#A3FF12',
              boxShadow: '0 0 6px #A3FF12',
              flexShrink: 0,
            }} />
            <span style={{ color: '#A3FF12', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em' }}>
              TUDO NO SEU BROWSER
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 7vw, 60px)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.08,
            letterSpacing: '-1.5px',
            marginBottom: 20,
          }}>
            Una PDFs.<br />
            <span style={{ color: '#A3FF12' }}>Sem enrolação.</span>
          </h1>

          <p style={{
            color: '#A0A0A0',
            fontSize: 16,
            lineHeight: 1.65,
            marginBottom: 40,
            maxWidth: 420,
            margin: '0 auto 40px',
          }}>
            Arraste, ordene e baixe. Nenhum arquivo sai do seu computador — tudo processa direto no browser, sem servidor, sem cadastro.
          </p>

          <button
            onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              borderRadius: 40,
              border: '1px solid #2A2A2A',
              background: '#111',
              color: '#A0A0A0',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
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
            Começar <ArrowDown size={14} strokeWidth={2} />
          </button>
        </motion.div>
      </section>

      {/* Tool */}
      <section
        ref={toolRef}
        style={{
          padding: '0 16px 120px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', maxWidth: 560 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DropZone onFilesAdded={addFiles} disabled={isProcessing} />
            <PdfList files={files} onRemove={removeFile} onReorder={reorderFiles} />
            <MergeButton fileCount={files.length} isProcessing={isProcessing} onMerge={handleMerge} />
          </div>
        </motion.div>
      </section>
    </>
  )
}
