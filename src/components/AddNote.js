import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})

  const handleClick = (e)=>{
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title: "", description: "", tag: ""})
      props.showAlert("Added Successfully", "success")


  }

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form onSubmit={handleClick} className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              minLength={5}
              required
              value={note.title}
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              minLength={5}
              required
              className="form-control"
              value={note.description}
              id="desc"
              name="description"
              onChange={onChange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              value={note.tag}
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;
