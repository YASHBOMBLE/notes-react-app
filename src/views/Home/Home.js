import { useState, useEffect } from 'react';
import React from 'react'
import swal from 'sweetalert';
import "./Home.css";


import Note from "../../components/Note/Note";
function Home() {
    const [notes, setNotes] = useState([
        {
            title: "Title 1",
            content: "content 1"
        }
    ])

    useEffect(() => {
        const notes = localStorage.getItem("notes")
        if (notes) {
            setNotes(JSON.parse(notes))
        }
    }, [])
    useEffect(() => {
        if (notes.length > 1) {
            localStorage.setItem("notes", JSON.stringify(notes))
        }
    }, [notes])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    function addNote() {
        const newNote = {
            title: title,
            content: content
        }
        //const temp=notes;
        //temp.push(newNote)
        //setNotes(temp)
        if (title === "" || content === "") {
            swal({
                title: "Error",
                text: "please fill all field",
                icon: "error"
            })
            return;
        }
        else {

        }
        setNotes([...notes, newNote])
        swal({
            title: "Note added",
            text: "Notes added successfully",
            icon: "success"
        })
        setTitle("")
        setContent("")
    }
    return (
        <>

            <div className="row">
                <span className='app-title'>Notes App</span>
                <div className='col-md-6'>

                    <div className='show-notes-container'>

                        <div className='all-notes-container'>
                            <div className='note'>
                                {notes.map((note, index) => {
                                    return (
                                        <Note title={note.title} content={note.content} noteIndex={index} />
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='note-editor-container'>
                        <h2 className='add-note-title'>Add Note</h2><br />

                        <form>
                            <div>
                                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control mt-4" placeholder="Note Title" />
                            </div>
                            <div>
                                <input type="text" onChange={(e) => { setContent(e.target.value) }} value={content} className="form-control mt-4" placeholder="Note Description" />
                            </div>
                            <div className='addnote-btn'>
                                <button type='button' onClick={addNote} className='btn btn-primary mt-4'>Add Note</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home
