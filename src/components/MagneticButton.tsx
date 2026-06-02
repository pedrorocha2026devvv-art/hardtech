import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function MagneticButton({ children, className = '', style = {}, onClick, href, whileHover, whileTap }: { children: React.ReactNode, className?: string, style?: React.CSSProperties, onClick?: () => void, href?: string, whileHover?: any, whileTap?: any }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    
    // Calcula a distância a partir do centro
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    // Força magnética
    const pullX = (clientX - centerX) * 0.35
    const pullY = (clientY - centerY) * 0.35
    
    x.set(pullX)
    y.set(pullY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        ref={ref as any}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY, ...style }}
        className={className}
        onClick={onClick}
        whileHover={whileHover}
        whileTap={whileTap}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, ...style }}
      className={className}
      onClick={onClick}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  )
}
