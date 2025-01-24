// RepeatedSineWaveWithLine.jsx
import React from "react";
import "./wave-divider.css"; // <-- Import the CSS

const RepeatedSineWaveWithLine = ({
  width = 1440,
  height = 320,
  amplitude = 40,
  frequency = 2,
  waveStrokeColor = "#D8BFD8",
  waveStrokeWidth = 4,
  lineStrokeColor = "#000",
  lineStrokeWidth = 1,
}) => {
  const baseY = height / 2;

  // Generate sine wave points
  const step = 10;
  const points = [];
  for (let x = 0; x <= width; x += step) {
    const angle = (2 * Math.PI * frequency * x) / width;
    const y = baseY + amplitude * Math.sin(angle);
    points.push({ x, y });
  }

  // Convert points to path data
  const pathData = points.reduce((acc, point, i) => {
    return i === 0
      ? `M ${point.x},${point.y}`
      : acc + ` L ${point.x},${point.y}`;
  }, "");

  return (
    // <div className="sineWaveContainer">
    <div className="waveContainer">
      <svg
        width="100%"
        height="auto"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="sineWaveSvg"
      >
        <path
          d={pathData}
          fill="none"
          stroke={waveStrokeColor}
          strokeWidth={waveStrokeWidth}
        />
        <line
          x1={0}
          y1={baseY}
          x2={width}
          y2={baseY}
          stroke={lineStrokeColor}
          strokeWidth={lineStrokeWidth}
        />
      </svg>
    </div>
    // </div>
  );
};

export default RepeatedSineWaveWithLine;
