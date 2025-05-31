import { useNavigate } from "react-router-dom";

export default function TopBar(props) {
  const { handleToggleModal } = props;
  const navigate = useNavigate();

  return (
    <div className="topBar">
      <p>C4 CLIMBING</p>
      <button onClick={handleToggleModal} className="difficultyButton">
        Difficulty
      </button>
      <button onClick={() => navigate("/create")} className="createButton">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
