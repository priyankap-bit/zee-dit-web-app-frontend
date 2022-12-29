import React from "react";
import ReactWordcloud from "react-wordcloud";

const WordsCloud = (props) => {
  const { wordsCloud } = props;

  const options = {
    rotations: 2,
    rotationAngles: [0, 0],
  };
  
  return (
    <div className="social-listening-title">
      <p>Word Cloud - Positive</p>
      <div className="words-cloud">
        <ReactWordcloud options={options} words={wordsCloud} />
      </div>
    </div>
  );
};

export default WordsCloud;
