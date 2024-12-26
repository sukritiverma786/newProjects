import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRandomMessage } from "./redux/messageSlice";
import SparkleEffect from "./SparkleEffect";
import "./NewYearCard.css";

function NewYearCard() {
  const [showSparkle, setShowSparkle] = useState(false);
  const message = useSelector((state) => state.messages.currentMessage.text);
  const dispatch = useDispatch();

  const handleSparkle = () => {
    const spark = document.createElement("div");
    spark.className = "spark";
    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 1000);

    setShowSparkle(true);

    setTimeout(() => {
      setShowSparkle(false);
    }, 1000);

    // Randomize message
    dispatch(setRandomMessage());
  };



  return (
    <div className="card-container">
      <div className="border">
        <div className="card">
          <p className="newYear">HAPPY NEW YEAR 2025</p>
          <p>{message}</p>
          <button type="button" className="NewClick" onClick={handleSparkle}>
            Click Me
          </button>
          {showSparkle && <SparkleEffect />}
        </div>
      </div>
    </div>
  );
}

export default NewYearCard;
