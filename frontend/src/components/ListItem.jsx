import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

let getTime = (note) => {
  let time = new Date(note.updated_at);
  let day = time.getDate().toString().padStart(2, '0');
  let month = (time.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  let year = time.getFullYear().toString();

  return `${day}.${month}.${year}`;
};

let getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

let getContent = (note) => {
  // Get content without title
  let content = note.body.replaceAll("\n", " ");
  content = content.replaceAll(getTitle(note), "");
  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  }
  return content;
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item" >
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span>{getContent(note)}</p>
            </div>
    </Link>
  );
};

ListItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default ListItem;