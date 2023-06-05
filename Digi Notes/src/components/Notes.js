import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../contexts/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import {useNavigate} from 'react-router-dom';

const Notes = (props) => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])
  
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id:"", etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});  
  }
  
  const handleClick = (e) => {
    // console.log("Updating the Note.....",note);
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully","success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  };
  
  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container my-3">
                <h1> Add a Note</h1>
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <textarea className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag (Optional)</label>
                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5 } onClick= {handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-2">
        {notes.length===0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
        })}
      </div>
    </>
  );
};

export default Notes;