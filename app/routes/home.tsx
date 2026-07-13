import type { Route } from "./+types/home";
import { useState } from 'react';
import '../../src/styles/index.css';
import '../../src/styles/theme.css';
import { AppShell } from '../../src/components/layout/AppShell';
import { Heatmap } from '../../src/components/workspace/Heatmap';
import { HexViewer } from '../../src/components/workspace/HexViewer';
import { SurfaceMap3D } from '../../src/components/workspace/SurfaceMap3D';
import { Map2D } from '../../src/components/workspace/Map2D';

export function meta({}: Route.MetaArgs) {
        return [
                { title: "MotorBoy Studio" },
                { name: "description", content: "Professional Motorsport Software" },
        ];
}

export default function Home() {
  const [inspectorData, setInspectorData] = useState({
    addr: '0x0000',
    offset: '0',
    rows: '16',
    cols: '16',
    scaling: '1.0',
    checksum: '0xABCD'
  });

  const [activeTab, setActiveTab] = useState('Heatmap');

  const simulateInspection = () => {
    const newVal = Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase();
    setInspectorData({ ...inspectorData, addr: `0x${newVal}` });
  };

  const renderWorkspace = () => {
    switch (activeTab) {
        case 'Heatmap': return <Heatmap />;
        case 'Hex': return <HexViewer />;
        case '2D Map': return <Map2D />;
        case '3D View': return <SurfaceMap3D />;
        default: return <div className="data-font text-dim text-center mt-20">Visualization: {activeTab}</div>;
    }
  };

  return (
    <AppShell onSimulate={simulateInspection}>
      <main>
        <div className="tab-container">
          <div className={`tab ${activeTab === 'Heatmap' ? 'active' : ''}`} onClick={() => setActiveTab('Heatmap')}>Heatmap</div>
          <div className={`tab ${activeTab === 'Hex' ? 'active' : ''}`} onClick={() => setActiveTab('Hex')}>Hex</div>
          <div className={`tab ${activeTab === '2D Map' ? 'active' : ''}`} onClick={() => setActiveTab('2D Map')}>2D Map</div>
          <div className={`tab ${activeTab === '3D View' ? 'active' : ''}`} onClick={() => setActiveTab('3D View')}>3D View</div>
        </div>
        <div className="panel flex-1 overflow-hidden" onClick={simulateInspection}>
            {renderWorkspace()}
        </div>
      </main>
      
      <aside className="inspector panel">
        <div className="font-bold mb-4">Inspector</div>
        <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Address:</span> <span className="data-font text-blue-400">{inspectorData.addr}</span></div>
            <div className="flex justify-between"><span>Offset:</span> <span className="data-font">{inspectorData.offset}</span></div>
            <div className="flex justify-between"><span>Rows:</span> <span className="data-font">{inspectorData.rows}</span></div>
            <div className="flex justify-between"><span>Cols:</span> <span className="data-font">{inspectorData.cols}</span></div>
            <div className="flex justify-between"><span>Scaling:</span> <span className="data-font">{inspectorData.scaling}</span></div>
            <div className="flex justify-between"><span>Checksum:</span> <span className="data-font">{inspectorData.checksum}</span></div>
        </div>
      </aside>
    </AppShell>
  );
}
