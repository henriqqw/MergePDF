import { motion } from 'framer-motion'
import { Download, Loader2 } from 'lucide-react'

export default function MergeButton({ fileCount, isProcessing, onMerge }) {
  const canMerge = fileCount >= 2 && !isProcessing

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 4 }}>
      <motion.button
        whileHover={canMerge ? { scale: 1.02 } : {}}
        whileTap={canMerge ? { scale: 0.98 } : {}}
        onClick={onMerge}
        disabled={!canMerge}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '12px 28px',
          borderRadius: 10,
          border: `1.5px solid ${canMerge ? '#A3FF12' : '#2A2A2A'}`,
          background: 'transparent',
          color: canMerge ? '#A3FF12' : '#555',
          fontSize: 14,
          fontWeight: 600,
          transition: 'border-color 0.15s, color 0.15s',
          width: '100%',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          if (canMerge) e.currentTarget.style.background = 'rgba(163,255,18,0.06)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
        }}
      >
        {isProcessing ? (
          <>
            <Loader2 size={16} strokeWidth={2} style={{ animation: 'spin 0.8s linear infinite' }} />
            Unindo PDFs...
          </>
        ) : (
          <>
            <Download size={16} strokeWidth={2} />
            {fileCount >= 2
              ? `Unir ${fileCount} PDFs`
              : 'Unir PDFs'}
          </>
        )}
      </motion.button>

      {fileCount < 2 && !isProcessing && (
        <p style={{ color: '#555', fontSize: 12 }}>
          Adicione pelo menos 2 arquivos para continuar
        </p>
      )}
    </div>
  )
}
