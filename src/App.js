import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateNote from "./Components/CreateNote";

const App = ()=>  {
  const [Notes, setNotes] = useState([]);

  const addNote = (Note) => {
    setNotes(prevNotes => [...prevNotes, Note])
  }

  const deleteNote = (id) =>  {
    setNotes(prevNotes => {
      return (
        prevNotes.filter((Note, idx) => id !== idx)
      );
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {Notes.map((Entry, idx) => {
        return (
          <Note 
            key={idx}
            id={idx}
            onDelete={deleteNote}
            title={Entry.title}
            content={Entry.content}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
