import React from 'react';

export const HexViewer: React.FC = () => {
  // Simulate hex dump data
  const rows = Array.from({ length: 16 }, (_, i) => {
    const address = (i * 16).toString(16).padStart(4, '0').toUpperCase();
    const hex = Array.from({ length: 16 }, () => 
      Math.floor(Math.random() * 255).toString(16).padStart(2, '0').toUpperCase()
    ).join(' ');
    return { address, hex };
  });

  return (
    <div className="font-mono text-xs p-4 overflow-y-auto h-full text-dim">
      {rows.map((row) => (
        <div key={row.address} className="flex gap-4 hover:bg-border-titanium cursor-default">
          <span className="text-secondary-electric-blue w-12">{row.address}</span>
          <span className="tracking-wider">{row.hex}</span>
        </div>
      ))}
    </div>
  );
};
