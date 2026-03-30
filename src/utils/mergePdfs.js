import { PDFDocument } from 'pdf-lib'

export async function mergePdfs(arrayBuffers) {
  const mergedDoc = await PDFDocument.create()

  for (const buffer of arrayBuffers) {
    const srcDoc = await PDFDocument.load(buffer, { ignoreEncryption: true })
    const pageIndices = srcDoc.getPageIndices()
    const copiedPages = await mergedDoc.copyPages(srcDoc, pageIndices)
    for (const page of copiedPages) {
      mergedDoc.addPage(page)
    }
  }

  return mergedDoc.save({ useObjectStreams: false })
}

export function downloadPdf(bytes, filename = 'merged.pdf') {
  const blob = new Blob([bytes], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
