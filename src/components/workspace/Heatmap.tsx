import React, { useState } from 'react';

interface HeatmapProps {
  rows?: number;
  cols?: number;
}

export const Heatmap: React.FC<HeatmapProps> = ({ rows = 16, cols = 16 }) => {
  // Simulate heatmap data
  const [data] = useState(() => 
    Array.from({ length: rows * cols }, () => Math.floor(Math.random() * 255))
  );

  const getColor = (value: number) => {
    const intensity = value / 255;
    // Heatmap gradient: Red (high) to Green (low)
    return `rgba(225, 6, 0, ${intensity})`;
  };

  return (
    <div className="grid gap-[1px] p-2 bg-border-titanium" 
         style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {data.map((val, i) => (
        <div 
          key={i}
          className="w-full aspect-square transition-all duration-150 hover:scale-110 hover:z-10 cursor-crosshair"
          style={{ backgroundColor: getColor(val) }}
          title={`Value: ${val}`}
        />
      ))}
    </div>
  );
};
