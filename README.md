<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🧸 MotorBoy Studio - เมนูหน้าแรกมาเมอะ!</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Sukhumvit Set', 'Arial', sans-serif;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      min-height: 100vh;
      color: #eee;
      padding: 40px 20px;
      overflow-x: hidden;
    }
    .container { max-width: 900px; margin: 0 auto; }
    .title-box {
      text-align: center;
      padding: 40px;
      background: rgba(255,255,255,0.08);
      border-radius: 25px;
      border: 2px solid rgba(255,212,0,0.3);
      backdrop-filter: blur(20px);
      box-shadow: 0 0 40px rgba(255,212,0,0.2);
      margin-bottom: 30px;
      position: relative;
      overflow: hidden;
    }
    .title-box::before {
      content: '';
      position: absolute;
      top: -50px;
      left: -50px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(255,212,0,0.3) 0%, transparent 70%);
      border-radius: 50%;
    }
    .title-box::after {
      content: '';
      position: absolute;
      bottom: -50px;
      right: -50px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%);
      border-radius: 50%;
    }
    h1 {
      font-size: 3.5rem;
      background: linear-gradient(90deg, #FFD400, #00D4FF, #8A2BE2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 900;
      letter-spacing: 2px;
      margin-bottom: 15px;
      text-shadow: 0 0 30px rgba(255,212,0,0.5);
    }
    .subtitle {
      font-size: 1.4rem;
      color: #FFD400;
      font-weight: 500;
      letter-spacing: 1px;
    }
    .anime-logo {
      font-size: 4rem;
      margin-bottom: 20px;
      animation: float 4s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    .feature-card {
      background: rgba(255,255,255,0.08);
      border-radius: 15px;
      padding: 25px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
      border-color: rgba(0,212,255,0.5);
    }
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }
    .feature-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #00D4FF;
      margin-bottom: 10px;
    }
    .feature-desc {
      color: #aaa;
      line-height: 1.5;
    }
    
    .divider {
      height: 2px;
      background: linear-gradient(90deg, transparent, #FFD400, transparent);
      margin: 40px 0;
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      margin: 20px 0;
    }
    .tech-badge {
      background: linear-gradient(90deg, #8A2BE2, #FF1E1E);
      color: white;
      padding: 10px 20px;
      border-radius: 25px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
      50% { box-shadow: 0 5px 15px rgba(138,43,226,0.6); }
    }
    
    .download-btn {
      display: inline-block;
      background: linear-gradient(90deg, #00D4FF, #00FF88);
      color: #1a1a2e;
      padding: 15px 40px;
      border-radius: 30px;
      font-weight: 800;
      font-size: 1.1rem;
      text-decoration: none;
      margin: 10px 5px;
      transition: all 0.3s;
      box-shadow: 0 5px 20px rgba(0,212,255,0.4);
    }
    .download-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(0,212,255,0.7);
    }
    
    .memory-ref {
      background: rgba(255,30,30,0.15);
      border-left: 4px solid #FF1E1E;
      padding: 20px;
      border-radius: 0 15px 15px 0;
      margin: 20px 0;
      border: 1px solid rgba(255,30,30,0.3);
    }
    .memory-ref h3 {
      color: #FF1E1E;
      margin-bottom: 8px;
    }
    .memory-ref code {
      background: rgba(0,0,0,0.4);
      padding: 5px 12px;
      border-radius: 8px;
      color: #FFD400;
      font-family: 'Courier New', monospace;
    }
    
    .footer {
      text-align: center;
      padding: 30px;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="title-box">
      <div class="anime-logo">🚀</div>
      <h1>MotorBoy Studio</h1>
      <div class="subtitle">AI เจ้าสามารถรับมอเตอร์ไซค์จากอู่ซิ่งมาเมอะ!</div>
    </div>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">💬</div>
        <div class="feature-title">แชท AI สตาร์ท</div>
        <div class="feature-desc">สตาร์ทแชทให้สมอง MotorBoy ช่วยซ่อม</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">👁️</div>
        <div class="feature-title">มองเห็นได้</div>
        <div class="feature-desc">ถ่ายรูป MotorBoy มองแล้ววิเคราะห์โละ</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <div class="feature-icon">🚀</div>
        <div class="feature-title">สไตร์มาเมอะ</div>
        <div class="feature-desc">ตอบเร็วเหมือนเวลาช่างรึยังไป!</div>
      </div>
    </div>
    
    <div class="divider"></div>
    
    <h2 style="text-align:center; color:#FFD400; margin-bottom:20px;">🧪 Tech Stack</h2>
    <div class="tech-stack">
      <span class="tech-badge">Cloudflare Workers</span>
      <span class="tech-badge">TypeScript</span>
      <span class="tech-badge">Llama-4 Scout</span>
      <span class="tech-badge">Vision Model</span>
      <span class="tech-badge">Wrangler</span>
    </div>
    
    <h2 style="text-align:center; color:#FFD400; margin:40px 0 20px;">🎮 เริ่มต้นใช้งาน</h2>
    <p style="text-align:center; color:#aaa; line-height:1.6;">
      MotorBoy พร้อมช่วยคุณแล้ว! เพียงเข้าสู่เว็บไซต์แล้วเริ่มพูดถึงอะไรที่ต้องการทราบ<br>
      หรือส่งรูปถ่ายถ้าต้องการให้ MotorBoy วิเคราะเป็นอะไร
    </p>
    
    <div style="text-align:center; margin:30px 0;">
      <a href="/" class="download-btn">🚀 เข้าสู่เว็บเคจ อาจาระมาดภัย!</a>
    </div>
    
    <div class="divider"></div>
    
    <h2 style="text-align:center; color:#FF1E1E; margin-bottom:20px;">🖼️ Memory Snapshot</h2>
    <div class="memory-ref">
      <h3>📁 ไฟล์สรุปหน่วยความจำ</h3>
      <p>สำหรับผู้ที่ต้องการดูกราฟิกสถานะหน่วยความจำและการทำงาน ให้เปิดไฟล์:</p>
      <p style="margin-top:10px;"><code>/home/xxx/Desktop/Motorboy-Memory-Summary-Images.html</code></p>
      <p style="margin-top:5px; color:#aaa; font-size:0.9rem;">* ไฟล์นี้เป็นแอป React สำหรับดูสรุปการทำงานของระบบ</p>
    </div>
    
    <div class="footer">
      <p>Made with ❤️ by MotorBoy Team | สตาร์ทอัพ AI สไตล์มอเตอร์ไซค์</p>
    </div>
  </div>
</body>
</html>