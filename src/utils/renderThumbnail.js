import * as pdfjsLib from 'pdfjs-dist'

export async function renderThumbnail(arrayBuffer, thumbnailWidth = 160) {
  // Copia o buffer antes de passar pro worker — pdfjs transfere o ArrayBuffer
  // via postMessage, o que neutra o original e quebra o merge depois.
  const copy = arrayBuffer.slice(0)
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(copy) })
  const pdfDoc = await loadingTask.promise

  const page = await pdfDoc.getPage(1)
  const naturalViewport = page.getViewport({ scale: 1.0 })
  const scale = thumbnailWidth / naturalViewport.width
  const viewport = page.getViewport({ scale })

  const canvas = document.createElement('canvas')
  canvas.width = Math.floor(viewport.width)
  canvas.height = Math.floor(viewport.height)

  const ctx = canvas.getContext('2d')
  await page.render({ canvasContext: ctx, viewport }).promise

  page.cleanup()
  await pdfDoc.destroy()

  return canvas.toDataURL('image/jpeg', 0.85)
}
