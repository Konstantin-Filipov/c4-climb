import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const grades = [
  "L",
  "6A",
  "6A+",
  "6B",
  "6B+",
  "6C",
  "6C+",
  "7A",
  "7A+",
  "7B",
  "7B+",
  "7C",
  "7C+",
  "8A",
  "8A+",
  "8B",
  "8B+",
  "8C",
  "8C+",
];

function valueLabelFormat(value) {
  // If slider runs 1 → 20, subtract 1 to get 0-based index:
  const idx = value - 1;

  // Fallback to the raw number if out of range
  if (idx < 0 || idx >= grades.length) {
    return String(value);
  }

  return grades[idx];
}

function calculateValue(value) {
  return value;
}

export default function BottomBar(props) {
  const { handleToggleModal, handleOkDifficulty } = props;

  const [value, setValue] = React.useState("");

  function handleClickOk() {
    handleOkDifficulty(valueLabelFormat(value));
    handleToggleModal();
  }

  const handleDifficultyChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottomBar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="bottomBarContents">
        <Box sx={{ width: 250 }}>
          <Typography id="non-linear-slider" gutterBottom>
            Grade: {valueLabelFormat(value)}
          </Typography>
          <button className="buttonOk" onClick={handleClickOk}>
            Ok
          </button>
          <Slider
            value={value}
            min={1}
            step={1}
            max={grades.length}
            scale={calculateValue}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleDifficultyChange}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </div>
  );
}
