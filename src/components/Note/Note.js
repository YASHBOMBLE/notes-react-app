import React from 'react'

function Note({title, content}) {
  return (
    <div>
      <div className='note-container' >
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Note
