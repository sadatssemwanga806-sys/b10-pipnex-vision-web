export default function Home(){
return(
<main style={{minHeight:'100vh',background:'#0a0a0a',color:'white',fontFamily:'sans-serif'}}>
<nav style={{padding:'20px',borderBottom:'1px solid #222',display:'flex',justifyContent:'space-between'}}>
<b>PIPNEX 🔥</b>
<span style={{background:'#fff',color:'#000',padding:'6px 12px',borderRadius:'20px',fontSize:'12px',fontWeight:'bold'}}>B10 LIVE</span>
</nav>
<div style={{padding:'60px 20px',textAlign:'center',maxWidth:'800px',margin:'0 auto'}}>
<h1 style={{fontSize:'52px',fontWeight:'900',lineHeight:'1'}}>Pipnex Trending<br/>Website</h1>
<p style={{color:'#aaa',marginTop:'20px'}}>Built without v0 credits. B10 Vision. Vercel GREEN.</p>
<div style={{marginTop:'30px',display:'flex',gap:'12px',justifyContent:'center'}}>
<a style={{background:'#fff',color:'#000',padding:'14px 28px',borderRadius:'30px',fontWeight:'bold',textDecoration:'none'}}>Launch App</a>
<a style={{border:'1px solid #333',padding:'14px 28px',borderRadius:'30px'}}>View Trends</a>
</div>
<div style={{marginTop:'60px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px'}}>
<div style={{background:'#111',padding:'20px',borderRadius:'16px',border:'1px solid #222'}}><b>🔥 10k+</b><div style={{color:'#666',fontSize:'12px'}}>Trending</div></div>
<div style={{background:'#111',padding:'20px',borderRadius:'16px',border:'1px solid #222'}}><b>⚡ LIVE</b><div style={{color:'#666',fontSize:'12px'}}>Real-time</div></div>
<div style={{background:'#111',padding:'20px',borderRadius:'16px',border:'1px solid #222'}}><b>B10</b><div style={{color:'#666',fontSize:'12px'}}>2026</div></div>
</div>
</div>
</main>
)}
