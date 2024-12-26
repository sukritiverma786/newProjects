import React, { useEffect, useState } from "react";
import "./SparkleEffect.css";

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const colors = [
        "#FFD700",
        "#FF69B4",
        "#7CFC00",
        "#00FFFF",
        "#FF4500",
        "#9370DB",
      ];
      const newSparkles = Array.from({ length: 100 }, () => ({
        id: Math.random(),
        left: Math.random() * window.innerWidth,
        top: Math.random() * window.innerHeight,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setSparkles(newSparkles);

      // Clear sparkles after 30 seconds
      const timeout = setTimeout(() => {
        setSparkles([]);
      }, 30000); // 30 seconds

      return () => clearTimeout(timeout);
    };

    generateSparkles();
  }, []);

  return (
    <div>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            background: sparkle.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SparkleEffect;
