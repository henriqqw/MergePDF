import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { AnimatePresence } from 'framer-motion'
import PdfCard from './PdfCard.jsx'

export default function PdfList({ files, onRemove, onReorder }) {
  function handleDragEnd(result) {
    if (!result.destination) return
    if (result.source.index === result.destination.index) return
    onReorder(result.source.index, result.destination.index)
  }

  if (files.length === 0) return null

  return (
    <div style={{ marginTop: 8 }}>
      <p style={{ color: '#555', fontSize: 12, marginBottom: 10 }}>
        {files.length} arquivo{files.length !== 1 ? 's' : ''} — arraste para reordenar
      </p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="pdf-list">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <AnimatePresence>
                {files.map((file, index) => (
                  <Draggable key={file.id} draggableId={file.id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <PdfCard
                          file={file}
                          index={index}
                          onRemove={onRemove}
                          dragHandleProps={provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
              </AnimatePresence>
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
