import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Main from "./components/Main";
import BottomBar from "./components/BottomBar";

function App() {
  // const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  function handleToggleModal() {
    setShowModal(!showModal);
  }
  function handleOkDifficulty(value) {
    setDifficulty(value);
    setShowModal(false);
  }

  // useEffect(() => {
  //   fetch("https://api.example.com/data")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     console.log("Data fetched successfully:", data);
  //   }
  // }, [data]);

  // Log the difficulty whenever it changes

  return (
    <div className="app-container">
      <TopBar handleToggleModal={handleToggleModal} />
      <Main difficulty={difficulty} />
      {showModal && (
        <BottomBar
          handleOkDifficulty={handleOkDifficulty}
          handleToggleModal={handleToggleModal}
        />
      )}
    </div>
  );
}

export default App;
