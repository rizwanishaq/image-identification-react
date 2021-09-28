import React from "react";
import { AppContext } from "../contexts/appContext";

const DisplayPrediction = () => {
  const { textInputRef, model, imageRef, setResults, imageURL, results } =
    AppContext();

  const identify = async () => {
    textInputRef.current.value = "";
    const results = await model.classify(imageRef.current);
    setResults(results);
  };

  return (
    <div className="mainWrapper">
      <div className="mainContent">
        <div className="imageHolder">
          {imageURL && (
            <img
              src={imageURL}
              alt="Upload Preview"
              crossOrigin="anonymous"
              ref={imageRef}
            />
          )}
        </div>
        {results.length > 0 && (
          <div className="resultsHolder">
            {results.map((result, index) => {
              return (
                <div className="result" key={result.className}>
                  <span className="name">{result.className}</span>
                  <span className="confidence">
                    Confidence level: {(result.probability * 100).toFixed(2)}%{" "}
                    {index === 0 && (
                      <span className="bestGuess">Best Guess</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {imageURL && (
        <button className="button" onClick={identify}>
          Identify Image
        </button>
      )}
    </div>
  );
};

export default DisplayPrediction;
