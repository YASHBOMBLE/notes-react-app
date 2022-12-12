import { useState, useEffect } from 'react';
import React from 'react'
import "./Home.css";
import Navbar from "../../components/Home/Navbar";
import Note from "../../components/Note/Note";
function Home() {
    const [notes, setNotes] = useState([
        {
            title: "Note 1",
            content: "Content of note1"
        },
        {
            title: "Note 2",
            content: "Content of note1"
        },
        {
            title: "Note 3",
            content: "Content of note1"
        },
        {
            title: "Note 4",
            content: "Content of note1"
        }
    ])
    return (
        <>
            <Navbar />
            <div className="row">
                <div className='col-md-6'>

                    <div className='show-notes-container'>
                        <span className='app-title'>Notes App</span>
                        <div className='all-notes-container'>
                            <div className='note'>
  {      notes.map((note,index)=>{
            return (
                        <Note title={note.title} content={note.content}/>
                                )
        })}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
Add note
                </div>
            </div>

        </>
    )
}

export default Home
