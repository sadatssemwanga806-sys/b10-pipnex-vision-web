
"use client"
import { useState } from "react"

const trends=[
{p:"TikTok",t:"Kampala Music Challenge",v:"2.4M views",g:"+340%"},
{p:"X",t:"Crypto B10 Coin",v:"3.1M views",g:"+420%"},
{p:"YouTube",t:"AI Side Hustles 2026",v:"1.8M views",g:"+290%"},
{p:"Instagram",t:"Kampala Fashion Week",v:"900K views",g:"+180%"}
]

const waLink="https://wa.me/256744995244?text=Yo%20B10%20I%20want%20to%20promote%20🔥"

function Money(){
const [open,setOpen]=useState(false)
return(<>
<button onClick={()=>setOpen(!open)} style={{position:"fixed",bottom:"20px",right:"20px",zIndex:9999,background:"#FFD600",color:"#000",border:"none",width:"60px",height:"60px",borderRadius:"50%",fontSize:"26px",fontWeight:900,boxShadow:"0 4px 20px rgba(0,0,0,0.5)",cursor:"pointer"}}>💰</button>
{open&&<div style={{position:"fixed",bottom:"90px",right:"20px",zIndex:9999,background:"#111",border:"1px solid #333",borderRadius:"16px",padding:"16px",width:"280px"}}>
<p style={{color:"#fff",fontWeight:900}}>💰 Send Payment</p>
<div style={{background:"#222",borderRadius:"12px",padding:"10px",marginTop:"10px"}}>
<p style={{color:"#FF0000",fontSize:"11px",fontWeight:800}}>AIRTEL MONEY (MAIN)</p>
<p style={{color:"#FFD600",fontSize:"20px",fontWeight:900}}>0744995244</p>
<p style={{color:"#888",fontSize:"11px"}}>B10 Pipnex</p>
</div>
<div style={{background:"#222",borderRadius:"12px",padding:"10px",marginTop:"8px"}}>
<p style={{color:"#888",fontSize:"11px"}}>MTN MOMO</p>
<p style={{color:"#fff",fontSize:"14px",fontWeight:900}}>0760957999</p>
</div>
<button onClick={()=>{navigator.clipboard.writeText("0744995244");alert("Copied!")}} style={{width:"100%",background:"#FFD600",color:"#000",border:"none",padding:"10px",borderRadius:"10px",marginTop:"10px",fontWeight:900}}>Copy Airtel</button>
<a href={waLink} style={{display:"block",textAlign:"center",background:"#00FF66",color:"#000",padding:"10px",borderRadius:"10px",marginTop:"8px",textDecoration:"none",fontWeight:900,fontSize:"12px"}}>I Paid - WhatsApp</a>
</div>}
</>)}
export default function Page(){
const [q,setQ]=useState("")
const filtered=trends.filter(x=>x.t.toLowerCase().includes(q.toLowerCase()))
return(
<div style={{background:"#000",minHeight:"100vh",color:"#fff",padding:"16px"}}>
<div style={{maxWidth:"480px",margin:"0 auto"}}>
<h1 style={{fontWeight:900,fontSize:"24px"}}>PIPNEX 🔥</h1>
<h1 style={{fontSize:"40px",fontWeight:900,textAlign:"center",marginTop:"20px"}}>Pipnex Trending</h1>
<p style={{textAlign:"center",color:"#888"}}>B10 2026 • Real trends</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." style={{width:"100%",background:"#111",border:"1px solid #333",padding:"14px",borderRadius:"999px",color:"#fff",marginTop:"16px"}}/>
<div style={{marginTop:"16px",display:"flex",flexDirection:"column",gap:"12px"}}>
{filtered.map((x,i)=>(
<div key={i} style={{background:"#111",border:"1px solid #222",borderRadius:"20px",padding:"16px"}}>
<span style={{color:"#888",fontSize:"12px"}}>{x.p} • {x.g}</span>
<h3 style={{fontWeight:900,marginTop:"6px"}}>{x.t}</h3>
<p style={{color:"#666",fontSize:"13px"}}>{x.v}</p>
<a href={waLink} style={{display:"block",background:"#00FF66",color:"#000",padding:"10px",borderRadius:"999px",marginTop:"10px",textAlign:"center",textDecoration:"none",fontWeight:900}}>Promote 🔥</a>
</div>
))}
</div>
</div>
<Money/>
</div>
)
}
