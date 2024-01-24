import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowLeft from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const NotePage = () => {
  let { id } = useParams();

  let [note, setNote] = useState(null);

  let getNote = async () => {
    if (id === "new") return;
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  useEffect(() => {
    getNote();
  }, [id]); // Add id to the dependency array

  let updateNote = async () => {
    await fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let createNote = async () => {
    await fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    if (id !== "new" && !note.body) {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note) {
      createNote();
    } else {
      console.warn("No changes were made");
    }
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <div>
              <img src={ArrowLeft} alt="Back arrow" onClick={handleSubmit} />
              {id !== "new" ? (
                <button onClick={deleteNote} style={{ marginLeft: "350px" }}>
                  Delete
                </button>
              ) : (
                <button onClick={handleSubmit} style={{ marginLeft: "350px" }}>
                  Done
                </button>
              )}
            </div>
          </Link>
        </h3>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
      ;
    </div>
  );
};

export default NotePage;
