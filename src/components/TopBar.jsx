export default function TopBar(props) {
  const { handleToggleModal } = props;

  return (
    <div className="topBar">
      <p>C4 CLIMBING</p>
      <button onClick={handleToggleModal} className="difficultyButton">
        Difficulty
      </button>
      <button>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
