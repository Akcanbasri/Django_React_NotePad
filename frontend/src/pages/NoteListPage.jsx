import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const NoteListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes/")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <ol>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </ol>
    </div>
  );
};

export default NoteListPage;
