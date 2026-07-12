import '../styles/index.css';
import '../styles/theme.css';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <div>MotorBoy Studio</div>
        <div><span className="status-led active"></span>Connected</div>
      </header>
      
      <div className="menu-bar">File | Edit | View | ECU | XDF | AI | Repository | Tools | Window | Help</div>
      
      <div className="toolbar">
        <button>📂 Open</button>
        <button>💾 Save</button>
        <button>🔍 Scan</button>
      </div>
      
      <aside className="sidebar panel">Project Explorer</aside>
      
      <main>
        <div className="tab-container">
          <div className="tab active">Heatmap</div>
          <div className="tab">2D Map</div>
          <div className="tab">3D View</div>
        </div>
        <div className="panel" style={{flex: 1}}>
            Workspace Content
        </div>
      </main>
      
      <aside className="inspector panel">Inspector</aside>
      
      <div className="console panel">Console</div>
      
      <footer>
          <span>Status: Ready</span>
          <span>RAM: 24% | Cloud: Online</span>
      </footer>
    </div>
  );
}
