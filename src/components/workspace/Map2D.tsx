import React, { useState } from 'react';

interface Point {
  x: number;
  y: number;
}

export const Map2D: React.FC = () => {
  // Let's create an interactive curve representing RPM vs Boost/Ignition
  const [points, setPoints] = useState<Point[]>([
    { x: 50, y: 220 },
    { x: 120, y: 190 },
    { x: 190, y: 150 },
    { x: 260, y: 130 },
    { x: 330, y: 110 },
    { x: 400, y: 80 },
    { x: 470, y: 60 },
    { x: 540, y: 50 }
  ]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleMouseDown = (index: number) => {
    setDraggedIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (draggedIndex === null) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    
    // Convert screen coordinates to SVG viewBox coordinates
    const scaleX = 600 / rect.width;
    const scaleY = 300 / rect.height;
    
    const clientX = (e.clientX - rect.left) * scaleX;
    const clientY = (e.clientY - rect.top) * scaleY;
    
    // Constrain X coordinate to keep points ordered, but allow Y adjustment (tuning)
    const newPoints = [...points];
    const prevX = newPoints[draggedIndex - 1]?.x || 20;
    const nextX = newPoints[draggedIndex + 1]?.x || 580;
    
    newPoints[draggedIndex] = {
      x: Math.max(prevX + 10, Math.min(nextX - 10, clientX)),
      y: Math.max(20, Math.min(280, clientY))
    };
    
    setPoints(newPoints);
  };

  const handleMouseUp = () => {
    setDraggedIndex(null);
  };

  // Convert points to SVG Path string
  const pathD = points.reduce((acc, p, i) => 
    i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, 
    ''
  );

  return (
    <div className="flex flex-col h-full bg-panel-graphite p-4 select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-accent-racing-red flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-racing-red"></span>
          2D Map Profile: Ignition Timing vs RPM (Interactive)
        </span>
        <span className="text-xs text-dim data-font">
          Drag points up/down to edit map cell values
        </span>
      </div>

      <div className="flex-1 border border-border-titanium rounded bg-bg-carbon relative overflow-hidden">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 600 300"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Horizontal Grid Lines */}
          {Array.from({ length: 6 }).map((_, i) => {
            const y = 50 + i * 40;
            return (
              <g key={i}>
                <line x1="40" y1={y} x2="580" y2={y} stroke="var(--border-titanium)" strokeDasharray="2,4" />
                <text x="15" y={y + 4} fill="var(--text-dim)" className="text-[10px] font-mono">{100 - i * 20}</text>
              </g>
            );
          })}

          {/* Vertical Grid Lines (RPM steps) */}
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 50 + i * 61.25;
            return (
              <g key={i}>
                <line x1={x} y1="30" x2={x} y2="260" stroke="var(--border-titanium)" strokeDasharray="2,4" />
                <text x={x - 10} y="275" fill="var(--text-dim)" className="text-[10px] font-mono">{i * 1000}</text>
              </g>
            );
          })}

          {/* Theoretical Limits Overlay */}
          <line x1="40" y1="260" x2="580" y2="260" stroke="var(--text-dim)" strokeWidth="1.5" />
          <line x1="40" y1="30" x2="40" y2="260" stroke="var(--text-dim)" strokeWidth="1.5" />

          {/* Reference/Secondary Curves (Non-interactive helper curves like different TPS) */}
          <path 
            d={points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y + 40}`).join(' ')} 
            fill="none" 
            stroke="var(--secondary-electric-blue)" 
            strokeWidth="1.5" 
            opacity="0.4"
          />
          <path 
            d={points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y - 30}`).join(' ')} 
            fill="none" 
            stroke="var(--success-lime-green)" 
            strokeWidth="1.5" 
            opacity="0.4"
          />

          {/* Active Interactive Tuning Curve */}
          <path 
            d={pathD} 
            fill="none" 
            stroke="var(--accent-racing-red)" 
            strokeWidth="3" 
            className="transition-all duration-75"
          />

          {/* Interactive Handles/Points */}
          {points.map((p, i) => (
            <g key={i}>
              <circle 
                cx={p.x} 
                cy={p.y} 
                r={draggedIndex === i ? 7 : 5} 
                fill="var(--panel-graphite)" 
                stroke="var(--accent-racing-red)" 
                strokeWidth="2.5"
                className="cursor-ns-resize transition-all duration-75 hover:scale-125"
                onMouseDown={() => handleMouseDown(i)}
              />
              {/* Highlight Glow for Dragged handle */}
              {draggedIndex === i && (
                <circle cx={p.x} cy={p.y} r="12" fill="none" stroke="var(--accent-racing-red)" opacity="0.3" strokeWidth="1.5" />
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};
