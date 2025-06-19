import React, { useState, useImperativeHandle, forwardRef } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

const SliderGrade = forwardRef((props, ref) => {
  const [value, setValue] = React.useState("");

  useImperativeHandle(ref, () => ({
    getGrade: () => valueLabelFormat(value),
  }));

  const handleDifficultyChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Grade: {valueLabelFormat(value)}
      </Typography>

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
  );
});

export default SliderGrade;
