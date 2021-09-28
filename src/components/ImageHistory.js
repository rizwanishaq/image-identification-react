import React from "react";
import { AppContext } from "../contexts/appContext";

const ImageHistory = () => {
  const { history, setImageURL } = AppContext();
  return (
    <>
      {history.length > 0 && (
        <div className="recentPredictions">
          <h2>Recent Images</h2>
          <div className="recentImages">
            {history.map((image, index) => {
              return (
                <div className="recentPrediction" key={`${image}${index}`}>
                  <img
                    src={image}
                    alt="Recent Prediction"
                    onClick={() => setImageURL(image)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageHistory;
