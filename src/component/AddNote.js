import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successful", "success")
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })

  }
  return (
    <div className='my-3'>
      <h1>Add a Note</h1>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input placeholder='Must be at least 5 characters' type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange}  minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea placeholder='Must be at least 5 characters' type="text" className="form-control" id="description" name="description" value={note.description} rows="3" onChange={onChange} minLength={5} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}  minLength={5} required/>
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-success" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default AddNote
