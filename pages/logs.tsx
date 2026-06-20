import { useState, useEffect } from 'react';
import Head from 'next/head';

interface LogEntry {
  id: string;
  timestamp: string;
  route: string;
  message: string;
  details?: string;
  requestBody?: any;
}

// Forces server-side rendering on every request so the gate middleware always runs
export async function getServerSideProps() {
  return { props: {} };
}

export default function Logs() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/logs');
      const data = await res.json();
      setLogs(data.logs || []);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchLogs(); }, []);

  const handleClear = async () => {
    if (!confirm('Clear all error logs? This cannot be undone.')) return;
    setClearing(true);
    try {
      await fetch('/api/logs', { method: 'DELETE' });
      setLogs([]);
    } catch {}
    setClearing(false);
  };

  return (
    <>
      <Head><title>Error Logs — CarouselForge</title></Head>
      <style jsx global>{`
        body{background:#090909;color:#EDE8DC;font-family:'EB Garamond',Georgia,serif;min-height:100vh}
      `}</style>
      <div style={{maxWidth:900,margin:'0 auto',padding:'36px 24px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:900,margin:0}}>
            Error Logs <span style={{color:'#C8A96E'}}>·</span> {logs.length}
          </h1>
          <div style={{display:'flex',gap:8}}>
            <a href="/" style={{fontSize:11,color:'#888',textDecoration:'none',border:'1px solid #1a1a1a',padding:'7px 14px',fontFamily:"'Oswald',sans-serif",letterSpacing:'0.1em',textTransform:'uppercase'}}>← Back to App</a>
            <button onClick={fetchLogs} style={{fontSize:11,color:'#888',background:'transparent',cursor:'pointer',border:'1px solid #1a1a1a',padding:'7px 14px',fontFamily:"'Oswald',sans-serif",letterSpacing:'0.1em',textTransform:'uppercase'}}>↻ Refresh</button>
            {logs.length > 0 && (
              <button onClick={handleClear} disabled={clearing} style={{fontSize:11,color:'#b85c5c',background:'transparent',cursor:'pointer',border:'1px solid #2a1414',padding:'7px 14px',fontFamily:"'Oswald',sans-serif",letterSpacing:'0.1em',textTransform:'uppercase'}}>
                {clearing ? '...' : '🗑 Clear All'}
              </button>
            )}
          </div>
        </div>
        <p style={{fontSize:13,color:'#444',fontStyle:'italic',marginBottom:28}}>
          Generation failures from the Campaign Engine and Carousel Generator. Most recent first, capped at 200 entries.
        </p>

        {loading ? (
          <div style={{color:'#444',fontStyle:'italic'}}>Loading...</div>
        ) : logs.length === 0 ? (
          <div style={{background:'#080808',border:'1px solid #141414',padding:'24px',textAlign:'center',color:'#444',fontStyle:'italic'}}>
            ✓ No errors logged. Everything's running clean.
          </div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {logs.map(log => (
              <div key={log.id} style={{background:'#080808',border:'1px solid #1a1414',padding:'14px 16px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:8,flexWrap:'wrap',gap:6}}>
                  <div style={{display:'flex',gap:10,alignItems:'baseline'}}>
                    <span style={{fontFamily:"'Oswald',sans-serif",fontSize:9,letterSpacing:'0.15em',textTransform:'uppercase',color:'#C8A96E',border:'1px solid #2a2410',padding:'2px 8px'}}>{log.route}</span>
                    <span style={{fontSize:14,color:'#EDE8DC',fontWeight:700}}>{log.message}</span>
                  </div>
                  <span style={{fontSize:11,color:'#444',fontStyle:'italic'}}>{new Date(log.timestamp).toLocaleString()}</span>
                </div>
                {log.details && (
                  <div style={{fontSize:12,color:'#888',background:'#050505',padding:'8px 10px',marginBottom:8,fontFamily:'monospace',whiteSpace:'pre-wrap',wordBreak:'break-word'}}>
                    {log.details}
                  </div>
                )}
                {log.requestBody && (
                  <div style={{fontSize:11,color:'#444'}}>
                    <span style={{fontFamily:"'Oswald',sans-serif",letterSpacing:'0.1em',textTransform:'uppercase',fontSize:9}}>Request: </span>
                    {JSON.stringify(log.requestBody)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
