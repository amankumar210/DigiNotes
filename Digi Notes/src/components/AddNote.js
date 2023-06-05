import React, { useContext, useState } from "react";
import noteContext from "../contexts/notes/noteContext";

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault(); //Prevents page from reloading
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully","success")
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <div>
            <div className="container my-3">
                <h1> Add a Note</h1>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}  value={note.title}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea className="form-control" rows="10" id="description" name="description" onChange={onChange} value={note.description}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag (Optional)</label>
                        <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag}/>
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary"> Add Note </button>
                </form>
            </div>
        </div>
    );
};

export default AddNote;