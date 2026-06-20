import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Gate() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/gate-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || 'Incorrect password');
        setLoading(false);
        return;
      }
      const next = (router.query.next as string) || '/';
      window.location.href = next; // full reload so middleware re-checks the new cookie
    } catch {
      setError('Something went wrong. Try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <Head><title>CarouselForge — Access</title></Head>
      <style jsx global>{`
        body{background:#090909;color:#EDE8DC;font-family:'EB Garamond',Georgia,serif;min-height:100vh}
      `}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',padding:24}}>
        <form onSubmit={handleSubmit} style={{width:'100%',maxWidth:360,background:'#0c0c0c',border:'1px solid #1a1a1a',padding:'36px 32px'}}>
          <div style={{fontFamily:"'Oswald',sans-serif",fontSize:10,letterSpacing:'0.2em',textTransform:'uppercase',color:'#666',marginBottom:8,textAlign:'center'}}>
            Internal Tool
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:900,textAlign:'center',margin:'0 0 24px',color:'#EDE8DC'}}>
            Carousel<span style={{color:'#C8A96E'}}>Forge</span>
          </h1>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter access password"
            style={{
              width:'100%', boxSizing:'border-box', background:'#050505', border:'1px solid #1a1a1a',
              color:'#EDE8DC', fontFamily:"'EB Garamond',serif", fontSize:15, padding:'10px 12px',
              outline:'none', marginBottom:14,
            }}
          />
          {error && (
            <div style={{background:'#0a0404',border:'1px solid #280a0a',color:'#ff5050',padding:'8px 12px',fontFamily:"'Oswald',sans-serif",fontSize:10,marginBottom:14}}>
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width:'100%', padding:'11px 0', background: loading || !password ? '#1a1a1a' : '#C8A96E',
              color: loading || !password ? '#555' : '#0c0c0c', border:'none', cursor: loading || !password ? 'default' : 'pointer',
              fontFamily:"'Oswald',sans-serif", fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase',
            }}
          >
            {loading ? 'Checking...' : 'Enter →'}
          </button>
        </form>
      </div>
    </>
  );
}
