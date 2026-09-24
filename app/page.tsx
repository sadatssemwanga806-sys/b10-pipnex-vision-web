"use client";
import Money from './Money'
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "256744995244";
const WHATSAPP_MSG = "Yo B10! I want to promote my trend on Pipnex 🔥";

const TRENDS = [
  { id: 1, title: "Kampala Music Challenge", platform: "TikTok", views: "2.4M", growth: "+340%", cat: "Music" },
  { id: 2, title: "B10 Vision Story", platform: "YouTube", views: "890K", growth: "+210%", cat: "Tech" },
  { id: 3, title: "Pipnex Launch", platform: "Google", views: "1.2M", growth: "+180%", cat: "Tech" },
  { id: 4, title: "Uganda Fashion Week", platform: "Instagram", views: "560K", growth: "+150%", cat: "Fashion" },
  { id: 5, title: "Crypto B10 Coin", platform: "X", views: "3.1M", growth: "+420%", cat: "Crypto" },
  { id: 6, title: "AI Side Hustles 2026", platform: "YouTube", views: "1.8M", growth: "+290%", cat: "Tech" },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [liveCount, setLiveCount] = useState(10254);
  useEffect(() => {
    const i = setInterval(() => setLiveCount(c => c + Math.floor(Math.random()*8)), 2000);
    return () => clearInterval(i);
  }, []);
  const filtered = TRENDS.filter(t => (cat === "All" || t.cat === cat) && t.title.toLowerCase().includes(search.toLowerCase()));
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  const promoLink = (title:string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Yo B10! I want to promote "${title}" on Pipnex 🔥 My budget is...`)}`;

  return (
    <div style={{minHeight:"100vh", background:"#000", color:"#fff", fontFamily:"sans-serif", padding:"16px"}}>
      <div style={{maxWidth:"1000px", margin:"0 auto"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"8px"}}>
          <h1 style={{fontWeight:900, fontSize:"26px"}}>PIPNEX 🔥</h1>
          <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
            <div style={{background:"#22c55e", color:"#000", padding:"6px 12px", borderRadius:"999px", fontWeight:800, fontSize:"11px"}}>B10 LIVE • {liveCount.toLocaleString()}</div>
            <a href={waLink} style={{background:"#25D366", color:"#000", padding:"8px 14px", borderRadius:"999px", fontWeight:900, fontSize:"12px", textDecoration:"none"}}>💰 PROMOTE</a>
          </div>
        </div>
        <div style={{textAlign:"center", marginTop:"36px"}}>
          <h2 style={{fontSize:"42px", fontWeight:900, lineHeight:1}}>Pipnex Trending<br/>Website</h2>
          <p style={{color:"#888", marginTop:"10px"}}>Real-time trends before they blow • B10 2026</p>
          <div style={{background:"#111", border:"1px solid #25D366", borderRadius:"16px", padding:"14px", marginTop:"20px", maxWidth:"500px", margin:"20px auto 0"}}>
            <p style={{fontWeight:800, fontSize:"14px"}}>🚀 Got a song, product, brand?</p>
            <p style={{color:"#888", fontSize:"12px", marginTop:"4px"}}>Be #1 Trending for 24hrs — Artists & Businesses in UG</p>
            <a href={waLink} style={{display:"inline-block", marginTop:"10px", background:"#25D366", color:"#000", padding:"12px 22px", borderRadius:"999px", fontWeight:900, fontSize:"14px", textDecoration:"none"}}>WhatsApp B10 to Promote →</a>
          </div>
          <div style={{display:"flex", gap:"8px", justifyContent:"center", flexWrap:"wrap", marginTop:"20px"}}>
            {["All","Tech","Music","Fashion","Crypto"].map(c => (
              <button key={c} onClick={()=>setCat(c)} style={{padding:"8px 16px", borderRadius:"999px", border:"1px solid #333", background: cat===c ? "#fff" : "#111", color: cat===c ? "#000" : "#fff", fontWeight:700}}>{c}</button>
            ))}
          </div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search trends..." style={{marginTop:"16px", width:"100%", maxWidth:"400px", padding:"14px 20px", borderRadius:"999px", background:"#111", border:"1px solid #333", color:"#fff", outline:"none"}} />
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"16px", marginTop:"24px"}}>
          {filtered.map(t => (
            <div key={t.id} style={{background:"#111", border:"1px solid #222", borderRadius:"20px", padding:"20px"}}>
              <div style={{display:"flex", justifyContent:"space-between", fontSize:"12px", color:"#888"}}><span>{t.platform}</span><span style={{color:"#22c55e", fontWeight:800}}>{t.growth}</span></div>
              <h3 style={{fontWeight:800, fontSize:"18px", marginTop:"10px"}}>{t.title}</h3>
              <p style={{color:"#888", fontSize:"13px", marginTop:"4px"}}>{t.views} views • Trending NOW</p>
              <div style={{display:"flex", gap:"8px", marginTop:"14px"}}>
                <button style={{flex:1, background:"#fff", color:"#000", padding:"10px", borderRadius:"999px", fontWeight:900, border:"none"}}>View</button>
                <a href={promoLink(t.title)} style={{flex:1, background:"#25D366", color:"#000", padding:"10px", borderRadius:"999px", fontWeight:900, textAlign:"center", textDecoration:"none", fontSize:"13px"}}>Promote 🔥</a>
              </div>
            </div>
    ))}</div>
<div style={{textAlign:"center", marginTop:"36px"}}>
<h2 style={{fontSize:"42px", fontWeight:900, lineHeight:"1"}}>Need this?</h2>
<p style={{color:"#888", marginTop:"10px"}}>Real-time promo site for your brand</p>
<div style={{background:"#111", border:"1px solid #222", padding:"16px", borderRadius:"16px", marginTop:"16px"}}>
<p style={{fontWeight:800, fontSize:"14px"}}>🚀 We build it for you</p>
<p style={{color:"#888", fontSize:"12px", marginTop:"4px"}}>Templates, domain, hosting + MoMo</p>
<a href={waLink} style={{display:"inline-block", background:"#fff", color:"#000", padding:"10px 16px", borderRadius:"999px", marginTop:"12px", textDecoration:"none", fontWeight:900}}>Chat on WhatsApp</a>
</div>
</div>
<p style={{textAlign:"center", color:"#444", fontSize:"12px", marginTop:"24px"}}>© 2025 Pipnex Vision</p>
</div>
<Money />
</div>
</div>
)
}      
      
