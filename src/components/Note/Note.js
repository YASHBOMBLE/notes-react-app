
import React from 'react'
import swal from 'sweetalert'
import "./Note.css"
function Note({title, content,noteIndex}) {
  function deleteNote(){
    
    const notes=localStorage.getItem("notes")
    if(notes)
    {
      const temp=JSON.parse(notes);
      temp.splice(noteIndex,1)
      localStorage.setItem("notes",JSON.stringify(temp));
    }
    swal({
      title:"Deleted",
      text : "Your Note has been deleted permanently.",
      icon:"Success"
    })
    window.location.reload();
  }
  return (
    <div>
      <div className='note-container' >
        <h6 className='note-title'>{title}</h6>
        <p className='note-content'>{content}</p>
        <span className='delete-btn' onClick={deleteNote}>❌</span>
      </div>
    </div>
  )
}

export default Note
