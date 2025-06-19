import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import SliderGrade from "./SliderGrade";

export default function CreatePage() {
  const navigate = useNavigate();
  const sliderRef = useRef();
  const [newClimbGrade, setNewClimbGrade] = React.useState("");

  function handleBack() {
    navigate(-1); // ⬅️ Go back to the previous page
  }
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleOk() {
    const selectedGrade = sliderRef.current.getGrade();
    setNewClimbGrade(selectedGrade);
  }

  useEffect(() => {
    console.log("newClimbGrade updated:", newClimbGrade);
  }, [newClimbGrade]);

  return (
    <div className="newClimbPanel" style={{ padding: "2rem" }}>
      <button onClick={handleBack} style={{ marginBottom: "1rem" }}>
        ← Back
      </button>
      <h2>Create New boulder</h2>
      <div>Upload file here</div>
      <input type="file" onChange={handleChange} />
      {file && <img src={file} alt="Uploaded preview" />}
      {/* info */}
      <div className="newClimbPanelInfo">
        <p>
          Name:
          <input type="text" placeholder="Enter boulder name" />
        </p>
      </div>
      {/* difficulty */}
      <div className="newClimbPanelDifficulty">
        <SliderGrade ref={sliderRef} />
        <button onClick={handleOk}>Ok</button>
      </div>
      {/* features - DO NOT TOUCH - TO BE UPDATED!*/}
      {/* <div className="newClimbPanelDifficulty">
        <p>
          a difficulty pannel here with some grade buttons
        </p>
      </div> */}
    </div>
  );
}
