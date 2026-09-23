
"use client";
import { useState, useEffect } from "react";

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
  const [liveCount, setLiveCount] = useState(10234);

  useEffect(() => {
    const i = setInterval(() => setLiveCount(c => c + Math.floor(Math.random()*10)), 2000);
    return () => clearInterval(i);
  }, []);

  const filtered = TRENDS.filter(t => 
    (cat === "All" || t.cat === cat) && 
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <header className="flex justify-between items-center max-w-6xl mx-auto py-4">
        <h1 className="text-2xl font-black">PIPNEX 🔥</h1>
        <div className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
          B10 LIVE • {liveCount.toLocaleString()}
        </div>
      </header>

      <div className="max-w-6xl mx-auto text-center mt-10">
        <h2 className="text-5xl font-black">Pipnex Trending Website</h2>
        <p className="text-gray-400 mt-3">Real-time trends before they blow • B10 2026</p>
        
        <div className="flex gap-2 justify-center mt-6 flex-wrap">
          {["All","Tech","Music","Fashion","Crypto"].map(c => (
            <button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-full border ${cat===c ? 'bg-white text-black' : 'border-gray-700'}`}>{c}</button>
          ))}
        </div>

        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search trends..." className="mt-6 w-full max-w-md mx-auto block bg-zinc-900 border border-zinc-700 rounded-full px-5 py-3 outline-none" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {filtered.map(t => (
          <div key={t.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-green-500 transition">
            <div className="flex justify-between text-xs text-gray-400"><span>{t.platform}</span><span className="text-green-400">{t.growth}</span></div>
            <h3 className="font-bold text-lg mt-2">{t.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{t.views} views • Trending NOW</p>
            <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-bold">View Trend</button>
          </div>
        ))}
      </div>

      <footer className="text-center text-gray-600 text-xs mt-20">B10 VISION • PIPNEX 2026 • WE LOCKED FOREVER</footer>
    </div>
  );
}
