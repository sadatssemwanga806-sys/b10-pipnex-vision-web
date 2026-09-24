'use client'
import { useEffect } from 'react'
export default function Money(){
  useEffect(()=>{
    let c=0
    const h=()=>{
      c++
      if(c%3===0){
        if(confirm('🔥 MAKE YOUR SONG #1 TRENDING?\n\nSend 20,000 UGX to:\nMTN MoMo: 0744995244\n\nOK = WhatsApp B10 Now')){
          window.open('https://wa.me/256744995244?text=Hi B10! I want #1 trending, I will send 20k to 0744995244','_blank')
        }
      }
    }
    document.addEventListener('click', h)
    return ()=>document.removeEventListener('click',h)
  },[])
  return null
}
