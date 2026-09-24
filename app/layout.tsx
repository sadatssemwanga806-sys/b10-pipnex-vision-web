
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pipnex - Real Trending LIVE | B10 Vision',
  description: 'Kampala trends before they blow - Vision Kicks powered'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000', color: '#fff' }}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let clicks=0;
              document.addEventListener('click', function(){
                clicks++;
                if(clicks%3===0){
                  if(confirm('🔥 MAKE YOUR SONG #1 TRENDING?\\n\\nSend 20,000 UGX to MTN: 0744995244\\n\\nClick OK to WhatsApp B10 Now!')){
                    window.open('https://wa.me/256744995244?text=Hi B10 I want #1 trending on Pipnex, I will send 20k now','_blank');
                  }
                }
              });
              console.log('PIPNEX MONEY MACHINE LIVE');
            `,
          }}
        />
      </body>
    </html>
  )
}
