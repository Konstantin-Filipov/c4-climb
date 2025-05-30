import Card from "./Card";
import React, { useState, useEffect } from "react";

export default function Main(props) {
  const { difficulty } = props;
  const [problems, setProblems] = React.useState([]);

  useEffect(() => {
    console.log("Difficulty is set to", difficulty);
  }, [difficulty]);

  useEffect(() => {
    fetch("data/problems.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProblems(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  // create a filtered array each render
  const filteredProblems = difficulty
    ? problems.filter((p) => p.grade === difficulty.trim())
    : problems;
  return (
    <div className="main">
      {filteredProblems.length > 0 ? (
        filteredProblems.map((problem) => (
          <Card
            key={problem.id}
            name={problem.name}
            grade={problem.grade}
            image={problem.image}
            description={problem.description}
          />
        ))
      ) : (
        <p className="noBouldersLabel">
          {problems.length === 0
            ? "Loading..."
            : `No "${difficulty} boulders yet!"`}
        </p>
      )}
      {/* Example static cards for testing */}
    </div>
  );
}
