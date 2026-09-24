
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
<p style={{color:"#888",fontSize:"11px",fontWeight:800}}>MTN MOMO</p>
<p style={{color:"#fff",fontSize:"14px",fontWeight:900}}>0760957999</p>
</div>
<button onClick={()=>{navigator.clipboard.writeText("0744995244");alert("Airtel Copied!")}} style={{width:"100%",background:"#FFD600",color:"#000",border:"none",padding:"10px",borderRadius:"10px",marginTop:"10px",fontWeight:900}}>Copy Airtel Number</button>
<a href={waLink} style={{display:"block",textAlign:"center",background:"#00FF66",color:"#000",padding:"10px",borderRadius:"10px",marginTop:"8px",textDecoration:"none",fontWeight:900,fontSize:"12px"}}>I Have Paid - Confirm on WhatsApp</a>
</div>}
</>)}
