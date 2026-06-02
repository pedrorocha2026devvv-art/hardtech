'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dot.current) return
      dot.current.style.transform = 
        `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  
  return (
    <div 
      ref={dot}
      className="fixed top-0 left-0 z-[9999] pointer-events-none w-3 h-3 rounded-full mix-blend-multiply hidden md:block"
      style={{ 
        background: '#A4F729',
        transition: 'transform 0.08s ease',
      }}
    />
  )
}
