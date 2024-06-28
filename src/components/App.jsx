import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([]);

function addNote(newNote){
setNotes(prevNotes=>{
  return[...prevNotes, newNote]
});
}

function editNote(id, updatedNote) {
  setNotes((prevNotes) =>
    prevNotes.map((noteItem, index) => (index === id ? updatedNote : noteItem))
  );
}

function deleteNote(id){
setNotes(prevNotes=>{
   return prevNotes.filter((noteItem, index)=>{
return index!==id;
  });
})
}



  return (
    <div style={{ background: "#eee",
                     height:"100vh",
                     width:"100%",
      backgroundImage: "url('https://www.transparenttextures.com/patterns/gplay.png')",
        padding: "0 16px",
      }}>
      <Header />
      <CreateArea onAdd={addNote}/> 
      {notes.map((noteItem, index)=>{
         return(<Note key={index} id={index} title={noteItem.title} content={noteItem.content} 
          onEdit={(updatedNote) => editNote(index, updatedNote)} 
           onDelete ={deleteNote}/>)
      })}
    
      <Footer />
    </div>
  );
}

export default App;
