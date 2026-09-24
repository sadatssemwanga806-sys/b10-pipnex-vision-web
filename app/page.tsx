
      "use client"
import { useState } from "react"

const trends = [
{ p: "TikTok", t: "Kampala Music Challenge", v: "2.4M views", g: "+340%" },
{ p: "X", t: "Crypto B10 Coin", v: "3.1M views", g: "+420%" },
{ p: "YouTube", t: "AI Side Hustles 2026", v: "1.8M views", g: "+290%" },
]

export default function Page(){
const [q,setQ]=useState("")
const [f,setF]=useState("All")
const cats=["All","Tech","Music","Fashion","Crypto"]
const filtered=trends.filter(x=> x.t.toLowerCase().includes(q.toLowerCase()))
const waLink="https://wa.me/256744995244?text=Yo%20B10%20I%20want%20to%20promote%20%F0%9F%94%A5"

function Money(){
const [open,setOpen]=useState(false)
return(<>
<button onClick={()=>setOpen(!open)} style={{position:"fixed",bottom:"20px",right:"20px",zIndex:9999,background:"#FFD600",color:"#000",border:"none",width:"60px",height:"60px",borderRadius:"50%",fontSize:"26px",fontWeight:900,boxShadow:"0 4px 20px rgba(0,0,0,0.5)",cursor:"pointer"}}>💰</button>
{open&&<div style={{position:"fixed",bottom:"90px",right:"20px",zIndex:9999,background:"#111",border:"1px solid #333",borderRadius:"16px",padding:"16px",width:"260px"}}>
<p style={{color:"#fff",fontWeight:900}}>💰 Send MoMo</p>
<p style={{color:"#FFD600",fontSize:"22px",fontWeight:900,marginTop:"8px"}}>0760957999</p>
<p style={{color:"#888",fontSize:"12px"}}>Name: B10 Pipnex</p>
<button onClick={()=>{navigator.clipboard.writeText("0760957999");alert("Copied!")}} style={{width:"100%",background:"#FFD600",color:"#000",border:"none",padding:"10px",borderRadius:"10px",marginTop:"10px",fontWeight:900}}>Copy Number</button>
<a href={waLink} style={{display:"block",textAlign:"center",background:"#fff",color:"#000",padding:"10px",borderRadius:"10px",marginTop:"8px",textDecoration:"none",fontWeight:900,fontSize:"12px"}}>Confirm on WhatsApp</a>
</div>}
</>)}
  
return(
<div style={{background:"#000",minHeight:"100vh",color:"#fff",padding:"16px"}}>
<div style={{maxWidth:"480px",margin:"0 auto"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"}}>
<h1 style={{fontWeight:900,fontSize:"24px"}}>PIPNEX 🔥</h1>
<div style={{display:"flex",gap:"8px"}}>
<span style={{background:"#00FF66",color:"#000",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",fontWeight:900}}>B10 LIVE • 10,260</span>
<a href={waLink} style={{background:"#00FF66",color:"#000",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",fontWeight:900,textDecoration:"none"}}>💰 PROMOTE</a>
</div>
</div>

<h1 style={{fontSize:"48px",fontWeight:900,textAlign:"center",lineHeight:"1.1"}}>Pipnex Trending Website</h1>
<p style={{textAlign:"center",color:"#888",marginTop:"12px"}}>Real-time trends before they blow • B10 2026</p>

<div style={{border:"1px solid #00FF66",borderRadius:"16px",padding:"16px",textAlign:"center",marginTop:"20px",background:"rgba(0,255,102,0.05)"}}>
<p style={{fontWeight:800}}>🚀 Got a song, product, brand?</p>
<p style={{color:"#888",fontSize:"13px",marginTop:"6px"}}>Be #1 Trending for 24hrs — Artists & Businesses in UG</p>
<a href={waLink} style={{display:"inline-block",background:"#00FF66",color:"#000",padding:"12px 20px",borderRadius:"999px",marginTop:"12px",fontWeight:900,textDecoration:"none"}}>WhatsApp B10 to Promote →</a>
</div>

<div style={{display:"flex",gap:"8px",flexWrap:"wrap",justifyContent:"center",marginTop:"16px"}}>
{cats.map(c=><button key={c} onClick={()=>setF(c)} style={{padding:"8px 16px",borderRadius:"999px",border:"1px solid #333",background:f===c?"#fff":"#111",color:f===c?"#000":"#fff",fontWeight:700}}>{c}</button>)}
</div>

<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search trends..." style={{width:"100%",background:"#111",border:"1px solid #333",padding:"14px",borderRadius:"999px",color:"#fff",marginTop:"16px"}}/>

<div style={{marginTop:"16px",display:"flex",flexDirection:"column",gap:"12px"}}>
{filtered.map((x,i)=>(
<div key={i} style={{background:"#111",border:"1px solid #222",borderRadius:"20px",padding:"16px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"#888",fontSize:"12px"}}>{x.p}</span><span style={{color:"#00FF66",fontSize:"12px",fontWeight:800}}>{x.g}</span></div>
<h3 style={{fontSize:"18px",fontWeight:900,marginTop:"6px"}}>{x.t}</h3>
<p style={{color:"#666",fontSize:"13px",marginTop:"4px"}}>{x.v} • Trending NOW</p>
<div style={{display:"flex",gap:"8px",marginTop:"12px"}}>
<button style={{flex:1,background:"#fff",color:"#000",padding:"10px",borderRadius:"999px",fontWeight:800,border:"none"}}>View</button>
<a href={waLink} style={{flex:1,background:"#00FF66",color:"#000",padding:"10px",borderRadius:"999px",fontWeight:800,textAlign:"center",textDecoration:"none"}}>Promote 🔥</a>
</div>
</div>
))}
</div>

<div style={{background:"#00FF66",borderRadius:"20px",padding:"20px",textAlign:"center",marginTop:"20px"}}>
<h2 style={{color:"#000",fontWeight:900,fontSize:"22px"}}>WANT TO BE TRENDING #1?</h2>
<p style={{color:"#000",fontSize:"13px",marginTop:"6px"}}>5 slots per day. First come, first blow. 0744995244</p>
<a href={waLink} style={{display:"inline-block",background:"#000",color:"#fff",padding:"12px 20px",borderRadius:"999px",marginTop:"12px",fontWeight:900,textDecoration:"none"}}>LOCK MY SLOT — WhatsApp B10</a>
</div>

<p style={{textAlign:"center",color:"#444",fontSize:"12px",marginTop:"20px"}}>B10 VISION • PIPNEX 2026 • 0744995244 • WE LOCKED FOREVER</p>
<p style={{textAlign:"center",color:"#444",fontSize:"12px",marginTop:"8px"}}>© 2025 Pipnex Vision</p>
</div>
<Money />
</div>
)
}
