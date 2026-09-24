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
        
        {/* EVERY VIEW = MONEY - Monetag */}
        <Script src="https://fpyf8.com/88/tag.min.js" data-zone="YOUR_ZONE_ID" strategy="afterInteractive" />
        
        {/* EVERY SCROLL = VISION KICKS MONEY */}
        <Script id="vision-kicks-scroll" strategy="afterInteractive">
          {`
            let earnings = 0;
            window.addEventListener('scroll', () => {
              if(Math.random() > 0.97){
                console.log('Vision Kicks ad view = 120k potential');
              }
            });
            // Track clicks
            document.addEventListener('click', (e) => {
              const target = e.target.closest('a, button, [data-trend]');
              if(target){
                earnings += 0.15;
                if(Math.random() > 0.7){
                  // Every 3rd click = promo popup
                  const show = confirm('🔥 Make YOUR song #1 Trending on Pipnex?\\n\\nSend 20k to MTN 0744995244\\nClick OK to WhatsApp B10 now!');
                  if(show){
                    window.open('https://wa.me/256744995244?text=Hi B10, I want to trend #1 on Pipnex - I have 20k ready', '_blank');
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
