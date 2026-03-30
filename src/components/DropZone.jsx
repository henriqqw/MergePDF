import { useRef, useState } from 'react'
import { Upload } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DropZone({ onFilesAdded, disabled }) {
  const inputRef = useRef(null)
  const [isDragOver, setIsDragOver] = useState(false)

  function handleDrop(e) {
    e.preventDefault()
    setIsDragOver(false)
    if (disabled) return
    onFilesAdded(e.dataTransfer.files)
  }

  function handleDragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    setIsDragOver(true)
  }

  function handleDragLeave() {
    setIsDragOver(false)
  }

  function handleChange(e) {
    onFilesAdded(e.target.files)
    e.target.value = ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      onClick={() => !disabled && inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      role="button"
      aria-label="Arraste PDFs aqui ou clique para selecionar"
      style={{
        border: `1.5px dashed ${isDragOver ? '#A3FF12' : '#2A2A2A'}`,
        borderRadius: 12,
        padding: '48px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        cursor: disabled ? 'not-allowed' : 'pointer',
        background: isDragOver ? 'rgba(163,255,18,0.04)' : '#111111',
        transition: 'border-color 0.15s, background 0.15s',
        userSelect: 'none',
      }}
    >
      <Upload size={28} color={isDragOver ? '#A3FF12' : '#A0A0A0'} strokeWidth={1.5} />
      <p style={{ color: isDragOver ? '#A3FF12' : '#A0A0A0', fontWeight: 500, fontSize: 14 }}>
        Arraste PDFs aqui ou <span style={{ color: '#A3FF12' }}>clique para selecionar</span>
      </p>
      <p style={{ color: '#555', fontSize: 12 }}>Você pode adicionar múltiplos arquivos de uma vez</p>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        multiple
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </motion.div>
  )
}
