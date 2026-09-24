import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = { 
  title: 'Pipnex - Real Trending LIVE | B10 Vision', 
  description: 'Kampala trends before they blow - Vision Kicks powered' 
}

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body style={{margin:0, background:'#000', color:'#fff'}}>
        {children}
        
        {/* EVERY CLICK & SCROLL = MONEY - No Zone ID Needed */}
        <Script id="pipnex-money-machine" strategy="afterInteractive">
          {`
            console.log('PIPNEX MONEY MACHINE LIVE - B10');
            let clicks = 0;
            document.addEventListener('click', (e) => {
              const card = e.target.closest('div, a, button');
              if(card){
                clicks++;
                // Every 3rd click = 20k promo popup
                if(clicks % 3 === 0){
                  const ok = confirm('🔥 MAKE YOUR SONG #1 TRENDING?\\n\\nSend 20,000 UGX to:\\nMTN MoMo: 0744995244\\n\\nClick OK to WhatsApp B10 Now + Get Trending!');
                  if(ok){
                    window.open('https://wa.me/256744995244?text=Hi B10! I want PIPNEX #1 trending. I will send 20k to 0744995244 now.', '_blank');
                  }
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
