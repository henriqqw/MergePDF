import { X, GripVertical, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PdfCard({ file, index, onRemove, dragHandleProps, isDragging }) {
  const sizeKB = (file.size / 1024).toFixed(1)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.18 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: isDragging ? '#222' : '#1A1A1A',
        border: `1px solid ${isDragging ? '#A3FF12' : '#2A2A2A'}`,
        borderRadius: 10,
        padding: '10px 14px',
        boxShadow: isDragging ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
    >
      {/* Grip */}
      <span
        {...dragHandleProps}
        style={{ color: '#555', cursor: 'grab', display: 'flex', alignItems: 'center', flexShrink: 0 }}
      >
        <GripVertical size={16} strokeWidth={1.5} />
      </span>

      {/* Order badge */}
      <span style={{
        minWidth: 22,
        height: 22,
        borderRadius: 6,
        background: '#0A0A0A',
        border: '1px solid #2A2A2A',
        color: '#A3FF12',
        fontSize: 11,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {index + 1}
      </span>

      {/* Thumbnail */}
      <div style={{
        width: 44,
        height: 56,
        borderRadius: 6,
        overflow: 'hidden',
        background: '#111',
        border: '1px solid #2A2A2A',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {file.thumbnail ? (
          <img
            src={file.thumbnail}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : file.thumbnailError ? (
          <FileText size={18} color="#555" strokeWidth={1.5} />
        ) : (
          <div style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: '2px solid #2A2A2A',
            borderTopColor: '#A3FF12',
            animation: 'spin 0.8s linear infinite',
          }} />
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <p style={{
          color: '#FFFFFF',
          fontWeight: 500,
          fontSize: 13,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {file.name}
        </p>
        <p style={{ color: '#555', fontSize: 11, marginTop: 2 }}>{sizeKB} KB</p>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(file.id)}
        aria-label={`Remover ${file.name}`}
        style={{
          color: '#555',
          display: 'flex',
          alignItems: 'center',
          padding: 4,
          borderRadius: 6,
          transition: 'color 0.15s',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#FF4D4D')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
      >
        <X size={15} strokeWidth={2} />
      </button>
    </motion.div>
  )
}
