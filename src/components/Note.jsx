import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAutocomplete } from "@mui/material";

function Note(props) {
  const [editMode, setEditMode] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content
  });

  function handleEdit() {
    setEditMode(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function saveEdit(event) {
    // Pass the edited note to the parent component to handle saving
    props.onEdit(props.id, editedNote);
    const { name, value } = event.target;
    setEditedNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
    setEditMode(false); // Exit edit mode after saving
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{ background: "#fff",
      borderRadius: "7px",
      boxShadow: "0 2px 5px #ccc",
      padding: "10px",
      width: "280px",
      margin: "16px",
      float: "left",}}>

      {editMode ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedNote.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={editedNote.content}
            onChange={handleChange}
          />
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h1 style={{ fontSize: "1.1em", marginBottom: "6px" }}>{props.title}</h1>
          <p style={{ fontSize: "1.1em", marginBottom: "10px", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{props.content}</p>
          <button style={{ position: "relative", float: "right", marginRight: "10px", color: "#f5ba13", border: "none", width: "36px", height: "36px", cursor: "pointer", outline: "none", background: "transparent" }} onClick={handleDelete}><DeleteIcon /></button>
          <button style={{ position: "relative", float: "right", marginRight: "10px", color: "#f5ba13", border: "none", width: "36px", height: "36px", cursor: "pointer", outline: "none", background: "transparent" }} onClick={handleEdit}><EditIcon /></button>
        </div>
      )}
    </div>
  );
}

export default Note;
