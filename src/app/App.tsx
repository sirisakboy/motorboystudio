import '../styles/index.css';
import '../styles/theme.css';
import { FolderOpen, Save, ScanSearch, Zap, FileText, Database, GitBranch, Cpu, Settings, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [inspectorData, setInspectorData] = useState({
    addr: '0x0000',
    offset: '0',
    rows: '16',
    cols: '16',
    scaling: '1.0',
    checksum: '0xABCD'
  });

  const [logs, setLogs] = useState(['System Ready.', 'Project Loaded: motorboy.bin']);

  const simulateInspection = () => {
    const newVal = Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase();
    setInspectorData({ ...inspectorData, addr: `0x${newVal}` });
    setLogs(prev => [...prev, `Inspected address 0x${newVal}`]);
  };

  return (
    <div className="app-container">
      <header>
        <div className="font-bold">MotorBoy Studio</div>
        <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><span className="status-led active"></span>Ready</span>
            <Settings size={16} />
        </div>
      </header>
      
      <div className="menu-bar">File | Edit | View | ECU | XDF | AI | Repository | Tools | Window | Help</div>
      
      <div className="toolbar">
        <button onClick={simulateInspection} className="flex items-center gap-1"><FolderOpen size={16} /> Open</button>
        <button className="flex items-center gap-1"><Save size={16} /> Save</button>
        <button className="flex items-center gap-1"><ScanSearch size={16} /> Scan</button>
        <button className="flex items-center gap-1"><Zap size={16} /> Detect</button>
        <button className="flex items-center gap-1"><FileText size={16} /> XDF</button>
        <button className="flex items-center gap-1"><Database size={16} /> Heatmap</button>
        <button className="flex items-center gap-1"><GitBranch size={16} /> AI</button>
      </div>
      
      <aside className="sidebar panel">
        <div className="font-bold mb-2">Project Explorer</div>
        <ul className="text-sm space-y-1">
            <li className="flex items-center"><ChevronRight size={14}/> BIN</li>
            <li className="flex items-center"><ChevronRight size={14}/> XDF</li>
            <li className="flex items-center"><ChevronRight size={14}/> XML</li>
            <li className="flex items-center"><ChevronRight size={14}/> CSV</li>
            <li className="flex items-center"><ChevronRight size={14}/> Repository</li>
        </ul>
      </aside>
      
      <main>
        <div className="tab-container">
          <div className="tab active">Heatmap</div>
          <div className="tab">Hex</div>
          <div className="tab">2D Map</div>
          <div className="tab">3D View</div>
        </div>
        <div className="panel flex-1 flex flex-col items-center justify-center data-font text-dim" onClick={simulateInspection}>
            Workspace (Click toolbar to inspect)
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
      
      <div className="console panel flex flex-col">
        <div className="text-sm font-bold mb-2">Console</div>
        <div className="flex-1 overflow-y-auto data-font text-xs space-y-1">
            {logs.map((log, i) => <div key={i}>&gt; {log}</div>)}
        </div>
      </div>
      
      <footer className="text-xs">
          <span>Status: Ready</span>
          <span className="flex gap-4">
              <span>RAM: 24%</span>
              <span>Cloud: Online</span>
              <span>GitHub: Sync</span>
              <span className="flex items-center gap-1"><Cpu size={12}/> ECU Connected</span>
          </span>
      </footer>
    </div>
  );
}
