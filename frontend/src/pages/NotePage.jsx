import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const NotePage = () => {
  let { id } = useParams();

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  });

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };
  return <p>{note?.body}</p>;
};

export default NotePage;
