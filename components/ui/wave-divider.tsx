// components/RepeatedSineWaveWithLine.jsx

import React from "react";

const RepeatedSineWaveWithLine = ({
  width = 1440,
  height = 320,
  amplitude = 40, // "height" of wave peaks
  frequency = 2, // number of full sine cycles across the width
  waveStrokeColor = "#D8BFD8",
  waveStrokeWidth = 4,
  lineStrokeColor = "#000", // color of the horizontal line
  lineStrokeWidth = 1,
}) => {
  // The y-value around which the wave oscillates.
  const baseY = height / 2;

  // Generate points for the sine wave
  const step = 10; // smaller step => smoother wave, more points
  const points = [];
  for (let x = 0; x <= width; x += step) {
    const angle = (2 * Math.PI * frequency * x) / width;
    const y = baseY + amplitude * Math.sin(angle);
    points.push({ x, y });
  }

  // Convert points to path data (start at the first point, then line to each next point)
  const pathData = points.reduce((acc, point, i) => {
    return i === 0
      ? `M ${point.x},${point.y}`
      : acc + ` L ${point.x},${point.y}`;
  }, "");

  return (
    <div style={{ margin: "8%" }}>
      <svg
        width="100%"
        height="auto"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        {/* The Sine Wave */}
        <path
          d={pathData}
          fill="none"
          stroke={waveStrokeColor}
          strokeWidth={waveStrokeWidth}
        />

        {/* The Horizontal Line (drawn at the same baseY or wherever you want) */}
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
  );
};

export default RepeatedSineWaveWithLine;
