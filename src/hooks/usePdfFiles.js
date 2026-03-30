import { useState, useCallback } from 'react'
import { renderThumbnail } from '../utils/renderThumbnail.js'

export function usePdfFiles() {
  const [files, setFiles] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)

  const addFiles = useCallback(async (fileList) => {
    const pdfs = Array.from(fileList).filter(
      (f) => f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')
    )
    if (pdfs.length === 0) return

    const placeholders = pdfs.map((f) => ({
      id: crypto.randomUUID(),
      name: f.name,
      size: f.size,
      arrayBuffer: null,
      thumbnail: null,
      thumbnailError: false,
    }))

    setFiles((prev) => [...prev, ...placeholders])

    const results = await Promise.allSettled(
      pdfs.map(async (file, i) => {
        const arrayBuffer = await file.arrayBuffer()
        let thumbnail = null
        let thumbnailError = false
        try {
          thumbnail = await renderThumbnail(arrayBuffer)
        } catch {
          thumbnailError = true
        }
        return { id: placeholders[i].id, arrayBuffer, thumbnail, thumbnailError }
      })
    )

    setFiles((prev) =>
      prev.map((entry) => {
        const result = results.find(
          (r) => r.status === 'fulfilled' && r.value.id === entry.id
        )
        if (!result) return entry
        return { ...entry, ...result.value }
      })
    )
  }, [])

  const removeFile = useCallback((id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }, [])

  const reorderFiles = useCallback((sourceIndex, destinationIndex) => {
    setFiles((prev) => {
      const next = Array.from(prev)
      const [removed] = next.splice(sourceIndex, 1)
      next.splice(destinationIndex, 0, removed)
      return next
    })
  }, [])

  return { files, isProcessing, setIsProcessing, addFiles, removeFile, reorderFiles }
}
