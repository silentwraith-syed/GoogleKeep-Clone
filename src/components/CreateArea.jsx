import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


const getLocalNotes = () =>{
  let list = localStorage.getItem('lists');

  if(list){
    return JSON.parse(localStorage.getItem('lists')); 
  }
  else {
    return []
  }
}

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const[isExpanded, setIsExpanded] = useState(false);

  function expand(){
    setIsExpanded(true);
    console.log("I GOT CLICKED !")

  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


useEffect(()=>{
localStorage.setItem('lists', JSON.stringify(note))
}, [note]);

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" style={{ position: "relative",
  width: "480px",
  margin: "30px auto 20px auto",
  background: "#fff",
  padding: "15px",
  borderRadius: "7px",
  boxShadow: "0 1px 5px rgb(138, 137, 137)",}}>

       {isExpanded ?  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none",}}
          
        /> : null}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          style={{width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none",}}
          placeholder="Take a note..."
          rows= {isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded ? true : false}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
