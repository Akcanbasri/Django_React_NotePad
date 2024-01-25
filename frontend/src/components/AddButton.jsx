import { Link } from "react-router-dom";
import AddIcon from "../assets/add.svg";

const AddButton = () => {
  return (
    <div>
      <Link to="note/new">
        <div className="floating-button">
          <img src={AddIcon} alt="Add Icon" height="20px" width="20px" />
        </div>
      </Link>
    </div>
  );
};

export default AddButton;
